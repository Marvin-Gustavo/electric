"use client";

import React from "react";
import { MOCK_SPONSORS } from "@/data/mockData";
import { Factory } from "lucide-react";

export default function SponsorsCarousel() {
  // Duplicate list to achieve continuous infinite marquee loop
  const duplicatedSponsors = [...MOCK_SPONSORS, ...MOCK_SPONSORS];

  return (
    <section className="py-8 bg-white border-b border-black/[0.04] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-apple-secondary tracking-widest uppercase">
          <Factory className="w-3.5 h-3.5 text-apple-blue" />
          <span>Marcas y Fabricantes Industriales Homologados</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden mask-gradient">
        {/* Left & Right gradient fades for Apple polish */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 py-2">
          {duplicatedSponsors.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#F8F8FA] border border-black/[0.04] shadow-sm hover:border-blue-200 transition-colors shrink-0"
            >
              <span className="font-extrabold text-sm tracking-wider text-apple-dark font-mono uppercase">
                {brand.logoText}
              </span>
              <div className="h-3 w-px bg-black/10" />
              <span className="text-[11px] text-apple-secondary font-medium">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
