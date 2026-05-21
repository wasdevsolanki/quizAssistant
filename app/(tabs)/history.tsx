import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Alert, ActivityIndicator, StatusBar, Animated,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';
import { getHistory, clearHistory } from '../../db/database';
import { HistoryEntry } from '../../types';

export default function HistoryScreen() {
  const insets = useSafeAreaInsets();
  const db     = useSQLiteContext();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const headerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(headerAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }).start();
  }, []);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setLoading(true);
        const h = await getHistory(db);
        setHistory(h);
        setLoading(false);
      })();
    }, [])
  );

  const handleClear = (): void => {
    Alert.alert('Clear History', 'Delete all session records?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear All', style: 'destructive', onPress: async () => { await clearHistory(db); setHistory([]); } },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2152" />

      <Animated.View style={[styles.header, { paddingTop: insets.top + 16 }, {
        opacity: headerAnim,
        transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-30, 0] }) }],
      }]}>
        <Text style={styles.headerTitle}>Session{'\n'}History</Text>
        <Text style={styles.headerSub}>Your past quiz results</Text>
        <View style={styles.headerStats}>
          <View style={styles.headerStatItem}>
            <Text style={styles.headerStatNum}>{history.length}</Text>
            <Text style={styles.headerStatLabel}>Sessions</Text>
          </View>
          <View style={styles.headerStatDivider} />
          <View style={styles.headerStatItem}>
            <Text style={styles.headerStatNum}>
              {history.length ? Math.round(history.reduce((a, h) => a + h.pct, 0) / history.length) : 0}%
            </Text>
            <Text style={styles.headerStatLabel}>Avg Score</Text>
          </View>
          <View style={styles.headerStatDivider} />
          <View style={styles.headerStatItem}>
            <Text style={styles.headerStatNum}>
              {history.filter(h => h.passed).length}
            </Text>
            <Text style={styles.headerStatLabel}>Passed</Text>
          </View>
        </View>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconWrap}>
              <Text style={styles.cardIcon}>📋</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Result Log</Text>
              <Text style={styles.cardSub}>All sessions recorded on this device</Text>
            </View>
            {history.length > 0 && (
              <TouchableOpacity onPress={handleClear} style={styles.clearBtnWrap}>
                <Text style={styles.clearBtn}>Clear</Text>
              </TouchableOpacity>
            )}
          </View>

          {loading ? (
            <View style={styles.loadingWrap}>
              <ActivityIndicator color="#1e3c72" size="large" />
              <Text style={styles.loadingText}>Loading history...</Text>
            </View>
          ) : history.length === 0 ? (
            <View style={styles.emptyBox}>
              <Text style={styles.emptyIcon}>🗂️</Text>
              <Text style={styles.emptyTitle}>No sessions yet</Text>
              <Text style={styles.emptyText}>Complete a quiz to see your history here.</Text>
            </View>
          ) : (
            <>
              <View style={[styles.tableRow, styles.tableHead]}>
                <Text style={[styles.thCell, { flex: 2 }]}>Date</Text>
                <Text style={[styles.thCell, { flex: 1.1 }]}>Range</Text>
                <Text style={[styles.thCell, { flex: 0.9, textAlign: 'center' }]}>Score</Text>
                <Text style={[styles.thCell, { flex: 0.8, textAlign: 'center' }]}>Result</Text>
              </View>
              {history.map((h: HistoryEntry, i: number) => (
                <HistoryRow key={i} entry={h} index={i} />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

function HistoryRow({ entry: h, index: i }: { entry: HistoryEntry; index: number }) {
  const rowAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(rowAnim, { toValue: 1, useNativeDriver: true, tension: 80, friction: 10, delay: i * 60 }).start();
  }, []);

  return (
    <Animated.View style={[
      styles.tableRow, i % 2 === 0 && styles.tableRowAlt,
      { opacity: rowAnim, transform: [{ translateX: rowAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }] },
    ]}>
      <Text style={[styles.tdCell, { flex: 2, fontSize: 11 }]}>{h.date}</Text>
      <Text style={[styles.tdCell, { flex: 1.1 }]}>Q{h.start}–{h.end}</Text>
      <Text style={[styles.tdCell, { flex: 0.9, textAlign: 'center', fontWeight: '700', color: '#1e3c72' }]}>{h.pct}%</Text>
      <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
        <View style={h.passed ? styles.badgePass : styles.badgeFail}>
          <Text style={h.passed ? styles.badgePassText : styles.badgeFailText}>{h.passed ? '✓' : '✗'}</Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff' },
  content:   { padding: 16, paddingBottom: 32 },

  header: {
    backgroundColor: '#1e3c72',
    paddingTop: 56, paddingBottom: 28, paddingHorizontal: 24,
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    marginBottom: 20,
  },
  headerTitle:       { color: '#fff', fontSize: 34, fontWeight: '800', lineHeight: 40, marginBottom: 8 },
  headerSub:         { color: 'rgba(255,255,255,0.65)', fontSize: 13, marginBottom: 24 },
  headerStats:       { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 16 },
  headerStatItem:    { flex: 1, alignItems: 'center' },
  headerStatNum:     { color: '#fff', fontSize: 22, fontWeight: '800' },
  headerStatLabel:   { color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: '600', marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.5 },
  headerStatDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginHorizontal: 8 },

  card: {
    backgroundColor: '#fff', borderRadius: 20, padding: 20,
    shadowColor: '#1e3c72', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 12, elevation: 5,
  },
  cardHeader:   { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 12 },
  cardIconWrap: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#fff3e0', alignItems: 'center', justifyContent: 'center' },
  cardIcon:     { fontSize: 22 },
  cardTitle:    { fontSize: 16, fontWeight: '800', color: '#1a2340' },
  cardSub:      { fontSize: 12, color: '#8a9ab5', marginTop: 1 },

  clearBtnWrap: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#fff0f0', borderRadius: 8 },
  clearBtn:     { color: '#dc3545', fontSize: 12, fontWeight: '700' },

  loadingWrap:  { alignItems: 'center', paddingVertical: 24, gap: 10 },
  loadingText:  { color: '#8a9ab5', fontSize: 13 },

  emptyBox:   { alignItems: 'center', paddingVertical: 28 },
  emptyIcon:  { fontSize: 40, marginBottom: 10 },
  emptyTitle: { fontSize: 15, fontWeight: '700', color: '#1a2340', marginBottom: 4 },
  emptyText:  { color: '#8a9ab5', fontSize: 13, textAlign: 'center' },

  tableRow:    { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f0f4ff', paddingVertical: 10, alignItems: 'center' },
  tableRowAlt: { backgroundColor: '#fafcff' },
  tableHead:   { borderBottomWidth: 2, borderBottomColor: '#e8edf5' },
  thCell:      { fontSize: 10, fontWeight: '800', color: '#8a9ab5', paddingHorizontal: 4, letterSpacing: 0.5 },
  tdCell:      { fontSize: 12, color: '#1a2340', paddingHorizontal: 4 },

  badgePass:     { backgroundColor: '#dcfce7', borderRadius: 8, width: 26, height: 26, alignItems: 'center', justifyContent: 'center' },
  badgeFail:     { backgroundColor: '#fee2e2', borderRadius: 8, width: 26, height: 26, alignItems: 'center', justifyContent: 'center' },
  badgePassText: { color: '#16a34a', fontSize: 13, fontWeight: '800' },
  badgeFailText: { color: '#dc2626', fontSize: 13, fontWeight: '800' },
});
