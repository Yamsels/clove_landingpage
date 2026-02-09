"use client";

import { motion } from "framer-motion";
import {
  Search,
  Pencil,
  Code,
  CheckCircle,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Descubrimiento",
    description:
      "Analizamos tus procesos actuales y identificamos oportunidades.",
    duration: "2-3 días",
    icon: Search,
    deliverables: ["Análisis de procesos", "Propuesta inicial"],
  },
  {
    title: "Diseño",
    description: "Creamos el workflow y arquitectura de la solución.",
    duration: "3-5 días",
    icon: Pencil,
    deliverables: ["Diagrama de flujo", "Especificación técnica"],
  },
  {
    title: "Desarrollo",
    description: "Implementamos la automatización con n8n e IA.",
    duration: "1-3 semanas",
    icon: Code,
    deliverables: ["Workflow funcional", "IA integrada"],
  },
  {
    title: "Testing",
    description: "Validamos y optimizamos cada aspecto.",
    duration: "3-5 días",
    icon: CheckCircle,
    deliverables: ["Pruebas completas", "Optimización"],
  },
  {
    title: "Deployment",
    description: "Lanzamos y monitoreamos el sistema.",
    duration: "1-2 días",
    icon: Rocket,
    deliverables: ["Sistema en producción", "Documentación"],
  },
  {
    title: "Soporte",
    description: "Mantenimiento y mejora continua.",
    duration: "Ongoing",
    icon: HeadphonesIcon,
    deliverables: ["Soporte técnico", "Actualizaciones"],
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Cómo funciona"
          title="De la Idea a la Automatización"
          description="Nuestro proceso probado en 6 pasos para transformar tu negocio"
        />

        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Vertical line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple via-brand-blue to-brand-mint opacity-50" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start pl-20 group"
              >
                {/* Step circle */}
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-card border-4 border-muted shadow-md group-hover:border-brand-purple transition-colors duration-300">
                  <step.icon className="h-6 w-6 text-brand-purple" />
                </div>

                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm group-hover:shadow-md transition-all duration-300 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item, iIndex) => (
                      <span
                        key={iIndex}
                        className="text-xs bg-brand-purple/5 text-brand-purple px-2.5 py-1 rounded-md border border-brand-purple/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
