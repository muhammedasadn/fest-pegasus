"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp } from "lucide-react";

const STATS = [
  { value: "18+", label: "Signature Recipes Created" },
  { value: "50K+", label: "Happy Diners Welcomed" },
  { value: "100%", label: "Fresh, Unfrozen Beef" },
  { value: "4.9★", label: "Neighborhood Rating" }
];

export function AboutStats() {
  return (
    <section className="py-20 md:py-24 bg-[#141414] text-white border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            BY THE NUMBERS
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            MADE FOR REAL-LIFE CRAVINGS
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white text-[#141414] rounded-[24px] border-3 border-[#141414] p-6 sm:p-8 text-center shadow-[6px_6px_0px_#FFAA00]"
            >
              <div className="font-display text-4xl sm:text-5xl font-black text-[#E53935] tracking-tight mb-2">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#141414]/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
