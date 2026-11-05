"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { X, Star, Send } from "lucide-react";

export default function ReviewModal() {
  const { reviewTarget, setReviewTarget, rateElectrician, rateProduct, currentUser } =
    useApp();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [authorName, setAuthorName] = useState(currentUser?.name || "");

  if (!reviewTarget) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    if (reviewTarget.type === "electrician") {
      rateElectrician(
        reviewTarget.id,
        rating,
        comment.trim(),
        authorName.trim() || "Cliente en Sucre"
      );
    } else {
      rateProduct(
        reviewTarget.id,
        rating,
        comment.trim(),
        authorName.trim() || "Cliente en Sucre"
      );
    }

    setReviewTarget(null);
    setComment("");
    setRating(5);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-apple-lg border border-black/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#FBFBFC]">
          <div>
            <h3 className="font-bold text-apple-dark text-base">
              {reviewTarget.type === "electrician"
                ? "Valorar Profesional"
                : "Calificar Material Eléctrico"}
            </h3>
            <p className="text-xs text-apple-secondary truncate max-w-xs">
              {reviewTarget.name}
            </p>
          </div>

          <button
            onClick={() => setReviewTarget(null)}
            className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Star selector */}
          <div className="text-center py-2">
            <span className="block text-xs font-semibold text-apple-secondary mb-2">
              Tu Puntuación (1 a 5 estrellas)
            </span>
            <div className="flex items-center justify-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => {
                const filled =
                  hoverRating > 0 ? star <= hoverRating : star <= rating;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 text-2xl transition-transform hover:scale-125 focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        filled
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300 fill-gray-100"
                      } transition-colors`}
                    />
                  </button>
                );
              })}
            </div>
            <span className="text-xs font-bold text-apple-dark mt-2 block">
              {rating === 5 && "Excelente - Totalmente recomendado"}
              {rating === 4 && "Muy bueno - Cumplió expectativas"}
              {rating === 3 && "Regular - Aceptable"}
              {rating === 2 && "Regular bajo - Detalles por mejorar"}
              {rating === 1 && "Deficiente - No recomendado"}
            </span>
          </div>

          {/* Author Name */}
          <div>
            <label className="block text-xs font-semibold text-apple-dark mb-1">
              Tu Nombre o Empresa en Sucre
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Ej: Ing. Jorge Valdivia / Molinos Sucre"
              required
              className="w-full px-3.5 py-2 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue"
            />
          </div>

          {/* Comment */}
          <div>
            <label className="block text-xs font-semibold text-apple-dark mb-1">
              Tu Reseña Técnica o Experiencia
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comparte detalles del trabajo realizado, cumplimiento de plazos, calidad del montaje o rendimiento del equipo..."
              rows={3}
              required
              className="w-full p-3 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={() => setReviewTarget(null)}
              className="px-4 py-2 rounded-full text-xs font-medium text-apple-secondary hover:text-apple-dark"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white text-xs font-semibold shadow-apple-sm transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Valoración</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
