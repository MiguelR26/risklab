"use client";
import { useState } from "react";
import { getCase } from "@/content/cases";
import { useProgress } from "@/lib/storage";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ErrorNote } from "./state";

export function CaseSimulator({ caseId }: { caseId: string }) {
  const c = getCase(caseId);
  const { update } = useProgress();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [points, setPoints] = useState<number[]>([]);
  if (!c) return <ErrorNote message="No encontramos este caso práctico." />;

  const max = c.decisions.length * 2;
  const total = points.reduce((a, b) => a + b, 0);
  const finished = step >= c.decisions.length;
  const d = c.decisions[step];

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    setPoints((p) => [...p, d.options[i].points]);
  }
  function next() {
    if (step === c!.decisions.length - 1) update((p) => ({ ...p, cases: { ...p.cases, [c!.id]: { score: total, max } } }));
    setPicked(null);
    setStep((s) => s + 1);
  }
  function restart() { setStep(0); setPicked(null); setPoints([]); }

  return (
    <Card className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Caso práctico: {c.title}</h3>
        <p className="mt-1 text-sm text-muted">{c.context}</p>
      </div>
      {!finished ? (
        <div className="space-y-3">
          <p className="font-medium">Decisión {step + 1} de {c.decisions.length}: {d.prompt}</p>
          {d.options.map((o, i) => (
            <button key={i} onClick={() => choose(i)} disabled={picked !== null}
              className={`block w-full rounded-lg border p-3 text-left text-sm transition-colors ${picked === i ? "border-accent bg-bg" : "border-line hover:border-accent"}`}>
              {o.text}
            </button>
          ))}
          {picked !== null && (
            <div aria-live="polite" className="space-y-3 rounded-xl bg-bg p-4 text-sm">
              <p>{d.options[picked].feedback}</p>
              <Button onClick={next}>{step === c.decisions.length - 1 ? "Ver resultado" : "Continuar"}</Button>
            </div>
          )}
        </div>
      ) : (
        <div aria-live="polite" className="space-y-3">
          <p className="text-lg font-semibold">Puntaje: {total} de {max}</p>
          <p className="text-sm">{total >= 5 ? "Respuesta sólida: priorizaste continuidad con controles y cierre ordenado." : total >= 3 ? "Buen camino. Revisa las decisiones donde faltó un control o el cierre." : "Conviene repasar BIA, BCP y procesos alternos antes de intentarlo de nuevo."}</p>
          <p className="text-xs text-muted">Puntaje didáctico de un ejercicio con datos hipotéticos; no es una evaluación oficial.</p>
          <Button variant="outline" onClick={restart}>Intentar de nuevo</Button>
        </div>
      )}
    </Card>
  );
}
