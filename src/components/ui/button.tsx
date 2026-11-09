import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
/** Clases de botón reutilizables también para <Link>. */
export const btn = (variant: Variant = "primary", extra?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" && "bg-accent text-accent-fg hover:opacity-90",
    variant === "outline" && "border border-line bg-card hover:border-accent",
    variant === "ghost" && "hover:bg-card",
    extra,
  );

export function Button({ variant = "primary", className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={btn(variant, className)} {...props} />;
}
