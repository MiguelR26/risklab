"use client";
import { ErrorNote } from "@/components/state";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-4">
      <ErrorNote message="Algo salió mal al mostrar esta página." />
      <Button onClick={reset}>Reintentar</Button>
    </div>
  );
}
