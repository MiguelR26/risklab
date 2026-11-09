"use client";
import { useRouter } from "next/navigation";
import { useProgress } from "@/lib/storage";
import type { Route } from "@/content/types";
import { ErrorNote } from "./state";

const ROUTES: { id: Route; title: string; text: string }[] = [
  { id: "principiante", title: "Empiezo desde cero", text: "Ejemplos cotidianos primero, vocabulario paso a paso y práctica guiada." },
  { id: "entrevista", title: "Me preparo para una entrevista", text: "Las mismas lecciones, más respuestas modelo y cómo explicar cada tema en voz alta." },
];

export function RoutePicker() {
  const router = useRouter();
  const { state, ready, error, update } = useProgress();
  function choose(route: Route) { update((p) => ({ ...p, route })); router.push("/dashboard"); }
  return (
    <div className="space-y-4">
      {error && <ErrorNote message={error} />}
      <div className="grid gap-4 sm:grid-cols-2">
        {ROUTES.map((r) => (
          <button key={r.id} disabled={!ready} onClick={() => choose(r.id)} aria-pressed={state?.route === r.id}
            className="rounded-2xl border border-line bg-card p-6 text-left transition-colors hover:border-accent aria-pressed:border-accent disabled:opacity-60">
            <span className="block text-lg font-semibold">{r.title}</span>
            <span className="mt-2 block text-muted">{r.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
