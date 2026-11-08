"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BurgerPlateVisual } from "@/components/three/BurgerPlateVisual";
import { wordRevealVariants, SPRING_PRESETS } from "@/lib/motion";

const HEADLINE_WORDS = [
  { text: "CRAFTED", color: "text-white" },
  { text: "WITH", color: "text-white" },
  { text: "FIRE.", color: "text-[#FFAA00]" },
];

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#237227] pt-[130px] md:pt-[150px] pb-[60px] md:pb-[90px] overflow-hidden">
      {/* Background Subtle Pattern / Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, bounce: 0.25, type: "spring" }}
          className="mb-5 md:mb-6"
        >
          <Badge variant="white" hasShadow className="tracking-[0.1em]">
            Fresh • Fast • Full of Flavor
          </Badge>
        </motion.div>

        {/* Massive Headline with Staggered Word Reveal */}
        <h1 className="font-display font-normal text-[48px] sm:text-[76px] md:text-[100px] lg:text-[124px] leading-[0.92] tracking-[-0.02em] uppercase max-w-[1100px] mb-5 md:mb-6 flex flex-wrap justify-center gap-x-3 sm:gap-x-5 md:gap-x-7">
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={word.text}
              custom={i}
              variants={wordRevealVariants}
              initial="hidden"
              animate="visible"
              className={`inline-block ${word.color}`}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, type: "spring" }}
          className="font-body font-normal text-[16px] sm:text-[18px] md:text-[19px] leading-[1.5] text-white/90 max-w-[640px] mb-8 md:mb-10"
        >
          Build burgers that look premium, taste unforgettable, and become the city&apos;s favorite comfort food.
        </motion.p>

        {/* Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, type: "spring" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12 md:mb-16 z-30"
        >
          <Button href="#menu" variant="yellow" size="md">
            Order Now
          </Button>
          <Button href="#menu" variant="white" size="md">
            Explore Menu
          </Button>
        </motion.div>

        {/* Hero Visual Area: Giant Typography + 3D Centerpiece + Floating Sticker Badges */}
        <div className="relative w-full max-w-[1140px] flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[560px] lg:min-h-[620px] select-none">
          {/* Giant Background Typography: FLAME BURGER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 leading-[0.88]">
            <span className="font-display text-[#FFAA00] text-[76px] sm:text-[130px] md:text-[190px] lg:text-[248px] tracking-[-0.03em] uppercase opacity-95">
              FLAME
            </span>
            <span className="font-display text-[#FFAA00] text-[76px] sm:text-[130px] md:text-[190px] lg:text-[248px] tracking-[-0.03em] uppercase opacity-95 -mt-3 sm:-mt-8 md:-mt-12 lg:-mt-16">
              BURGER
            </span>
          </div>

          {/* Centerpiece 3D Burger Plate */}
          <div className="relative z-20">
            <BurgerPlateVisual />
          </div>

          {/* Floating Sticker Badges */}
          {/* Badge 1: Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-8, 8],
              rotate: [11, 13],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              scale: { duration: 0.6, delay: 0.4 },
              y: SPRING_PRESETS.floatBadge1,
              rotate: SPRING_PRESETS.floatBadge1,
            }}
            className="absolute left-2 sm:left-6 md:left-12 lg:left-16 top-6 sm:top-10 md:top-14 z-30 hidden sm:block"
          >
            <Badge
              variant="yellow"
              hasShadow
              className="text-[13px] md:text-[15px] px-5 py-2 rotate-[12deg]"
            >
              🔥 100% Fresh Angus
            </Badge>
          </motion.div>

          {/* Badge 2: Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [8, -8],
              rotate: [-11, -9],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.45 },
              scale: { duration: 0.6, delay: 0.45 },
              y: SPRING_PRESETS.floatBadge2,
              rotate: SPRING_PRESETS.floatBadge2,
            }}
            className="absolute right-2 sm:right-6 md:right-12 lg:right-16 top-4 sm:top-8 md:top-12 z-30 hidden sm:block"
          >
            <Badge
              variant="white"
              hasShadow
              className="text-[13px] md:text-[15px] px-5 py-2 -rotate-[10deg]"
            >
              ⚡ Smashed Crispy
            </Badge>
          </motion.div>

          {/* Badge 3: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [6, -6],
              rotate: [7, 9],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              scale: { duration: 0.6, delay: 0.5 },
              y: SPRING_PRESETS.floatBadge3,
              rotate: SPRING_PRESETS.floatBadge3,
            }}
            className="absolute left-4 sm:left-10 md:left-16 lg:left-24 bottom-6 sm:bottom-12 md:bottom-16 z-30 hidden sm:block"
          >
            <Badge
              variant="white"
              hasShadow
              className="text-[13px] md:text-[15px] px-5 py-2 rotate-[8deg]"
            >
              🧀 Double Melted
            </Badge>
          </motion.div>

          {/* Badge 4: Bottom Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-8, 8],
              rotate: [-9, -7],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.55 },
              scale: { duration: 0.6, delay: 0.55 },
              y: SPRING_PRESETS.floatBadge4,
              rotate: SPRING_PRESETS.floatBadge4,
            }}
            className="absolute right-4 sm:right-10 md:right-16 lg:right-24 bottom-4 sm:bottom-10 md:bottom-14 z-30 hidden sm:block"
          >
            <Badge
              variant="yellow"
              hasShadow
              className="text-[13px] md:text-[15px] px-5 py-2 -rotate-[8deg]"
            >
              🌶️ Secret Flame Sauce
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
