"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export function MissionBanner() {
  return (
    <section className="py-20 md:py-24 bg-[#E53935] text-white border-b-3 border-[#141414] overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF4DC_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-[#FFAA00] text-[#141414] border-3 border-[#141414] shadow-[4px_4px_0px_#141414] flex items-center justify-center mx-auto mb-6">
            <Flame className="w-8 h-8 fill-[#141414]" />
          </div>

          <span className="font-display text-xs md:text-sm font-black uppercase tracking-widest text-[#FFAA00] block mb-3">
            OUR GUIDING PROMISE
          </span>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
            MAKE EVERY BITE COUNT.
          </h2>

          <p className="text-base sm:text-xl text-white/90 font-medium leading-relaxed max-w-xl mx-auto">
            Food isn’t just calories—it’s connection, comfort, and joy. We dedicate ourselves to perfecting the craft so every single order puts a smile on your face.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
