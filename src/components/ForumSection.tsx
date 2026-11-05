"use client";

import React, { useState, useMemo } from "react";
import { useApp } from "@/context/AppContext";
import { ForumThread } from "@/types";
import {
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  ShieldCheck,
  Tag,
  Plus,
  Share2,
  Filter,
  Eye,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ForumSection() {
  const {
    forumThreads,
    setSelectedThread,
    upvoteThread,
    downvoteThread,
    setIsNewThreadModalOpen,
    searchQuery,
    addToast,
  } = useApp();

  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [onlySolved, setOnlySolved] = useState<boolean>(false);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    forumThreads.forEach((t) => t.tags.forEach((tag) => set.add(tag)));
    return Array.from(set);
  }, [forumThreads]);

  const filteredThreads = useMemo(() => {
    return forumThreads.filter((t) => {
      // Global search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = t.title.toLowerCase().includes(q);
        const matchesContent = t.content.toLowerCase().includes(q);
        const matchesAuthor = t.author.toLowerCase().includes(q);
        const matchesTag = t.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!matchesTitle && !matchesContent && !matchesAuthor && !matchesTag) {
          return false;
        }
      }

      // Tag filter
      if (selectedTag !== "all" && !t.tags.includes(selectedTag)) {
        return false;
      }

      // Solved filter
      if (onlySolved && !t.isSolved) {
        return false;
      }

      return true;
    });
  }, [forumThreads, searchQuery, selectedTag, onlySolved]);

  const handleShare = (thread: ForumThread) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}/#foro-${thread.id} - Consulta: ${thread.title}`
      );
      addToast(
        "Enlace Copiado",
        `Se copió la consulta técnica al portapapeles.`,
        "info"
      );
    }
  };

  return (
    <section id="foro" className="py-16 md:py-24 bg-[#F5F5F7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <MessageSquare className="w-4 h-4 text-apple-blue" />
              <span>Comunidad Técnica & Normativa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-apple-dark">
              Foro de Consultas Industriales
            </h2>
            <p className="text-base text-apple-secondary mt-2 max-w-2xl">
              Espacio colaborativo de debate técnico, resolución de averías en planta y
              aplicación de la normativa boliviana <strong className="text-apple-dark">NB 777</strong> y reglamentos de CESSA.
            </p>
          </div>

          <button
            onClick={() => setIsNewThreadModalOpen(true)}
            className="px-6 py-3 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white text-xs font-semibold shadow-apple-glow transition-all flex items-center justify-center gap-2 shrink-0 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Hacer una Consulta Técnica</span>
          </button>
        </div>

        {/* Filters and Tags Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-black/[0.06] shadow-apple-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Tag scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedTag("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                selectedTag === "all"
                  ? "bg-apple-dark text-white"
                  : "bg-[#F5F5F7] text-apple-secondary hover:text-apple-dark"
              }`}
            >
              Todos los temas
            </button>
            {allTags.slice(0, 7).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                  selectedTag === tag
                    ? "bg-apple-blue text-white"
                    : "bg-[#F5F5F7] text-apple-secondary hover:text-apple-dark"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Solved toggle */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-black/[0.04]">
            <button
              onClick={() => setOnlySolved(!onlySolved)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                onlySolved
                  ? "bg-emerald-500 text-white border-emerald-600 shadow-apple-sm"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Solo Casos Solucionados</span>
            </button>
          </div>
        </div>

        {/* Threads List */}
        <div className="space-y-4">
          {filteredThreads.map((thread) => (
            <div
              key={thread.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-black/[0.06] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
            >
              {/* Vote Counter */}
              <div className="flex sm:flex-col items-center gap-1.5 bg-[#F8F8FA] p-2 rounded-2xl border border-black/[0.04] shrink-0 self-stretch sm:self-auto justify-center sm:min-w-[56px]">
                <button
                  onClick={() => upvoteThread(thread.id)}
                  className={`p-1.5 rounded-xl hover:bg-white transition-colors ${
                    thread.userVoted === "up"
                      ? "text-apple-blue font-bold"
                      : "text-apple-secondary hover:text-apple-dark"
                  }`}
                  title="Voto positivo"
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <span className="font-bold text-xs text-apple-dark px-1">
                  {thread.upvotes}
                </span>
                <button
                  onClick={() => downvoteThread(thread.id)}
                  className={`p-1.5 rounded-xl hover:bg-white transition-colors ${
                    thread.userVoted === "down"
                      ? "text-rose-500 font-bold"
                      : "text-apple-secondary hover:text-apple-dark"
                  }`}
                  title="Voto negativo"
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>

              {/* Main Thread Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {thread.isSolved ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Solución Verificada
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                      En Debate
                    </span>
                  )}

                  {thread.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-blue-50 text-apple-blue text-[10px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3
                  onClick={() => setSelectedThread(thread)}
                  className="text-base sm:text-lg font-bold text-apple-dark hover:text-apple-blue transition-colors cursor-pointer leading-snug mb-2"
                >
                  {thread.title}
                </h3>

                <p className="text-xs text-apple-secondary line-clamp-2 leading-relaxed mb-4">
                  {thread.content}
                </p>

                {/* Meta details & Author info */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-3 border-t border-black/[0.04]">
                  <div className="flex items-center gap-2">
                    <img
                      src={thread.authorAvatar}
                      alt={thread.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-apple-dark">
                        {thread.author}
                      </span>
                      {thread.isCeaAzari && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          CEA AZARI
                        </span>
                      )}
                    </div>
                    <span className="text-apple-secondary text-[11px]">•</span>
                    <span className="text-apple-secondary text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {thread.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-apple-secondary text-[11px] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {thread.views} vistas
                    </span>

                    <button
                      onClick={() => handleShare(thread)}
                      className="text-apple-secondary hover:text-apple-dark p-1"
                      title="Compartir hilo"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSelectedThread(thread)}
                      className="px-3 py-1 rounded-full bg-apple-dark hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{thread.replies.length} respuestas</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredThreads.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-black/[0.06] p-8 max-w-lg mx-auto">
            <MessageSquare className="w-12 h-12 text-apple-secondary mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-apple-dark">
              No hay consultas con estos filtros
            </h3>
            <p className="text-xs text-apple-secondary mt-1">
              Prueba seleccionando "Todos los temas" o realiza tu propia consulta a la comunidad técnica de Sucre.
            </p>
            <button
              onClick={() => setIsNewThreadModalOpen(true)}
              className="mt-4 px-5 py-2 rounded-full bg-apple-blue text-white text-xs font-semibold"
            >
              Iniciar Consulta
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
