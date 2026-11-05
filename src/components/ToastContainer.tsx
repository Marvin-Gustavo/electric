"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, Info, AlertTriangle, X } from "lucide-react";

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === "success";
        const isInfo = toast.type === "info";

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-apple-lg border border-black/5 animate-fade-in transition-all"
            style={{ animation: "fadeInUp 0.3s ease-out" }}
          >
            <div className="mt-0.5 shrink-0">
              {isSuccess && (
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
              {isInfo && (
                <div className="w-8 h-8 rounded-full bg-blue-50 text-apple-blue flex items-center justify-center">
                  <Info className="w-5 h-5" />
                </div>
              )}
              {!isSuccess && !isInfo && (
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <h4 className="text-sm font-semibold text-apple-dark">
                {toast.title}
              </h4>
              <p className="text-xs text-apple-secondary mt-0.5 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-apple-secondary hover:text-apple-dark p-1 rounded-lg transition-colors"
              aria-label="Cerrar notificación"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

