"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Utensils } from "lucide-react";

interface MenuIntroProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  categories: { id: string; name: string }[];
}

export function MenuIntro({ activeCategory, onSelectCategory, categories }: MenuIntroProps) {
  return (
    <section id="menu-grid-start" className="bg-[#FFF4DC] pt-14 pb-8 border-b-2 border-[#141414]/10 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <Utensils className="w-3.5 h-3.5" />
            BIG CHOICES
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            BIG CHOICES. BIGGER FLAVOR.
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Explore the FLAME BURGER menu, made with quality ingredients, bold combinations, and something delicious for every appetite.
          </p>
        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          <button
            onClick={() => onSelectCategory("all")}
            className={`relative px-5 py-2.5 rounded-full font-display text-xs sm:text-sm font-black transition-all cursor-pointer border-3 border-[#141414] ${
              activeCategory === "all"
                ? "bg-[#E53935] text-white shadow-[4px_4px_0px_#141414] -translate-y-0.5"
                : "bg-white text-[#141414] hover:bg-[#FFAA00]/20 shadow-[2px_2px_0px_#141414]"
            }`}
          >
            ALL ITEMS
          </button>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full font-display text-xs sm:text-sm font-black transition-all cursor-pointer border-3 border-[#141414] ${
                  isActive
                    ? "bg-[#FFAA00] text-[#141414] shadow-[4px_4px_0px_#141414] -translate-y-0.5"
                    : "bg-white text-[#141414] hover:bg-[#FFAA00]/20 shadow-[2px_2px_0px_#141414]"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
