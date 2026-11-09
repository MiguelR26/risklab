import { Evaluations } from "@/components/evaluations";

export default function Evaluaciones() {
  return (
    <div className="space-y-8">
      <header className="max-w-2xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Evaluaciones</h1>
        <p className="text-muted">Preguntas de opción múltiple con explicación de cada respuesta.</p>
      </header>
      <Evaluations />
    </div>
  );
}
