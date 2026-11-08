import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OffersHero } from "@/components/pages/offers/OffersHero";
import { DealsGrid } from "@/components/pages/offers/DealsGrid";
import { LimitedSpecial } from "@/components/pages/offers/LimitedSpecial";
import { OfferTerms } from "@/components/pages/offers/OfferTerms";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export const metadata: Metadata = {
  title: "Special Deals & Bundles — Flame burger",
  description: "More flavor for less. Discover exclusive bundles, limited-time combos, and saving sets for lunch, dinner, and parties.",
};

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <OffersHero />
      <MarqueeSection />
      <DealsGrid />
      <LimitedSpecial />
      <OfferTerms />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
