"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Sparkles, Smile, Utensils } from "lucide-react";
import {
  sectionFadeUpVariants,
  staggerContainerVariants,
  SPRING_PRESETS,
} from "@/lib/motion";

export const FinalCTASection: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="relative w-full bg-[#FFF4DC] px-5 pb-[72px] sm:px-8 sm:pb-[96px] lg:px-10 lg:pb-[120px] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Big Neo-Brutalist Green Banner Card */}
        <motion.div
          className="relative w-full bg-[#237227] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border-[3px] border-[#141414] shadow-[10px_10px_0px_0px_#141414] px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-[104px] overflow-hidden flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainerVariants}
        >
          {/* Floating Badge 1: Top-Left (Flame) */}
          <motion.div
            className="absolute top-6 left-6 sm:top-10 sm:left-10 lg:top-12 lg:left-14 w-[70px] h-[70px] sm:w-[84px] sm:h-[84px] lg:w-[92px] lg:h-[92px] rounded-full bg-[#FFAA00] border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hidden sm:flex items-center justify-center z-10"
            style={{ rotate: -10 }}
            animate={{
              y: [-6, 8, -6],
              rotate: [-12, -8, -12],
            }}
            transition={SPRING_PRESETS.floatBadge1}
          >
            <Flame className="w-8 h-8 lg:w-10 lg:h-10 text-[#141414] stroke-[2.2] fill-[#141414]/15" />
          </motion.div>

          {/* Floating Badge 2: Bottom-Left (Sparkles) */}
          <motion.div
            className="absolute bottom-6 left-6 sm:bottom-12 sm:left-16 lg:bottom-14 lg:left-24 w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] lg:w-[74px] lg:h-[74px] rounded-full bg-white border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hidden md:flex items-center justify-center z-10"
            style={{ rotate: 12 }}
            animate={{
              y: [6, -8, 6],
              rotate: [10, 14, 10],
            }}
            transition={SPRING_PRESETS.floatBadge2}
          >
            <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-[#141414] stroke-[2.2]" />
          </motion.div>

          {/* Floating Badge 3: Top-Right (Smile) */}
          <motion.div
            className="absolute top-6 right-6 sm:top-12 sm:right-12 lg:top-16 lg:right-20 w-[62px] h-[62px] sm:w-[72px] sm:h-[72px] lg:w-[78px] lg:h-[78px] rounded-full bg-white border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hidden md:flex items-center justify-center z-10"
            style={{ rotate: 8 }}
            animate={{
              y: [-8, 6, -8],
              rotate: [6, 10, 6],
            }}
            transition={SPRING_PRESETS.floatBadge3}
          >
            <Smile className="w-7 h-7 lg:w-9 lg:h-9 text-[#141414] stroke-[2.2]" />
          </motion.div>

          {/* Floating Badge 4: Bottom-Right (Burger/Utensils) */}
          <motion.div
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-14 w-[72px] h-[72px] sm:w-[86px] sm:h-[86px] lg:w-[96px] lg:h-[96px] rounded-full bg-[#FFAA00] border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hidden sm:flex items-center justify-center z-10"
            style={{ rotate: -8 }}
            animate={{
              y: [8, -8, 8],
              rotate: [-10, -6, -10],
            }}
            transition={SPRING_PRESETS.floatBadge4}
          >
            <Utensils className="w-8 h-8 lg:w-11 lg:h-11 text-[#141414] stroke-[2.2]" />
          </motion.div>

          {/* Content Area */}
          <div className="relative z-20 max-w-[900px] flex flex-col items-center">
            {/* Eyebrow Badge */}
            <motion.div
              variants={sectionFadeUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFAA00] text-[#141414] font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-[1.12px] border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_#141414]"
            >
              <span>Hungry Yet?</span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h2
              variants={sectionFadeUpVariants}
              className="font-display text-[38px] sm:text-[56px] lg:text-[76px] font-black uppercase text-white leading-[0.98] tracking-tight mt-6"
            >
              Your Next Favorite Bite Is Waiting.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={sectionFadeUpVariants}
              className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] font-medium leading-[1.5] text-white/90 max-w-[640px] mt-6"
            >
              Bring on the crunch, the melt, and the flavor. Order your FLAME
              BURGER favorites today and make your next meal something to look
              forward to.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={sectionFadeUpVariants} className="mt-8">
              <Link
                href="#menu"
                className="inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full bg-[#FFAA00] text-[#141414] font-sans font-extrabold text-[15px] sm:text-[16px] uppercase tracking-[0.48px] border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hover:shadow-[2px_2px_0px_0px_#141414] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
              >
                <span>Order Now</span>
                <span className="w-[34px] h-[34px] rounded-full bg-[#141414] flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-200">
                  <ArrowUpRight className="w-4 h-4 text-[#FFAA00] stroke-[3]" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
