"use client";
import { useCallback, useSyncExternalStore } from "react";
import type { Route } from "@/content/types";

export type Progress = {
  route: Route | null;
  completed: string[]; // ids "curso/leccion"
  quizzes: Record<string, { score: number; total: number }>;
  cases: Record<string, { score: number; max: number }>;
};

const KEY = "risklab:v1";
const empty: Progress = { route: null, completed: [], quizzes: {}, cases: {} };
let cache: Progress | null = null;
let error: string | null = null;
const listeners = new Set<() => void>();

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    error = "No pudimos leer el progreso guardado en este navegador.";
    return empty;
  }
}
function persist(p: Progress) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); error = null; }
  catch { error = "No pudimos guardar tu progreso (¿modo privado o almacenamiento lleno?)."; }
}
const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => {
  listeners.add(l);
  const onStorage = (e: StorageEvent) => { if (e.key === KEY) { cache = null; emit(); } };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(l); window.removeEventListener("storage", onStorage); };
};
const getSnapshot = (): Progress => (cache ??= load());
const getServerSnapshot = (): Progress | null => null;

/** state es null en el servidor y durante la hidratación: úsalo como estado de carga. */
export function useProgress() {
  const state = useSyncExternalStore<Progress | null>(subscribe, getSnapshot, getServerSnapshot);
  const update = useCallback((fn: (p: Progress) => Progress) => {
    const next = fn(getSnapshot());
    cache = next; persist(next); emit();
  }, []);
  const reset = useCallback(() => update(() => empty), [update]);
  return { state, ready: state !== null, error, update, reset };
}
