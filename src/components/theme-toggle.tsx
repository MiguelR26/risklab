"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("risklab:theme", next ? "dark" : "light"); } catch {}
    setDark(next);
  }
  return (
    <button onClick={toggle} aria-pressed={!!dark} className="rounded-lg border border-line px-3 py-1.5 text-sm hover:border-accent">
      {dark === null ? "Tema" : dark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
