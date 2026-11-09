"use client";
import Link from "next/link";
import type { Block, Lesson, Route } from "@/content/types";
import { getQuiz } from "@/content/quizzes";
import { useProgress } from "@/lib/storage";
import { RiskMatrix } from "./risk-matrix";
import { CaseSimulator } from "./case-simulator";
import { Quiz } from "./quiz";
import { Button, btn } from "./ui/button";
import { Loading, ErrorNote } from "./state";

type NavLink = { href: string; title: string } | null;

function Note({ label, children, accent }: { label: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <aside className={`rounded-r-xl border-l-4 bg-card p-4 ${accent ? "border-accent" : "border-line"}`}>
      <p className="mb-1 text-sm font-semibold">{label}</p>
      <p className="leading-7">{children}</p>
    </aside>
  );
}

function BlockView({ b, route }: { b: Block; route: Route | null }) {
  switch (b.t) {
    case "p": return <p className="leading-7">{b.text}</p>;
    case "h": return <h2 className="pt-4 text-xl font-semibold">{b.text}</h2>;
    case "everyday": return <Note label="Un ejemplo cotidiano">{b.text}</Note>;
    case "business": return <Note label="Ahora, en una empresa">{b.text}</Note>;
    case "callout": return <Note label={b.title}>{b.text}</Note>;
    case "interview": return route === "entrevista" ? <Note label="En la entrevista" accent>{b.text}</Note> : null;
    case "code": return <pre className="overflow-x-auto rounded-xl border border-line bg-card p-4 text-sm leading-6"><code>{b.text}</code></pre>;
    case "matrix": return <RiskMatrix />;
    case "case": return <CaseSimulator caseId={b.caseId} />;
  }
}

export function LessonView({ courseTitle, lesson, id, prev, next }: { courseTitle: string; lesson: Lesson; id: string; prev: NavLink; next: NavLink }) {
  const { state, ready, error, update } = useProgress();
  if (!ready) return <Loading label="Cargando lección" />;
  const done = state!.completed.includes(id);
  const quiz = lesson.quizId ? getQuiz(lesson.quizId) : undefined;
  const toggle = () => update((p) => ({ ...p, completed: done ? p.completed.filter((x) => x !== id) : [...p.completed, id] }));

  return (
    <article className="mx-auto max-w-2xl space-y-6">
      {error && <ErrorNote message={error} />}
      <header className="space-y-2">
        <p className="text-sm text-muted">{courseTitle} · {lesson.minutes} min</p>
        <h1 className="text-3xl font-semibold tracking-tight">{lesson.title}</h1>
      </header>
      {lesson.blocks.map((b, i) => <BlockView key={i} b={b} route={state!.route} />)}
      {quiz && <Quiz quiz={quiz} />}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        <Button variant={done ? "outline" : "primary"} onClick={toggle} aria-pressed={done}>
          {done ? "Completada ✓ (desmarcar)" : "Marcar como completada"}
        </Button>
        <div className="flex flex-wrap gap-2">
          {prev && <Link href={prev.href} className={btn("outline")}>← {prev.title}</Link>}
          {next && <Link href={next.href} className={btn("outline")}>{next.title} →</Link>}
        </div>
      </div>
    </article>
  );
}
