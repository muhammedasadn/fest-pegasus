"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Sparkles } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4DC] border-b-3 border-[#141414] pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FFAA00]/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <Badge
            variant="yellow"
            className="mb-5 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            THE ZESTIVO JOURNAL
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#141414] tracking-tight leading-[1.05] mb-6">
            FRESH STORIES. <span className="text-[#E53935]">FULL OF FLAVOR.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#141414]/80 font-medium leading-relaxed max-w-xl mx-auto">
            Get inspired with kitchen tips, ingredient spotlights, food culture, and behind-the-scenes stories from the world of feel-good food.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
