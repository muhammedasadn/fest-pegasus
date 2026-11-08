"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants, SPRING_PRESETS } from "@/lib/motion";

interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  svgPaths: React.ReactNode;
  tilt: number;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "smash-burgers",
    title: "SMASH BURGERS",
    description: "Juicy patties, toasted buns, and signature sauces in every bite.",
    image: "/assets/images/cat-smash-burgers.jpg",
    tilt: -2,
    svgPaths: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#141414] stroke-[1.8] fill-none">
        <path d="M 5.6 15 L 9.4 16.5 L 13.1 15 L 16.9 16.5 L 18.8 15.8 L 18.8 17.2 C 18.8 18.9 17.4 20.2 15.8 20.2 L 6.8 20.2 C 5.1 20.2 3.8 18.9 3.8 17.2 L 3.8 15.7 Z" />
        <path d="M 4.5 9 C 4.3 9 4.1 8.9 3.9 8.7 C 3.8 8.5 3.7 8.3 3.8 8.1 C 4.4 5.2 7.8 3 12 3 C 16.2 3 19.6 5.2 20.2 8.1 C 20.3 8.3 20.2 8.5 20.1 8.7 C 19.9 8.9 19.7 9 19.5 9 Z" />
        <path d="M 2.2 15 L 6.4 13.5 L 10.1 15 L 13.9 13.5 L 17.6 15 L 21.8 13.5" />
        <path d="M 2.2 12 L 21.8 12" />
      </svg>
    ),
  },
  {
    id: "oven-fresh-pizza",
    title: "OVEN-FRESH PIZZA",
    description: "Golden crusts, rich sauce, and generous layers of your favorite toppings.",
    image: "/assets/images/gallery-02.jpg",
    tilt: 2,
    svgPaths: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#141414] stroke-[1.8] fill-none">
        <path d="M 2.4 6.6 C 8.1 3.1 15.4 3.1 21.1 6.6 L 12.1 21.4 Z" />
        <path d="M 3.6 8.6 C 8.7 5.1 15.4 5.1 20.5 8.6" />
        <circle cx="10" cy="11" r="1.5" className="fill-[#141414]" />
        <circle cx="14" cy="14" r="1.5" className="fill-[#141414]" />
        <circle cx="11" cy="16" r="1.2" className="fill-[#141414]" />
      </svg>
    ),
  },
  {
    id: "crispy-chicken",
    title: "CRISPY CHICKEN",
    description: "Crunchy on the outside, tender on the inside, and always satisfying.",
    image: "/assets/images/cat-loaded-fries.jpg",
    tilt: -2,
    svgPaths: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#141414] stroke-[1.8] fill-none">
        <path d="M 10.5 9 L 13 2.2 C 15 3.9 19.5 8.2 19.5 13.5 C 19.5 17.6 16.1 21 12 21 C 7.9 21 4.5 17.6 4.5 13.5 C 4.5 10.6 5.9 8 7.4 6 Z" />
        <path d="M 12 14 C 13.8 13.7 15.4 12.1 15.7 10.3" />
      </svg>
    ),
  },
  {
    id: "golden-fries",
    title: "GOLDEN FRIES",
    description: "Hot, crisp, perfectly seasoned, and made for sharing.",
    image: "/assets/images/cat-thick-shakes.jpg",
    tilt: 2,
    svgPaths: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#141414] stroke-[1.8] fill-none">
        <path d="M 5 9 L 7 21 L 17 21 L 19 9 Z" />
        <path d="M 8 9 L 8 4" />
        <path d="M 12 9 L 12 3" />
        <path d="M 16 9 L 16 5" />
        <path d="M 6 12 C 9 13.5 15 13.5 18 12" />
      </svg>
    ),
  },
  {
    id: "fresh-sandwiches",
    title: "FRESH SANDWICHES",
    description: "Stacked with quality ingredients for a delicious bite on the go.",
    image: "/assets/images/cat-sandwiches.jpg",
    tilt: -2,
    svgPaths: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#141414] stroke-[1.8] fill-none">
        <path d="M 4.5 7.5 C 4.5 6 5.8 4.5 7.5 4.5 L 16.5 4.5 C 18.2 4.5 19.5 6 19.5 7.5 C 19.5 9 18.2 10.5 16.5 10.5 L 7.5 10.5 C 5.8 10.5 4.5 9 4.5 7.5 Z" />
        <path d="M 5.2 10.5 L 5.2 18 C 5.2 18.8 5.8 19.5 6.7 19.5 L 17.2 19.5 C 18.1 19.5 18.8 18.8 18.8 18 L 18.8 10.5" />
        <path d="M 8.2 15 L 15.8 15" />
      </svg>
    ),
  },
  {
    id: "pasta-favorites",
    title: "PASTA FAVORITES",
    description: "Comforting classics tossed in rich sauces and finished with flavor.",
    image: "/assets/images/cat-pasta.jpg",
    tilt: 2,
    svgPaths: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#141414] stroke-[1.8] fill-none">
        <path d="M 3 11 C 3 16 7 20 12 20 C 17 20 21 16 21 11 L 3 11 Z" />
        <path d="M 8 11 C 8 7 9 4 9 4" />
        <path d="M 12 11 C 12 7 13 4 13 4" />
        <path d="M 16 11 C 16 7 17 4 17 4" />
      </svg>
    ),
  },
];

