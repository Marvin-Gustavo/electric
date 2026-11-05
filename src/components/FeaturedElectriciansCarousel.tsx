"use client";

import React, { useRef } from "react";
import { useApp } from "@/context/AppContext";
import {
  ShieldCheck,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function FeaturedElectriciansCarousel() {
  const { electricians, setSelectedElectrician } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter only CEA AZARI certified technicians for this featured carousel
  const featured = electricians.filter((e) => e.isCeaAzariCertified);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-white border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Talento Técnico Destacado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-dark">
              Egresados Certificados del CEA AZARI
            </h2>
            <p className="text-sm text-apple-secondary mt-1">
              Profesionales con certificación oficial en electricidad industrial y respaldo práctico en Sucre.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-black/[0.08] bg-white hover:bg-gray-50 flex items-center justify-center text-apple-dark shadow-apple-sm transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-black/[0.08] bg-white hover:bg-gray-50 flex items-center justify-center text-apple-dark shadow-apple-sm transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {featured.map((elec) => (
            <div
              key={elec.id}
              className="min-w-[300px] sm:min-w-[340px] md:min-w-[360px] p-5 rounded-3xl bg-[#FBFBFC] hover:bg-white border border-black/[0.06] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="relative">
                    <img
                      src={elec.avatar}
                      alt={elec.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Verificado CEA AZARI
                      </span>
                    </div>
                    <h3 className="font-bold text-apple-dark text-base mt-1 truncate">
                      {elec.name}
                    </h3>
                    <p className="text-xs text-apple-secondary truncate">
                      {elec.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-apple-secondary mb-3">
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{elec.rating}</span>
                    <span className="text-apple-secondary font-normal">
                      ({elec.reviewCount})
                    </span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-apple-secondary" />
                    <span>{elec.zone}</span>
                  </div>
                </div>

                <p className="text-xs text-apple-secondary line-clamp-2 leading-relaxed mb-4">
                  {elec.bio}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-apple-blue rounded-md text-[11px] font-medium">
                    {elec.specialty}
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 text-apple-dark rounded-md text-[11px]">
                    {elec.experienceYears} años exp.
                  </span>
                  {elec.azariGraduationYear && (
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded-md text-[11px] font-medium">
                      Promoción {elec.azariGraduationYear}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] text-apple-secondary block">Tarifa ref.</span>
                  <span className="font-bold text-apple-dark text-sm">
                    {elec.hourlyRateBs} Bs <span className="text-xs font-normal text-apple-secondary">/hr</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${elec.whatsapp}?text=Hola%20${encodeURIComponent(
                      elec.name
                    )},%20te%20contacto%20desde%20la%20plataforma%20ElectroSucre%20para%20un%20servicio%20de%20electricidad%20industrial.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="Contactar vía WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelectedElectrician(elec)}
                    className="px-3.5 py-1.5 rounded-full bg-apple-dark hover:bg-black text-white text-xs font-medium transition-all"
                  >
                    Ver Perfil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

