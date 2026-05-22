import React, { useRef, useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar, Animated, ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';
import { getCategorySummaries, getQuestionCount, type CategorySummary } from '../../db/database';

const META: Record<string, { emoji: string; color: string; accent: string }> = {
  'Pakistan Geography':     { emoji: '🗺️', color: '#e8f4fd', accent: '#1e88e5' },
  'History & Constitution': { emoji: '📜', color: '#fef3e2', accent: '#f57c00' },
  'Everyday Science':       { emoji: '🔬', color: '#e8f5e9', accent: '#2e7d32' },
  'Current Affairs':        { emoji: '🌐', color: '#fce4ec', accent: '#c2185b' },
  'General Knowledge':      { emoji: '💡', color: '#ede7f6', accent: '#6a1b9a' },
};
const FALLBACK = { emoji: '📚', color: '#e8eeff', accent: '#1e3c72' };

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const db     = useSQLiteContext();

  const [categories, setCategories] = useState<CategorySummary[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading,    setLoading]    = useState(true);
  const [shuffle,    setShuffle]    = useState(false);

  const headerAnim = useRef(new Animated.Value(0)).current;
  const listAnim   = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Promise.all([getCategorySummaries(db), getQuestionCount(db)]).then(([cats, total]) => {
      setCategories(cats);
      setTotalCount(total);
      setLoading(false);
      Animated.stagger(100, [
        Animated.spring(headerAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
        Animated.spring(listAnim,   { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
      ]).start();
    });
  }, []);

  const startCategory = (firstId: number, lastId: number, label: string) => {
    router.push({ pathname: '/quiz', params: { startIndex: firstId, endIndex: lastId, label, shuffle: shuffle ? '1' : '0' } });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2152" />

      <Animated.View style={[styles.header, { paddingTop: insets.top + 16 }, {
        opacity: headerAnim,
        transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-30, 0] }) }],
      }]}>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>SPSC PREP</Text>
        </View>
        <Text style={styles.headerTitle}>Quiz{'\n'}Portal</Text>
        <Text style={styles.headerSub}>Pick a topic and start practising</Text>

        <TouchableOpacity
          style={[styles.shuffleToggle, shuffle && styles.shuffleToggleOn]}
          onPress={() => setShuffle(s => !s)}
          activeOpacity={0.75}
        >
          <Text style={styles.shuffleToggleText}>{shuffle ? '🔀 Shuffle ON' : '🔀 Shuffle OFF'}</Text>
        </TouchableOpacity>

        <View style={styles.headerStats}>
          <View style={styles.headerStatItem}>
            <Text style={styles.headerStatNum}>{totalCount || '—'}</Text>
            <Text style={styles.headerStatLabel}>Questions</Text>
          </View>
          <View style={styles.headerStatDivider} />
          <View style={styles.headerStatItem}>
            <Text style={styles.headerStatNum}>65%</Text>
            <Text style={styles.headerStatLabel}>Pass Mark</Text>
          </View>
          <View style={styles.headerStatDivider} />
          <View style={styles.headerStatItem}>
            <Text style={styles.headerStatNum}>{categories.length || '—'}</Text>
            <Text style={styles.headerStatLabel}>Categories</Text>
          </View>
        </View>
      </Animated.View>

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#1e3c72" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
          <Animated.View style={[styles.gridInner, {
            opacity: listAnim,
            transform: [{ translateY: listAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
          }]}>

            {categories.map(cat => {
              const m = META[cat.category] ?? FALLBACK;
              return (
                <TouchableOpacity
                  key={cat.category}
                  style={[styles.card, { backgroundColor: m.color, borderColor: m.accent + '44' }]}
                  onPress={() => startCategory(cat.firstId, cat.lastId, cat.category)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.cardEmoji}>{m.emoji}</Text>
                  <Text style={[styles.cardLabel, { color: m.accent }]}>{cat.category}</Text>
                  <Text style={styles.cardRange}>
                    Q{cat.firstId}–{cat.lastId}  ·  {cat.count} questions
                  </Text>
                  <View style={[styles.cardBadge, { backgroundColor: m.accent }]}>
                    <Text style={styles.cardBadgeText}>Start →</Text>
                  </View>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={[styles.card, styles.cardAll]}
              onPress={() => startCategory(1, totalCount, 'Practice All')}
              activeOpacity={0.8}
            >
              <Text style={styles.cardEmoji}>🎯</Text>
              <Text style={[styles.cardLabel, { color: '#1e3c72' }]}>Practice All</Text>
              <Text style={styles.cardRange}>Q1–{totalCount}  ·  {totalCount} questions</Text>
              <View style={[styles.cardBadge, { backgroundColor: '#1e3c72' }]}>
                <Text style={styles.cardBadgeText}>Start →</Text>
              </View>
            </TouchableOpacity>

          </Animated.View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff' },
  loader:    { flex: 1, alignItems: 'center', justifyContent: 'center' },

  header: {
    backgroundColor: '#1e3c72',
    paddingBottom: 28, paddingHorizontal: 24,
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    marginBottom: 16,
  },
  headerBadge:      { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4, marginBottom: 14 },
  headerBadgeText:  { color: '#93c5fd', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  headerTitle:      { color: '#fff', fontSize: 34, fontWeight: '800', lineHeight: 40, marginBottom: 8 },
  headerSub:        { color: 'rgba(255,255,255,0.65)', fontSize: 13, marginBottom: 24 },
  headerStats:      { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 16 },
  headerStatItem:   { flex: 1, alignItems: 'center' },
  headerStatNum:    { color: '#fff', fontSize: 22, fontWeight: '800' },
  headerStatLabel:  { color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: '600', marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.5 },
  headerStatDivider:{ width: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginHorizontal: 8 },

  shuffleToggle:     { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6, marginBottom: 18 },
  shuffleToggleOn:   { backgroundColor: 'rgba(74,222,128,0.25)' },
  shuffleToggleText: { color: '#fff', fontSize: 12, fontWeight: '700' },

  grid:      { padding: 16, paddingBottom: 32 },
  gridInner: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },

  card: {
    width: '47%',
    borderRadius: 20, padding: 18, borderWidth: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 3,
    gap: 8,
  },
  cardAll:       { width: '100%', backgroundColor: '#e8eeff', borderColor: '#1e3c7244' },
  cardEmoji:     { fontSize: 32 },
  cardLabel:     { fontSize: 14, fontWeight: '800', lineHeight: 20 },
  cardRange:     { fontSize: 11, color: '#8a9ab5', fontWeight: '600' },
  cardBadge:     { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start', marginTop: 4 },
  cardBadgeText: { color: '#fff', fontSize: 11, fontWeight: '800' },
});
