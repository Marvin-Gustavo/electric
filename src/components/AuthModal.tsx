"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { User } from "@/types";
import {
  X,
  User as UserIcon,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Building2,
  LogIn,
  LogOut,
  Sparkles,
} from "lucide-react";

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, currentUser, login, logout } =
    useApp();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [role, setRole] = useState<User["role"]>("estudiante_azari");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || "usuario@sucre-electrica.bo", role, name || "Usuario Sucre");
  };

  const handleQuickDemo = (demoRole: User["role"], demoName: string, demoEmail: string) => {
    login(demoEmail, demoRole, demoName);
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
              {currentUser ? "Tu Cuenta de Usuario" : "Acceso a la Plataforma"}
            </h3>
            <span className="text-xs text-apple-secondary">
              ElectroSucre & CEA AZARI
            </span>
          </div>

          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentUser ? (
            /* Logged in state */
            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F8FA] border border-black/[0.04]">
                <div className="w-14 h-14 rounded-2xl bg-apple-dark text-white flex items-center justify-center text-xl font-bold">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-apple-dark text-base truncate">
                    {currentUser.name}
                  </h4>
                  <p className="text-xs text-apple-secondary truncate">
                    {currentUser.email}
                  </p>
                  <div className="mt-1 flex items-center gap-1.5">
                    {currentUser.isCeaAzariCertified && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Certificado CEA AZARI
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-xs text-apple-secondary space-y-1 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="font-semibold text-apple-dark">Organización / Afiliación:</div>
                <div>{currentUser.organization || "Sector Eléctrico Chuquisaca"}</div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={logout}
                  className="w-full py-2.5 rounded-full border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Cerrar Sesión</span>
                </button>
                <button
                  onClick={() => setIsAuthModalOpen(false)}
                  className="w-full py-2.5 rounded-full bg-apple-dark text-white text-xs font-medium"
                >
                  Continuar navegando
                </button>
              </div>
            </div>
          ) : (
            /* Login / Register form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role selector */}
              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1.5">
                  Tipo de Perfil
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("estudiante_azari")}
                    className={`p-2.5 rounded-2xl text-left border transition-all text-xs flex items-center gap-2 ${
                      role === "estudiante_azari"
                        ? "border-apple-blue bg-blue-50/70 text-apple-blue font-bold shadow-sm"
                        : "border-black/[0.06] bg-[#F8F8FA] text-apple-dark hover:bg-gray-100"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>Estudiante CEA AZARI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("docente_azari")}
                    className={`p-2.5 rounded-2xl text-left border transition-all text-xs flex items-center gap-2 ${
                      role === "docente_azari"
                        ? "border-emerald-600 bg-emerald-50 text-emerald-800 font-bold shadow-sm"
                        : "border-black/[0.06] bg-[#F8F8FA] text-apple-dark hover:bg-gray-100"
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Egresado / Docente</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("electricista")}
                    className={`p-2.5 rounded-2xl text-left border transition-all text-xs flex items-center gap-2 ${
                      role === "electricista"
                        ? "border-apple-blue bg-blue-50/70 text-apple-blue font-bold shadow-sm"
                        : "border-black/[0.06] bg-[#F8F8FA] text-apple-dark hover:bg-gray-100"
                    }`}
                  >
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>Técnico Particular</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("cliente")}
                    className={`p-2.5 rounded-2xl text-left border transition-all text-xs flex items-center gap-2 ${
                      role === "cliente"
                        ? "border-apple-blue bg-blue-50/70 text-apple-blue font-bold shadow-sm"
                        : "border-black/[0.06] bg-[#F8F8FA] text-apple-dark hover:bg-gray-100"
                    }`}
                  >
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>Cliente / Empresa</span>
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Marcelo Quiroga"
                  required
                  className="w-full px-3.5 py-2 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcelo@ejemplo.bo"
                  required
                  className="w-full px-3.5 py-2 text-xs bg-[#F5F5F7] text-apple-dark rounded-xl border border-black/[0.06] focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white text-xs font-semibold shadow-apple-sm transition-all flex items-center justify-center gap-1.5"
              >
                <LogIn className="w-4 h-4" />
                <span>Ingresar al Sistema</span>
              </button>

              {/* Quick demo presets */}
              <div className="pt-3 border-t border-black/[0.06]">
                <span className="text-[11px] text-apple-secondary block mb-2 font-medium">
                  Accesos rápidos de demostración:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      handleQuickDemo(
                        "estudiante_azari",
                        "Téc. Alumno Azari",
                        "alumno@cea-azari.edu.bo"
                      )
                    }
                    className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-apple-blue text-apple-dark transition-colors"
                  >
                    Estudiante CEA AZARI
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleQuickDemo(
                        "cliente",
                        "Ing. Fábrica Sureña",
                        "gerencia@chocolates-sucre.bo"
                      )
                    }
                    className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-apple-blue text-apple-dark transition-colors"
                  >
                    Cliente Fabril Sucre
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
