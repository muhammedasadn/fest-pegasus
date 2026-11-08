"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Flame, Leaf, Smile, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants, SPRING_PRESETS } from "@/lib/motion";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  bg: string;
  textColor: string;
  descColor: string;
  badgeBg: string;
  shadowColor: string;
  icon: React.ReactNode;
  tilt: number;
}

const FEATURES: FeatureCard[] = [
  {
    id: "fresh-ingredients",
    title: "FRESH INGREDIENTS",
    description: "We choose quality ingredients and prepare your favorites with care.",
    bg: "bg-[#FFAA00]",
    textColor: "text-[#141414]",
    descColor: "text-[#141414]/80",
    badgeBg: "bg-white",
    shadowColor: "#141414",
    icon: <Leaf className="w-8 h-8 stroke-[#141414] stroke-[2.2]" />,
    tilt: -2,
  },
  {
    id: "bold-flavor",
    title: "BIG, BOLD FLAVOR",
    description: "Signature sauces and balanced seasoning make every bite memorable.",
    bg: "bg-[#237227]",
    textColor: "text-white",
    descColor: "text-white/88",
    badgeBg: "bg-[#FFAA00]",
    shadowColor: "#141414",
    icon: <Flame className="w-8 h-8 stroke-[#141414] fill-[#FFAA00] stroke-[2.2]" />,
    tilt: 2,
  },
  {
    id: "friendly-service",
    title: "FAST, FRIENDLY SERVICE",
    description: "From the first click to the final bite, we keep things easy and welcoming.",
    bg: "bg-[#141414]",
    textColor: "text-white",
    descColor: "text-white/75",
    badgeBg: "bg-[#FFAA00]",
    shadowColor: "#FFAA00",
    icon: <Smile className="w-8 h-8 stroke-[#141414] stroke-[2.2]" />,
    tilt: -2,
  },
  {
    id: "made-for-sharing",
    title: "MADE FOR SHARING",
    description: "From solo lunches to group feasts, there is always something for the table.",
    bg: "bg-white",
    textColor: "text-[#141414]",
    descColor: "text-[#141414]/75",
    badgeBg: "bg-[#FFAA00]",
    shadowColor: "#141414",
    icon: <Users className="w-8 h-8 stroke-[#141414] stroke-[2.2]" />,
    tilt: 2,
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      data-framer-name="Why Choose Us"
      className="relative w-full bg-[#FFF4DC] py-24 md:py-32 overflow-hidden"
    >
      <Container>
        {/* Section Header (Centered) */}
        <motion.div
          variants={sectionFadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 md:mb-20"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-[#141414] text-[#FFAA00] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_rgba(20,20,20,0.25)] mb-5">
            <Award className="w-4 h-4 stroke-[#FFAA00]" />
            <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
              THE FLAME BURGER DIFFERENCE
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[54px] leading-[1.04] tracking-[-0.01em] uppercase text-[#141414] mb-5">
            GOOD INGREDIENTS. GREAT ENERGY.
          </h2>

          {/* Subtitle */}
          <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.5] text-[#141414]/75">
            We bring together crave-worthy recipes, quick service, and a welcoming atmosphere to make every meal feel like a good choice.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              variants={sectionFadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08, ...SPRING_PRESETS.enter }}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  rotate: feat.tilt,
                  transition: { type: "spring", stiffness: 350, damping: 22 },
                }}
                style={{
                  boxShadow: `6px 6px 0px 0px ${feat.shadowColor}`,
                }}
                className={`group relative flex flex-col h-full min-h-[300px] ${feat.bg} rounded-[28px] border-[3px] border-[#141414] p-7 transition-colors cursor-pointer justify-between`}
              >
                {/* Circular Icon Badge */}
                <div
                  className={`w-[68px] h-[68px] rounded-full ${feat.badgeBg} border-[2.5px] border-[#141414] shadow-[3px_3px_0px_0px_#141414] flex items-center justify-center rotate-[-6deg] group-hover:rotate-0 transition-transform duration-300 mb-6`}
                >
                  {feat.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow justify-start">
                  <h3
                    className={`font-display font-normal text-[20px] sm:text-[21px] leading-[1.15] uppercase ${feat.textColor} mb-3`}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className={`font-body font-normal text-[16px] sm:text-[17px] leading-[1.5] ${feat.descColor}`}
                  >
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
