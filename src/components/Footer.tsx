"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  Zap,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Send,
  Heart,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export default function Footer() {
  const { setActiveSection, addToast } = useApp();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    addToast(
      "Suscripción Exitosa",
      "Recibirás nuestro boletín técnico mensual sobre la NB 777 y novedades industriales.",
      "success"
    );
    setEmail("");
  };

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
    <footer className="bg-[#F5F5F7] text-apple-dark border-t border-black/[0.06] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-black/[0.06]">
          {/* Col 1 & 2: Brand and Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0071E3] to-[#409cff] flex items-center justify-center text-white shadow-apple-glow">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-apple-dark tracking-tight">
                  ElectroSucre
                </span>
                <span className="text-xs text-apple-secondary block">
                  Plataforma Industrial & Alianza CEA AZARI
                </span>
              </div>
            </div>

            <p className="text-xs text-apple-secondary leading-relaxed max-w-sm">
              Plataforma tecnológica orientada a elevar los estándares del sector
              eléctrico industrial en Sucre, Chuquisaca. Respaldo pedagógico y
              certificación práctica promovida junto al Centro de Educación
              Alternativa Azari.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Norma Boliviana NB 777 Homologada
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-apple-dark mb-3">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo("inicio")}
                  className="text-apple-secondary hover:text-apple-blue transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("electricistas")}
                  className="text-apple-secondary hover:text-apple-blue transition-colors"
                >
                  Directorio de Electricistas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("materiales")}
                  className="text-apple-secondary hover:text-apple-blue transition-colors"
                >
                  Tiendas & Materiales
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("foro")}
                  className="text-apple-secondary hover:text-apple-blue transition-colors"
                >
                  Foro de Consultas Técnicas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("cea-azari")}
                  className="text-apple-secondary hover:text-apple-blue transition-colors"
                >
                  Sobre CEA AZARI
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-apple-dark mb-3">
              Sede Técnica en Sucre
            </h4>
            <ul className="space-y-2.5 text-xs text-apple-secondary">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-apple-blue shrink-0 mt-0.5" />
                <span>Barrio Azari, Distrito 3, Sucre, Bolivia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-apple-blue shrink-0" />
                <span>+591 72891234 / +591 4 64-51234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-apple-blue shrink-0" />
                <span>contacto@electrosucre-azari.bo</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CESSA / AETN / IBNORCA</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-apple-dark mb-3">
              Boletín Técnico Sucre
            </h4>
            <p className="text-xs text-apple-secondary leading-relaxed mb-3">
              Recibe fichas técnicas sobre coordinación de protecciones, cálculo de
              conductores y convocatorias de capacitación.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu-correo@empresa.bo"
                required
                className="w-full px-3 py-2 text-xs bg-white text-apple-dark rounded-xl border border-black/[0.08] focus:outline-none focus:ring-2 focus:ring-apple-blue shadow-sm"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-xl bg-apple-blue hover:bg-apple-blueHover text-white text-xs font-medium transition-all shadow-apple-sm flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Suscribirme</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-apple-secondary">
          <div className="flex items-center gap-1.5 text-center md:text-left">
            <span>© {new Date().getFullYear()} ElectroSucre. Desarrollado con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para la comunidad técnica e industrial de Chuquisaca, Bolivia.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold text-apple-dark">
              CEA AZARI • Especialidad Electricidad Industrial
            </span>
            <span>•</span>
            <span className="text-emerald-700 font-medium">NB 777</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

