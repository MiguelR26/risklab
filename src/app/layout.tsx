import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "RiskLab · Aprende gestión de riesgos",
  description: "Plataforma educativa interactiva de gestión de riesgos y continuidad de negocio, en español.",
};
// Evita el parpadeo: aplica el tema guardado (o el del sistema) antes de pintar.
const themeScript = `try{var t=localStorage.getItem("risklab:theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="min-h-screen font-sans antialiased">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded focus:bg-card focus:p-2">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido" className="mx-auto w-full max-w-5xl px-5 py-10 sm:py-14">{children}</main>
      </body>
    </html>
  );
}
