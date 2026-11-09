"use client";
import { useState } from "react";
import { quizzes } from "@/content/quizzes";
import { useProgress } from "@/lib/storage";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Quiz } from "./quiz";
import { Loading } from "./state";

export function Evaluations() {
  const { state, ready } = useProgress();
  const [open, setOpen] = useState<string | null>(null);
  if (!ready) return <Loading label="Cargando evaluaciones" />;
  return (
    <div className="space-y-4">
      {quizzes.map((q) => {
        const r = state!.quizzes[q.id];
        return (
          <div key={q.id} className="space-y-3">
            <Card className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold">{q.title}</h2>
                <p className="text-sm text-muted">{q.questions.length} preguntas · {r ? `último resultado: ${r.score} de ${r.total}` : "sin intentos"}</p>
              </div>
              <Button variant={open === q.id ? "outline" : "primary"} onClick={() => setOpen(open === q.id ? null : q.id)} aria-expanded={open === q.id}>
                {open === q.id ? "Cerrar" : r ? "Repetir" : "Comenzar"}
              </Button>
            </Card>
            {open === q.id && <Quiz key={q.id} quiz={q} />}
          </div>
        );
      })}
    </div>
  );
}
