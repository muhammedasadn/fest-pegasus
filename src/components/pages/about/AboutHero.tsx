"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Heart, Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4DC] border-b-3 border-[#141414] pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FFAA00]/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <Badge
              variant="yellow"
              className="mb-5 uppercase tracking-wider text-xs md:text-sm font-bold flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-[#E53935] text-[#E53935]" />
              OUR STORY
            </Badge>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#141414] tracking-tight leading-[1.05] mb-6">
              GOOD FOOD. GREAT ENERGY. <span className="text-[#237227]">THAT’S FLAME BURGER.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#141414]/80 max-w-xl font-medium leading-relaxed mb-6">
              Born out of a simple belief: everyday comfort food should feel special, taste extraordinary, and bring friends and families together with radiant energy.
            </p>
          </motion.div>

          {/* Right Column: Stacked Polaroid Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center py-6"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              {/* Back Polaroid */}
              <div className="absolute inset-0 bg-white p-4 pb-12 rounded-[24px] border-3 border-[#141414] shadow-[8px_8px_0px_#141414] rotate-6 transform transition-transform hover:rotate-3">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#FFAA00]/20">
                  <Image
                    src="/assets/images/about-grill-chef.jpg"
                    alt="Chef grilling fresh burgers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>

              {/* Front Polaroid */}
              <div className="absolute inset-0 bg-white p-4 pb-12 rounded-[24px] border-3 border-[#141414] shadow-[10px_10px_0px_#141414] -rotate-3 transform transition-transform hover:-rotate-1">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#FFAA00]/20">
                  <Image
                    src="/assets/images/about-dining-table.jpg"
                    alt="Diners enjoying meals at Flame Burger"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[#141414]">
                  <span className="font-display text-xs font-black tracking-wider uppercase">BROOKLYN, NY</span>
                  <span className="font-display text-xs font-black text-[#E53935]">EST. 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
