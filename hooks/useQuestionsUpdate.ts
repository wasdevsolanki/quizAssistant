import { useState, useCallback } from 'react';
import { getStoredVersion, saveVersion } from '../utils/storage';
import { getDb } from '../db/database';
import type { UpdateStatus, QuestionsManifest, QuizQuestion } from '../types';

const MANIFEST_URL = 'https://quiz.wasdevsolanki.com/api/questions/manifest';

export const useQuestionsUpdate = () => {
  const [status,   setStatus]   = useState<UpdateStatus>('idle');
  const [manifest, setManifest] = useState<QuestionsManifest | null>(null);
  const [error,    setError]    = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const checkForUpdate = useCallback(async (): Promise<boolean> => {
    setStatus('checking');
    setError(null);
    try {
      const controller = new AbortController();
      const timeout    = setTimeout(() => controller.abort(), 10000);
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
        : 'Could not reach server. Are you online?';
      setError(msg);
      setStatus('error');
      return false;
    }
  }, []);

  const downloadUpdate = useCallback(async (): Promise<boolean> => {
    if (!manifest) return false;
    setStatus('downloading');
    setProgress(0);
    setError(null);
    try {
      const res = await fetch(manifest.url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`Download failed: ${res.status}`);

      setProgress(40);
      const questions: QuizQuestion[] = await res.json();

      if (!Array.isArray(questions) || questions.length === 0)
        throw new Error('Downloaded data is empty or invalid.');

      setProgress(60);
      setStatus('installing');

      const db = getDb();
      await db.withTransactionAsync(async () => {
        await db.runAsync('DELETE FROM questions');
        for (let i = 0; i < questions.length; i++) {
          const q = questions[i];
          await db.runAsync(
            `INSERT INTO questions
               (id, question, options, correct_index, rationale, category)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
              i + 1,
              q.question,
              JSON.stringify(q.options),
              q.correctIndex,
              q.rationale,
              q.category,
            ],
          );
        }
        await db.runAsync(
          `INSERT INTO meta (key, value) VALUES ('version', ?)
           ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
          [manifest.version],
        );
      });

      // ✅ Save version to AsyncStorage AFTER SQLite transaction completes
      await saveVersion(manifest.version);

      setProgress(100);
      setStatus('up_to_date');
      return true;

    } catch (e: any) {
      setError(e.message || 'Download failed. Please try again.');
      setStatus('error');
      return false;
    }
  }, [manifest]);

  const reset = () => {
    setStatus('idle');
    setError(null);
    setProgress(0);
    setManifest(null);
  };

  return { status, manifest, error, progress, checkForUpdate, downloadUpdate, reset };
};

const compareVersions = (a: string, b: string): number => {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((pa[i] ?? 0) > (pb[i] ?? 0)) return 1;
    if ((pa[i] ?? 0) < (pb[i] ?? 0)) return -1;
  }
  return 0;
};