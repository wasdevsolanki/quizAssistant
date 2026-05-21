import AsyncStorage from '@react-native-async-storage/async-storage';
import type { QuizQuestion } from '../types';

const KEYS = {
  QUESTIONS:         'quiz_questions_data',
  QUESTIONS_VERSION: 'quiz_questions_version',
  QUESTIONS_COUNT:   'quiz_questions_count',
};

export const getStoredQuestions = async (): Promise<QuizQuestion[] | null> => {
  try {
    const raw = await AsyncStorage.getItem(KEYS.QUESTIONS);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const saveQuestions = async (
  questions: QuizQuestion[],
  version: string,
): Promise<void> => {
  await AsyncStorage.multiSet([
    [KEYS.QUESTIONS,         JSON.stringify(questions)],
    [KEYS.QUESTIONS_VERSION, version],
    [KEYS.QUESTIONS_COUNT,   String(questions.length)],
  ]);
};

export const getStoredVersion = async (): Promise<string> =>
  (await AsyncStorage.getItem(KEYS.QUESTIONS_VERSION)) ?? '1.0.0';

export const getStoredCount = async (): Promise<number> => {
  const val = await AsyncStorage.getItem(KEYS.QUESTIONS_COUNT);
  return val ? Number(val) : 0;
};
