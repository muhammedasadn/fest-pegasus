"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Sparkles, Flame } from "lucide-react";

export function MenuCTA() {
  return (
    <section id="order" className="relative overflow-hidden bg-[#E53935] text-white py-20 md:py-28 border-b-3 border-[#141414]">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF4DC_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFAA00] text-[#141414] font-display text-xs md:text-sm font-black border-2 border-[#141414] shadow-[3px_3px_0px_#141414] mb-6">
            <Flame className="w-4 h-4" />
            DECIDED YET?
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
            YOUR ORDER IS ONE CLICK AWAY.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-10 max-w-xl mx-auto">
            Pick your favorites, add a side or three, and let us handle the rest. Fresh, hot, and full of bold flavor delivered right to your door.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="yellow"
              size="lg"
              className="bg-[#FFAA00] hover:bg-[#FFB72B] text-[#141414] border-3 border-[#141414] shadow-[5px_5px_0px_#141414] hover:shadow-[7px_7px_0px_#141414] text-base font-black px-8 py-4 flex items-center gap-2 cursor-pointer transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>START ONLINE ORDER</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
