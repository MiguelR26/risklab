import { Catalog } from "@/components/catalog";

export default function Cursos() {
  return (
    <div className="space-y-8">
      <header className="max-w-2xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Cursos</h1>
        <p className="text-muted">Seis módulos. Los que aún no tienen lecciones se marcan como «en preparación».</p>
      </header>
      <Catalog />
    </div>
  );
}
