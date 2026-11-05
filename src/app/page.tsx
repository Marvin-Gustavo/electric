import HeroSection from "@/components/HeroSection";
import SponsorsCarousel from "@/components/SponsorsCarousel";
import FeaturedElectriciansCarousel from "@/components/FeaturedElectriciansCarousel";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel";
import ElectriciansSection from "@/components/ElectriciansSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import ForumSection from "@/components/ForumSection";
import CeAzariSection from "@/components/CeAzariSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Impact Apple Hero */}
      <HeroSection />

      {/* 2. Industrial Sponsors Ribbon Carousel */}
      <SponsorsCarousel />

      {/* 3. Featured Electricians Carousel (CEA AZARI Certified) */}
      <FeaturedElectriciansCarousel />

      {/* 4. Featured Electrical Supplies & Offers Carousel */}
      <FeaturedProductsCarousel />

      {/* 5. Directory Section: 15 Electricians with Filters & Actions */}
      <ElectriciansSection />

      {/* 6. Marketplace Section: 15 Products with Local Stores & Filters */}
      <MarketplaceSection />

      {/* 7. Technical Forum: 15 Discussion Threads & Q&A Board */}
      <ForumSection />

      {/* 8. Institutional Section: Centro de Educación Alternativa AZARI */}
      <CeAzariSection />
    </div>
  );
}

