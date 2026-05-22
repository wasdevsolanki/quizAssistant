// Raw bundled shape (quizData.ts — no id / category)
export interface QuizQuestion {
  question:     string;
  options:      string[];
  correctIndex: number;
  rationale:    string;
  category:     string;   // ← add this line
}

// DB-enriched shape (what all screens consume)
export interface Question extends QuizQuestion {
  id: number;
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
  label:   string;
}

export interface QuestionsManifest {
  version:    string;
  totalCount: number;
  updatedAt:  string;
  url:        string;
}

export type UpdateStatus =
  | 'idle'
  | 'checking'
  | 'available'
  | 'downloading'
  | 'installing'
  | 'up_to_date'
  | 'error';