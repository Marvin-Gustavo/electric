"use client";

import React, { useState, useMemo } from "react";
import { useApp } from "@/context/AppContext";
import { Product, ProductCategory } from "@/types";
import {
  ShoppingBag,
  Star,
  Store,
  Tag,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  Phone,
  MessageCircle,
  Share2,
  Check,
  Eye,
} from "lucide-react";

export default function MarketplaceSection() {
  const {
    products,
    addToCart,
    setSelectedProduct,
    setReviewTarget,
    setIsCartOpen,
    searchQuery,
    addToast,
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStore, setSelectedStore] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "priceAsc" | "priceDesc" | "rating">("featured");

  const categories: ProductCategory[] = [
    "Conductores",
    "Protecciones y Termomagnéticos",
    "Motores y Variadores",
    "Herramientas e Instrumentación",
    "Sensores y Contactores",
    "Tableros y Gabinetes",
    "Iluminación Industrial",
  ];

  // Unique stores in Sucre
  const stores = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.storeName)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Global search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesBrand = prod.brand.toLowerCase().includes(q);
        const matchesCat = prod.category.toLowerCase().includes(q);
        const matchesStore = prod.storeName.toLowerCase().includes(q);
        const matchesSku = prod.codeSKU.toLowerCase().includes(q);
        if (
          !matchesName &&
          !matchesBrand &&
          !matchesCat &&
          !matchesStore &&
          !matchesSku
        ) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== "all" && prod.category !== selectedCategory) {
        return false;
      }

      // Store filter
      if (selectedStore !== "all" && prod.storeName !== selectedStore) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "featured") return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      if (sortBy === "priceAsc") return a.priceBs - b.priceBs;
      if (sortBy === "priceDesc") return b.priceBs - a.priceBs;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [products, searchQuery, selectedCategory, selectedStore, sortBy]);

  const handleShare = (prod: Product) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}/#producto-${prod.id} - ${prod.name} (${prod.priceBs} Bs) en ${prod.storeName}, Sucre`
      );
      addToast(
        "Enlace Copiado",
        `Se copió el enlace de ${prod.name.slice(0, 30)}...`,
        "info"
      );
    }
  };

  const handleBuyNow = (prod: Product) => {
    addToCart(prod, 1);
    setIsCartOpen(true);
  };

  return (
    <section id="materiales" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <Store className="w-4 h-4 text-apple-blue" />
            <span>Marketplace Local en Sucre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-apple-dark">
            Materiales y Equipamiento Eléctrico
          </h2>
          <p className="text-base text-apple-secondary mt-3">
            Cotiza y adquiere conductores, contactores, variadores, guardamotores e
            instrumental con stock verificado en distribuidoras de Sucre.
          </p>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all ${
              selectedCategory === "all"
                ? "bg-apple-dark text-white shadow-apple-sm"
                : "bg-[#F5F5F7] text-apple-secondary hover:text-apple-dark hover:bg-gray-200"
            }`}
          >
            Todos ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all ${
                selectedCategory === cat
                  ? "bg-apple-dark text-white shadow-apple-sm"
                  : "bg-[#F5F5F7] text-apple-secondary hover:text-apple-dark hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters and Sorting bar */}
        <div className="p-4 rounded-2xl bg-[#F8F8FA] border border-black/[0.05] flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Store Select */}
            <div className="relative">
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="appearance-none pl-3.5 pr-8 py-2 text-xs font-medium bg-white text-apple-dark rounded-full border border-black/[0.08] focus:outline-none focus:ring-2 focus:ring-apple-blue transition-all cursor-pointer shadow-apple-sm"
              >
                <option value="all">Todas las Tiendas en Sucre</option>
                {stores.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-apple-secondary absolute right-3 top-3 pointer-events-none" />
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none pl-3.5 pr-8 py-2 text-xs font-medium bg-white text-apple-dark rounded-full border border-black/[0.08] focus:outline-none focus:ring-2 focus:ring-apple-blue transition-all cursor-pointer shadow-apple-sm"
              >
                <option value="featured">Destacados y Ofertas</option>
                <option value="priceAsc">Precio: Menor a Mayor</option>
                <option value="priceDesc">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Calificados</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-apple-secondary absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div className="text-xs text-apple-secondary">
            <span>{filteredProducts.length} productos disponibles en Sucre</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rounded-3xl bg-white border border-black/[0.06] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image & Badges */}
                <div
                  onClick={() => setSelectedProduct(prod)}
                  className="relative h-48 bg-[#F5F5F7] overflow-hidden cursor-pointer"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-apple-dark shadow-sm">
                      {prod.brand}
                    </span>
                    {prod.originalPriceBs && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white shadow-sm">
                        OFERTA ESPECIAL
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white">
                      Stock: {prod.stock}
                    </span>
                  </div>

                  {/* Quick preview overlay button */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-white text-apple-dark text-xs font-semibold shadow-apple-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ficha Técnica</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-apple-secondary mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-apple-blue font-medium text-[10px]">
                      {prod.category}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400">
                      {prod.codeSKU}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedProduct(prod)}
                    className="font-bold text-apple-dark text-base hover:text-apple-blue transition-colors cursor-pointer line-clamp-2 mb-2"
                  >
                    {prod.name}
                  </h3>

                  <div className="flex items-center justify-between text-xs mb-3">
                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{prod.rating}</span>
                      <span className="text-apple-secondary font-normal text-[11px]">
                        ({prod.reviewCount})
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-apple-secondary text-[11px]">
                      <Store className="w-3.5 h-3.5 text-apple-secondary" />
                      <span className="truncate max-w-[130px] font-medium text-apple-dark">
                        {prod.storeName}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-apple-secondary line-clamp-2 leading-relaxed mb-3">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between mb-3">
                  <div>
                    {prod.originalPriceBs && (
                      <span className="text-xs text-apple-secondary line-through block">
                        {prod.originalPriceBs} Bs
                      </span>
                    )}
                    <span className="text-xl font-bold text-apple-dark">
                      {prod.priceBs}{" "}
                      <span className="text-xs font-semibold text-apple-blue">
                        Bs
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Share */}
                    <button
                      onClick={() => handleShare(prod)}
                      className="p-2 rounded-xl text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
                      title="Compartir producto"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    {/* Rate */}
                    <button
                      onClick={() =>
                        setReviewTarget({
                          type: "product",
                          id: prod.id,
                          name: prod.name,
                        })
                      }
                      className="p-2 rounded-xl text-amber-500 hover:bg-amber-50 transition-colors"
                      title="Calificar producto"
                    >
                      <Star className="w-4 h-4" />
                    </button>

                    {/* WhatsApp store */}
                    <a
                      href={`https://wa.me/${prod.storePhone.replace(
                        /\+/g,
                        ""
                      )}?text=Hola%20${encodeURIComponent(
                        prod.storeName
                      )},%20deseo%20consultar%20disponibilidad%20del%20producto:%20${encodeURIComponent(
                        prod.name
                      )}%20(SKU:%20${prod.codeSKU})%20por%20${prod.priceBs}%20Bs.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                      title="Consultar a la tienda en Sucre"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => addToCart(prod)}
                    className="py-2.5 px-3 rounded-full bg-[#F5F5F7] hover:bg-[#EAEAEA] text-apple-dark font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Al Carrito</span>
                  </button>

                  <button
                    onClick={() => handleBuyNow(prod)}
                    className="py-2.5 px-3 rounded-full bg-apple-blue hover:bg-apple-blueHover text-white font-medium text-xs transition-all shadow-apple-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Comprar Ahora</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#F9F9FB] rounded-3xl border border-black/[0.06] p-8 max-w-lg mx-auto">
            <Store className="w-12 h-12 text-apple-secondary mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-apple-dark">
              No hay productos con estos filtros
            </h3>
            <p className="text-xs text-apple-secondary mt-1">
              Intenta seleccionar otra categoría o restablecer la búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedStore("all");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-apple-blue text-white text-xs font-medium"
            >
              Mostrar todos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

