"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const LEVELS = [
  { max: 4, name: "Bajo", cls: "bg-emerald-100 text-emerald-950 dark:bg-emerald-900/50 dark:text-emerald-50" },
  { max: 9, name: "Medio", cls: "bg-yellow-100 text-yellow-950 dark:bg-yellow-900/50 dark:text-yellow-50" },
  { max: 16, name: "Alto", cls: "bg-orange-100 text-orange-950 dark:bg-orange-900/50 dark:text-orange-50" },
  { max: 25, name: "Crítico", cls: "bg-red-100 text-red-950 dark:bg-red-900/50 dark:text-red-50" },
];
const level = (s: number) => LEVELS.find((l) => s <= l.max)!;
const SCENARIOS = [
  { name: "Caída de la web en temporada alta", p: 4, i: 4 },
  { name: "Robo de efectivo en caja", p: 3, i: 2 },
  { name: "Fallo del respaldo semanal", p: 2, i: 5 },
];
const SCALE = [1, 2, 3, 4, 5];

export function RiskMatrix() {
  const [p, setP] = useState(4);
  const [i, setI] = useState(4);
  const [prev, setPrev] = useState(0); // niveles que un control preventivo reduce la probabilidad
  const [mit, setMit] = useState(0);   // niveles que un control de mitigación reduce el impacto
  const rp = Math.max(1, p - prev);
  const ri = Math.max(1, i - mit);
  const inh = p * i, res = rp * ri;

  return (
    <Card className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold">Simulador de matriz 5×5</h3>
        <p className="text-sm text-muted">Valores hipotéticos con fines educativos. No representa una metodología oficial ni regulatoria.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((s) => (
          <button key={s.name} onClick={() => { setP(s.p); setI(s.i); setPrev(0); setMit(0); }}
            className="rounded-lg border border-line px-3 py-1.5 text-sm hover:border-accent">{s.name}</button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-[auto_1fr]">
        <div>
          <div className="grid grid-cols-[auto_repeat(5,minmax(0,1fr))] gap-1 text-xs">
            {[...SCALE].reverse().map((impact) => (
              <div key={impact} className="contents">
                <span className="flex items-center pr-2 text-muted">{impact}</span>
                {SCALE.map((prob) => {
                  const s = prob * impact, lv = level(s);
                  const isI = prob === p && impact === i, isR = prob === rp && impact === ri;
                  return (
                    <button key={prob} aria-pressed={isI}
                      aria-label={`Probabilidad ${prob}, impacto ${impact}, puntaje ${s}, nivel ${lv.name}${isI ? ", riesgo inherente" : ""}${isR ? ", riesgo residual" : ""}`}
                      onClick={() => { setP(prob); setI(impact); }}
                      className={cn("flex h-12 w-full flex-col items-center justify-center rounded-md border border-transparent font-medium sm:h-14 sm:w-full", lv.cls, (isI || isR) && "border-fg")}>
                      <span>{s}</span>
                      <span className="text-[10px] font-bold">{isI && "Inh"}{isI && isR && "·"}{isR && "Res"}</span>
                    </button>
                  );
                })}
              </div>
            ))}
            <span />
            {SCALE.map((n) => <span key={n} className="pt-1 text-center text-muted">{n}</span>)}
          </div>
          <p className="mt-2 text-xs text-muted">Filas: impacto (1–5). Columnas: probabilidad (1–5). Toca una celda para ubicar el riesgo inherente.</p>
        </div>
        <div className="space-y-4 text-sm">
          <label className="block">Control preventivo (reduce la probabilidad)
            <select value={prev} onChange={(e) => setPrev(+e.target.value)} className="mt-1 block w-full rounded-lg border border-line bg-bg p-2">
              <option value={0}>Ninguno</option><option value={1}>Parcial: −1 nivel</option><option value={2}>Fuerte: −2 niveles</option>
            </select>
          </label>
          <label className="block">Control de mitigación (reduce el impacto)
            <select value={mit} onChange={(e) => setMit(+e.target.value)} className="mt-1 block w-full rounded-lg border border-line bg-bg p-2">
              <option value={0}>Ninguno</option><option value={1}>Parcial: −1 nivel</option><option value={2}>Fuerte: −2 niveles</option>
            </select>
          </label>
          <div aria-live="polite" className="space-y-2 rounded-xl bg-bg p-4">
            <p><b>Inherente:</b> {p} × {i} = {inh} ({level(inh).name})</p>
            <p><b>Residual:</b> {rp} × {ri} = {res} ({level(res).name})</p>
            <p className="text-muted">{res < inh ? "Los controles bajaron el riesgo, pero no a cero: lo que queda es el residual." : "Sin controles, el riesgo residual es igual al inherente."}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
