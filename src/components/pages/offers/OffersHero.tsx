"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tag, ArrowDown, Percent } from "lucide-react";

export function OffersHero() {
  const scrollToDeals = () => {
    const el = document.getElementById("featured-deals");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#141414] text-white border-b-3 border-[#141414] pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#E53935]/15 blur-3xl pointer-events-none" />

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
              <Tag className="w-3.5 h-3.5" />
              SPECIAL DEALS
            </Badge>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
              MORE FLAVOR <span className="text-[#FFAA00]">FOR LESS.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl font-medium leading-relaxed mb-8">
              Explore our latest combinations, limited-time specials, and value-packed bundles designed to satisfy big cravings without breaking the bank.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="yellow"
                size="lg"
                onClick={scrollToDeals}
                className="bg-[#FFAA00] hover:bg-[#FFB72B] text-[#141414] flex items-center gap-2 group cursor-pointer font-black"
              >
                <span>EXPLORE ALL DEALS</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Visual with Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-square rounded-[32px] border-3 border-white/20 bg-[#E53935] p-4 shadow-[8px_8px_0px_#FFAA00] overflow-hidden group">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-black/30 bg-[#FFF4DC]">
                <Image
                  src="/assets/images/offer-zestivo-combo.jpg"
                  alt="Special Offer Bundle"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 460px"
                />
              </div>

              {/* Floating Neo-Brutalist Sticker Badges */}
              <motion.div
                animate={{ rotate: [-6, 2, -6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-7 right-7 bg-[#FFAA00] text-[#141414] font-display text-xs md:text-sm font-black px-4 py-2 rounded-full border-2 border-[#141414] shadow-[4px_4px_0px_#141414]"
              >
                SAVE UP TO 30%
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.3 }}
                className="absolute bottom-7 left-7 bg-white text-[#141414] font-display text-xs md:text-sm font-black px-4 py-2 rounded-full border-2 border-[#141414] shadow-[4px_4px_0px_#141414]"
              >
                LIMITED QUANTITY 🔥
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
