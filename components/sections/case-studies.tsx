"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, BarChart3, Users as UsersIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: "ecommerce",
    label: "E-commerce",
    title: "Automatización de Pedidos",
    problem:
      "Pedidos manuales propensos a errores y inventario desincronizado.",
    solution: [
      "Webhook de Shopify → n8n",
      "Procesamiento con IA para categorización",
      "Actualización automática en ERP",
      "Emails personalizados y alertas de stock",
    ],
    technologies: ["n8n", "Shopify", "OpenAI", "Google Sheets"],
    results: [
      { metric: "Reducción en tiempo", value: "80%", icon: Zap },
      { metric: "Errores de inventario", value: "0%", icon: CheckCircle2 },
      { metric: "Satisfacción cliente", value: "95%", icon: BarChart3 },
    ],
    color: "brand-purple",
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Lead Scoring con IA",
    problem: "Leads sin clasificar y seguimiento manual ineficiente.",
    solution: [
      "Formularios web → n8n",
      "Claude analiza y clasifica leads",
      "Asignación automática a vendedores",
      "Secuencias de email personalizadas",
    ],
    technologies: ["n8n", "Claude", "HubSpot", "Slack"],
    results: [
      { metric: "Crecimiento conversión", value: "60%", icon: Zap },
      { metric: "Menos tiempo respuesta", value: "90%", icon: CheckCircle2 },
      { metric: "Leads calificados", value: "5x", icon: UsersIcon },
    ],
    color: "brand-blue",
  },
  {
    id: "support",
    label: "Soporte",
    title: "Chatbot Inteligente 24/7",
    problem: "Consultas repetitivas y soporte limitado a horario laboral.",
    solution: [
      "Chatbot con Claude en website",
      "Base de conocimiento conectada",
      "Tickets automáticos en CRM",
      "Análisis de sentimiento constante",
    ],
    technologies: ["n8n", "Claude", "Zendesk", "Telegram"],
    results: [
      { metric: "Resueltos por IA", value: "70%", icon: Zap },
      { metric: "Disponibilidad", value: "24/7", icon: CheckCircle2 },
      { metric: "Satisfacción cliente", value: "85%", icon: BarChart3 },
    ],
    color: "brand-mint",
  },
];

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(cases[0].id);

  const activeCase = cases.find((c) => c.id === activeTab) || cases[0];

  return (
    <section id="cases" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Casos de éxito"
          title="Soluciones en Acción"
          description="Ve cómo transformamos negocios con automatización inteligente"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {cases.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === item.id
                  ? "bg-brand-purple text-white shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-muted",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-card-foreground mb-4">
                  {activeCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed italic border-l-4 border-brand-purple pl-4">
                  &quot;{activeCase.problem}&quot;
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-card-foreground mb-4">
                  La Solución:
                </h4>
                <ul className="space-y-3">
                  {activeCase.solution.map((step, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-purple mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-card-foreground mb-4">
                  Tecnologías:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeCase.results.map((result, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-card border border-border flex flex-col items-center text-center group hover:border-brand-purple/20 transition-colors"
                  >
                    <div className="mb-4 p-3 rounded-full bg-background shadow-sm text-brand-purple group-hover:scale-110 transition-transform">
                      <result.icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-bold text-card-foreground mb-1">
                      {result.value}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {result.metric}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center lg:justify-start">
                <Button variant="outline" className="w-full sm:w-auto">
                  Ver detalle completo
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
