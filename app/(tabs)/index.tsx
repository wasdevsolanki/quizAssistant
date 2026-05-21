import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Alert, StatusBar, Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';
import { getQuestionCount } from '../../db/database';

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const db     = useSQLiteContext();
  const [totalCount, setTotalCount] = useState(0);
  const [startQ, setStartQ] = useState<string>('1');
  const [endQ,   setEndQ]   = useState<string>('');

  useEffect(() => {
    getQuestionCount(db).then(n => {
      setTotalCount(n);
      setEndQ(String(n));
    });
  }, []);
  const [startFocused, setStartFocused] = useState(false);
  const [endFocused, setEndFocused] = useState(false);

  const headerAnim = useRef(new Animated.Value(0)).current;
  const cardAnim = useRef(new Animated.Value(0)).current;
  const btnScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.stagger(120, [
      Animated.spring(headerAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
      Animated.spring(cardAnim,   { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }),
    ]).start();
  }, []);

  const handleStart = (): void => {
    const s = parseInt(startQ);
    const e = parseInt(endQ);
    if (isNaN(s) || isNaN(e)) { Alert.alert('Invalid Input', 'Please enter valid question numbers.'); return; }
    if (s < 1 || e < s)       { Alert.alert('Invalid Range', 'Start must be ≥ 1 and End must be ≥ Start.'); return; }
    if (e > totalCount)  { Alert.alert('Out of Range', `End cannot exceed total questions (${totalCount}).`); return; }
    router.push({ pathname: '/quiz', params: { startIndex: s, endIndex: e } });
  };

  const handleBtnPress = () => {
    Animated.sequence([
      Animated.spring(btnScale, { toValue: 0.95, useNativeDriver: true, tension: 200, friction: 10 }),
      Animated.spring(btnScale, { toValue: 1,    useNativeDriver: true, tension: 200, friction: 10 }),
    ]).start(handleStart);
  };

  const totalQuestions = parseInt(endQ || '0') - parseInt(startQ || '0') + 1;
  const validRange = !isNaN(totalQuestions) && totalQuestions > 0;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2152" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        <Animated.View style={[styles.header, { paddingTop: insets.top + 16 }, {
          opacity: headerAnim,
          transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-30, 0] }) }],
        }]}>
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>SPSC PREP</Text>
          </View>
          <Text style={styles.headerTitle}>Quiz{'\n'}Portal</Text>
          <Text style={styles.headerSub}>Comprehensive Practice & Evaluation</Text>
          <View style={styles.headerStats}>
            <View style={styles.headerStatItem}>
              <Text style={styles.headerStatNum}>{totalCount}</Text>
              <Text style={styles.headerStatLabel}>Questions</Text>
            </View>
            <View style={styles.headerStatDivider} />
            <View style={styles.headerStatItem}>
              <Text style={styles.headerStatNum}>65%</Text>
              <Text style={styles.headerStatLabel}>Pass Mark</Text>
            </View>
            <View style={styles.headerStatDivider} />
            <View style={styles.headerStatItem}>
              <Text style={styles.headerStatNum}>4</Text>
              <Text style={styles.headerStatLabel}>Options</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={[styles.card, {
          opacity: cardAnim,
          transform: [{ translateY: cardAnim.interpolate({ inputRange: [0, 1], outputRange: [40, 0] }) }],
        }]}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconWrap}>
              <Text style={styles.cardIcon}>⚙️</Text>
            </View>
            <View>
              <Text style={styles.cardTitle}>Session Setup</Text>
              <Text style={styles.cardSub}>Set your question range</Text>
            </View>
          </View>

          <View style={styles.inputRow}>
            <View style={styles.inputWrap}>
              <Text style={styles.inputLabel}>FROM</Text>
              <TextInput
                style={[styles.input, startFocused && styles.inputFocused]}
                keyboardType="number-pad"
                value={startQ}
                onChangeText={setStartQ}
                maxLength={4}
                placeholder="1"
                placeholderTextColor="#b0bec5"
                onFocus={() => setStartFocused(true)}
                onBlur={() => setStartFocused(false)}
              />
              <Text style={styles.inputHint}>Start Q#</Text>
            </View>
            <View style={styles.inputArrow}>
              <Text style={styles.inputArrowText}>→</Text>
            </View>
            <View style={styles.inputWrap}>
              <Text style={styles.inputLabel}>TO</Text>
              <TextInput
                style={[styles.input, endFocused && styles.inputFocused]}
                keyboardType="number-pad"
                value={endQ}
                onChangeText={setEndQ}
                maxLength={4}
                placeholder={String(totalCount)}
                placeholderTextColor="#b0bec5"
                onFocus={() => setEndFocused(true)}
                onBlur={() => setEndFocused(false)}
              />
              <Text style={styles.inputHint}>End Q#</Text>
            </View>
          </View>

          {validRange && (
            <View style={styles.rangePill}>
              <Text style={styles.rangePillText}>
                📝  {totalQuestions} question{totalQuestions !== 1 ? 's' : ''} selected
              </Text>
            </View>
          )}

          <Animated.View style={{ transform: [{ scale: btnScale }] }}>
            <TouchableOpacity style={styles.startBtn} onPress={handleBtnPress} activeOpacity={1}>
              <Text style={styles.startBtnText}>Start Examination</Text>
              <View style={styles.startBtnArrow}>
                <Text style={styles.startBtnArrowText}>▶</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: '#f0f4ff' },
  scrollContent: { paddingBottom: 32 },

  header: {
    backgroundColor: '#1e3c72',
    paddingTop: 56, paddingBottom: 36, paddingHorizontal: 24,
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    marginBottom: 20,
  },
  headerBadge: {
    alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4, marginBottom: 14,
  },
  headerBadgeText:  { color: '#93c5fd', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  headerTitle:      { color: '#fff', fontSize: 34, fontWeight: '800', lineHeight: 40, marginBottom: 8 },
  headerSub:        { color: 'rgba(255,255,255,0.65)', fontSize: 13, marginBottom: 24 },
  headerStats:      { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 16 },
  headerStatItem:   { flex: 1, alignItems: 'center' },
  headerStatNum:    { color: '#fff', fontSize: 22, fontWeight: '800' },
  headerStatLabel:  { color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: '600', marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.5 },
  headerStatDivider:{ width: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginHorizontal: 8 },

  card: {
    backgroundColor: '#fff', borderRadius: 20, padding: 20,
    marginHorizontal: 16, marginBottom: 16,
    shadowColor: '#1e3c72', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, shadowRadius: 12, elevation: 5,
  },
  cardHeader:   { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 12 },
  cardIconWrap: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#e8eeff', alignItems: 'center', justifyContent: 'center' },
  cardIcon:     { fontSize: 22 },
  cardTitle:    { fontSize: 16, fontWeight: '800', color: '#1a2340' },
  cardSub:      { fontSize: 12, color: '#8a9ab5', marginTop: 1 },

  inputRow:  { flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 8 },
  inputWrap: { flex: 1 },
  inputLabel:{ fontSize: 10, fontWeight: '800', color: '#8a9ab5', letterSpacing: 1, marginBottom: 6 },
  input: {
    borderWidth: 2, borderColor: '#e8edf5', borderRadius: 12,
    padding: 14, fontSize: 20, fontWeight: '700',
    color: '#1a2340', textAlign: 'center', backgroundColor: '#f8faff',
  },
  inputFocused: { borderColor: '#1e3c72', backgroundColor: '#fff' },
  inputHint:    { fontSize: 10, color: '#b0bec5', textAlign: 'center', marginTop: 4 },
  inputArrow:   { paddingTop: 16 },
  inputArrowText: { fontSize: 20, color: '#b0bec5' },

  rangePill: {
    backgroundColor: '#e8eeff', borderRadius: 20,
    paddingVertical: 8, paddingHorizontal: 16,
    alignSelf: 'center', marginBottom: 16,
  },
  rangePillText: { color: '#1e3c72', fontSize: 13, fontWeight: '600' },

  startBtn: {
    backgroundColor: '#1e3c72', borderRadius: 14, padding: 16,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12,
  },
  startBtnText:      { color: '#fff', fontSize: 16, fontWeight: '800', letterSpacing: 0.3 },
  startBtnArrow:     { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 8, width: 28, height: 28, alignItems: 'center', justifyContent: 'center' },
  startBtnArrowText: { color: '#fff', fontSize: 11 },
});
