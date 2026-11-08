import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/pages/contact/ContactHero";
import { ContactDetailsGrid } from "@/components/pages/contact/ContactDetailsGrid";
import { ContactForm } from "@/components/pages/contact/ContactForm";
import { LocationMap } from "@/components/pages/contact/LocationMap";
import { ContactFAQ } from "@/components/pages/contact/ContactFAQ";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export const metadata: Metadata = {
  title: "Contact Us & FAQ — Flame burger",
  description: "Get in touch with Flame burger. Check our Brooklyn diner address, phone number, hours, send a direct message, or explore our FAQ.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <ContactHero />
      <MarqueeSection />
      <ContactDetailsGrid />
      <ContactForm />
      <LocationMap />
      <ContactFAQ />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
