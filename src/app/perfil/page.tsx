"use client";
import { useProgress } from "@/lib/storage";
import { allLessons } from "@/content/courses";
import type { Route } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loading, ErrorNote } from "@/components/state";

export default function Perfil() {
  const { state, ready, error, update, reset } = useProgress();
  if (!ready) return <Loading label="Cargando perfil" />;
  const done = allLessons().filter((l) => state!.completed.includes(l.id)).length;
  const routes: { id: Route; label: string }[] = [{ id: "principiante", label: "Desde cero" }, { id: "entrevista", label: "Entrevista" }];

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Perfil</h1>
      {error && <ErrorNote message={error} />}
      <Card className="space-y-3">
        <h2 className="font-semibold">Ruta de aprendizaje</h2>
        <div className="flex gap-2">
          {routes.map((r) => (
            <Button key={r.id} variant={state!.route === r.id ? "primary" : "outline"} aria-pressed={state!.route === r.id} onClick={() => update((p) => ({ ...p, route: r.id }))}>{r.label}</Button>
          ))}
        </div>
        <p className="text-sm text-muted">Cambiar de ruta no borra tu progreso. El modo claro u oscuro se cambia con el botón del encabezado.</p>
      </Card>
      <Card className="space-y-3">
        <h2 className="font-semibold">Tu progreso</h2>
        <p className="text-sm">Lecciones completadas: {done} · Cuestionarios intentados: {Object.keys(state!.quizzes).length} · Casos resueltos: {Object.keys(state!.cases).length}</p>
        <p className="text-sm text-muted">Se guarda solo en este navegador. Si borras los datos del sitio o cambias de dispositivo, no se conserva.</p>
        <Button variant="outline" onClick={() => { if (window.confirm("¿Borrar todo tu progreso en este navegador?")) reset(); }}>Borrar progreso</Button>
      </Card>
    </div>
  );
}
