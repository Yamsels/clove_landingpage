"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Qué es n8n y por qué lo utilizan?",
    answer:
      "n8n es una plataforma de automatización de código abierto que nos permite crear workflows personalizados y conectar cientos de aplicaciones. Lo elegimos por su flexibilidad, capacidad de auto-hospedaje y extensa biblioteca de integraciones.",
  },
  {
    question: "¿Cuánto tiempo toma implementar una automatización?",
    answer:
      "Depende de la complejidad: automatizaciones básicas toman 3-5 días, integraciones con IA 1-2 semanas, y agentes personalizados 2-4 semanas. Te damos un timeline específico después de la consultoría.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. Diseñamos las soluciones para que sean completamente automáticas. Tú te enfocas en tu negocio, nosotros en la tecnología. Incluimos capacitación básica para tu equipo.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer:
      "Ofrecemos planes Básico (mantenimiento mensual), Premium (soporte prioritario), y Enterprise (24/7 con SLA). Incluimos 30 días de soporte gratuito post-lanzamiento.",
  },
  {
    question: "¿Cómo se integra la IA?",
    answer:
      "Utilizamos Claude y GPT para agregar inteligencia a workflows: procesamiento de lenguaje, clasificación automática, generación de respuestas, análisis de sentimiento y toma de decisiones basada en contexto.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Absolutamente. Implementamos encriptación, acceso OAuth 2.0, auditoría completa, cumplimiento GDPR, y opción de auto-hospedaje para máxima privacidad.",
  },
  {
    question: "¿Cuál es el costo aproximado?",
    answer:
      "Consultoría inicial gratuita. Proyectos básicos desde $500, integraciones con IA desde $1,500, y soluciones enterprise desde $5,000. Presupuesto detallado después del análisis.",
  },
  {
    question: "¿Puedo modificar las automatizaciones después?",
    answer:
      "Sí. Todas nuestras soluciones son escalables y modificables. Puedes solicitar ajustes o agregar funcionalidades en cualquier momento.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="FAQ"
          title="Preguntas Frecuentes"
          description="Todo lo que necesitas saber sobre nuestros servicios de automatización"
        />

        <div className="max-w-3xl mx-auto mt-12 bg-card rounded-3xl overflow-hidden shadow-sm border border-border">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
              >
                <span className="text-lg font-bold text-card-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-300",
                    openIndex === index ? "rotate-180" : "",
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
