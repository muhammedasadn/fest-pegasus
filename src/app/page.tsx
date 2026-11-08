import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { FeaturedMenuSection } from "@/components/sections/FeaturedMenuSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { OpeningHoursSection } from "@/components/sections/OpeningHoursSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CateringEventsSection } from "@/components/sections/CateringEventsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <CategoriesSection />
      <OffersSection />
      <FeaturedMenuSection />
      <AboutSection />
      <OpeningHoursSection />
      <WhyChooseUsSection />
      <CateringEventsSection />
      <TestimonialsSection />
      <FAQSection />
      <GallerySection />
      <BlogPreviewSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
