"use client";
import Link from "next/link";
import { courses, lessonId } from "@/content/courses";
import { useProgress } from "@/lib/storage";
import { Card } from "./ui/card";

export function Catalog() {
  const { state } = useProgress(); // null mientras hidrata: el catálogo es estático y se muestra igual
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {courses.map((c, n) => (
        <Card key={c.slug} className="space-y-3">
          <p className="text-sm text-muted">Módulo {n + 1}</p>
          <h2 className="text-lg font-semibold">{c.title}</h2>
          <p className="text-sm text-muted">{c.description}</p>
          {c.lessons.length === 0 ? (
            <p className="text-sm font-medium">En preparación: aún no hay lecciones.</p>
          ) : (
            <ul className="space-y-1 text-sm">
              {c.lessons.map((l) => (
                <li key={l.slug}>
                  <Link href={`/cursos/${c.slug}/${l.slug}`} className="underline underline-offset-2 hover:text-accent">{l.title}</Link>
                  {state?.completed.includes(lessonId(c.slug, l)) && <span className="ml-2 text-accent">✓ completada</span>}
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </div>
  );
}
