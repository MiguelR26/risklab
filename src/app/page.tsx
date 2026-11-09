import Link from "next/link";
import { RoutePicker } from "@/components/route-picker";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="max-w-2xl space-y-5">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Aprende gestión de riesgos practicando.</h1>
        <p className="text-lg text-muted">
          RiskLab explica cada concepto primero con ejemplos cotidianos, luego con casos de empresa, y te deja probarlo en simuladores. Elige tu ruta; puedes cambiarla cuando quieras en tu perfil.
        </p>
      </section>
      <RoutePicker />
      <p className="text-sm text-muted">¿Prefieres explorar sin elegir? <Link className="underline underline-offset-2" href="/cursos">Ver el catálogo de cursos</Link>.</p>
    </div>
  );
}
