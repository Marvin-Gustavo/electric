"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  X,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquare,
  Clock,
  Share2,
  Sparkles,
} from "lucide-react";

export default function ThreadDetailModal() {
  const {
    selectedThread,
    setSelectedThread,
    upvoteThread,
    downvoteThread,
    addThreadReply,
    markReplyAsSolution,
    currentUser,
    addToast,
  } = useApp();

  const [replyText, setReplyText] = useState("");
  const [authorName, setAuthorName] = useState(currentUser?.name || "");

  if (!selectedThread) return null;

  const thread = selectedThread;

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    addThreadReply(
      thread.id,
      replyText.trim(),
      authorName || "Técnico Sucre",
      currentUser?.isCeaAzariCertified ?? true
    );
    setReplyText("");
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}/#foro-${thread.id} - ${thread.title}`
      );
      addToast(
        "Enlace Copiado",
        `Se copió el enlace de la consulta al portapapeles.`,
        "info"
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-apple-lg border border-black/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#FBFBFC]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-apple-secondary">
              Debate Técnico
            </span>
            {thread.isSolved && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Solución Verificada
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
              onClick={() => setSelectedThread(null)}
              className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Main Question */}
          <div className="pb-6 border-b border-black/[0.06]">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-1 bg-[#F8F8FA] p-2 rounded-2xl border border-black/[0.04] shrink-0">
                <button
                  onClick={() => upvoteThread(thread.id)}
                  className={`p-1.5 rounded-xl hover:bg-white transition-colors ${
                    thread.userVoted === "up" ? "text-apple-blue font-bold" : "text-apple-secondary"
                  }`}
                  title="Voto positivo"
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <span className="font-bold text-xs text-apple-dark">
                  {thread.upvotes}
                </span>
                <button
                  onClick={() => downvoteThread(thread.id)}
                  className={`p-1.5 rounded-xl hover:bg-white transition-colors ${
                    thread.userVoted === "down" ? "text-rose-500 font-bold" : "text-apple-secondary"
                  }`}
                  title="Voto negativo"
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  {thread.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-blue-50 text-apple-blue text-[10px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-apple-dark mb-3">
                  {thread.title}
                </h2>

                <p className="text-sm text-apple-secondary leading-relaxed whitespace-pre-line">
                  {thread.content}
                </p>

                {/* Author footer */}
                <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-black/[0.04] text-xs">
                  <img
                    src={thread.authorAvatar}
                    alt={thread.author}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div>
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
                    <span className="text-[11px] text-apple-secondary">
                      {thread.authorRole} • {thread.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Replies Section */}
          <div>
            <h3 className="text-xs font-bold text-apple-dark uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Respuestas Técnicas ({thread.replies.length})</span>
              <span className="text-[11px] text-apple-secondary font-normal">
                Haz clic en la marca de verificación para validar una solución
              </span>
            </h3>

            {thread.replies.length === 0 ? (
              <div className="text-center py-8 p-6 rounded-2xl bg-[#F8F8FA] border border-black/[0.04]">
                <MessageSquare className="w-8 h-8 text-apple-secondary mx-auto mb-2 opacity-50" />
                <p className="text-xs text-apple-secondary">
                  Aún no hay respuestas en esta discusión. Sé el primero en aportar.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {thread.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      reply.isSolution
                        ? "bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-300"
                        : "bg-[#FBFBFC] border-black/[0.05]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={reply.avatar}
                          alt={reply.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-apple-dark">
                              {reply.author}
                            </span>
                            {reply.isCeaAzari && (
                              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                CEA AZARI
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-apple-secondary">
                            {reply.authorRole} • {reply.date}
                          </span>
                        </div>
                      </div>

                      {/* Solution Toggle Button */}
                      <button
                        onClick={() => markReplyAsSolution(thread.id, reply.id)}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                          reply.isSolution
                            ? "bg-emerald-600 text-white shadow-apple-sm"
                            : "bg-gray-100 hover:bg-emerald-100 text-apple-secondary hover:text-emerald-800"
                        }`}
                        title="Marcar o desmarcar como solución"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{reply.isSolution ? "Solución Verificada" : "Marcar Solución"}</span>
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-apple-dark leading-relaxed whitespace-pre-line mt-3 pl-1">
                      {reply.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Reply Submission Form */}
        <div className="p-4 sm:p-5 bg-[#F8F8FA] border-t border-black/[0.06]">
          <form onSubmit={handleSendReply} className="space-y-3">
            <div className="flex items-center justify-between text-xs text-apple-secondary px-1">
              <span>Responder como: <strong className="text-apple-dark">{authorName || "Técnico"}</strong></span>
              {currentUser?.isCeaAzariCertified && (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Egresado CEA AZARI
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Escribe tu análisis técnico, referencia de la norma NB 777 o solución práctica..."
                rows={2}
                className="flex-1 p-3 text-xs bg-white text-apple-dark rounded-2xl border border-black/[0.08] focus:outline-none focus:ring-2 focus:ring-apple-blue resize-none shadow-sm"
              />
              <button
                type="submit"
                disabled={!replyText.trim()}
                className="px-4 rounded-2xl bg-apple-blue hover:bg-apple-blueHover disabled:bg-gray-200 disabled:text-gray-400 text-white font-medium text-xs shadow-apple-sm transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Responder</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
