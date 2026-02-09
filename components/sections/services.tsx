"use client";

import { motion } from "framer-motion";
import { Store, Users, Brain, Code, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Automatización para PYMES",
    description: "Optimiza tus operaciones sin complejidad técnica.",
    icon: Store,
    color: "orange",
    features: [
      "Email marketing automatizado",
      "Gestión de redes sociales",
      "Sincronización de datos",
      "Notificaciones inteligentes",
    ],
  },
  {
    title: "Workflows Personalizados",
    description: "Conecta tus herramientas y elimina trabajo repetitivo.",
    icon: Users,
    color: "mint",
    features: [
      "Integraciones Slack + Notion",
      "Reportes automáticos",
      "Gestión de tareas",
      "Dashboards en tiempo real",
    ],
  },
  {
    title: "Agentes de IA Personalizados",
    description: "Inteligencia artificial que trabaja 24/7.",
    icon: Brain,
    color: "purple",
    features: [
      "Chatbots con Claude/GPT",
      "Procesamiento de lenguaje",
      "Análisis predictivo",
      "Automatización con contexto",
    ],
  },
  {
    title: "Desarrollo a Medida",
    description: "Consultoría y arquitectura personalizada.",
    icon: Code,
    color: "blue",
    features: [
      "Análisis de procesos",
      "Arquitectura personalizada",
      "Integraciones API complejas",
      "Migración de sistemas",
    ],
  },
];

const colorMap = {
  orange: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
  mint: "text-brand-mint bg-brand-mint/10 border-brand-mint/20",
  purple: "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
  blue: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Soluciones"
          title="Automatización Adaptada a tu Negocio"
          description="Desde PYMES hasta empresas avanzadas, tenemos la solución perfecta"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col p-8 group relative overflow-hidden bg-card border-border">
                <div
                  className={cn(
                    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110",
                    colorMap[service.color as keyof typeof colorMap],
                  )}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          colorMap[
                            service.color as keyof typeof colorMap
                          ].split(" ")[0],
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
