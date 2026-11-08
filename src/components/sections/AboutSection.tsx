"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants, SPRING_PRESETS } from "@/lib/motion";

export function AboutSection() {
  return (
    <section
      id="about"
      data-framer-name="About"
      className="relative w-full bg-[#237227] py-24 md:py-32 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Story Copy & CTAs */}
          <motion.div
            variants={sectionFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Pill Badges Stack */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-[#FFAA00] text-[#141414] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_#141414]">
                <Flame className="w-4 h-4 fill-[#141414]" />
                <span className="font-body font-extrabold text-[13px] tracking-[0.06em] uppercase">
                  MADE WITH CARE
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white text-[#141414] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_#141414]">
                <Sparkles className="w-4 h-4 fill-[#FFAA00] stroke-[#141414]" />
                <span className="font-body font-extrabold text-[13px] tracking-[0.06em] uppercase">
                  A LITTLE MORE FLAVOR IN EVERY DAY
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-display font-normal text-[38px] sm:text-[48px] md:text-[54px] leading-[1.04] tracking-[-0.01em] uppercase text-white mb-6">
              MADE FRESH. SERVED WITH ZEST.
            </h2>

            {/* Story Paragraph */}
            <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.6] text-white/90 mb-9 max-w-[560px]">
              At FLAME BURGER, great food is about more than filling a plate. It is about fresh ingredients, generous flavor, and the small moments that bring people together. We keep things simple: cook with care, serve with a smile, and make every visit worth repeating.
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-4 bg-[#FFAA00] text-[#141414] rounded-full pl-7 pr-3 py-3 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:scale-[0.98] transition-all group"
            >
              <span className="font-body font-extrabold text-[16px] uppercase tracking-[0.04em]">
                OUR STORY
              </span>
              <div className="w-9 h-9 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:bg-[#141414] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </div>
            </Link>
          </motion.div>

          {/* Right Column: 2 Stacked Angled Photos */}
          <motion.div
            variants={sectionFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]"
          >
            {/* Photo 1 (Chef / Grill behind) */}
            <motion.div
              whileHover={{
                rotate: -2,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative w-[320px] sm:w-[400px] h-[360px] sm:h-[420px] rounded-[32px] border-[3px] border-[#141414] shadow-[10px_10px_0px_0px_#141414] overflow-hidden rotate-[-4deg] z-10 bg-[#FFF4DC]"
            >
              <Image
                src="/assets/images/about-grill-chef.jpg"
                alt="Flame Burger Grill Chef"
                fill
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-cover"
              />
            </motion.div>

            {/* Photo 2 (Dining Table in front, overlapping) */}
            <motion.div
              whileHover={{
                rotate: 2,
                scale: 1.04,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-6 w-[240px] sm:w-[316px] h-[220px] sm:h-[292px] rounded-[32px] border-[3px] border-[#141414] shadow-[10px_10px_0px_0px_#FFAA00] overflow-hidden rotate-[5deg] z-20 bg-[#FFF4DC]"
            >
              <Image
                src="/assets/images/about-dining-table.jpg"
                alt="Flame Burger Dining Experience"
                fill
                sizes="(min-width: 1024px) 316px, 60vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
