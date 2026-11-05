"use client";

import React, { useRef } from "react";
import { useApp } from "@/context/AppContext";
import {
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Store,
  Tag,
} from "lucide-react";

export default function FeaturedProductsCarousel() {
  const { products, addToCart, setSelectedProduct } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = products.filter((p) => p.isFeatured || p.stock < 10);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ofertas y Equipos Industriales</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-dark">
              Materiales Destacados en Tiendas de Sucre
            </h2>
            <p className="text-sm text-apple-secondary mt-1">
              Disponibilidad inmediata en ferreterías y distribuidores industriales locales.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-black/[0.08] bg-white hover:bg-gray-50 flex items-center justify-center text-apple-dark shadow-apple-sm transition-all"
              aria-label="Anterior producto"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-black/[0.08] bg-white hover:bg-gray-50 flex items-center justify-center text-apple-dark shadow-apple-sm transition-all"
              aria-label="Siguiente producto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {featured.map((product) => (
            <div
              key={product.id}
              className="min-w-[270px] sm:min-w-[300px] md:min-w-[320px] rounded-3xl bg-white border border-black/[0.06] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                {/* Image */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative h-44 bg-[#F5F5F7] overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-apple-dark shadow-sm">
                      {product.brand}
                    </span>
                    {product.originalPriceBs && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white shadow-sm">
                        OFERTA
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/60 backdrop-blur-md text-white">
                      Stock: {product.stock} un.
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-apple-secondary mb-1.5">
                    <Store className="w-3.5 h-3.5 text-apple-blue" />
                    <span className="truncate">{product.storeName}</span>
                    <span>•</span>
                    <span>{product.storeZone}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="font-bold text-apple-dark text-sm line-clamp-2 hover:text-apple-blue transition-colors cursor-pointer mb-2"
                  >
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs mb-3">
                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                    <span className="text-apple-secondary text-[11px]">
                      ({product.reviewCount} reseñas)
                    </span>
                  </div>
                </div>
              </div>

              {/* Price and Cart Action */}
              <div className="p-4 pt-0">
                <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between">
                  <div>
                    {product.originalPriceBs && (
                      <span className="text-xs text-apple-secondary line-through block">
                        {product.originalPriceBs} Bs
                      </span>
                    )}
                    <span className="text-lg font-bold text-apple-dark">
                      {product.priceBs}{" "}
                      <span className="text-xs font-semibold text-apple-blue">Bs</span>
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="p-2.5 rounded-2xl bg-apple-blue hover:bg-apple-blueHover text-white shadow-apple-sm transition-all active:scale-95 flex items-center justify-center"
                    title="Agregar al carrito"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