export function CategoriesSection() {
  return (
    <section
      id="categories"
      data-framer-name="Popular Categories"
      className="relative w-full bg-[#FFAA00] py-20 md:py-28 overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <motion.div
          variants={sectionFadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16"
        >
          {/* Left Title Block */}
          <div className="max-w-[692px]">
            <div className="inline-flex items-center gap-2 bg-[#141414] text-[#FFAA00] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_rgba(20,20,20,0.25)] mb-5">
              <Sparkles className="w-4 h-4 fill-[#FFAA00]" />
              <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
                FIND YOUR CRAVING
              </span>
            </div>

            <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[54px] leading-[1.02] tracking-[-0.01em] uppercase text-[#141414]">
              SOMETHING DELICIOUS FOR EVERYONE
            </h2>
          </div>

          {/* Right Subtitle & CTA */}
          <div className="flex flex-col items-start lg:items-end gap-6 max-w-[460px]">
            <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.5] tracking-[-0.01em] text-[#141414]/75 text-left lg:text-right">
              Explore a menu made for every appetite—from quick lunch breaks to laid-back dinners and late-night cravings.
            </p>

            <motion.a
              href="#menu"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#141414] text-white rounded-full pl-6 pr-2 py-2 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            >
              <span className="font-body font-extrabold text-[15px] uppercase tracking-[0.04em]">
                EXPLORE MENU
              </span>
              <div className="w-9 h-9 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:bg-[#FFAA00] transition-colors">
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={sectionFadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08, ...SPRING_PRESETS.enter }}
            >
              <Link href="/menu" className="block h-full">
                <motion.div
                  whileHover={{
                    y: -6,
                    rotate: cat.tilt,
                    transition: { type: "spring", stiffness: 350, damping: 22 },
                  }}
                  className="group relative flex flex-col h-full bg-white rounded-[28px] border-[3px] border-[#141414] shadow-[6px_6px_0px_0px_#141414] p-3 transition-colors cursor-pointer"
                >
                  {/* Image Cover */}
                  <div className="relative w-full h-[230px] rounded-[18px] overflow-hidden border-[2px] border-[#141414] bg-[#FFF4DC]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Circular Icon Badge */}
                    <div className="absolute top-3.5 right-3.5 w-[56px] h-[56px] rounded-full bg-[#FFAA00] border-[2.5px] border-[#141414] shadow-[3px_3px_0px_0px_#141414] flex items-center justify-center rotate-[-8deg] group-hover:rotate-[0deg] transition-transform duration-300 z-10">
                      {cat.svgPaths}
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="px-3 pt-5 pb-3 flex flex-col justify-between flex-grow">
                    <h3 className="font-display font-normal text-[21px] leading-[1.15] uppercase text-[#141414] mb-2">
                      {cat.title}
                    </h3>
                    <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[1.5] text-[#141414]/75">
                      {cat.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
