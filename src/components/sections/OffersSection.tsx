"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants, SPRING_PRESETS } from "@/lib/motion";

interface OfferCard {
  id: string;
  variant: "green" | "yellow" | "cream";
  title: string;
  description: string;
  image: string;
  badgeText: string;
  badgeDiscount: string;
  badgeBg: string;
  badgeTextColor: string;
  cardBg: string;
  cardTextColor: string;
  cardDescColor: string;
  btnShadowColor: string;
  tilt: number;
}

const OFFERS: OfferCard[] = [
  {
    id: "combo",
    variant: "green",
    title: "THE FLAME BURGER COMBO",
    description: "A signature burger, golden fries, and a chilled drink for the perfect meal.",
    image: "/assets/images/offer-zestivo-combo.jpg",
    badgeText: "SAVE",
    badgeDiscount: "25%",
    badgeBg: "bg-[#FFAA00]",
    badgeTextColor: "text-[#141414]",
    cardBg: "bg-[#237227]",
    cardTextColor: "text-white",
    cardDescColor: "text-white/85",
    btnShadowColor: "#FFAA00",
    tilt: -2,
  },
  {
    id: "pizza",
    variant: "yellow",
    title: "PIZZA PARTY DEAL",
    description: "Share a large pizza and two sides with your favorite people.",
    image: "/assets/images/offer-pizza-party.jpg",
    badgeText: "SAVE",
    badgeDiscount: "30%",
    badgeBg: "bg-[#237227]",
    badgeTextColor: "text-white",
    cardBg: "bg-[#FFAA00]",
    cardTextColor: "text-[#141414]",
    cardDescColor: "text-[#141414]/75",
    btnShadowColor: "#141414",
    tilt: 2,
  },
  {
    id: "chicken",
    variant: "cream",
    title: "CRISPY CHICKEN BOX",
    description: "Crunchy chicken, seasoned fries, and a dip worth dunking for.",
    image: "/assets/images/offer-crispy-chicken.jpg",
    badgeText: "SAVE",
    badgeDiscount: "20%",
    badgeBg: "bg-[#FFAA00]",
    badgeTextColor: "text-[#141414]",
    cardBg: "bg-[#FFF4DC]",
    cardTextColor: "text-[#141414]",
    cardDescColor: "text-[#141414]/75",
    btnShadowColor: "#141414",
    tilt: -2,
  },
];

export function OffersSection() {
  return (
    <section
      id="offers"
      data-framer-name="Special Offers"
      className="relative w-full bg-[#141414] py-24 md:py-32 overflow-hidden"
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
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFAA00] text-[#141414] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_rgba(255,170,0,0.35)] mb-5">
            <Tag className="w-4 h-4 fill-[#141414]" />
            <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
              DEALS WORTH DIGGING INTO
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[54px] leading-[1.04] tracking-[-0.01em] uppercase text-white mb-5">
            GOOD FOOD. EVEN BETTER DEALS.
          </h2>

          {/* Subtitle */}
          <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.5] text-white/75">
            Make room for more flavor with limited-time offers, satisfying combos, and favorites made even better with a little saving.
          </p>
        </motion.div>

        {/* 3 Offer Deal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {OFFERS.map((deal, idx) => (
            <motion.div
              key={deal.id}
              variants={sectionFadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.1, ...SPRING_PRESETS.enter }}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  rotate: deal.tilt,
                  transition: { type: "spring", stiffness: 350, damping: 22 },
                }}
                className={`group relative flex flex-col h-full ${deal.cardBg} rounded-[28px] border-[3px] border-[#141414] shadow-[6px_6px_0px_0px_#FFAA00] p-3.5 transition-colors cursor-pointer justify-between`}
              >
                {/* Top Image & Floating Sticker Badge */}
                <div className="relative w-full h-[250px] rounded-[18px] overflow-hidden border-[2.5px] border-[#141414] bg-black/10">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Circular Discount Sticker Badge */}
                  <div
                    className={`absolute top-3.5 right-3.5 w-[96px] h-[96px] rounded-full ${deal.badgeBg} ${deal.badgeTextColor} border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] flex flex-col items-center justify-center rotate-[-12deg] group-hover:rotate-0 transition-transform duration-300 z-10 select-none`}
                  >
                    <span className="font-display text-[15px] leading-none uppercase">
                      {deal.badgeText}
                    </span>
                    <span className="font-display text-[26px] leading-tight uppercase font-black">
                      {deal.badgeDiscount}
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="px-3 pt-6 pb-2 flex flex-col flex-grow justify-between">
                  <div>
                    <h3
                      className={`font-display font-normal text-[26px] sm:text-[28px] leading-[1.1] uppercase ${deal.cardTextColor} mb-3`}
                    >
                      {deal.title}
                    </h3>
                    <p
                      className={`font-body font-normal text-[16px] sm:text-[17px] leading-[1.5] ${deal.cardDescColor} mb-8`}
                    >
                      {deal.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href="#order"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-between w-full bg-[#141414] text-white rounded-full px-5 py-3 border-[2.5px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group/btn"
                  >
                    <span className="font-body font-extrabold text-[15px] uppercase tracking-[0.04em]">
                      ORDER THIS DEAL
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover/btn:bg-[#FFAA00] transition-colors">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          variants={sectionFadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <motion.a
            href="#offers"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-[#FFAA00] text-[#141414] rounded-full pl-8 pr-3 py-3.5 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#FFAA00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
          >
            <span className="font-body font-extrabold text-[16px] uppercase tracking-[0.05em]">
              SEE ALL OFFERS
            </span>
            <div className="w-9 h-9 rounded-full bg-[#141414] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#141414] transition-colors">
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </div>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
