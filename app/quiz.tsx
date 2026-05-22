import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar, Animated, ActivityIndicator,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';
import { getQuestionSlice, type Question } from '../db/database';

export default function QuizScreen() {
  const router  = useRouter();
  const insets  = useSafeAreaInsets();
  const db      = useSQLiteContext();
  const params  = useLocalSearchParams<{ startIndex: string; endIndex: string; label: string; shuffle: string }>();
  const startIndex = Number(params.startIndex);
  const endIndex   = Number(params.endIndex);
  const label      = params.label ?? '';
  const doShuffle  = params.shuffle === '1';

  const [questions,  setQuestions]  = useState<Question[]>([]);
  const [loading,    setLoading]    = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score,      setScore]      = useState(0);
  const [answered,   setAnswered]   = useState<(number | null)[]>([]);

  const cardSlide    = useRef(new Animated.Value(0)).current;
  const cardOpacity  = useRef(new Animated.Value(1)).current;
  const rationaleAnim = useRef(new Animated.Value(0)).current;
  const progressAnim  = useRef(new Animated.Value(0)).current;
  const optionAnims   = useRef(
    Array.from({ length: 4 }, () => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    getQuestionSlice(db, startIndex, endIndex).then(qs => {
      const ordered = doShuffle
        ? [...qs].sort(() => Math.random() - 0.5)
        : qs;
      setQuestions(ordered);
      setAnswered(new Array(ordered.length).fill(null));
      setLoading(false);
    });
  }, []);

  const q          = questions[currentIndex];
  const isAnswered = answered[currentIndex] !== null;
  const progressPct = questions.length
    ? ((currentIndex + 1) / questions.length) * 100
    : 0;

  useEffect(() => {
    if (!loading)
      Animated.spring(progressAnim, {
        toValue: progressPct, useNativeDriver: false, tension: 60, friction: 10,
      }).start();
  }, [currentIndex, loading]);

  const animateOptionsIn = () => {
    optionAnims.forEach(a => a.setValue(0));
    Animated.stagger(60, optionAnims.map(a =>
      Animated.spring(a, { toValue: 1, useNativeDriver: true, tension: 80, friction: 10 }),
    )).start();
  };
  useEffect(() => { if (!loading) animateOptionsIn(); }, [currentIndex, loading]);

  const showRationale = () => {
    rationaleAnim.setValue(0);
    Animated.spring(rationaleAnim, {
      toValue: 1, useNativeDriver: true, tension: 70, friction: 10,
    }).start();
  };

  const selectOption = (selectedIdx: number) => {
    if (isAnswered) return;
    const next = [...answered];
    next[currentIndex] = selectedIdx;
    setAnswered(next);
    if (selectedIdx === q.correctIndex) setScore(s => s + 1);
    showRationale();
  };

  const animateToNext = (dir: number, cb: () => void) => {
    const toX = dir > 0 ? -30 : 30;
    Animated.parallel([
      Animated.timing(cardSlide,   { toValue: toX, duration: 150, useNativeDriver: true }),
      Animated.timing(cardOpacity, { toValue: 0,   duration: 150, useNativeDriver: true }),
    ]).start(() => {
      cb();
      cardSlide.setValue(-toX);
      Animated.parallel([
        Animated.spring(cardSlide,   { toValue: 0, useNativeDriver: true, tension: 80, friction: 10 }),
        Animated.timing(cardOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    });
  };

  const changeQuestion = (dir: number) => {
    const next = currentIndex + dir;
    if (next >= questions.length) {
      router.push({ pathname: '/result',
        params: { finalScore: score, total: questions.length, startIndex, endIndex, label } });
      return;
    }
    if (next < 0) return;
    animateToNext(dir, () => setCurrentIndex(next));
  };

  const optionConfig = (idx: number) => {
    if (!isAnswered) return { bg: '#f8faff', border: '#e8edf5', textColor: '#1a2340', label: '#5a6a8a' };
    if (idx === q.correctIndex)        return { bg: '#f0fdf4', border: '#22c55e', textColor: '#15803d', label: '#16a34a' };
    if (answered[currentIndex] === idx) return { bg: '#fff5f5', border: '#f87171', textColor: '#dc2626', label: '#dc2626' };
    return { bg: '#f8faff', border: '#e8edf5', textColor: '#9aa5b8', label: '#9aa5b8' };
  };

  if (loading || !q) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#1e3c72" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2152" />

      <View style={[styles.topBar, { paddingTop: insets.top + 14 }]}>
        <View style={styles.topBarItem}>
          <Text style={styles.topBarLabel}>QUESTION</Text>
          <Text style={styles.topBarValue}>
            {currentIndex + 1} <Text style={styles.topBarOf}>/ {questions.length}</Text>
          </Text>
        </View>
        <View style={styles.topBarItem}>
          <Text style={styles.topBarLabel}>CATEGORY</Text>
          <Text style={styles.topBarValue} numberOfLines={1}>{q.category.split(' ')[0]}</Text>
        </View>
        <View style={styles.topBarItem}>
          <Text style={styles.topBarLabel}>SCORE</Text>
          <Text style={[styles.topBarValue, { color: '#4ade80' }]}>{score}</Text>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <Animated.View style={[styles.progressFill, {
          width: progressAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }),
        }]} />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.card,
          { opacity: cardOpacity, transform: [{ translateX: cardSlide }] }]}>

          <View style={styles.metaRow}>
            <View style={styles.metaChip}>
              <Text style={styles.metaChipText}>Q#{q.id}  ·  {q.category}</Text>
            </View>
            <Text style={styles.metaProgress}>{Math.round(progressPct)}% done</Text>
          </View>

          <Text style={styles.questionText}>{q.question}</Text>

          {q.options.map((opt, idx) => {
            const cfg  = optionConfig(idx);
            const anim = optionAnims[idx] ?? new Animated.Value(1);
            return (
              <Animated.View key={idx} style={{
                opacity: anim,
                transform: [{ translateX: anim.interpolate({ inputRange: [0, 1], outputRange: [40, 0] }) }],
              }}>
                <TouchableOpacity
                  style={[styles.optionBtn, { backgroundColor: cfg.bg, borderColor: cfg.border }]}
                  onPress={() => selectOption(idx)}
                  disabled={isAnswered}
                  activeOpacity={0.7}
                >
                  <View style={[styles.optionLabelBox, { borderColor: cfg.border }]}>
                    <Text style={[styles.optionLabel, { color: cfg.label }]}>
                      {String.fromCharCode(65 + idx)}
                    </Text>
                  </View>
                  <Text style={[styles.optionText, { color: cfg.textColor }]}>{opt}</Text>
                  {isAnswered && idx === q.correctIndex && (
                    <View style={styles.correctIcon}><Text style={styles.correctIconText}>✓</Text></View>
                  )}
                  {isAnswered && answered[currentIndex] === idx && idx !== q.correctIndex && (
                    <View style={styles.wrongIcon}><Text style={styles.wrongIconText}>✗</Text></View>
                  )}
                </TouchableOpacity>
              </Animated.View>
            );
          })}

          {isAnswered && (
            <Animated.View style={[styles.rationaleBox, {
              opacity: rationaleAnim,
              transform: [{ translateY: rationaleAnim.interpolate(
                { inputRange: [0, 1], outputRange: [20, 0] }) }],
            }]}>
              <View style={styles.rationaleHeader}>
                <Text style={styles.rationaleIcon}>💡</Text>
                <Text style={styles.rationaleTitle}>Explanation</Text>
              </View>
              <Text style={styles.rationaleText}>{q.rationale}</Text>
            </Animated.View>
          )}

          <View style={styles.navRow}>
            <TouchableOpacity
              style={[styles.navBtn, currentIndex === 0 && styles.navBtnDisabled]}
              onPress={() => changeQuestion(-1)}
              disabled={currentIndex === 0}
              activeOpacity={0.75}
            >
              <Text style={[styles.navBtnText, currentIndex === 0 && { color: '#c0cce0' }]}>← Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBtnPrimary} onPress={() => changeQuestion(1)} activeOpacity={0.85}>
              <Text style={styles.navBtnPrimaryText}>
                {currentIndex === questions.length - 1 ? 'Finish ✓' : 'Next →'}
              </Text>
            </TouchableOpacity>
          </View>

        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loader:      { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4ff' },
  container:   { flex: 1, backgroundColor: '#f0f4ff' },
  scroll:      { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 40 },

  topBar: {
    flexDirection: 'row', backgroundColor: '#1e3c72',
    paddingHorizontal: 20, paddingBottom: 14, justifyContent: 'space-between',
  },
  topBarItem:  { alignItems: 'center', flex: 1 },
  topBarLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 9, fontWeight: '800', letterSpacing: 1 },
  topBarValue: { color: '#fff', fontSize: 15, fontWeight: '800', marginTop: 2 },
  topBarOf:    { color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: '600' },

  progressTrack: { height: 4, backgroundColor: 'rgba(30,60,114,0.1)' },
  progressFill:  { height: 4, backgroundColor: '#1e3c72', borderRadius: 2 },

  card: {
    backgroundColor: '#fff', borderRadius: 20, padding: 20,
    shadowColor: '#1e3c72', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 12, elevation: 5, marginTop: 4,
  },
  metaRow:      { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  metaChip:     { backgroundColor: '#e8eeff', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4, flex: 1, marginRight: 8 },
  metaChipText: { color: '#1e3c72', fontSize: 11, fontWeight: '700' },
  metaProgress: { fontSize: 11, color: '#8a9ab5', fontWeight: '600' },

  questionText: { fontSize: 17, fontWeight: '700', color: '#1a2340', lineHeight: 26, marginBottom: 20 },

  optionBtn:      { flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderRadius: 14, padding: 14, marginBottom: 10, gap: 12 },
  optionLabelBox: { width: 32, height: 32, borderRadius: 8, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  optionLabel:    { fontSize: 13, fontWeight: '800' },
  optionText:     { flex: 1, fontSize: 14, lineHeight: 20, fontWeight: '500' },
  correctIcon:    { backgroundColor: '#22c55e', borderRadius: 999, width: 24, height: 24, alignItems: 'center', justifyContent: 'center' },
  correctIconText:{ color: '#fff', fontSize: 12, fontWeight: '800' },
  wrongIcon:      { backgroundColor: '#f87171', borderRadius: 999, width: 24, height: 24, alignItems: 'center', justifyContent: 'center' },
  wrongIconText:  { color: '#fff', fontSize: 12, fontWeight: '800' },

  rationaleBox:   { backgroundColor: '#fffbeb', borderRadius: 14, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: '#fde68a' },
  rationaleHeader:{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  rationaleIcon:  { fontSize: 16 },
  rationaleTitle: { fontSize: 13, fontWeight: '800', color: '#92400e' },
  rationaleText:  { fontSize: 13, color: '#78350f', lineHeight: 20 },

  navRow:          { flexDirection: 'row', gap: 12, marginTop: 4 },
  navBtn:          { flex: 1, borderWidth: 2, borderColor: '#e8edf5', borderRadius: 12, padding: 14, alignItems: 'center' },
  navBtnDisabled:  { opacity: 0.4 },
  navBtnText:      { fontSize: 14, fontWeight: '700', color: '#1a2340' },
  navBtnPrimary:   { flex: 2, backgroundColor: '#1e3c72', borderRadius: 12, padding: 14, alignItems: 'center' },
  navBtnPrimaryText: { fontSize: 14, fontWeight: '800', color: '#fff' },
});
