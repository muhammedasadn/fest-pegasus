import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventsHero } from "@/components/pages/events/EventsHero";
import { OccasionsGrid } from "@/components/pages/events/OccasionsGrid";
import { CateringPackages } from "@/components/pages/events/CateringPackages";
import { CateringSteps } from "@/components/pages/events/CateringSteps";
import { CateringForm } from "@/components/pages/events/CateringForm";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export const metadata: Metadata = {
  title: "Catering & Group Events — Flame burger",
  description: "Bring the flavor to every gathering. Seamless catering packages, party boxes, and group platters for office lunches, birthdays, and celebrations.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <EventsHero />
      <MarqueeSection />
      <OccasionsGrid />
      <CateringPackages />
      <CateringSteps />
      <CateringForm />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
