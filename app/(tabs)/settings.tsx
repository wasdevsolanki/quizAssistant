import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Alert, ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState, useCallback } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import { useQuestionsUpdate } from '../../hooks/useQuestionsUpdate';
import { getStoredVersion, getStoredCount } from '../../utils/storage';
import { clearHistory, reseedFromBundle } from '../../db/database';
import QuestionCategoryHelper from '../../components/QuestionCategoryHelper';
import Constants from 'expo-constants';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const db     = useSQLiteContext();

  const { status, manifest, error, progress,
          checkForUpdate, downloadUpdate, reset } = useQuestionsUpdate();

  const [storedVersion, setStoredVersion] = useState('1.0.0');
  const [storedCount,   setStoredCount]   = useState(0);
  const [helperVisible, setHelperVisible] = useState(false);

  const refreshStats = useCallback(async () => {
    setStoredVersion(await getStoredVersion());
    setStoredCount(await getStoredCount(db));
  }, [db]);

  // Run on mount
  useEffect(() => { refreshStats(); }, [refreshStats]);

  // Re-read stats whenever a download completes or DB is reset
  useEffect(() => {
    if (status === 'up_to_date') refreshStats();
  }, [status, refreshStats]);

  const handleCheckUpdate = async () => {
    const hasUpdate = await checkForUpdate();
    if (hasUpdate && manifest) {
      Alert.alert(
        '🎉 Update Available',
        `New questions are ready!\n\nCurrent: v${storedVersion}\nNew: v${manifest.version}\nTotal: ${manifest.totalCount} questions\n\nDownload now?`,
        [
          { text: 'Later', style: 'cancel', onPress: reset },
          { text: 'Download', onPress: handleDownload },
        ]
      );
    }
  };

  const handleDownload = async () => {
    const success = await downloadUpdate();
    if (success) {
      // ✅ Manually refresh stats immediately after install
      await refreshStats();
      Alert.alert(
        '✅ Update Installed',
        `Questions updated to v${manifest?.version}.\n\nTotal questions: ${await getStoredCount(db)}`,
      );
    }
  };

  const handleClearHistory = () => {
    Alert.alert(
      'Clear History',
      'This will permanently delete all past quiz results from this device.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear All',
          style: 'destructive',
          onPress: async () => {
            await clearHistory(db);
            Alert.alert('Done', 'History cleared.');
          },
        },
      ]
    );
  };

  const handleResetQuestions = () => {
    Alert.alert(
      'Reset Questions?',
      'This will wipe ALL questions and re-seed from the bundled copy. Any downloaded updates will be lost.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes, Reset',
          style: 'destructive',
          onPress: () =>
            Alert.alert(
              'Are you sure?',
              'This cannot be undone.',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'RESET NOW',
                  style: 'destructive',
                  onPress: async () => {
                    await reseedFromBundle(db);
                    await refreshStats();        // ✅ refresh after reseed too
                    Alert.alert('Done', 'Questions reset to default.');
                  },
                },
              ]
            ),
        },
      ]
    );
  };

  const getUpdateBtnLabel = () => {
    switch (status) {
      case 'checking':    return 'Checking...';
      case 'downloading': return `Downloading ${progress}%`;
      case 'installing':  return 'Installing...';
      case 'up_to_date':  return 'Up to Date ✓';
      case 'available':   return 'Download Update';
      default:            return 'Check for Updates';
    }
  };

  const isLoading = ['checking', 'downloading', 'installing'].includes(status);

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* ── Questions Database ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Questions Database</Text>
          <View style={styles.card}>

            <View style={styles.infoRow}>
              <Ionicons name="document-text-outline" size={18} color="#6c757d" />
              <Text style={styles.infoLabel}>Current version</Text>
              <Text style={styles.infoValue}>v{storedVersion}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Ionicons name="help-circle-outline" size={18} color="#6c757d" />
              <Text style={styles.infoLabel}>Total questions</Text>
              <Text style={styles.infoValue}>{storedCount > 0 ? storedCount : '—'}</Text>
            </View>

            {manifest && status === 'available' && (
              <>
                <View style={styles.divider} />
                <View style={styles.updateBanner}>
                  <Ionicons name="arrow-up-circle" size={16} color="#0ebafc" />
                  <Text style={styles.updateBannerText}>
                    v{manifest.version} available · {manifest.totalCount} questions
                  </Text>
                </View>
              </>
            )}

            {status === 'up_to_date' && (
              <>
                <View style={styles.divider} />
                <View style={styles.successBanner}>
                  <Ionicons name="checkmark-circle" size={16} color="#15bc52" />
                  <Text style={styles.successBannerText}>Questions are up to date</Text>
                </View>
              </>
            )}

            {error && (
              <>
                <View style={styles.divider} />
                <View style={styles.errorBanner}>
                  <Ionicons name="alert-circle" size={16} color="#ff5152" />
                  <Text style={styles.errorBannerText}>{error}</Text>
                </View>
              </>
            )}

            <View style={styles.divider} />

            {status === 'downloading' && (
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${progress}%` }]} />
              </View>
            )}

            <TouchableOpacity
              style={[styles.updateBtn, (isLoading || status === 'up_to_date') && styles.btnDisabled]}
              onPress={status === 'available' ? handleDownload : handleCheckUpdate}
              disabled={isLoading || status === 'up_to_date'}
              activeOpacity={0.8}
            >
              {isLoading
                ? <ActivityIndicator color="#fff" size="small" />
                : <Ionicons
                    name={status === 'up_to_date' ? 'checkmark-circle' : 'cloud-download-outline'}
                    size={18} color="#fff"
                  />
              }
              <Text style={styles.updateBtnText}>{getUpdateBtnLabel()}</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* ── Data Management ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Management</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuRow} onPress={handleClearHistory}>
              <Ionicons name="trash-outline" size={18} color="#ff5152" />
              <Text style={[styles.menuLabel, { color: '#ff5152' }]}>Clear quiz history</Text>
              <Ionicons name="chevron-forward" size={16} color="#adb5bd" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuRow} onPress={handleResetQuestions}>
              <Ionicons name="refresh-outline" size={18} color="#f59e0b" />
              <View style={{ flex: 1 }}>
                <Text style={[styles.menuLabel, { color: '#f59e0b' }]}>Reset to default questions</Text>
                <Text style={styles.menuSub}>Restores bundled questions, clears any updates</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#adb5bd" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Developer Tools ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Developer Tools</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuRow} onPress={() => setHelperVisible(true)}>
              <Ionicons name="create-outline" size={18} color="#1e3c72" />
              <View style={{ flex: 1 }}>
                <Text style={[styles.menuLabel, { color: '#1e3c72' }]}>Category Helper</Text>
                <Text style={styles.menuSub}>Manually assign category to any question</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#adb5bd" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── App Info ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Info</Text>
          <View style={styles.card}>
            <View style={styles.infoRow}>
              <Ionicons name="information-circle-outline" size={18} color="#6c757d" />
              <Text style={styles.infoLabel}>App version</Text>
              <Text style={styles.infoValue}>{Constants.expoConfig?.version ?? '1.0.0'}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Ionicons name="shield-checkmark-outline" size={18} color="#6c757d" />
              <Text style={styles.infoLabel}>Pass mark</Text>
              <Text style={styles.infoValue}>65%</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Ionicons name="wifi-outline" size={18} color="#6c757d" />
              <Text style={styles.infoLabel}>Works offline</Text>
              <Text style={[styles.infoValue, { color: '#15bc52' }]}>Yes</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      <QuestionCategoryHelper
        visible={helperVisible}
        onClose={() => setHelperVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: '#f0f4ff' },
  header:       { paddingHorizontal: 20, paddingBottom: 8 },
  title:        { fontSize: 24, fontWeight: '700', color: '#212529' },
  section:      { paddingHorizontal: 16, paddingTop: 20 },
  sectionTitle: {
    fontSize: 12, fontWeight: '600', color: '#6c757d',
    letterSpacing: 0.5, textTransform: 'uppercase',
    marginBottom: 8, paddingLeft: 4,
  },
  card:      { backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#e9ecef', overflow: 'hidden' },
  infoRow:   { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 16, paddingVertical: 14 },
  infoLabel: { flex: 1, fontSize: 14, color: '#343a40' },
  infoValue: { fontSize: 14, fontWeight: '600', color: '#212529' },
  menuRow:   { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 16, paddingVertical: 14 },
  menuLabel: { fontSize: 14 },
  menuSub:   { fontSize: 11, color: '#8a9ab5', marginTop: 1 },
  divider:   { height: 1, backgroundColor: '#f1f3f5', marginHorizontal: 16 },

  updateBtn:      {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, margin: 12, backgroundColor: '#1e3c72',
    borderRadius: 10, padding: 13,
  },
  btnDisabled:    { backgroundColor: '#adb5bd' },
  updateBtnText:  { color: '#fff', fontSize: 14, fontWeight: '600' },

  progressTrack: { height: 4, backgroundColor: '#e9ecef', marginHorizontal: 16, marginTop: 12, borderRadius: 2 },
  progressFill:  { height: 4, backgroundColor: '#0ebafc', borderRadius: 2 },

  updateBanner:     { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#e6f9ff' },
  updateBannerText: { fontSize: 13, color: '#026ba4', fontWeight: '500' },

  successBanner:     { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#f0fdf4' },
  successBannerText: { fontSize: 13, color: '#15bc52', fontWeight: '500' },

  errorBanner:     { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#fff1f1' },
  errorBannerText: { fontSize: 13, color: '#ff5152', flex: 1 },
});