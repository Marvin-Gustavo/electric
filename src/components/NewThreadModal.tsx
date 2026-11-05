"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  X,
  MessageSquare,
  ShieldCheck,
  Tag,
  Plus,
  Send,
  HelpCircle,
} from "lucide-react";

export default function NewThreadModal() {
  const {
    isNewThreadModalOpen,
    setIsNewThreadModalOpen,
    createThread,
    currentUser,
  } = useApp();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([
    "Normativa NB 777",
    "Electricidad Industrial",
  ]);
  const [author, setAuthor] = useState(currentUser?.name || "");
  const [isCeaAzari, setIsCeaAzari] = useState(
    currentUser?.isCeaAzariCertified ?? true
  );

  if (!isNewThreadModalOpen) return null;

  const handleAddTag = (tagToAdd: string) => {
    const trimmed = tagToAdd.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (t: string) => {
    setTags(tags.filter((tag) => tag !== t));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    createThread(
      title.trim(),
      content.trim(),
      tags,
      author.trim() || "Técnico Electricista",
      isCeaAzari
    );
  };

  const suggestedTags = [
    "Motores Trifásicos",
    "Automatización y PLC",
    "Variadores de Frecuencia",
    "CESSA",
    "Factor de Potencia",
    "Puesta a Tierra",
    "Tableros",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-apple-lg border border-black/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#FBFBFC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-apple-blue/10 text-apple-blue flex items-center justify-center">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <h3 className="font-bold text-apple-dark text-base">
              Nueva Consulta Técnica en Sucre
            </h3>
          </div>

          <button
            onClick={() => setIsNewThreadModalOpen(false)}
            className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          {/* Author Name */}
          <div>
            <label className="block text-xs font-semibold text-apple-dark mb-1">
              Tu Nombre o Razón Social
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Ej: Ing. Rodrigo Sandoval o Taller Mecánico Azari"
              required
              className="w-full px-3.5 py-2 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-apple-dark mb-1">
              Título Claro de la Consulta
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Falla en arranque suave de molino trifásico 50 HP en Lajastambo"
              required
              className="w-full px-3.5 py-2 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-xs font-semibold text-apple-dark mb-1">
              Descripción del Problema Técnico o Duda Normativa
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Detalla voltajes medidos, marcas de componentes, código de falla, requerimiento según NB 777 o CESSA..."
              rows={4}
              required
              className="w-full p-3 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-semibold text-apple-dark mb-1">
              Etiquetas Temáticas
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-apple-blue text-[11px] font-medium"
                >
                  <span>{t}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(t)}
                    className="hover:text-rose-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag(tagInput);
                  }
                }}
                placeholder="Añadir etiqueta (Presiona Enter)"
                className="flex-1 px-3 py-1.5 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue"
              />
              <button
                type="button"
                onClick={() => handleAddTag(tagInput)}
                className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-apple-dark text-xs font-medium"
              >
                Añadir
              </button>
            </div>

            {/* Suggested quick tags */}
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="text-[10px] text-apple-secondary mr-1 self-center">
                Sugerencias:
              </span>
              {suggestedTags.map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => handleAddTag(st)}
                  className="text-[10px] px-2 py-0.5 rounded bg-gray-100 hover:bg-blue-50 hover:text-apple-blue text-apple-secondary transition-colors"
                >
                  +{st}
                </button>
              ))}
            </div>
          </div>

          {/* CEA AZARI Toggle */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="text-xs font-bold text-apple-dark block">
                  Publicar como Vinculado a CEA AZARI
                </span>
                <span className="text-[10px] text-apple-secondary">
                  Muestra la insignia oficial de la institución técnica
                </span>
              </div>
            </div>

            <input
              type="checkbox"
              checked={isCeaAzari}
              onChange={(e) => setIsCeaAzari(e.target.checked)}
              className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={() => setIsNewThreadModalOpen(false)}
              className="px-4 py-2 rounded-full text-xs font-medium text-apple-secondary hover:text-apple-dark"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white text-xs font-semibold shadow-apple-sm transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Publicar Consulta</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
