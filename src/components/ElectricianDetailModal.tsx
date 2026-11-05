"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  X,
  ShieldCheck,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Briefcase,
  CheckCircle2,
  Calendar,
  Share2,
} from "lucide-react";

export default function ElectricianDetailModal() {
  const {
    selectedElectrician,
    setSelectedElectrician,
    setReviewTarget,
    addToast,
  } = useApp();

  if (!selectedElectrician) return null;

  const elec = selectedElectrician;

  const handleShare = () => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-apple-lg border border-black/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#FBFBFC]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-apple-secondary">
              Perfil Profesional
            </span>
            {elec.isCeaAzariCertified && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Certificado Oficial CEA AZARI
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
              title="Compartir"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedElectrician(null)}
              className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto flex-1 divide-y divide-black/[0.06]">
          {/* Main Info */}
          <div className="pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative">
                <img
                  src={elec.avatar}
                  alt={elec.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-gray-50 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-apple-dark">
                  {elec.name}
                </h3>
                <p className="text-sm font-medium text-apple-blue mt-0.5">
                  {elec.title}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-apple-secondary mt-2">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{elec.rating}</span>
                    <span className="text-apple-secondary font-normal">
                      ({elec.reviewCount} reseñas)
                    </span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-apple-secondary" />
                    <span>{elec.zone}, Sucre</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-apple-secondary" />
                    <span>{elec.experienceYears} años de trayectoria</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-apple-secondary">Tarifa referencial:</span>
                  <span className="text-base font-bold text-apple-dark">
                    {elec.hourlyRateBs} Bs <span className="text-xs font-normal text-apple-secondary">/ hora de servicio</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Certification Highlight */}
          {elec.isCeaAzariCertified && (
            <div className="py-5">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-sky-50/50 to-emerald-50/60 border border-blue-200/60 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white shadow-apple-sm text-apple-blue shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-apple-dark">
                    Especialidad en Electricidad Industrial - CEA AZARI
                  </h4>
                  <p className="text-xs text-apple-secondary mt-0.5 leading-relaxed">
                    Técnico formado en los talleres de control, automatismos y tableros del Centro de Educación Alternativa Azari (Sucre, Bolivia). Acreditado para firmas de instalaciones según la NB 777.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                    <span className="px-2 py-0.5 bg-white/80 rounded border border-black/[0.06] text-apple-dark">
                      Registro: <strong>{elec.azariRegistryCode}</strong>
                    </span>
                    <span className="px-2 py-0.5 bg-white/80 rounded border border-black/[0.06] text-apple-dark">
                      Promoción: <strong>{elec.azariGraduationYear}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bio */}
          <div className="py-5">
            <h4 className="text-xs font-bold text-apple-dark uppercase tracking-wider mb-2">
              Resumen Profesional
            </h4>
            <p className="text-sm text-apple-secondary leading-relaxed">
              {elec.bio}
            </p>
            <p className="text-xs text-apple-secondary mt-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-apple-secondary" />
              <span>Taller / Base de operaciones: <strong>{elec.address}</strong></span>
            </p>
          </div>

          {/* Skills & Verified Standards */}
          <div className="py-5">
            <h4 className="text-xs font-bold text-apple-dark uppercase tracking-wider mb-3">
              Competencias y Normas Verificadas
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {elec.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-xl bg-blue-50 text-apple-blue font-medium text-xs border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-apple-secondary font-medium">Normativas dominadas:</span>
              {elec.verifiedNorms.map((norm) => (
                <span
                  key={norm}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {norm}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="py-5">
            <h4 className="text-xs font-bold text-apple-dark uppercase tracking-wider mb-3">
              Proyectos Industriales Destacados en Chuquisaca
            </h4>
            <ul className="space-y-2">
              {elec.featuredProjects.map((proj, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-apple-dark p-2.5 rounded-xl bg-[#F8F8FA]"
                >
                  <span className="w-5 h-5 rounded-full bg-apple-blue text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{proj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Reviews */}
          <div className="py-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-apple-dark uppercase tracking-wider">
                Reseñas de Clientes ({elec.reviews.length})
              </h4>
              <button
                onClick={() =>
                  setReviewTarget({
                    type: "electrician",
                    id: elec.id,
                    name: elec.name,
                  })
                }
                className="text-xs font-semibold text-apple-blue hover:underline"
              >
                + Dejar mi valoración
              </button>
            </div>

            <div className="space-y-3">
              {elec.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-3.5 rounded-2xl bg-[#F8F8FA] border border-black/[0.04]"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <span className="text-xs font-bold text-apple-dark">
                        {rev.author}
                      </span>
                      {rev.company && (
                        <span className="text-[11px] text-apple-secondary block">
                          {rev.company}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{rev.rating}.0</span>
                    </div>
                  </div>
                  <p className="text-xs text-apple-secondary leading-relaxed">
                    "{rev.comment}"
                  </p>
                  <span className="text-[10px] text-apple-secondary mt-1.5 block text-right">
                    {rev.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#F8F8FA] border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-apple-secondary text-center sm:text-left">
            <span>Ubicación: </span>
            <strong className="text-apple-dark">{elec.zone}, Sucre</strong>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`tel:${elec.phone}`}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-black/[0.1] bg-white hover:bg-gray-50 text-apple-dark text-xs font-medium transition-all flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Llamar</span>
            </a>

            <a
              href={`https://wa.me/${elec.whatsapp}?text=Hola%20${encodeURIComponent(
                elec.name
              )},%20te%20contacto%20desde%20la%20plataforma%20ElectroSucre%20para%20un%20servicio%20de%20electricidad%20industrial.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium shadow-apple-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
