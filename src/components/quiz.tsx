"use client";
import { useState } from "react";
import type { Quiz as QuizT } from "@/content/types";
import { useProgress } from "@/lib/storage";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Quiz({ quiz }: { quiz: QuizT }) {
  const { update } = useProgress();
  const [idx, setIdx] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = quiz.questions[idx];
  const done = idx >= quiz.questions.length;

  function pick(i: number) { if (sel === null) { setSel(i); if (i === q.answer) setScore((s) => s + 1); } }
  function next() {
    if (idx === quiz.questions.length - 1) update((p) => ({ ...p, quizzes: { ...p.quizzes, [quiz.id]: { score, total: quiz.questions.length } } }));
    setSel(null); setIdx((n) => n + 1);
  }
  function restart() { setIdx(0); setSel(null); setScore(0); }

  return (
    <Card className="space-y-4">
      <h3 className="text-lg font-semibold">Cuestionario: {quiz.title}</h3>
      {done ? (
        <div aria-live="polite" className="space-y-3">
          <p className="text-lg">Resultado: {score} de {quiz.questions.length}</p>
          <Button variant="outline" onClick={restart}>Repetir</Button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="font-medium">Pregunta {idx + 1} de {quiz.questions.length}: {q.q}</p>
          {q.options.map((o, i) => {
            const state = sel === null ? "" : i === q.answer ? "border-accent bg-bg" : i === sel ? "border-red-500" : "opacity-60";
            return (
              <button key={i} onClick={() => pick(i)} disabled={sel !== null}
                className={`block w-full rounded-lg border border-line p-3 text-left text-sm ${state} ${sel === null ? "hover:border-accent" : ""}`}>
                {o}{sel !== null && i === q.answer ? " (correcta)" : ""}{sel === i && i !== q.answer ? " (tu respuesta)" : ""}
              </button>
            );
          })}
          {sel !== null && (
            <div aria-live="polite" className="space-y-3 rounded-xl bg-bg p-4 text-sm">
              <p>{sel === q.answer ? "Correcto. " : "No es esa. "}{q.why}</p>
              <Button onClick={next}>{idx === quiz.questions.length - 1 ? "Ver resultado" : "Siguiente"}</Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
