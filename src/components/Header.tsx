"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import {
  Zap,
  ShoppingBag,
  User as UserIcon,
  Search,
  Menu,
  X,
  ShieldCheck,
  Building2,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const {
    cartItemsCount,
    setIsCartOpen,
    currentUser,
    setIsAuthModalOpen,
    searchQuery,
    setSearchQuery,
    activeSection,
    setActiveSection,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "electricistas", label: "Electricistas" },
    { id: "materiales", label: "Tiendas & Materiales" },
    { id: "foro", label: "Foro Técnico" },
    { id: "cea-azari", label: "Sobre CEA AZARI" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-apple-sm"
          : "bg-white/80 backdrop-blur-md py-4 border-b border-black/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0071E3] to-[#409cff] flex items-center justify-center text-white shadow-apple-glow group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-base sm:text-lg tracking-tight text-apple-dark">
                  ElectroSucre
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-apple-blue font-medium border border-blue-200/60 hidden sm:inline-block">
                  Industrial
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-apple-secondary font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Alianza Técnica CEA AZARI</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/[0.03] p-1 rounded-full border border-black/[0.04]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-white text-apple-dark shadow-apple-sm"
                    : "text-apple-secondary hover:text-apple-dark hover:bg-white/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center relative max-w-xs w-full">
            <Search className="w-4 h-4 text-apple-secondary absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar técnicos, PLC, materiales..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#F5F5F7] hover:bg-[#EBEBEF] focus:bg-white text-apple-dark placeholder-apple-secondary rounded-full border border-transparent focus:border-apple-blue focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 text-xs text-apple-secondary hover:text-apple-dark"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Actions: Cart & Auth */}
          <div className="flex items-center gap-2">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-black/[0.04] text-apple-dark transition-all flex items-center justify-center focus:outline-none"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="w-5 h-5 text-apple-dark" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-apple-blue text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale-in">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User / Login Trigger */}
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] hover:bg-black/[0.07] text-apple-dark transition-all text-xs font-medium focus:outline-none"
            >
              <div className="w-6 h-6 rounded-full bg-apple-dark text-white flex items-center justify-center text-[10px] font-semibold">
                {currentUser ? (
                  currentUser.name.charAt(0)
                ) : (
                  <UserIcon className="w-3.5 h-3.5" />
                )}
              </div>
              <span className="hidden sm:inline-block max-w-[120px] truncate">
                {currentUser ? currentUser.name.split(" ")[0] : "Acceder"}
              </span>
              {currentUser?.isCeaAzariCertified && (
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 hidden sm:inline-block" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-apple-dark hover:bg-black/[0.04] focus:outline-none"
              aria-label="Menu móvil"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3 pt-2 border-t border-black/[0.04]">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-apple-secondary absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar electricistas, motores, PLC..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#F5F5F7] text-apple-dark placeholder-apple-secondary rounded-full border border-transparent focus:border-apple-blue focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-apple-secondary"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-3 bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/[0.06] shadow-apple-lg flex flex-col gap-1.5 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-apple-blue text-white"
                    : "text-apple-dark hover:bg-black/[0.04]"
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
            <div className="mt-2 pt-2 border-t border-black/[0.06] flex items-center justify-between px-2 text-xs text-apple-secondary">
              <span>Sede Técnica: Barrio Azari, Sucre</span>
              <span className="font-semibold text-emerald-600">Norma NB 777</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

