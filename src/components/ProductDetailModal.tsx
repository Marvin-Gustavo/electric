"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  X,
  Star,
  Store,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Share2,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";

export default function ProductDetailModal() {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    setIsCartOpen,
    setReviewTarget,
    addToast,
  } = useApp();

  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const prod = selectedProduct;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}/#producto-${prod.id} - ${prod.name} en ${prod.storeName}, Sucre`
      );
      addToast(
        "Enlace Copiado",
        `Se copió el enlace del producto al portapapeles.`,
        "info"
      );
    }
  };

  const handleAddToCart = () => {
    addToCart(prod, quantity);
  };

  const handleDirectBuy = () => {
    addToCart(prod, quantity);
    setIsCartOpen(true);
    setSelectedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-apple-lg border border-black/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#FBFBFC]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-apple-secondary">
              Ficha Técnica de Material
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-apple-blue font-semibold text-[10px]">
              {prod.category}
            </span>
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
              onClick={() => setSelectedProduct(null)}
              className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 divide-y divide-black/[0.06]">
          {/* Main Info with Image */}
          <div className="pb-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-56 h-48 sm:h-56 rounded-2xl bg-[#F5F5F7] overflow-hidden shrink-0 border border-black/[0.04]">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-apple-blue">
                    {prod.brand}
                  </span>
                  <span className="font-mono text-xs text-apple-secondary">
                    SKU: {prod.codeSKU}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-apple-dark leading-snug">
                  {prod.name}
                </h3>

                <div className="flex items-center gap-3 text-xs text-apple-secondary mt-2">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{prod.rating}</span>
                    <span className="text-apple-secondary font-normal">
                      ({prod.reviewCount} valoraciones)
                    </span>
                  </div>
                  <span>•</span>
                  <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                    {prod.stock} disponibles en Sucre
                  </span>
                </div>

                <div className="mt-4 p-3 rounded-2xl bg-[#F8F8FA] border border-black/[0.04]">
                  <div className="text-xs text-apple-secondary">Precio unitario:</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-apple-dark">
                      {prod.priceBs}{" "}
                      <span className="text-sm font-bold text-apple-blue">Bs</span>
                    </span>
                    {prod.originalPriceBs && (
                      <span className="text-xs text-apple-secondary line-through">
                        {prod.originalPriceBs} Bs
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-emerald-600 font-medium block mt-0.5">
                    {prod.warranty}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-5">
            <h4 className="text-xs font-bold text-apple-dark uppercase tracking-wider mb-2">
              Descripción del Producto
            </h4>
            <p className="text-sm text-apple-secondary leading-relaxed">
              {prod.description}
            </p>
          </div>

          {/* Specifications Table */}
          <div className="py-5">
            <h4 className="text-xs font-bold text-apple-dark uppercase tracking-wider mb-3">
              Especificaciones Técnicas (Homologación NB 777)
            </h4>
            <div className="rounded-2xl border border-black/[0.06] overflow-hidden">
              <table className="w-full text-xs text-left">
                <tbody>
                  {prod.specs.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-[#FBFBFC]" : "bg-white"}
                    >
                      <td className="px-4 py-2.5 font-medium text-apple-dark border-r border-black/[0.04] w-1/2">
                        {spec.label}
                      </td>
                      <td className="px-4 py-2.5 text-apple-secondary font-mono">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Store Location in Sucre */}
          <div className="py-5">
            <h4 className="text-xs font-bold text-apple-dark uppercase tracking-wider mb-3">
              Proveedor Local en Sucre
            </h4>
            <div className="p-4 rounded-2xl bg-[#F8F8FA] border border-black/[0.04] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-apple-blue flex items-center justify-center font-bold">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-apple-dark">
                    {prod.storeName}
                  </h5>
                  <p className="text-xs text-apple-secondary">
                    Zona: {prod.storeZone}, Sucre, Chuquisaca
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${prod.storePhone}`}
                  className="p-2 rounded-xl border border-black/[0.08] bg-white hover:bg-gray-50 text-apple-dark text-xs transition-colors"
                  title="Llamar a la tienda"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${prod.storePhone.replace(
                    /\+/g,
                    ""
                  )}?text=Hola,%20quisiera%20consultar%20por%20${encodeURIComponent(
                    prod.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs transition-colors"
                  title="Escribir por WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F8F8FA] border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-apple-secondary font-medium">Cantidad:</span>
            <div className="flex items-center border border-black/[0.1] bg-white rounded-full p-1 shadow-sm">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-full flex items-center justify-center text-apple-dark hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-bold text-apple-dark">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(prod.stock, quantity + 1))}
                className="w-7 h-7 rounded-full flex items-center justify-center text-apple-dark hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-black/[0.1] bg-white hover:bg-gray-50 text-apple-dark text-xs font-medium transition-all flex items-center justify-center gap-2 shadow-apple-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Añadir ({prod.priceBs * quantity} Bs)</span>
            </button>

            <button
              onClick={handleDirectBuy}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white text-xs font-medium shadow-apple-sm transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Comprar Ahora</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

