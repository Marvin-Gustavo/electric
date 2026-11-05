import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ElectricianDetailModal from "@/components/ElectricianDetailModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import ThreadDetailModal from "@/components/ThreadDetailModal";
import NewThreadModal from "@/components/NewThreadModal";
import ReviewModal from "@/components/ReviewModal";
import AuthModal from "@/components/AuthModal";
import ToastContainer from "@/components/ToastContainer";

export const metadata: Metadata = {
  title: "ElectroSucre & CEA AZARI - Electricidad Industrial en Sucre, Bolivia",
  description:
    "Plataforma industrial para la ciudad de Sucre: directorio de electricistas egresados del CEA AZARI certificados bajo la norma NB 777, marketplace de materiales y foro técnico comunitario.",
  keywords: [
    "Electricidad Industrial Sucre",
    "CEA AZARI",
    "Electricistas en Sucre",
    "Norma NB 777",
    "Chuquisaca",
    "Motores trifásicos",
    "Automatización PLC",
    "Tableros de fuerza",
  ],
  authors: [{ name: "ElectroSucre & Comunidad Técnica CEA AZARI" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F5F5F7] text-apple-dark antialiased">
        <AppProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />

          {/* Interactive Modals and Drawers */}
          <CartDrawer />
          <ElectricianDetailModal />
          <ProductDetailModal />
          <ThreadDetailModal />
          <NewThreadModal />
          <ReviewModal />
          <AuthModal />
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
