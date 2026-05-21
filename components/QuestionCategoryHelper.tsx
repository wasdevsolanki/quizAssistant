import React, { useEffect, useState } from 'react';
import {
  Modal, View, Text, FlatList, TouchableOpacity,
  StyleSheet, TextInput, ActivityIndicator, SafeAreaView, StatusBar,
} from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import {
  getAllQuestionsMeta, updateQuestionCategory, type QuestionMeta,
} from '../db/database';

const CATEGORIES = [
  { name: 'Pakistan Geography',     color: '#1e88e5', bg: '#e8f4fd' },
  { name: 'History & Constitution', color: '#f57c00', bg: '#fef3e2' },
  { name: 'Everyday Science',       color: '#2e7d32', bg: '#e8f5e9' },
  { name: 'Current Affairs',        color: '#c2185b', bg: '#fce4ec' },
  { name: 'General Knowledge',      color: '#6a1b9a', bg: '#ede7f6' },
];

const catMeta = (name: string) =>
  CATEGORIES.find(c => c.name === name) ?? { color: '#1e3c72', bg: '#e8eeff' };

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function QuestionCategoryHelper({ visible, onClose }: Props) {
  const db = useSQLiteContext();
  const [questions, setQuestions] = useState<QuestionMeta[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [search,    setSearch]    = useState('');
  const [selected,  setSelected]  = useState<QuestionMeta | null>(null);

  useEffect(() => {
    if (!visible) return;
    setLoading(true);
    getAllQuestionsMeta(db).then(qs => {
      setQuestions(qs);
      setLoading(false);
    });
  }, [visible]);

  const filtered = search.trim()
    ? questions.filter(q =>
        q.question.toLowerCase().includes(search.toLowerCase()) ||
        String(q.id).includes(search.trim()),
      )
    : questions;

  const handleSelect = async (category: string) => {
    if (!selected) return;
    await updateQuestionCategory(db, selected.id, category);
    setQuestions(prev =>
      prev.map(q => q.id === selected.id ? { ...q, category } : q),
    );
    setSelected(null);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor="#0f2152" />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Category Helper</Text>
          <Text style={styles.headerSub}>{questions.length} questions</Text>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>✕ Close</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchWrap}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Q# or keyword…"
            placeholderTextColor="#8a9ab5"
            value={search}
            onChangeText={setSearch}
            clearButtonMode="while-editing"
          />
        </View>

        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#1e3c72" />
            <Text style={styles.loaderText}>Loading questions…</Text>
          </View>
        ) : (
          <FlatList
            data={filtered}
            keyExtractor={item => String(item.id)}
            initialNumToRender={25}
            maxToRenderPerBatch={25}
            windowSize={10}
            getItemLayout={(_, index) => ({ length: 65, offset: 65 * index, index })}
            renderItem={({ item }) => {
              const m = catMeta(item.category);
              return (
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => setSelected(item)}
                  activeOpacity={0.7}
                >
                  <View style={styles.qBadge}>
                    <Text style={styles.qBadgeText}>Q{item.id}</Text>
                  </View>
                  <Text style={styles.qText} numberOfLines={2}>{item.question}</Text>
                  <View style={[styles.catTag, { backgroundColor: m.bg }]}>
                    <Text style={[styles.catTagText, { color: m.color }]} numberOfLines={1}>
                      {item.category.split(' ')[0]}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
            contentContainerStyle={{ paddingBottom: 32 }}
          />
        )}
      </SafeAreaView>

      {/* Category picker bottom sheet */}
      {selected && (
        <Modal
          visible
          animationType="fade"
          transparent
          onRequestClose={() => setSelected(null)}
        >
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setSelected(null)}
          >
            <View style={styles.sheet} onStartShouldSetResponder={() => true}>
              <View style={styles.sheetHandle} />
              <Text style={styles.sheetQ} numberOfLines={3}>{selected.question}</Text>
              <Text style={styles.sheetLabel}>Select category for Q{selected.id}</Text>

              {CATEGORIES.map(cat => (
                <TouchableOpacity
                  key={cat.name}
                  style={[
                    styles.catOption,
                    { borderColor: cat.color + '55', backgroundColor: cat.bg },
                    selected.category === cat.name && styles.catOptionActive,
                  ]}
                  onPress={() => handleSelect(cat.name)}
                  activeOpacity={0.75}
                >
                  <View style={[styles.catDot, { backgroundColor: cat.color }]} />
                  <Text style={[styles.catOptionText, { color: cat.color }]}>{cat.name}</Text>
                  {selected.category === cat.name && (
                    <Text style={[styles.catCheck, { color: cat.color }]}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}

              <TouchableOpacity style={styles.cancelBtn} onPress={() => setSelected(null)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#f0f4ff' },

  header: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    backgroundColor: '#1e3c72', paddingHorizontal: 18, paddingVertical: 14,
  },
  headerTitle: { color: '#fff', fontSize: 17, fontWeight: '800', flex: 1 },
  headerSub:   { color: 'rgba(255,255,255,0.55)', fontSize: 12 },
  closeBtn:    { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 7 },
  closeBtnText:{ color: '#fff', fontSize: 13, fontWeight: '700' },

  searchWrap:  { backgroundColor: '#fff', padding: 10, borderBottomWidth: 1, borderBottomColor: '#e8edf5' },
  searchInput: {
    backgroundColor: '#f0f4ff', borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 9,
    fontSize: 14, color: '#1a2340',
  },

  loader:     { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  loaderText: { color: '#8a9ab5', fontSize: 13 },

  row: {
    height: 65,
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', paddingHorizontal: 14, gap: 10,
  },
  sep:         { height: 1, backgroundColor: '#f0f4ff' },
  qBadge:      { backgroundColor: '#1e3c72', borderRadius: 6, paddingHorizontal: 7, paddingVertical: 4, minWidth: 46, alignItems: 'center' },
  qBadgeText:  { color: '#fff', fontSize: 11, fontWeight: '800' },
  qText:       { flex: 1, fontSize: 13, color: '#1a2340', lineHeight: 18 },
  catTag:      { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4, maxWidth: 88 },
  catTagText:  { fontSize: 10, fontWeight: '700' },

  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', justifyContent: 'flex-end' },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    padding: 20, paddingBottom: 36, gap: 8,
  },
  sheetHandle: { width: 40, height: 4, backgroundColor: '#e8edf5', borderRadius: 2, alignSelf: 'center', marginBottom: 8 },
  sheetQ:      { fontSize: 13, color: '#4a5568', lineHeight: 18, marginBottom: 4 },
  sheetLabel:  { fontSize: 12, fontWeight: '700', color: '#8a9ab5', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 },

  catOption: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    borderWidth: 1.5, borderRadius: 12, padding: 13,
  },
  catOptionActive: { borderWidth: 2.5 },
  catDot:         { width: 10, height: 10, borderRadius: 5 },
  catOptionText:  { flex: 1, fontSize: 14, fontWeight: '700' },
  catCheck:       { fontSize: 16, fontWeight: '800' },

  cancelBtn:  { alignItems: 'center', paddingVertical: 14, marginTop: 4 },
  cancelText: { color: '#8a9ab5', fontSize: 14, fontWeight: '600' },
});
