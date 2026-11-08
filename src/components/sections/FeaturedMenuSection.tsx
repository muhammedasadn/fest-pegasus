"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants, SPRING_PRESETS } from "@/lib/motion";

interface MenuItem {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  tilt: number;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "smash-burger",
    title: "FLAME BURGER SMASH BURGER",
    price: "$12",
    description: "A juicy smashed beef patty with cheddar, crisp lettuce, pickles, and our house Zest sauce.",
    image: "/assets/images/menu-cheeseburger.jpg",
    tilt: -2,
  },
  {
    id: "hot-honey-chicken",
    title: "HOT HONEY CHICKEN BURGER",
    price: "$13",
    description: "Crispy chicken glazed with hot honey, topped with slaw and creamy garlic mayo.",
    image: "/assets/images/menu-bacon-stack.jpg",
    tilt: 2,
  },
  {
    id: "margherita-pizza",
    title: "CLASSIC MARGHERITA PIZZA",
    price: "$15",
    description: "Tomato sauce, fresh mozzarella, basil, and a golden, airy crust.",
    image: "/assets/images/menu-jalapeno-smash.jpg",
    tilt: -2,
  },
  {
    id: "loaded-fries",
    title: "LOADED ZEST FRIES",
    price: "$8",
    description: "Crispy fries loaded with melted cheese, scallions, and smoky house sauce.",
    image: "/assets/images/menu-truffle-mushroom.jpg",
    tilt: 2,
  },
  {
    id: "chicken-tenders",
    title: "CRISPY CHICKEN TENDERS",
    price: "$11",
    description: "Golden chicken tenders served with seasoned fries and your choice of dip.",
    image: "/assets/images/menu-bbq-chicken.jpg",
    tilt: -2,
  },
  {
    id: "tuscan-pasta",
    title: "CREAMY TUSCAN PASTA",
    price: "$16",
    description: "Penne tossed in a creamy tomato sauce with herbs and parmesan.",
    image: "/assets/images/menu-garlic-fries.jpg",
    tilt: 2,
  },
];

export function FeaturedMenuSection() {
  return (
    <section
      id="menu"
      data-framer-name="Featured Menu"
      className="relative w-full bg-[#FFF4DC] py-24 md:py-32 overflow-hidden"
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
          {/* Left Title */}
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 bg-[#FFAA00] text-[#141414] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_rgba(20,20,20,0.25)] mb-5">
              <Heart className="w-4 h-4 fill-[#141414]" />
              <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
                MADE TO BE LOVED
              </span>
            </div>

            <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[54px] leading-[1.02] tracking-[-0.01em] uppercase text-[#141414]">
              MEET YOUR NEW FAVORITES
            </h2>
          </div>

          {/* Right Subtitle & CTA */}
          <div className="flex flex-col items-start lg:items-end gap-6 max-w-[480px]">
            <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.5] tracking-[-0.01em] text-[#141414]/75 text-left lg:text-right">
              Every FLAME BURGER favorite starts with quality ingredients, bold seasoning, and the kind of flavor that keeps you coming back.
            </p>

            <motion.a
              href="#full-menu"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#E30613] text-white rounded-full pl-6 pr-2 py-2 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            >
              <span className="font-body font-extrabold text-[15px] uppercase tracking-[0.04em]">
                SEE FULL MENU
              </span>
              <div className="w-9 h-9 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:bg-[#FFAA00] transition-colors">
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* 6 Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={sectionFadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08, ...SPRING_PRESETS.enter }}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  rotate: item.tilt,
                  transition: { type: "spring", stiffness: 350, damping: 22 },
                }}
                className="group relative flex flex-col h-full bg-white rounded-[28px] border-[3px] border-[#141414] shadow-[6px_6px_0px_0px_#141414] p-3 transition-colors cursor-pointer"
              >
                {/* Image Cover with Price Badge */}
                <div className="relative w-full h-[230px] rounded-[18px] overflow-hidden border-[2px] border-[#141414] bg-[#FFF4DC]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Price Tag Pill */}
                  <div className="absolute top-3.5 right-3.5 bg-[#FFAA00] text-[#141414] rounded-full px-4 py-1.5 border-[2.5px] border-[#141414] shadow-[3px_3px_0px_0px_#141414] flex items-center justify-center rotate-[-4deg] group-hover:rotate-0 transition-transform duration-300 z-10 select-none">
                    <span className="font-display font-normal text-[20px] sm:text-[22px] leading-tight text-[#141414]">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="px-3 pt-5 pb-3 flex flex-col justify-between flex-grow">
                  <h3 className="font-display font-normal text-[21px] leading-[1.15] uppercase text-[#141414] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[1.5] text-[#141414]/75">
                    {item.description}
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
