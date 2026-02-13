"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-3xl font-bold tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoVisible = useInView(videoRef);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoVisible]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color="#EB5757"
        refresh
      />

      {/* Simplified Background Gradients */}
      <div className="absolute top-0 -z-10 h-full w-full opacity-50 dark:opacity-30">
        <div className="absolute top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/5 blur-[120px] -left-20" />
        <div className="absolute bottom-0 h-[500px] w-[500px] rounded-full bg-brand-coral/5 blur-[120px] -right-20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Animated Logo Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 blur-3xl bg-brand-orange/20 rounded-full" />
            <video
              ref={videoRef}
              src="/logo_animated_png.mp4"
              loop
              muted
              playsInline
              className="h-80 w-80 md:h-[500px] md:w-[500px] object-contain relative z-10"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 cursor-pointer"
          >
            <AnimatedGradientText className="px-6 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm">
              <span className="inline animate-gradient bg-gradient-to-r from-brand-orange via-brand-coral to-brand-orange bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                🚀 Ahora con integración Claude AI
              </span>
            </AnimatedGradientText>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl mb-6 text-foreground"
          >
            Automatiza tu Negocio con <br />
            <WordRotate
              className="font-bold text-brand-coral inline-block"
              words={["IA", "n8n", "Eficiencia", "Velocidad"]}
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Soluciones personalizadas que transforman procesos manuales en
            flujos inteligentes y eficientes. Ahorra tiempo y escala tu impacto.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row items-center"
          >
            <ShimmerButton
              className="shadow-2xl"
              background="linear-gradient(90deg, #F2994A, #EB5757)"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Agendar Consultoría Gratuita
              </span>
            </ShimmerButton>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 backdrop-blur-sm bg-background/50 border-brand-purple/20 hover:bg-brand-purple/5 text-foreground"
            >
              Ver Casos de Uso
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-20 grid grid-cols-1 gap-8 border-t border-border pt-12 sm:grid-cols-3 md:gap-16 w-full max-w-4xl"
          >
            <div className="relative flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border overflow-hidden group hover:border-brand-purple/20 transition-colors">
              <BorderBeam size={100} duration={10} delay={9} />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6" />
              </div>
              <CountUp end={500} suffix="+" />
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">
                Horas ahorradas
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border overflow-hidden group hover:border-brand-mint/20 transition-colors">
              <BorderBeam
                size={100}
                duration={10}
                delay={5}
                colorFrom="#6FCF97"
                colorTo="#F2C94C"
              />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint/10 text-brand-mint group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6" />
              </div>
              <CountUp end={95} suffix="%" />
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">
                Reducción en tareas
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border overflow-hidden group hover:border-brand-blue/20 transition-colors">
              <BorderBeam
                size={100}
                duration={10}
                delay={2}
                colorFrom="#56CCF2"
                colorTo="#2F80ED"
              />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <CountUp end={50} suffix="+" />
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">
                Clientes satisfechos
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
