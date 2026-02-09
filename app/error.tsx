"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background px-4 text-center">
      <div className="rounded-full bg-destructive/10 p-4 mb-6">
        <AlertTriangle className="h-10 w-10 text-destructive" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Algo salió mal
      </h2>
      <p className="max-w-md text-muted-foreground mb-8">
        Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado
        automáticamente.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary">
          <RotateCw className="mr-2 h-4 w-4" />
          Intentar de nuevo
        </Button>
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Ir al inicio
        </Button>
      </div>
    </div>
  );
}
