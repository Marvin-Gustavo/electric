"use client";

import React, { useState, useMemo } from "react";
import { useApp } from "@/context/AppContext";
import { Electrician, Specialty, ZoneSucre } from "@/types";
import {
  ShieldCheck,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Share2,
  SlidersHorizontal,
  Check,
  Award,
  Sparkles,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function ElectriciansSection() {
  const {
    electricians,
    setSelectedElectrician,
    setReviewTarget,
    searchQuery,
    addToast,
  } = useApp();

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [selectedZone, setSelectedZone] = useState<string>("all");
  const [onlyAzariCertified, setOnlyAzariCertified] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"rating" | "experience" | "rateAsc">("rating");

  // Distinct specialties and zones from data
  const specialties: Specialty[] = [
    "Automatización y PLC",
    "Tableros de Distribución",
    "Motores Trifásicos",
    "Variadores de Frecuencia",
    "Factor de Potencia",
    "Normativa NB 777",
    "Termografía y Mantenimiento",
    "Bobinado de Motores",
    "Energía Solar Industrial",
    "Subestaciones y Transformadores",
    "Grupos Electrógenos",
    "Sistemas SCADA e IoT",
  ];

  const zones: ZoneSucre[] = [
    "Zona Azari",
    "Mesa Verde",
    "San Roque",
    "Zona Central",
    "Planta Diesel",
    "El Tejar",
    "Parque Bolívar",
    "Rumi Rumi",
    "Lajastambo",
    "Poconas",
    "Garcilazo",
  ];

  const filteredElectricians = useMemo(() => {
    return electricians.filter((elec) => {
      // Global search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = elec.name.toLowerCase().includes(q);
        const matchesTitle = elec.title.toLowerCase().includes(q);
        const matchesBio = elec.bio.toLowerCase().includes(q);
        const matchesSpecialty = elec.specialty.toLowerCase().includes(q);
        const matchesSkill = elec.skills.some((s) => s.toLowerCase().includes(q));
        if (
          !matchesName &&
          !matchesTitle &&
          !matchesBio &&
          !matchesSpecialty &&
          !matchesSkill
        ) {
          return false;
        }
      }

      // Specialty filter
      if (
        selectedSpecialty !== "all" &&
        elec.specialty !== selectedSpecialty &&
        !elec.secondarySpecialties.includes(selectedSpecialty)
      ) {
        return false;
      }

      // Zone filter
      if (selectedZone !== "all" && elec.zone !== selectedZone) {
        return false;
      }

      // CEA Azari only filter
      if (onlyAzariCertified && !elec.isCeaAzariCertified) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "experience") return b.experienceYears - a.experienceYears;
      if (sortBy === "rateAsc") return a.hourlyRateBs - b.hourlyRateBs;
      return 0;
    });
  }, [
    electricians,
    searchQuery,
    selectedSpecialty,
    selectedZone,
    onlyAzariCertified,
    sortBy,
  ]);

  const handleShare = (elec: Electrician) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}/#electricista-${elec.id} - ${elec.name} (${elec.specialty}) en Sucre`
      );
      addToast(
        "Enlace Copiado",
        `Se copió el perfil de ${elec.name} al portapapeles.`,
        "info"
      );
    }
  };

  return (
    <section id="electricistas" className="py-16 md:py-24 bg-[#F5F5F7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-apple-blue" />
            <span>Directorio de Especialistas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-apple-dark">
            Electricistas Industriales en Sucre
          </h2>
          <p className="text-base text-apple-secondary mt-3">
            Encuentra técnicos calificados en la capital, con verificación técnica del
            CEA AZARI y especialización en normas industriales.
          </p>
        </div>

        {/* Filters Bar - Apple Style Glass Card */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-black/[0.06] shadow-apple-sm mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Filter pills & selects */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Specialty Select */}
              <div className="relative">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="appearance-none pl-3.5 pr-8 py-2 text-xs font-medium bg-[#F5F5F7] hover:bg-[#EAEAEA] text-apple-dark rounded-full border border-black/[0.04] focus:outline-none focus:ring-2 focus:ring-apple-blue transition-all cursor-pointer"
                >
                  <option value="all">Todas las Especialidades</option>
                  {specialties.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-apple-secondary absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* Zone Select */}
              <div className="relative">
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="appearance-none pl-3.5 pr-8 py-2 text-xs font-medium bg-[#F5F5F7] hover:bg-[#EAEAEA] text-apple-dark rounded-full border border-black/[0.04] focus:outline-none focus:ring-2 focus:ring-apple-blue transition-all cursor-pointer"
                >
                  <option value="all">Todas las Zonas de Sucre</option>
                  {zones.map((z) => (
                    <option key={z} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-apple-secondary absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none pl-3.5 pr-8 py-2 text-xs font-medium bg-[#F5F5F7] hover:bg-[#EAEAEA] text-apple-dark rounded-full border border-black/[0.04] focus:outline-none focus:ring-2 focus:ring-apple-blue transition-all cursor-pointer"
                >
                  <option value="rating">Mayor Calificación</option>
                  <option value="experience">Más Años de Experiencia</option>
                  <option value="rateAsc">Tarifa más Accesible</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-apple-secondary absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* CEA AZARI Toggle Chip */}
            <button
              onClick={() => setOnlyAzariCertified(!onlyAzariCertified)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                onlyAzariCertified
                  ? "bg-emerald-500 text-white border-emerald-600 shadow-apple-sm"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Solo Egresados CEA AZARI</span>
              {onlyAzariCertified && <Check className="w-3.5 h-3.5 ml-1" />}
            </button>
          </div>

          {/* Active filter counters */}
          <div className="mt-3 pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs text-apple-secondary">
            <span>
              Mostrando <strong className="text-apple-dark">{filteredElectricians.length}</strong> de{" "}
              {electricians.length} profesionales registrados
            </span>
            {(selectedSpecialty !== "all" || selectedZone !== "all" || onlyAzariCertified) && (
              <button
                onClick={() => {
                  setSelectedSpecialty("all");
                  setSelectedZone("all");
                  setOnlyAzariCertified(false);
                }}
                className="text-apple-blue hover:underline font-medium"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Electricians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredElectricians.map((elec) => (
            <div
              key={elec.id}
              className="rounded-3xl bg-white border border-black/[0.06] p-6 shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Avatar + Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={elec.avatar}
                      alt={elec.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-white shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Badge CEA AZARI */}
                    {elec.isCeaAzariCertified ? (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>Verificado CEA AZARI</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-700 mb-1">
                        <span>Técnico Particular</span>
                      </div>
                    )}

                    <h3 className="font-bold text-apple-dark text-base truncate group-hover:text-apple-blue transition-colors">
                      {elec.name}
                    </h3>
                    <p className="text-xs text-apple-secondary truncate">
                      {elec.title}
                    </p>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-[#F8F8FA] mb-3">
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{elec.rating}</span>
                    <span className="text-apple-secondary font-normal">
                      ({elec.reviewCount})
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-apple-secondary">
                    <MapPin className="w-3.5 h-3.5 text-apple-blue" />
                    <span className="truncate max-w-[120px]">{elec.zone}</span>
                  </div>

                  <div className="font-medium text-apple-dark">
                    {elec.experienceYears} años exp.
                  </div>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-apple-secondary line-clamp-2 leading-relaxed mb-4">
                  {elec.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-blue-50 text-apple-blue font-medium rounded-lg text-[11px]">
                    {elec.specialty}
                  </span>
                  {elec.secondarySpecialties.slice(0, 1).map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 bg-gray-100 text-apple-dark rounded-lg text-[11px]"
                    >
                      {s}
                    </span>
                  ))}
                  {elec.azariRegistryCode && (
                    <span className="px-2 py-0.5 text-[10px] text-emerald-800 bg-emerald-50 rounded font-mono">
                      Reg: {elec.azariRegistryCode.split("-").pop()}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div>
                <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[11px] text-apple-secondary block">
                      Tarifa referencial
                    </span>
                    <span className="text-base font-bold text-apple-dark">
                      {elec.hourlyRateBs}{" "}
                      <span className="text-xs font-semibold text-apple-blue">
                        Bs/hr
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Share */}
                    <button
                      onClick={() => handleShare(elec)}
                      className="p-2 rounded-xl text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
                      title="Compartir perfil"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    {/* Rate */}
                    <button
                      onClick={() =>
                        setReviewTarget({
                          type: "electrician",
                          id: elec.id,
                          name: elec.name,
                        })
                      }
                      className="p-2 rounded-xl text-amber-500 hover:bg-amber-50 transition-colors"
                      title="Valorar profesional"
                    >
                      <Star className="w-4 h-4" />
                    </button>

                    {/* Call */}
                    <a
                      href={`tel:${elec.phone}`}
                      className="p-2 rounded-xl text-apple-dark hover:bg-gray-100 transition-colors"
                      title="Llamar"
                    >
                      <Phone className="w-4 h-4" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${elec.whatsapp}?text=Hola%20${encodeURIComponent(
                        elec.name
                      )},%20te%20contacto%20desde%20la%20plataforma%20ElectroSucre%20para%20un%20servicio%20de%20electricidad%20industrial.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                      title="Escribir por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedElectrician(elec)}
                  className="w-full py-2.5 rounded-full bg-apple-dark hover:bg-black text-white text-xs font-medium transition-all shadow-apple-sm flex items-center justify-center gap-1.5"
                >
                  <span>Ver Perfil Completo & Proyectos</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if nothing matches */}
        {filteredElectricians.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-black/[0.06] p-8 max-w-lg mx-auto">
            <Award className="w-12 h-12 text-apple-secondary mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-apple-dark">
              No se encontraron electricistas con estos criterios
            </h3>
            <p className="text-xs text-apple-secondary mt-1">
              Prueba cambiando la especialidad o la zona seleccionada en Sucre.
            </p>
            <button
              onClick={() => {
                setSelectedSpecialty("all");
                setSelectedZone("all");
                setOnlyAzariCertified(false);
              }}
              className="mt-4 px-5 py-2 rounded-full bg-apple-blue text-white text-xs font-medium"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

