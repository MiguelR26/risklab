import Link from "next/link";
import { Card } from "./ui/card";
import { btn } from "./ui/button";

export function Loading({ label = "Cargando…" }: { label?: string }) {
  return (
    <div aria-busy="true" role="status" className="space-y-3">
      <span className="sr-only">{label}</span>
      <div className="h-8 w-1/2 animate-pulse rounded-lg bg-line" />
      <div className="h-24 animate-pulse rounded-2xl bg-line" />
      <div className="h-24 animate-pulse rounded-2xl bg-line" />
    </div>
  );
}
export function ErrorNote({ message }: { message: string }) {
  return <div role="alert" className="rounded-xl border border-red-400 bg-red-50 p-4 text-sm text-red-900 dark:bg-red-950 dark:text-red-100">{message}</div>;
}
export function Empty({ title, text, href, action }: { title: string; text: string; href: string; action: string }) {
  return (
    <Card className="space-y-3 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mx-auto max-w-md text-muted">{text}</p>
      <Link href={href} className={btn("primary")}>{action}</Link>
    </Card>
  );
}
