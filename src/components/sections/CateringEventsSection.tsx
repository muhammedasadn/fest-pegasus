"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PartyPopper, Users, Utensils, Pizza, Flame } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants, SPRING_PRESETS } from "@/lib/motion";

const CATERING_PACKAGES = [
  {
    id: "burger-box",
    title: "THE BURGER BOX",
    description: "Mini signature burgers, crisp lettuce, cheddar, pickles, and house sauce.",
    image: "/assets/images/gallery-04.jpg",
    icon: <Utensils className="w-6 h-6 stroke-[#141414] stroke-[2.2]" />,
    tilt: -2,
  },
  {
    id: "pizza-trays",
    title: "PIZZA PARTY TRAYS",
    description: "A mix of crowd-favorite pizzas, sliced and ready to share.",
    image: "/assets/images/catering-corporate.jpg",
    icon: <Pizza className="w-6 h-6 stroke-[#141414] stroke-[2.2]" />,
    tilt: 2,
  },
  {
    id: "chicken-platter",
    title: "CRISPY CHICKEN PLATTER",
    description: "Golden tenders and wings with fries, dips, and fresh slaw.",
    image: "/assets/images/catering-party-spread.jpg",
    icon: <Flame className="w-6 h-6 stroke-[#141414] stroke-[2.2]" />,
    tilt: -2,
  },
];

export function CateringEventsSection() {
  return (
    <section
      id="catering"
      data-framer-name="Catering & Events"
      className="relative w-full bg-[#141414] py-24 md:py-32 overflow-hidden"
    >
      <Container>
        {/* Top Half: Hero Event Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24 md:mb-32">
          {/* Left: Info & CTA */}
          <motion.div
            variants={sectionFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFAA00] text-[#141414] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_rgba(255,170,0,0.3)] mb-5">
              <PartyPopper className="w-4 h-4 stroke-[#141414]" />
              <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
                BRING THE FLAVOR TO YOUR PARTY
              </span>
            </div>

            <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[54px] leading-[1.04] tracking-[-0.01em] uppercase text-white mb-6">
              GOOD TIMES NEED GREAT FOOD
            </h2>

            <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.6] text-white/80 mb-9 max-w-[540px]">
              From office lunches to backyard celebrations, our catering packages bring the full FLAME BURGER experience straight to your crowd.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-[#FFAA00] text-[#141414] rounded-full pl-7 pr-3 py-3.5 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#FFAA00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            >
              <span className="font-body font-extrabold text-[16px] uppercase tracking-[0.04em]">
                PLAN YOUR EVENT
              </span>
              <div className="w-9 h-9 rounded-full bg-[#141414] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#141414] transition-colors">
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </div>
            </motion.a>
          </motion.div>

          {/* Right: Angled Featured Event Photo */}
          <motion.div
            variants={sectionFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{
                rotate: 0,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative w-full max-w-[540px] h-[360px] sm:h-[440px] rounded-[36px] border-[3px] border-[#141414] shadow-[10px_10px_0px_0px_#FFAA00] overflow-hidden rotate-[2deg] bg-[#237227]"
            >
              <Image
                src="/assets/images/gallery-03.jpg"
                alt="Flame Burger Catering Event"
                fill
                sizes="(min-width: 1024px) 540px, 90vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Half: Packages / Crowd-Pleasing Food */}
        <div>
          {/* Subheader (Centered) */}
          <motion.div
            variants={sectionFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#237227] text-white rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_#141414] mb-5">
              <Users className="w-4 h-4 stroke-white" />
              <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
                FEEDS 10 TO 200
              </span>
            </div>

            <h2 className="font-display font-normal text-[34px] sm:text-[44px] md:text-[50px] leading-[1.05] tracking-[-0.01em] uppercase text-white mb-4">
              CROWD-PLEASING FOOD, READY TO SHARE
            </h2>

            <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.5] text-white/75">
              Build your spread with our most-loved dishes, freshly prepared for groups and gatherings.
            </p>
          </motion.div>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATERING_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                variants={sectionFadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.1, ...SPRING_PRESETS.enter }}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    rotate: pkg.tilt,
                    transition: { type: "spring", stiffness: 350, damping: 22 },
                  }}
                  className="group relative flex flex-col h-full bg-white rounded-[28px] border-[3px] border-[#141414] shadow-[6px_6px_0px_0px_#FFAA00] p-3 transition-colors cursor-pointer"
                >
                  {/* Image Cover */}
                  <div className="relative w-full h-[230px] rounded-[18px] overflow-hidden border-[2px] border-[#141414] bg-[#FFF4DC]">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Circular Icon Badge */}
                    <div className="absolute top-3.5 right-3.5 w-[56px] h-[56px] rounded-full bg-[#FFAA00] border-[2.5px] border-[#141414] shadow-[3px_3px_0px_0px_#141414] flex items-center justify-center rotate-[-8deg] group-hover:rotate-0 transition-transform duration-300 z-10">
                      {pkg.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-3 pt-5 pb-3 flex flex-col justify-between flex-grow">
                    <h3 className="font-display font-normal text-[21px] leading-[1.15] uppercase text-[#141414] mb-2">
                      {pkg.title}
                    </h3>
                    <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[1.5] text-[#141414]/75">
                      {pkg.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
