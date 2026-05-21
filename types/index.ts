// Raw bundled shape (quizData.ts — no id / category)
export interface QuizQuestion {
  question:     string;
  options:      string[];
  correctIndex: number;
  rationale:    string;
}

// DB-enriched shape (what all screens consume)
export interface Question extends QuizQuestion {
  id:       number;
  category: string;
}

export interface CategorySummary {
  category: string;
  count:    number;
  firstId:  number;
  lastId:   number;
}

export interface HistoryEntry {
  date:    string;
  start:   number;
  end:     number;
  correct: number;
  total:   number;
  pct:     number;
  passed:  boolean;
}

// ✅ New — for update system
export interface QuestionsManifest {
  version:    string;   // e.g. "1.2.0"
  totalCount: number;
  updatedAt:  string;
  url:        string;   // full JSON download URL
}

export type UpdateStatus =
  | 'idle'
  | 'checking'
  | 'available'
  | 'downloading'
  | 'installing'
  | 'up_to_date'
  | 'error';