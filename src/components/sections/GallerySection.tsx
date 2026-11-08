"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sectionFadeUpVariants, staggerContainerVariants } from "@/lib/motion";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  widthClass: string;
  rotateDeg: number;
}

const ROW_1_ITEMS: GalleryItem[] = [
  {
    id: "g-06",
    src: "/assets/images/gallery-06.jpg",
    alt: "A retro diner with neon signs at night",
    widthClass: "w-[280px] sm:w-[340px]",
    rotateDeg: -2,
  },
  {
    id: "g-02",
    src: "/assets/images/gallery-02.jpg",
    alt: "Person holding pizza with cheese and green leaves",
    widthClass: "w-[220px] sm:w-[260px]",
    rotateDeg: 2,
  },
  {
    id: "g-05",
    src: "/assets/images/gallery-05.jpg",
    alt: "Fried fries on white paper",
    widthClass: "w-[280px] sm:w-[340px]",
    rotateDeg: -2,
  },
  {
    id: "g-04",
    src: "/assets/images/gallery-04.jpg",
    alt: "A delicious burger with onion rings and cheese",
    widthClass: "w-[220px] sm:w-[260px]",
    rotateDeg: 2,
  },
  {
    id: "g-08",
    src: "/assets/images/gallery-08.jpg",
    alt: "A slice of pizza with melted cheese being lifted",
    widthClass: "w-[280px] sm:w-[340px]",
    rotateDeg: -2,
  },
];

const ROW_2_ITEMS: GalleryItem[] = [
  {
    id: "g-03",
    src: "/assets/images/gallery-03.jpg",
    alt: "A person holding a tray of fries with cheese and toppings",
    widthClass: "w-[280px] sm:w-[340px]",
    rotateDeg: 2,
  },
  {
    id: "g-07",
    src: "/assets/images/gallery-07.jpg",
    alt: "A chef pressing burger patties on a flat top grill",
    widthClass: "w-[220px] sm:w-[260px]",
    rotateDeg: -2,
  },
  {
    id: "g-01",
    src: "/assets/images/gallery-01.jpg",
    alt: "A double cheeseburger with pickles on a dark surface",
    widthClass: "w-[280px] sm:w-[340px]",
    rotateDeg: 2,
  },
  {
    id: "g-10",
    src: "/assets/images/gallery-10.jpg",
    alt: "A sliced pizza with pepperoni and ham on a dark wooden table",
    widthClass: "w-[220px] sm:w-[260px]",
    rotateDeg: -2,
  },
  {
    id: "g-09",
    src: "/assets/images/gallery-09.jpg",
    alt: "Strawberry milkshake with breakfast on table",
    widthClass: "w-[280px] sm:w-[340px]",
    rotateDeg: 2,
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section
      id="gallery"
      className="relative w-full bg-[#141414] py-[72px] sm:py-[96px] lg:py-[120px] overflow-hidden flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        className="max-w-[800px] mx-auto px-5 text-center flex flex-col items-center mb-12 sm:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
      >
        {/* Eyebrow Badge */}
        <motion.div
          variants={sectionFadeUpVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFAA00] text-[#141414] font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-[1.12px] border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_#141414]"
        >
          <span>A Feast for the Eyes</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={sectionFadeUpVariants}
          className="font-display text-[32px] sm:text-[42px] lg:text-[54px] font-black uppercase text-white leading-[1.05] tracking-tight mt-5"
        >
          Fresh from Our Kitchen
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={sectionFadeUpVariants}
          className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] font-medium leading-[1.5] text-white/75 mt-4 max-w-[760px]"
        >
          Take a look at the burgers, sides, pizzas, and moments that make FLAME
          BURGER a little more delicious.
        </motion.p>
      </motion.div>

      {/* Marquee Row 1 (Left Scrolling) */}
      <div className="relative w-full overflow-hidden mb-5 sm:mb-7 flex">
        <motion.div
          className="flex items-center gap-5 sm:gap-7 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 38,
            repeat: Infinity,
          }}
        >
          {[...ROW_1_ITEMS, ...ROW_1_ITEMS].map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              style={{ transform: `rotate(${item.rotateDeg}deg)` }}
              className={`relative ${item.widthClass} h-[210px] sm:h-[260px] rounded-[24px] overflow-hidden shrink-0 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] group hover:scale-[1.02] hover:rotate-0 transition-transform duration-300`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 280px, 340px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Right Scrolling) */}
      <div className="relative w-full overflow-hidden flex">
        <motion.div
          className="flex items-center gap-5 sm:gap-7 shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 44,
            repeat: Infinity,
          }}
        >
          {[...ROW_2_ITEMS, ...ROW_2_ITEMS].map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              style={{ transform: `rotate(${item.rotateDeg}deg)` }}
              className={`relative ${item.widthClass} h-[210px] sm:h-[260px] rounded-[24px] overflow-hidden shrink-0 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] group hover:scale-[1.02] hover:rotate-0 transition-transform duration-300`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 280px, 340px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
