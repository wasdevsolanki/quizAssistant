import { useState, useCallback } from 'react';
import {
  getStoredVersion,
  saveQuestions,
  getStoredCount,
} from '../utils/storage';
import type { UpdateStatus, QuestionsManifest, QuizQuestion } from '../types';

// ✅ Your server manifest URL
const MANIFEST_URL = 'https://your-server.com/api/questions/manifest.json';

export const useQuestionsUpdate = () => {
  const [status,    setStatus]    = useState<UpdateStatus>('idle');
  const [manifest,  setManifest]  = useState<QuestionsManifest | null>(null);
  const [error,     setError]     = useState<string | null>(null);
  const [progress,  setProgress]  = useState(0);

  // ── Check if update is available ─────────────────────────────────
  const checkForUpdate = useCallback(async () => {
    setStatus('checking');
    setError(null);

    try {
      const controller  = new AbortController();
      const timeout     = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(MANIFEST_URL, {
        signal: controller.signal,
        cache:  'no-store',
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data: QuestionsManifest = await res.json();
      setManifest(data);

      const currentVersion = await getStoredVersion();
      const hasUpdate      = compareVersions(data.version, currentVersion) > 0;

      setStatus(hasUpdate ? 'available' : 'up_to_date');
      return hasUpdate;

    } catch (e: any) {
      const msg = e.name === 'AbortError'
        ? 'Connection timed out. Check your internet.'
        : 'Could not check for updates. Are you online?';

      setError(msg);
      setStatus('error');
      return false;
    }
  }, []);

  // ── Download and install update ───────────────────────────────────
  const downloadUpdate = useCallback(async () => {
    if (!manifest) return;

    setStatus('downloading');
    setProgress(0);
    setError(null);

    try {
      const res = await fetch(manifest.url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`Download failed: ${res.status}`);

      setProgress(50);
      setStatus('installing');

      const questions: QuizQuestion[] = await res.json();

      if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error('Downloaded data is invalid.');
      }

      await saveQuestions(questions, manifest.version);
      setProgress(100);
      setStatus('up_to_date');

      return true;

    } catch (e: any) {
      setError(e.message || 'Download failed. Please try again.');
      setStatus('error');
      return false;
    }
  }, [manifest]);

  // ── Reset ─────────────────────────────────────────────────────────
  const reset = () => {
    setStatus('idle');
    setError(null);
    setProgress(0);
    setManifest(null);
  };

  return {
    status, manifest, error, progress,
    checkForUpdate, downloadUpdate, reset,
  };
};

// ── Semver compare: returns 1 if a > b, -1 if a < b, 0 if equal ───
const compareVersions = (a: string, b: string): number => {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((pa[i] ?? 0) > (pb[i] ?? 0)) return 1;
    if ((pa[i] ?? 0) < (pb[i] ?? 0)) return -1;
  }
  return 0;
};