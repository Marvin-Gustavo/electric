"use client";

import React from "react";
import {
  ShieldCheck,
  Award,
  GraduationCap,
  BookOpen,
  Wrench,
  Cpu,
  MapPin,
  CheckCircle2,
  Users,
  Compass,
  Phone,
  Clock,
  Sparkles,
} from "lucide-react";

export default function CeAzariSection() {
  const modules = [
    {
      title: "Automatismos Industriales & PLC",
      icon: Cpu,
      desc: "Programación de autómatas Siemens S7-1200, pantallas HMI, redes Profinet/Modbus y variadores de frecuencia VFD.",
    },
    {
      title: "Tableros de Fuerza & TGBT",
      icon: Wrench,
      desc: "Diseño, balanceo de cargas, barras de cobre, interruptores de caja moldeada y bancos automáticos de condensadores.",
    },
    {
      title: "Máquinas Eléctricas & Bobinado",
      icon: Award,
      desc: "Cálculo de devanados concéntricos e imbricados, barnizado al horno, pruebas de aislamiento con megóhmetro y alineación láser.",
    },
    {
      title: "Normativa Boliviana NB 777",
      icon: BookOpen,
      desc: "Cálculo de caídas de tensión, coordinación selectiva de protecciones, acometidas industriales y mallas de puesta a tierra.",
    },
  ];

  return (
    <section id="cea-azari" className="py-20 md:py-28 bg-white scroll-mt-20 border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Institutional Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-4 shadow-apple-sm">
            <GraduationCap className="w-4 h-4" />
            <span>Centro de Educación Alternativa Azari</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-dark">
            Excelencia Técnica en{" "}
            <span className="bg-gradient-to-r from-apple-blue to-[#0A2540] bg-clip-text text-transparent">
              Electricidad Industrial
            </span>
          </h2>
          <p className="text-base sm:text-lg text-apple-secondary mt-4 leading-relaxed">
            Formamos a los técnicos que impulsan la productividad de Sucre y Chuquisaca.
            Nuestra especialidad combina rigor normativo, laboratorios de vanguardia y
            ética profesional para los desafíos del sector fabril y constructivo.
          </p>
        </div>

        {/* Feature Grid / Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#F8F8FA] border border-black/[0.05] hover:border-blue-200 hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-apple-sm text-apple-blue flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-apple-dark text-base mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-apple-secondary leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/[0.04] flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Certificación Oficial</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-Column Showcase: The Azari Guarantee & Lab Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left card: Guarantee */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A2540] to-[#0F172A] text-white shadow-apple-lg flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>El Sello "Egresado CEA AZARI"</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                ¿Qué garantiza contratar a un electricista del CEA AZARI?
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Cumplimiento irrestricto de la NB 777:</strong> Diseños y canalizaciones dimensionados para evitar caídas de tensión y calentamientos de cables.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Seguridad de personas y equipos:</strong> Instalación de mallas de puesta a tierra con medición de telurómetro inferior a 5 Ohms y selectividad diferencial.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Capacidad de automatización:</strong> Diagnóstico y programación de PLCs, variadores VFD y lazos de control industrial en planta.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Barrio Azari, Distrito 3 - Sucre, Bolivia</span>
              </span>
              <span className="font-mono text-emerald-400 font-semibold">
                Registro Técnico Nacional
              </span>
            </div>
          </div>

          {/* Right card: Admission & Community Impact */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#F8F8FA] border border-black/[0.06] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Impacto en la Comunidad</span>
              </div>

              <h4 className="text-xl font-bold text-apple-dark mb-3">
                Formación Técnica para el Futuro
              </h4>

              <p className="text-xs text-apple-secondary leading-relaxed mb-6">
                El Centro de Educación Alternativa "Azari" brinda capacitación modular teórico-práctica para jóvenes y trabajadores de Chuquisaca en turnos diurno y vespertino, permitiendo su inmediata inserción laboral o emprendimiento propio de servicios técnicos.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-2xl bg-white border border-black/[0.04] flex items-center gap-3">
                  <Clock className="w-4 h-4 text-apple-blue shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-apple-dark block">Turnos de Formación:</span>
                    <span className="text-apple-secondary">Tarde y Noche (Accesible para trabajadores)</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-black/[0.04] flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-apple-blue shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-apple-dark block">Ubicación de Talleres:</span>
                    <span className="text-apple-secondary">Zona Azari, parada Micro 12 y 2, Sucre</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-black/[0.04] flex items-center gap-3">
                  <Phone className="w-4 h-4 text-apple-blue shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-apple-dark block">Informaciones y Matrícula:</span>
                    <span className="text-apple-secondary">+591 (4) 64-51234 / Secretaría Azari</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/59172891234?text=Hola,%20deseo%20recibir%20informaci%C3%B3n%20sobre%20inscripciones%20y%20cursos%20de%20Electricidad%20Industrial%20en%20el%20CEA%20AZARI%20de%20Sucre."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white text-xs font-semibold text-center shadow-apple-sm transition-all"
            >
              Consultar Convocatoria e Inscripciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
