import { RiskMatrix } from "@/components/risk-matrix";
import { CaseSimulator } from "@/components/case-simulator";

export default function Laboratorio() {
  return (
    <div className="space-y-8">
      <header className="max-w-2xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Laboratorio</h1>
        <p className="text-muted">Simuladores didácticos con valores hipotéticos. No sustituyen metodologías oficiales.</p>
      </header>
      <RiskMatrix />
      <CaseSimulator caseId="tienda-online" />
    </div>
  );
}
