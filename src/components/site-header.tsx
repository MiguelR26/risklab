"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Panel" },
  { href: "/cursos", label: "Cursos" },
  { href: "/laboratorio", label: "Laboratorio" },
  { href: "/evaluaciones", label: "Evaluaciones" },
  { href: "/perfil", label: "Perfil" },
];

export function SiteHeader() {
  const path = usePathname();
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">RiskLab</Link>
        <nav aria-label="Principal" className="order-3 flex w-full gap-1 overflow-x-auto sm:order-none sm:w-auto">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path.startsWith(l.href) ? "page" : undefined}
              className={cn("whitespace-nowrap rounded-lg px-3 py-1.5 text-sm hover:bg-card", path.startsWith(l.href) && "bg-card font-medium")}>
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
