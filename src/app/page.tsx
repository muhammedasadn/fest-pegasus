import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { OffersSection } from "@/components/sections/OffersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <CategoriesSection />
      <OffersSection />
    </main>
  );
}
