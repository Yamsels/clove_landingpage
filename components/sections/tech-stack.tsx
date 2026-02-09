"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const techCategories = [
  {
    title: "Automatización",
    logos: [
      { name: "n8n", highlighted: true, badge: "Plataforma principal" },
      { name: "Zapier", highlighted: false },
      { name: "Make", highlighted: false },
    ],
  },
  {
    title: "Inteligencia Artificial",
    logos: [
      { name: "Claude", highlighted: true },
      { name: "OpenAI", highlighted: false },
      { name: "Google AI", highlighted: false },
    ],
  },
  {
    title: "Eco-sistema",
    logos: [
      { name: "Slack", highlighted: false },
      { name: "HubSpot", highlighted: false },
      { name: "Notion", highlighted: false },
      { name: "Shopify", highlighted: false },
      { name: "Stripe", highlighted: false },
      { name: "Airtable", highlighted: false },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Integraciones"
          title="Ecosistema de Herramientas"
          description="Conectamos con las plataformas que ya usas para potenciar tu negocio"
        />

        <div className="mt-16 space-y-20">
          {techCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-10">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {category.logos.map((logo, lIdx) => (
                  <motion.div
                    key={lIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: lIdx * 0.1 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div
                      className={cn(
                        "flex flex-col items-center justify-center transition-all duration-300",
                        logo.highlighted
                          ? "grayscale-0 opacity-100 scale-110"
                          : "grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110",
                      )}
                    >
                      {/* Logo Placeholder - In a real app we'd use icons or SVG */}
                      <div
                        className={cn(
                          "h-12 flex items-center justify-center px-4 py-2 rounded-xl mb-3 font-bold text-lg border-2",
                          logo.highlighted
                            ? "border-brand-purple text-brand-purple bg-brand-purple/5"
                            : "border-border text-foreground bg-muted",
                        )}
                      >
                        {logo.name}
                      </div>

                      {logo.badge && (
                        <span className="absolute -top-4 bg-brand-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm w-max">
                          {logo.badge}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
