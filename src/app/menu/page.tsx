import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuClient } from "@/components/pages/menu/MenuClient";

export const metadata: Metadata = {
  title: "The Menu — Flame burger",
  description: "Explore our full menu of smash burgers, artisan stone-baked pizza, loaded fries, hand-spun shakes, and fresh desserts.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <MenuClient />
      <Footer />
    </main>
  );
}
