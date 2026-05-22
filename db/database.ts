import type { SQLiteDatabase } from 'expo-sqlite';
import quizData from '../data/quizData';
import type { HistoryEntry } from '../types';

// ── DB-enriched question type (what all screens use) ─────────────────
export interface Question {
  id:           number;
  question:     string;
  options:      string[];
  correctIndex: number;
  rationale:    string;
  category:     string;
}

export interface CategorySummary {
  category: string;
  count:    number;
  firstId:  number;
  lastId:   number;
}

// ── Singleton for imperative access (hooks/utils outside React tree) ─
let _db: SQLiteDatabase | null = null;
export const setDb = (db: SQLiteDatabase) => { _db = db; };
export const getDb = (): SQLiteDatabase => {
  if (!_db) throw new Error(
    'SQLite DB not initialised yet. ' +
    'Do not call getDb() before SQLiteProvider has finished onInit. ' +
    'Prefer useSQLiteContext() inside React components.',
  );
  return _db;
};

// ── Category assignment (index-based) ────────────────────────────────
const RANGES = [
  { max: 200,      label: 'Pakistan Geography'     },
  { max: 450,      label: 'History & Constitution' },
  { max: 650,      label: 'Everyday Science'       },
  { max: 850,      label: 'Current Affairs'        },
  { max: Infinity, label: 'General Knowledge'      },
];
const categoryFor = (oneIdx: number) =>
  RANGES.find(r => oneIdx <= r.max)!.label;

// ── Schema ────────────────────────────────────────────────────────────
const SCHEMA = `
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS meta (
    key   TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS questions (
    id            INTEGER PRIMARY KEY,
    question      TEXT    NOT NULL,
    options       TEXT    NOT NULL,
    correct_index INTEGER NOT NULL,
    rationale     TEXT    NOT NULL,
    category      TEXT    NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_questions_category
    ON questions(category);

  CREATE TABLE IF NOT EXISTS history (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    date          TEXT    NOT NULL,
    start_idx     INTEGER NOT NULL,
    end_idx       INTEGER NOT NULL,
    correct       INTEGER NOT NULL,
    total         INTEGER NOT NULL,
    pct           INTEGER NOT NULL,
    passed        INTEGER NOT NULL,
    session_label TEXT    NOT NULL DEFAULT ''
  );
`;

// ── Seeding ───────────────────────────────────────────────────────────
export async function seedQuestions(db: SQLiteDatabase): Promise<void> {
  await db.withTransactionAsync(async () => {
    for (let i = 0; i < quizData.length; i++) {
      const q = quizData[i];
      await db.runAsync(
        `INSERT INTO questions
           (id, question, options, correct_index, rationale, category)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [i + 1, q.question, JSON.stringify(q.options),
         q.correctIndex, q.rationale, categoryFor(i + 1)],
      );
    }
  });
}

// Re-seeds from bundled data (used by Settings → Reset)
export async function reseedFromBundle(db: SQLiteDatabase): Promise<void> {
  await db.withTransactionAsync(async () => {
    await db.runAsync('DELETE FROM questions');
    for (let i = 0; i < quizData.length; i++) {
      const q = quizData[i];
      await db.runAsync(
        `INSERT INTO questions
           (id, question, options, correct_index, rationale, category)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [i + 1, q.question, JSON.stringify(q.options),
         q.correctIndex, q.rationale, categoryFor(i + 1)],
      );
    }
    await db.runAsync(`UPDATE meta SET value = '1' WHERE key = 'seeded'`);
  });
}

// ── Main init (called by SQLiteProvider's onInit) ─────────────────────
export async function initDatabase(db: SQLiteDatabase): Promise<void> {
  setDb(db);
  await db.execAsync(SCHEMA);

  // Migrate existing installs: add session_label column if absent
  const cols = await db.getAllAsync<{ name: string }>(
    `PRAGMA table_info(history)`,
  );
  if (!cols.some(c => c.name === 'session_label')) {
    await db.runAsync(
      `ALTER TABLE history ADD COLUMN session_label TEXT NOT NULL DEFAULT ''`,
    );
  }

  const seeded = await db.getFirstAsync<{ value: string }>(
    `SELECT value FROM meta WHERE key = 'seeded'`,
  );
  if (!seeded) {
    await seedQuestions(db);
    await db.runAsync(
      `INSERT INTO meta (key, value) VALUES ('seeded', '1')`,
    );
  }
}

// ── Question queries ──────────────────────────────────────────────────
type QRow = {
  id: number; question: string; options: string;
  correct_index: number; rationale: string; category: string;
};
const mapQ = (r: QRow): Question => ({
  id: r.id, question: r.question,
  options: JSON.parse(r.options),
  correctIndex: r.correct_index,
  rationale: r.rationale, category: r.category,
});

export async function getQuestionCount(db: SQLiteDatabase): Promise<number> {
  const row = await db.getFirstAsync<{ n: number }>(
    'SELECT COUNT(*) AS n FROM questions',
  );
  return row?.n ?? 0;
}

export async function getQuestionSlice(
  db: SQLiteDatabase,
  startId: number,
  endId: number,
): Promise<Question[]> {
  const rows = await db.getAllAsync<QRow>(
    'SELECT * FROM questions WHERE id BETWEEN ? AND ? ORDER BY id',
    [startId, endId],
  );
  return rows.map(mapQ);
}

export async function getCategorySummaries(
  db: SQLiteDatabase,
): Promise<CategorySummary[]> {
  return db.getAllAsync<CategorySummary>(
    `SELECT category,
            COUNT(*)  AS count,
            MIN(id)   AS firstId,
            MAX(id)   AS lastId
     FROM   questions
     GROUP  BY category
     ORDER  BY firstId`,
  );
}

// ── History queries ───────────────────────────────────────────────────
type HRow = {
  id: number; date: string;
  start_idx: number; end_idx: number;
  correct: number; total: number; pct: number; passed: number;
  session_label: string;
};
const mapH = (r: HRow): HistoryEntry => ({
  date: r.date, start: r.start_idx, end: r.end_idx,
  correct: r.correct, total: r.total, pct: r.pct,
  passed: r.passed === 1,
  label: r.session_label ?? '',
});

export async function getHistory(db: SQLiteDatabase): Promise<HistoryEntry[]> {
  const rows = await db.getAllAsync<HRow>(
    'SELECT * FROM history ORDER BY id DESC',
  );
  return rows.map(mapH);
}

export async function saveResult(
  db: SQLiteDatabase,
  e: HistoryEntry,
): Promise<void> {
  await db.runAsync(
    `INSERT INTO history
       (date, start_idx, end_idx, correct, total, pct, passed, session_label)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [e.date, e.start, e.end, e.correct, e.total, e.pct, e.passed ? 1 : 0, e.label],
  );
}

export async function clearHistory(db: SQLiteDatabase): Promise<void> {
  await db.runAsync('DELETE FROM history');
}

// ── Helper: list all questions (id + text + category only) ────────────
export type QuestionMeta = { id: number; question: string; category: string };

export async function getAllQuestionsMeta(
  db: SQLiteDatabase,
): Promise<QuestionMeta[]> {
  return db.getAllAsync<QuestionMeta>(
    'SELECT id, question, category FROM questions ORDER BY id',
  );
}

export async function updateQuestionCategory(
  db: SQLiteDatabase,
  id: number,
  category: string,
): Promise<void> {
  await db.runAsync(
    'UPDATE questions SET category = ? WHERE id = ?',
    [category, id],
  );
}
