import AsyncStorage from '@react-native-async-storage/async-storage';
import type { SQLiteDatabase } from 'expo-sqlite';

const VERSION_KEY = 'quiz_questions_version';

export const getStoredVersion = async (): Promise<string> =>
  (await AsyncStorage.getItem(VERSION_KEY)) ?? '1.0.0';

export const saveVersion = async (version: string): Promise<void> => {
  await AsyncStorage.setItem(VERSION_KEY, version);
};

// Pass db directly — no dynamic import needed
export const getStoredCount = async (db: SQLiteDatabase): Promise<number> => {
  try {
    const row = await db.getFirstAsync<{ n: number }>('SELECT COUNT(*) AS n FROM questions');
    return row?.n ?? 0;
  } catch {
    return 0;
  }
};