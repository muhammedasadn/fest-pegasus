import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/pages/about/AboutHero";
import { OurStorySplit } from "@/components/pages/about/OurStorySplit";
import { MissionBanner } from "@/components/pages/about/MissionBanner";
import { ValuesGrid } from "@/components/pages/about/ValuesGrid";
import { AboutStats } from "@/components/pages/about/AboutStats";
import { OpeningHoursSection } from "@/components/sections/OpeningHoursSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export const metadata: Metadata = {
  title: "Our Story — Flame burger",
  description: "Good food. Great energy. That's Flame burger. Discover our passion for fresh smash burgers, artisan pizza, and neighborly hospitality.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <AboutHero />
      <MarqueeSection />
      <OurStorySplit />
      <MissionBanner />
      <ValuesGrid />
      <AboutStats />
      <OpeningHoursSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
