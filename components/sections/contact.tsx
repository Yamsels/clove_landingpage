"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  FileSearch,
  Loader2,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nombre: z.string().min(2, "Nombre muy corto"),
  email: z.string().email("Email inválido"),
  empresa: z.string().optional(),
  tipoProyecto: z.string().min(1, "Selecciona una opción"),
  mensaje: z.string().min(20, "Describe tu proyecto (mín. 20 caracteres)"),
  newsletter: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      tipoProyecto: "",
      mensaje: "",
      newsletter: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Enviando mensaje...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado con éxito!", {
          description: "Te contactaremos pronto.",
          id: toastId,
        });
        reset();
      } else {
        toast.error("Error al enviar el mensaje", {
          description: "Por favor, inténtalo de nuevo más tarde.",
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("Error de conexión", {
        description: "Revisa tu conexión a internet e inténtalo de nuevo.",
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-brand-orange/5 via-brand-coral/5 to-brand-purple/5 dark:from-background dark:via-muted/10 dark:to-background"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 dark:bg-card/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-none overflow-hidden border border-white/20 dark:border-border">
            <div className="grid lg:grid-cols-2">
              {/* Left Column: Info */}
              <div className="p-8 md:p-16 bg-gradient-to-br from-brand-purple to-brand-blue text-white">
                <h2 className="text-4xl font-bold mb-6">
                  ¿Listo para Automatizar?
                </h2>
                <p className="text-lg text-white/80 mb-12">
                  Agenda una consultoría gratuita de 30 minutos y descubre cómo
                  la IA puede escalar tu negocio.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white/10">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Consultoría Inicial Gratuita
                      </h4>
                      <p className="text-white/60 text-sm">
                        30 minutos de análisis profundo de tus procesos
                        actuales.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white/10">
                      <FileSearch className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Análisis de Oportunidades
                      </h4>
                      <p className="text-white/60 text-sm">
                        Identificamos cuellos de botella y ROI potencial.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white/10">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Propuesta en 48 Horas
                      </h4>
                      <p className="text-white/60 text-sm">
                        Plan de implementación detallado y presupuesto sin
                        compromiso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-16 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <Mail className="h-5 w-5" />
                    <span>hola@cloveautomations.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="h-5 w-5" />
                    <span>Panamá, Centroamérica</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  {[Linkedin, Github, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="p-8 md:p-16 text-foreground">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">
                        Nombre Completo *
                      </label>
                      <Input
                        placeholder="Juan Pérez"
                        {...register("nombre")}
                        className={cn(
                          "bg-background border-input",
                          errors.nombre &&
                            "border-red-500 focus:ring-red-500/50",
                        )}
                      />
                      {errors.nombre && (
                        <p className="text-xs text-red-500">
                          {errors.nombre.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">
                        Email Corporativo *
                      </label>
                      <Input
                        type="email"
                        placeholder="juan@empresa.com"
                        {...register("email")}
                        className={cn(
                          "bg-background border-input",
                          errors.email &&
                            "border-red-500 focus:ring-red-500/50",
                        )}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">
                      Nombre de la Empresa
                    </label>
                    <Input
                      placeholder="Empresa S.A."
                      {...register("empresa")}
                      className="bg-background border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">
                      Tipo de Proyecto *
                    </label>
                    <select
                      {...register("tipoProyecto")}
                      className={cn(
                        "flex w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-sm transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-purple/50 text-foreground",
                        errors.tipoProyecto &&
                          "border-red-500 focus:ring-red-500/50",
                      )}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Automatización básica">
                        Automatización básica
                      </option>
                      <option value="Integración con IA">
                        Integración con IA
                      </option>
                      <option value="Agente personalizado">
                        Agente personalizado
                      </option>
                      <option value="Consultoría y análisis">
                        Consultoría y análisis
                      </option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.tipoProyecto && (
                      <p className="text-xs text-red-500">
                        {errors.tipoProyecto.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">
                      Mensaje *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto y qué procesos quieres automatizar..."
                      {...register("mensaje")}
                      className={cn(
                        "flex w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-sm transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-purple/50 text-foreground",
                        errors.mensaje &&
                          "border-red-500 focus:ring-red-500/50",
                      )}
                    />
                    {errors.mensaje && (
                      <p className="text-xs text-red-500">
                        {errors.mensaje.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      {...register("newsletter")}
                      className="h-4 w-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple dark:bg-slate-800 dark:border-slate-600"
                    />
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      Quiero recibir tips de automatización e IA
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
