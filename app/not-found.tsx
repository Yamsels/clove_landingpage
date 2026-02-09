import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, Ghost } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-brand-purple/20 rounded-full" />
              <Ghost
                className="h-24 w-24 text-brand-purple relative z-10"
                strokeWidth={1.5}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
            404
          </h1>
          <h2 className="text-xl font-semibold text-foreground/80">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground">
            Parece que esta automatización salió mal. La página que buscas no
            existe o ha sido movida.
          </p>
          <div className="pt-4">
            <Link href="/">
              <Button variant="primary" size="lg" className="group">
                <MoveLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
