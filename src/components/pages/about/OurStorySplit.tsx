"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Sparkles } from "lucide-react";

export function OurStorySplit() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-[32px] border-3 border-[#141414] shadow-[8px_8px_0px_#FFAA00] overflow-hidden bg-[#237227]">
              <Image
                src="/assets/images/about-grill-chef.jpg"
                alt="Master Grill Chef at Flame Burger"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
            {/* Sticker Badge */}
            <div className="absolute -bottom-5 -right-3 bg-[#FFAA00] text-[#141414] font-display text-xs md:text-sm font-black px-4 py-2 rounded-full border-3 border-[#141414] shadow-[4px_4px_0px_#141414] rotate-3">
              PASSION IN EVERY PATTY ✨
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Badge
              variant="yellow"
              className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              HUMBLE BEGINNINGS
            </Badge>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-6">
              A FRESH TAKE ON EVERYDAY FAVORITES
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#141414]/80 font-medium leading-relaxed">
              <p>
                We started Flame Burger because we grew tired of bland burgers and rushed fast food that compromised on quality. We wanted an upbeat diner space where the buns are pillowy, the edges of every smash burger are crispy and caramelized, and every sauce is whisked in-house from scratch.
              </p>
              <p>
                From custom-ground prime cuts to slow-fermented artisan pizza dough and farm-fresh produce delivered every sunrise, our kitchen operates on one rule: never cut corners on flavor.
              </p>
              <p>
                Whether you drop in for a quick lunch, sit down for a noisy family dinner, or order a late-night feast at home, we promise food that fuels great conversations and brings good energy to your table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
