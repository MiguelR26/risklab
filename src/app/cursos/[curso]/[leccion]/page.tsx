import { notFound } from "next/navigation";
import { allLessons } from "@/content/courses";
import { LessonView } from "@/components/lesson-view";

export function generateStaticParams() {
  return allLessons().map((l) => ({ curso: l.course.slug, leccion: l.lesson.slug }));
}

export default function LessonPage({ params }: { params: { curso: string; leccion: string } }) {
  const list = allLessons();
  const idx = list.findIndex((l) => l.course.slug === params.curso && l.lesson.slug === params.leccion);
  if (idx < 0) notFound();
  const cur = list[idx];
  const link = (x?: (typeof list)[number]) => (x ? { href: `/cursos/${x.course.slug}/${x.lesson.slug}`, title: x.lesson.title } : null);
  return <LessonView courseTitle={cur.course.title} lesson={cur.lesson} id={cur.id} prev={link(list[idx - 1])} next={link(list[idx + 1])} />;
}
