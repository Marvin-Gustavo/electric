"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Award,
  CheckCircle2,
  Wrench,
  Factory,
  Compass,
} from "lucide-react";

export default function HeroSection() {
  const { setActiveSection } = useApp();

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8F9FA] to-[#F5F5F7]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100/50 via-sky-100/40 to-indigo-100/40 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Institutional Tag / Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-apple-sm mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-apple-blue animate-pulse" />
            <span className="text-xs font-semibold text-apple-blue tracking-wide uppercase">
              Centro de Educación Alternativa CEA AZARI
            </span>
            <span className="text-apple-secondary text-xs">•</span>
            <span className="text-xs text-apple-dark font-medium hidden sm:inline">
              Sucre, Chuquisaca
            </span>
          </div>

          {/* Main Title - Apple style typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-apple-dark leading-[1.1] mb-6">
            Electricidad Industrial{" "}
            <span className="bg-gradient-to-r from-[#0071E3] via-[#0284C7] to-[#0A2540] bg-clip-text text-transparent">
              de Máxima Precisión
            </span>{" "}
            en Sucre.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-apple-secondary font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Conectamos la industria chuquisaqueña con electricistas calificados,
            equipamiento certificado según la norma <strong className="text-apple-dark font-semibold">NB 777</strong> y el respaldo formativo del <strong className="text-apple-dark font-semibold">CEA AZARI</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollTo("electricistas")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white font-medium text-sm sm:text-base shadow-apple-glow transition-all flex items-center justify-center gap-2 group"
            >
              <span>Contratar Electricista Calificado</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("materiales")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-gray-50 text-apple-dark border border-black/[0.08] font-medium text-sm sm:text-base shadow-apple-sm hover:shadow-apple-md transition-all flex items-center justify-center gap-2"
            >
              <Factory className="w-4 h-4 text-apple-secondary" />
              <span>Ver Catálogo de Materiales</span>
            </button>
          </div>

          {/* Highlight badges grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-black/[0.05] shadow-apple-sm hover:border-blue-200 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-apple-blue flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-apple-dark">15+</div>
              <div className="text-xs font-semibold text-apple-dark mt-0.5">Especialistas Egresados</div>
              <div className="text-[11px] text-apple-secondary mt-0.5">Verificación directa CEA AZARI</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-black/[0.05] shadow-apple-sm hover:border-emerald-200 transition-all">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-apple-dark">NB 777</div>
              <div className="text-xs font-semibold text-apple-dark mt-0.5">Norma Boliviana</div>
              <div className="text-[11px] text-apple-secondary mt-0.5">Instalaciones seguras y certificadas</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-black/[0.05] shadow-apple-sm hover:border-amber-200 transition-all">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-apple-dark">15</div>
              <div className="text-xs font-semibold text-apple-dark mt-0.5">Materiales en Stock</div>
              <div className="text-[11px] text-apple-secondary mt-0.5">Precios en Bs y entrega en Sucre</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-black/[0.05] shadow-apple-sm hover:border-indigo-200 transition-all">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-apple-dark">100%</div>
              <div className="text-xs font-semibold text-apple-dark mt-0.5">Cobertura Sucre</div>
              <div className="text-[11px] text-apple-secondary mt-0.5">Azari, Lajastambo, San Roque y más</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

