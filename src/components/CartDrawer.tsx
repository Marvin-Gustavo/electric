"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Store,
} from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartItemsCount,
    checkoutViaWhatsApp,
    addToast,
    currentUser,
  } = useApp();

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  if (!isCartOpen) return null;

  const handleSimulatePurchase = () => {
    const code = "SUC-" + Math.floor(100000 + Math.random() * 900000);
    setOrderCode(code);
    setOrderCompleted(true);
    addToast(
      "Compra Simulada con Éxito",
      `Orden #${code} generada para entrega en Sucre.`,
      "success"
    );
  };

  const handleFinish = () => {
    clearCart();
    setOrderCompleted(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm animate-fade-in flex justify-end">
      <div
        className="relative w-full max-w-md bg-white h-full shadow-apple-lg border-l border-black/10 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-black/[0.06] bg-[#FBFBFC] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-apple-blue/10 text-apple-blue flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-apple-dark text-base">
                Carrito de Suministros
              </h3>
              <span className="text-xs text-apple-secondary">
                {cartItemsCount} {cartItemsCount === 1 ? "artículo" : "artículos"}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full text-apple-secondary hover:text-apple-dark hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-5 overflow-y-auto flex-1">
          {orderCompleted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-apple-dark">
                ¡Pedido Confirmado!
              </h4>
              <p className="text-xs text-apple-secondary mt-1 max-w-xs">
                Se ha generado el comprobante de cotización para retiro o envío en Sucre.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-[#F8F8FA] border border-black/[0.05] w-full text-left">
                <div className="flex justify-between text-xs py-1 border-b border-black/[0.04]">
                  <span className="text-apple-secondary">Código de Orden:</span>
                  <strong className="text-apple-dark font-mono">{orderCode}</strong>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-black/[0.04]">
                  <span className="text-apple-secondary">Cliente:</span>
                  <span className="text-apple-dark font-medium">{currentUser?.name || "Cliente Particular"}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-black/[0.04]">
                  <span className="text-apple-secondary">Ciudad:</span>
                  <span className="text-apple-dark font-medium">Sucre, Chuquisaca</span>
                </div>
                <div className="flex justify-between text-xs py-1 pt-2">
                  <span className="text-apple-dark font-bold">Total a Pagar:</span>
                  <span className="text-apple-blue font-bold text-sm">{cartTotal} Bs</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 w-full">
                <button
                  onClick={checkoutViaWhatsApp}
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-apple-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Detalles a WhatsApp Tienda</span>
                </button>

                <button
                  onClick={handleFinish}
                  className="w-full py-2.5 rounded-full bg-[#F5F5F7] hover:bg-gray-200 text-apple-dark text-xs font-medium transition-colors"
                >
                  Cerrar y Limpiar Carrito
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F5F5F7] text-apple-secondary flex items-center justify-center mb-3">
                <ShoppingBag className="w-8 h-8 opacity-40" />
              </div>
              <h4 className="font-bold text-apple-dark text-base">
                Tu carrito está vacío
              </h4>
              <p className="text-xs text-apple-secondary mt-1 max-w-xs">
                Explora el catálogo de materiales y agrega conductores, contactores o protecciones.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-5 px-5 py-2 rounded-full bg-apple-dark text-white text-xs font-medium"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-2xl bg-[#FBFBFC] border border-black/[0.05] flex gap-3 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-gray-100 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-apple-dark truncate">
                      {item.product.name}
                    </h5>
                    <p className="text-[11px] text-apple-secondary truncate">
                      {item.product.storeName} ({item.product.storeZone})
                    </p>
                    <div className="text-xs font-bold text-apple-dark mt-1">
                      {item.product.priceBs} Bs{" "}
                      <span className="text-[10px] font-normal text-apple-secondary">
                        x {item.quantity} = {item.product.priceBs * item.quantity} Bs
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-black/[0.08] bg-white rounded-full px-1 py-0.5 shadow-sm">
                        <button
                          onClick={() =>
                            updateCartQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="w-5 h-5 flex items-center justify-center text-apple-dark hover:bg-gray-100 rounded-full"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-apple-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateCartQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="w-5 h-5 flex items-center justify-center text-apple-dark hover:bg-gray-100 rounded-full"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-apple-secondary hover:text-rose-600 p-1 transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Local Sucre Delivery Notice */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5 text-xs text-apple-dark">
                <Truck className="w-4 h-4 text-apple-blue shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-apple-blue font-semibold">
                    Entrega local en Sucre:
                  </strong>{" "}
                  Retiro coordinado en tienda o despacho en el radio urbano (Zona Azari, San Roque, Lajastambo, Centro).
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {!orderCompleted && cart.length > 0 && (
          <div className="p-5 border-t border-black/[0.06] bg-[#FBFBFC] space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-apple-secondary">
                <span>Subtotal materiales:</span>
                <span>{cartTotal} Bs</span>
              </div>
              <div className="flex justify-between text-apple-secondary">
                <span>Coordinación de despacho:</span>
                <span className="text-emerald-600 font-medium">A convenir</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-apple-dark pt-1 border-t border-black/[0.04]">
                <span>Total Estimado:</span>
                <span className="text-apple-blue text-base">{cartTotal} Bs</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={checkoutViaWhatsApp}
                className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-apple-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir / Cotizar vía WhatsApp</span>
              </button>

              <button
                onClick={handleSimulatePurchase}
                className="w-full py-2.5 rounded-full bg-apple-dark hover:bg-black text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <span>Simular Compra Inmediata</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
