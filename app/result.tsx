import React, { useEffect, useRef, useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar, Animated,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';
import { saveResult } from '../db/database';

function AnimatedCounter({ value }: { value: Animated.Value }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const id = value.addListener(({ value: v }) => setDisplay(Math.round(v)));
    return () => value.removeListener(id);
  }, []);
  return <Text style={counterStyles.num}>{display}</Text>;
}

const counterStyles = StyleSheet.create({ num: { fontSize: 52, fontWeight: '800' } });

export default function ResultScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const db     = useSQLiteContext();
  const params = useLocalSearchParams<{ finalScore: string; total: string; startIndex: string; endIndex: string; label: string }>();
  const finalScore = Number(params.finalScore);
  const total = Number(params.total);
  const startIndex = Number(params.startIndex);
  const endIndex = Number(params.endIndex);
  const label = params.label ?? '';

  const wrong: number = total - finalScore;
  const pct: number = Math.round((finalScore / total) * 100);
  const passed: boolean = pct >= 65;

  const headerAnim = useRef(new Animated.Value(0)).current;
  const scoreAnim = useRef(new Animated.Value(0)).current;
  const statsAnim = useRef(new Animated.Value(0)).current;
  const feedbackAnim = useRef(new Animated.Value(0)).current;
  const actionsAnim = useRef(new Animated.Value(0)).current;
  const scoreCount = useRef(new Animated.Value(0)).current;
  const btnScale1 = useRef(new Animated.Value(1)).current;
  const btnScale2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const now = new Date();
    saveResult(db, {
      date: now.toLocaleDateString('en-PK') + ' ' + now.toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' }),
      start: startIndex, end: endIndex, correct: finalScore, total, pct, passed,
      label,
    }).catch(() => {
      // History save failure is non-fatal; quiz result still shown to user
    });

    Animated.stagger(100, [
      Animated.spring(headerAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
      Animated.spring(scoreAnim, { toValue: 1, useNativeDriver: true, tension: 50, friction: 7 }),
      Animated.spring(statsAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
      Animated.spring(feedbackAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
      Animated.spring(actionsAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
    ]).start();

    Animated.timing(scoreCount, { toValue: pct, duration: 1200, useNativeDriver: false }).start();
  }, []);

  const pressBtn = (scale: Animated.Value, cb: () => void) => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 0.94, useNativeDriver: true, tension: 200, friction: 10 }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, tension: 200, friction: 10 }),
    ]).start(cb);
  };

  const resultColor = passed ? '#16a34a' : '#dc2626';
  const resultBg = passed ? '#f0fdf4' : '#fff5f5';
  const resultBorder = passed ? '#bbf7d0' : '#fecaca';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2152" />

      {/* Banner */}
      <Animated.View style={[styles.banner, { paddingTop: insets.top + 12 }, {
        opacity: headerAnim,
        transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-40, 0] }) }],
      }]}>
        <Text style={styles.bannerEmoji}>{passed ? '🎉' : '📚'}</Text>
        <Text style={styles.bannerTitle}>Evaluation Complete!</Text>
        <Text style={styles.bannerSub}>Q{startIndex} – Q{endIndex}  •  {total} Questions</Text>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Score */}
        <Animated.View style={[styles.scoreCard, {
          opacity: scoreAnim,
          transform: [{ scale: scoreAnim.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] }) }],
        }]}>
          <View style={[styles.scoreCircle, { borderColor: resultColor }]}>
            <AnimatedCounter value={scoreCount} />
            <Text style={[styles.scorePct, { color: resultColor }]}>%</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: resultBg, borderColor: resultBorder }]}>
            <Text style={[styles.statusBadgeText, { color: resultColor }]}>
              {passed ? '✓  PASSED' : '✗  RE-EVALUATE'}
            </Text>
          </View>
        </Animated.View>

        {/* Stats */}
        <Animated.View style={[styles.statsRow, {
          opacity: statsAnim,
          transform: [{ translateY: statsAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
        }]}>
          {[
            { emoji: '✅', num: finalScore, color: '#16a34a', label: 'Correct' },
            { emoji: '❌', num: wrong, color: '#dc2626', label: 'Wrong' },
            { emoji: '📊', num: total, color: '#1e3c72', label: 'Total' },
          ].map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statEmoji}>{s.emoji}</Text>
              <Text style={[styles.statNum, { color: s.color }]}>{s.num}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </Animated.View>

        {/* Feedback */}
        <Animated.View style={[styles.feedbackCard, { backgroundColor: resultBg, borderColor: resultBorder }, {
          opacity: feedbackAnim,
          transform: [{ translateY: feedbackAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }],
        }]}>
          <Text style={[styles.feedbackTitle, { color: resultColor }]}>
            {passed ? 'Outstanding Performance!' : 'Keep Practicing!'}
          </Text>
          <Text style={[styles.feedbackMsg, { color: passed ? '#166534' : '#991b1b' }]}>
            {passed
              ? 'You have met the 65% benchmark required for SPSC competitive selection. Well done!'
              : 'Below the 65% pass mark. Review weak areas and re-read each rationale, then try again.'}
          </Text>
        </Animated.View>

        {/* Actions */}
        <Animated.View style={[styles.actions, {
          opacity: actionsAnim,
          transform: [{ translateY: actionsAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
        }]}>
          <Animated.View style={{ transform: [{ scale: btnScale1 }], flex: 1 }}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => pressBtn(btnScale1, () => router.push('/'))}
              activeOpacity={1}
            >
              <Text style={styles.btnPrimaryText}>← New Session</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ transform: [{ scale: btnScale2 }], flex: 1 }}>
            <TouchableOpacity
              style={styles.btnSecondary}
              onPress={() => pressBtn(btnScale2, () => router.replace({ pathname: '/quiz', params: { startIndex, endIndex } }))}
              activeOpacity={1}
            >
              <Text style={styles.btnSecondaryText}>↺ Retry</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff' },
  content: { padding: 16, paddingBottom: 48 },

  banner: {
    backgroundColor: '#1e3c72', paddingTop: 48, paddingBottom: 28,
    paddingHorizontal: 24, alignItems: 'center',
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
  },
  bannerEmoji: { fontSize: 40, marginBottom: 10 },
  bannerTitle: { color: '#fff', fontSize: 22, fontWeight: '800', marginBottom: 6 },
  bannerSub: { color: 'rgba(255,255,255,0.6)', fontSize: 13 },

  scoreCard: { alignItems: 'center', marginTop: 28, marginBottom: 20 },
  scoreCircle: {
    width: 160, height: 160, borderRadius: 80, borderWidth: 6,
    alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 12, elevation: 6,
    marginBottom: 16, flexDirection: 'row',
  },
  scorePct: { fontSize: 24, fontWeight: '700', marginTop: 8 },
  statusBadge: { borderWidth: 2, borderRadius: 24, paddingHorizontal: 20, paddingVertical: 8 },
  statusBadgeText: { fontSize: 14, fontWeight: '800', letterSpacing: 1 },

  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  statCard: {
    flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16, alignItems: 'center',
    shadowColor: '#1e3c72', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07, shadowRadius: 8, elevation: 3,
  },
  statEmoji: { fontSize: 22, marginBottom: 8 },
  statNum: { fontSize: 26, fontWeight: '800', marginBottom: 2 },
  statLabel: { fontSize: 10, color: '#8a9ab5', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },

  feedbackCard: { borderWidth: 2, borderRadius: 16, padding: 18, marginBottom: 20 },
  feedbackTitle: { fontSize: 16, fontWeight: '800', marginBottom: 8 },
  feedbackMsg: { fontSize: 13, lineHeight: 20 },

  actions: { flexDirection: 'row', gap: 12 },
  btnPrimary: { backgroundColor: '#1e3c72', borderRadius: 14, padding: 15, alignItems: 'center' },
  btnPrimaryText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  btnSecondary: { borderWidth: 2, borderColor: '#e8edf5', borderRadius: 14, padding: 15, alignItems: 'center', backgroundColor: '#fff' },
  btnSecondaryText: { color: '#1a2340', fontWeight: '800', fontSize: 14 },
});