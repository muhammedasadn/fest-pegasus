"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Flame, Copy, Check } from "lucide-react";
import { useState } from "react";

export function LimitedSpecial() {
  const [copied, setCopied] = useState(false);

  const copyPromo = () => {
    navigator.clipboard.writeText("FLAMEWEEKEND");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-24 bg-[#FFAA00] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="bg-[#FFF4DC] rounded-[32px] border-3 border-[#141414] shadow-[8px_8px_0px_#141414] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E53935] text-white font-display text-xs font-black border-2 border-[#141414] shadow-[2px_2px_0px_#141414] mb-4">
                <Flame className="w-3.5 h-3.5" />
                LIMITED-TIME SPECIAL
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight leading-[1.1] mb-5">
                WEEKEND DOUBLE SMASH
              </h2>

              <p className="text-base sm:text-lg text-[#141414]/80 font-medium leading-relaxed mb-8">
                Order any double stack smash burger on Friday, Saturday, or Sunday and unlock our famous Loaded Zest Fries for 50% off. Hand-crafted, double-seared, and served smoking hot.
              </p>

              {/* Promo code copy bar */}
              <div className="flex flex-wrap items-center gap-3.5 mb-6">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border-3 border-[#141414] shadow-[3px_3px_0px_#141414]">
                  <span className="text-xs uppercase font-bold text-[#141414]/60">CODE:</span>
                  <span className="font-mono text-sm sm:text-base font-black tracking-wider text-[#141414]">
                    FLAMEWEEKEND
                  </span>
                </div>

                <Button
                  variant="yellow"
                  size="sm"
                  onClick={copyPromo}
                  className="bg-[#FFAA00] hover:bg-[#FFB72B] text-[#141414] border-2 border-[#141414] shadow-[2px_2px_0px_#141414] font-black cursor-pointer flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#237227]" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY CODE</span>
                    </>
                  )}
                </Button>
              </div>

              <span className="text-xs font-semibold text-[#141414]/60">
                *Valid on online and takeaway orders every weekend. One code per order.
              </span>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] border-3 border-[#141414] shadow-[6px_6px_0px_#141414] overflow-hidden bg-[#FFAA00]">
                <Image
                  src="/assets/images/menu-bacon-stack.jpg"
                  alt="Weekend Double Smash Special"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
