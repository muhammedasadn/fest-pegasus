"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "FRESH SMASH BURGERS",
  "CRISPY CRUNCH FRIES",
  "HANDMADE THICK SHAKES",
  "100% FRESH ANGUS BEEF",
  "SECRET FLAME SAUCE",
  "HOT & FAST ALWAYS",
  "MELTED CHEDDAR PERFECTION",
];

export function MarqueeSection() {
  const repeatedText = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y-[3px] border-[#141414] py-5 sm:py-6 md:py-7 select-none"
      style={{
        background:
          "linear-gradient(rgb(35, 114, 39) 46%, rgb(227, 6, 19) 50%, rgb(255, 170, 0) 50%)",
      }}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {repeatedText.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-3 sm:mx-4">
            <span className="font-display font-normal text-white text-[24px] sm:text-[32px] md:text-[38px] tracking-tight uppercase drop-shadow-[2px_2px_0px_#141414]">
              {item}
            </span>
            <span className="text-[#FFAA00] text-[20px] sm:text-[28px] drop-shadow-[2px_2px_0px_#141414]">
              ★
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
