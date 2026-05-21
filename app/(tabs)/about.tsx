import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';
import { getQuestionCount } from '../../db/database';

export default function AboutScreen() {
  const insets = useSafeAreaInsets();
  const db     = useSQLiteContext();
  const [totalCount, setTotalCount] = useState(0);

  const headerAnim = useRef(new Animated.Value(0)).current;
  const cardAnim   = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getQuestionCount(db).then(setTotalCount);
    Animated.stagger(120, [
      Animated.spring(headerAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
      Animated.spring(cardAnim,   { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
    ]).start();
  }, []);

  const INFO_ROWS = [
    { label: 'Total Questions', value: totalCount ? String(totalCount) : '…', emoji: '📚' },
    { label: 'Pass Mark',       value: '65%',                                  emoji: '✅' },
    { label: 'Options per Q',   value: '4',                                    emoji: '🔠' },
    { label: 'Storage',         value: 'Local (on device)',                    emoji: '💾' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2152" />

      <Animated.View style={[styles.header, { paddingTop: insets.top + 16 }, {
        opacity: headerAnim,
        transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-30, 0] }) }],
      }]}>
        <Text style={styles.appIcon}>🎓</Text>
        <Text style={styles.headerTitle}>SPSC Quiz{'\n'}Portal</Text>
        <Text style={styles.headerSub}>Sindh Public Service Commission Prep</Text>
        <View style={styles.versionBadge}>
          <Text style={styles.versionText}>v1.0.0</Text>
        </View>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <Animated.View style={[styles.card, {
          opacity: cardAnim,
          transform: [{ translateY: cardAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
        }]}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconWrap}>
              <Text style={styles.cardIconEmoji}>ℹ️</Text>
            </View>
            <View>
              <Text style={styles.cardTitle}>App Info</Text>
              <Text style={styles.cardSub}>Details about this app</Text>
            </View>
          </View>

          {INFO_ROWS.map((row, i) => (
            <View key={row.label} style={[styles.infoRow, i < INFO_ROWS.length - 1 && styles.infoRowBorder]}>
              <Text style={styles.infoEmoji}>{row.emoji}</Text>
              <Text style={styles.infoLabel}>{row.label}</Text>
              <Text style={styles.infoValue}>{row.value}</Text>
            </View>
          ))}
        </Animated.View>

        <Animated.View style={[styles.card, styles.noteCard, {
          opacity: cardAnim,
          transform: [{ translateY: cardAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
        }]}>
          <Text style={styles.noteTitle}>📌 How to use</Text>
          <Text style={styles.noteText}>
            {'• Go to Home and set a question range, or\n'}
            {'• Go to Categories and pick a topic.\n'}
            {'• Answer all questions — rationale shown after each.\n'}
            {'• A score of 65% or above is a Pass.\n'}
            {'• All results are saved in History.'}
          </Text>
        </Animated.View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff' },
  content:   { padding: 16, paddingBottom: 32, gap: 16 },

  header: {
    backgroundColor: '#1e3c72',
    paddingTop: 56, paddingBottom: 32, paddingHorizontal: 24,
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    marginBottom: 20, alignItems: 'center',
  },
  appIcon:    { fontSize: 52, marginBottom: 12 },
  headerTitle:{ color: '#fff', fontSize: 28, fontWeight: '800', textAlign: 'center', lineHeight: 36, marginBottom: 8 },
  headerSub:  { color: 'rgba(255,255,255,0.65)', fontSize: 13, textAlign: 'center', marginBottom: 16 },
  versionBadge: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 4 },
  versionText:  { color: '#93c5fd', fontSize: 12, fontWeight: '700' },

  card: {
    backgroundColor: '#fff', borderRadius: 20, padding: 20,
    shadowColor: '#1e3c72', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 12, elevation: 5,
  },
  noteCard: { backgroundColor: '#fffbeb', borderWidth: 1, borderColor: '#fde68a' },

  cardHeader:   { flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 12 },
  cardIconWrap: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#e8eeff', alignItems: 'center', justifyContent: 'center' },
  cardIconEmoji:{ fontSize: 22 },
  cardTitle:    { fontSize: 16, fontWeight: '800', color: '#1a2340' },
  cardSub:      { fontSize: 12, color: '#8a9ab5', marginTop: 1 },

  infoRow:       { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, gap: 10 },
  infoRowBorder: { borderBottomWidth: 1, borderBottomColor: '#f0f4ff' },
  infoEmoji:     { fontSize: 18, width: 28 },
  infoLabel:     { flex: 1, fontSize: 13, color: '#4a5568', fontWeight: '600' },
  infoValue:     { fontSize: 13, fontWeight: '800', color: '#1e3c72' },

  noteTitle: { fontSize: 15, fontWeight: '800', color: '#92400e', marginBottom: 10 },
  noteText:  { fontSize: 13, color: '#78350f', lineHeight: 22 },
});
