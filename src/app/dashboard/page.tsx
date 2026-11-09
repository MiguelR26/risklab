"use client";
import Link from "next/link";
import { useProgress } from "@/lib/storage";
import { courses, allLessons, lessonId } from "@/content/courses";
import { Card } from "@/components/ui/card";
import { btn } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Loading, ErrorNote, Empty } from "@/components/state";

export default function Dashboard() {
  const { state, ready, error } = useProgress();
  if (!ready) return <Loading label="Cargando tu progreso" />;

  const lessons = allLessons();
  const done = lessons.filter((l) => state!.completed.includes(l.id)).length;
  const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
  const nextLesson = lessons.find((l) => !state!.completed.includes(l.id));
  const hasActivity = state!.route || done > 0 || Object.keys(state!.quizzes).length > 0;

  if (!hasActivity) {
    return <Empty title="Aún no hay progreso" text="Elige una ruta y completa tu primera lección. Aquí verás tu avance real, guardado solo en este navegador." href="/" action="Elegir ruta" />;
  }
  return (
    <div className="space-y-8">
      {error && <ErrorNote message={error} />}
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">Tu panel</h1>
        <p className="text-muted">Ruta: {state!.route === "entrevista" ? "preparación para entrevista" : state!.route === "principiante" ? "desde cero" : "sin elegir"}</p>
      </header>
      <Card className="space-y-3">
        <p className="font-medium">{done} de {lessons.length} lecciones disponibles completadas ({pct}%)</p>
        <ProgressBar value={pct} label="Progreso total" />
        {nextLesson ? (
          <Link href={`/cursos/${nextLesson.course.slug}/${nextLesson.lesson.slug}`} className={btn("primary", "mt-2")}>Continuar: {nextLesson.lesson.title}</Link>
        ) : (
          <p className="text-sm text-muted">Completaste todas las lecciones disponibles. Más módulos llegarán pronto.</p>
        )}
      </Card>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Módulos</h2>
        {courses.map((c) => {
          const total = c.lessons.length;
          const n = c.lessons.filter((l) => state!.completed.includes(lessonId(c.slug, l))).length;
          return (
            <Card key={c.slug} className="space-y-2 py-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-medium">{c.title}</h3>
                <span className="text-sm text-muted">{total === 0 ? "En preparación" : `${n} de ${total}`}</span>
              </div>
              {total > 0 && <ProgressBar value={Math.round((n / total) * 100)} label={`Progreso de ${c.title}`} />}
            </Card>
          );
        })}
      </section>
    </div>
  );
}
