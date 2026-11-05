"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Electrician,
  Product,
  ForumThread,
  CartItem,
  User,
  ToastNotification,
  Review,
  ForumReply,
} from "@/types";
import {
  MOCK_ELECTRICIANS,
  MOCK_PRODUCTS,
  MOCK_FORUM_THREADS,
} from "@/data/mockData";

interface ReviewTarget {
  type: "electrician" | "product";
  id: string;
  name: string;
}

interface AppContextType {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartTotal: number;
  cartItemsCount: number;

  // Electricians
  electricians: Electrician[];
  selectedElectrician: Electrician | null;
  setSelectedElectrician: (e: Electrician | null) => void;
  rateElectrician: (
    id: string,
    rating: number,
    comment: string,
    authorName: string
  ) => void;

  // Products
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product | null) => void;
  rateProduct: (
    id: string,
    rating: number,
    comment: string,
    authorName: string
  ) => void;

  // Forum
  forumThreads: ForumThread[];
  selectedThread: ForumThread | null;
  setSelectedThread: (t: ForumThread | null) => void;
  upvoteThread: (id: string) => void;
  downvoteThread: (id: string) => void;
  addThreadReply: (
    threadId: string,
    content: string,
    author: string,
    isCeaAzari?: boolean
  ) => void;
  markReplyAsSolution: (threadId: string, replyId: string) => void;
  createThread: (
    title: string,
    content: string,
    tags: string[],
    author: string,
    isCeaAzari: boolean
  ) => void;
  isNewThreadModalOpen: boolean;
  setIsNewThreadModalOpen: (open: boolean) => void;

  // Review Modal
  reviewTarget: ReviewTarget | null;
  setReviewTarget: (target: ReviewTarget | null) => void;

  // User Auth
  currentUser: User | null;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  login: (email: string, role: User["role"], name: string) => void;
  logout: () => void;

  // Search & Navigation
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;

  // Toasts
  toasts: ToastNotification[];
  addToast: (
    title: string,
    message: string,
    type?: "success" | "info" | "warning"
  ) => void;
  removeToast: (id: string) => void;

  // WhatsApp Order helper
  checkoutViaWhatsApp: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [electricians, setElectricians] =
    useState<Electrician[]>(MOCK_ELECTRICIANS);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [forumThreads, setForumThreads] =
    useState<ForumThread[]>(MOCK_FORUM_THREADS);

  // Cart
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals & Details
  const [selectedElectrician, setSelectedElectrician] =
    useState<Electrician | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedThread, setSelectedThread] = useState<ForumThread | null>(
    null
  );
  const [reviewTarget, setReviewTarget] = useState<ReviewTarget | null>(null);
  const [isNewThreadModalOpen, setIsNewThreadModalOpen] = useState(false);

  // Auth
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: "usr-guest",
    name: "Téc. Estudiante Azari",
    email: "estudiante@cea-azari.edu.bo",
    role: "estudiante_azari",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    organization: "CEA AZARI - Electricidad Industrial",
    isCeaAzariCertified: true,
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Navigation & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("inicio");

  // Toasts
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const addToast = (
    title: string,
    message: string,
    type: "success" | "info" | "warning" = "success"
  ) => {
    const id = "toast-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart actions
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    addToast(
      "Agregado al Carrito",
      `${product.name.slice(0, 35)}... se añadió a tu pedido.`,
      "success"
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast("Producto eliminado", "Se quitó del carrito de compras.", "info");
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.priceBs * item.quantity,
    0
  );

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Rate Electrician
  const rateElectrician = (
    id: string,
    rating: number,
    comment: string,
    authorName: string
  ) => {
    const newReview: Review = {
      id: "rev-" + Date.now(),
      author: authorName || "Usuario de Sucre",
      rating,
      comment,
      date: "Hoy",
    };

    setElectricians((prev) =>
      prev.map((el) => {
        if (el.id !== id) return el;
        const newCount = el.reviewCount + 1;
        const newRating = Number(
          ((el.rating * el.reviewCount + rating) / newCount).toFixed(2)
        );
        const updated = {
          ...el,
          rating: newRating,
          reviewCount: newCount,
          reviews: [newReview, ...el.reviews],
        };
        if (selectedElectrician?.id === id) {
          setSelectedElectrician(updated);
        }
        return updated;
      })
    );

    addToast(
      "Valoración Registrada",
      `Gracias por calificar a ${authorName || "este profesional"}.`,
      "success"
    );
  };

  // Rate Product
  const rateProduct = (
    id: string,
    rating: number,
    comment: string,
    authorName: string
  ) => {
    setProducts((prev) =>
      prev.map((prod) => {
        if (prod.id !== id) return prod;
        const newCount = prod.reviewCount + 1;
        const newRating = Number(
          ((prod.rating * prod.reviewCount + rating) / newCount).toFixed(2)
        );
        const updated = {
          ...prod,
          rating: newRating,
          reviewCount: newCount,
        };
        if (selectedProduct?.id === id) {
          setSelectedProduct(updated);
        }
        return updated;
      })
    );

    addToast(
      "Reseña Publicada",
      "Tu opinión sobre el material eléctrico ha sido compartida.",
      "success"
    );
  };

  // Forum Actions
  const upvoteThread = (id: string) => {
    setForumThreads((prev) =>
      prev.map((thread) => {
        if (thread.id !== id) return thread;
        const isAlreadyUpvoted = thread.userVoted === "up";
        const delta = isAlreadyUpvoted ? -1 : thread.userVoted === "down" ? 2 : 1;
        const updated = {
          ...thread,
          upvotes: thread.upvotes + delta,
          userVoted: isAlreadyUpvoted ? null : ("up" as const),
        };
        if (selectedThread?.id === id) setSelectedThread(updated);
        return updated;
      })
    );
  };

  const downvoteThread = (id: string) => {
    setForumThreads((prev) =>
      prev.map((thread) => {
        if (thread.id !== id) return thread;
        const isAlreadyDownvoted = thread.userVoted === "down";
        const delta = isAlreadyDownvoted ? 1 : thread.userVoted === "up" ? -2 : -1;
        const updated = {
          ...thread,
          upvotes: thread.upvotes + delta,
          userVoted: isAlreadyDownvoted ? null : ("down" as const),
        };
        if (selectedThread?.id === id) setSelectedThread(updated);
        return updated;
      })
    );
  };

  const addThreadReply = (
    threadId: string,
    content: string,
    author: string,
    isCeaAzari = true
  ) => {
    const newReply: ForumReply = {
      id: "rep-" + Date.now(),
      author: author || currentUser?.name || "Técnico Sucre",
      authorRole: isCeaAzari ? "Especialista CEA AZARI" : "Técnico Electricista",
      isCeaAzari,
      avatar:
        currentUser?.avatar ||
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content,
      date: "Hace unos instantes",
      upvotes: 0,
      isSolution: false,
    };

    setForumThreads((prev) =>
      prev.map((thread) => {
        if (thread.id !== threadId) return thread;
        const updated = {
          ...thread,
          replies: [...thread.replies, newReply],
        };
        if (selectedThread?.id === threadId) setSelectedThread(updated);
        return updated;
      })
    );

    addToast(
      "Respuesta Publicada",
      "Tu aporte técnico fue agregado a la discusión.",
      "success"
    );
  };

  const markReplyAsSolution = (threadId: string, replyId: string) => {
    setForumThreads((prev) =>
      prev.map((thread) => {
        if (thread.id !== threadId) return thread;
        const updatedReplies = thread.replies.map((rep) => ({
          ...rep,
          isSolution: rep.id === replyId ? !rep.isSolution : rep.isSolution,
        }));
        const anySolved = updatedReplies.some((r) => r.isSolution);
        const updated = {
          ...thread,
          replies: updatedReplies,
          isSolved: anySolved,
        };
        if (selectedThread?.id === threadId) setSelectedThread(updated);
        return updated;
      })
    );

    addToast(
      "Solución Actualizada",
      "Se ha marcado la respuesta como solución técnica verificada.",
      "info"
    );
  };

  const createThread = (
    title: string,
    content: string,
    tags: string[],
    author: string,
    isCeaAzari: boolean
  ) => {
    const newThread: ForumThread = {
      id: "thread-" + Date.now(),
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      content,
      author: author || currentUser?.name || "Técnico Electricista",
      authorRole: isCeaAzari ? "Comunidad CEA AZARI" : "Profesional Eléctrico",
      isCeaAzari,
      authorAvatar:
        currentUser?.avatar ||
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      date: "Recién publicado",
      tags: tags.length ? tags : ["Electricidad Industrial", "Sucre"],
      upvotes: 1,
      userVoted: "up",
      replies: [],
      isSolved: false,
      views: 1,
    };

    setForumThreads((prev) => [newThread, ...prev]);
    setIsNewThreadModalOpen(false);
    addToast(
      "Consulta Publicada",
      "Tu pregunta está ahora visible para la comunidad técnica de Sucre.",
      "success"
    );
  };

  // Auth mock
  const login = (email: string, role: User["role"], name: string) => {
    const isAzari = role === "estudiante_azari" || role === "docente_azari";
    setCurrentUser({
      id: "usr-" + Date.now(),
      name: name || "Técnico Profesional",
      email,
      role,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      organization: isAzari
        ? "CEA AZARI - Electricidad Industrial"
        : "Sector Eléctrico Chuquisaca",
      isCeaAzariCertified: isAzari,
    });
    setIsAuthModalOpen(false);
    addToast(
      "Sesión Iniciada",
      `Bienvenido a ElectroSucre, ${name || "Colega"}.`,
      "success"
    );
  };

  const logout = () => {
    setCurrentUser(null);
    addToast("Sesión Cerrada", "Has salido del sistema con éxito.", "info");
  };

  // WhatsApp checkout simulation
  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsText = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.product.name} (Cant: ${item.quantity}) - ${
            item.product.priceBs * item.quantity
          } Bs [Tienda: ${item.product.storeName}]`
      )
      .join("\n");

    const message = `*COTIZACIÓN / PEDIDO ELECTRICO - PLATAFORMA ELECTROSUCRE & CEA AZARI*\n\nHola, deseo cotizar y coordinar la compra de los siguientes materiales en Sucre:\n\n${itemsText}\n\n*TOTAL ESTIMADO:* ${cartTotal} Bs\n*CLIENTE:* ${currentUser?.name || "Cliente Particular"}\n*CIUDAD:* Sucre, Chuquisaca, Bolivia\n\nPor favor confirmar disponibilidad y métodos de entrega/pago. Gracias!`;

    const encoded = encodeURIComponent(message);
    // Open WhatsApp Web/App
    const primaryPhone = "59172890001"; // ElectroSucre center
    window.open(`https://wa.me/${primaryPhone}?text=${encoded}`, "_blank");
    addToast(
      "Pedido Enviado a WhatsApp",
      "Se abrió la orden de compra detallada para coordinar en Sucre.",
      "success"
    );
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        cartItemsCount,

        electricians,
        selectedElectrician,
        setSelectedElectrician,
        rateElectrician,

        products,
        selectedProduct,
        setSelectedProduct,
        rateProduct,

        forumThreads,
        selectedThread,
        setSelectedThread,
        upvoteThread,
        downvoteThread,
        addThreadReply,
        markReplyAsSolution,
        createThread,
        isNewThreadModalOpen,
        setIsNewThreadModalOpen,

        reviewTarget,
        setReviewTarget,

        currentUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        login,
        logout,

        searchQuery,
        setSearchQuery,
        activeSection,
        setActiveSection,

        toasts,
        addToast,
        removeToast,

        checkoutViaWhatsApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
