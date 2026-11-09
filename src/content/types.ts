export type Route = "principiante" | "entrevista";

export type Block =
  | { t: "p"; text: string }
  | { t: "h"; text: string }
  | { t: "everyday"; text: string }
  | { t: "business"; text: string }
  | { t: "callout"; title: string; text: string }
  | { t: "interview"; text: string } // solo en la ruta de entrevista
  | { t: "matrix" }
  | { t: "case"; caseId: string };

export type Lesson = { slug: string; title: string; minutes: number; summary: string; blocks: Block[]; quizId?: string };
export type Course = { slug: string; title: string; description: string; lessons: Lesson[] };
export type Question = { q: string; options: string[]; answer: number; why: string };
export type Quiz = { id: string; title: string; questions: Question[] };
export type Decision = { prompt: string; options: { text: string; points: 0 | 1 | 2; feedback: string }[] };
export type CaseStudy = { id: string; title: string; context: string; decisions: Decision[] };
