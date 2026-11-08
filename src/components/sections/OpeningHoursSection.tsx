"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants } from "@/lib/motion";

export function OpeningHoursSection() {
  return (
    <section
      id="hours"
      data-framer-name="Opening Hours"
      className="relative w-full bg-[#FFAA00] py-20 md:py-28 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Info */}
          <motion.div
            variants={sectionFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#141414] text-[#FFAA00] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_rgba(20,20,20,0.25)] mb-5">
              <Clock className="w-4 h-4 stroke-[#FFAA00]" />
              <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
                OPEN 7 DAYS
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[54px] leading-[1.02] tracking-[-0.01em] uppercase text-[#141414] mb-6">
              DROP IN WHEN THE CRAVING HITS
            </h2>

            {/* Subtitle */}
            <p className="font-body font-normal text-[18px] sm:text-[20px] leading-[1.5] text-[#141414]/75 mb-9 max-w-[580px]">
              Grab a seat, order ahead for pickup, or bring the whole crew. Our kitchen keeps the grill hot from morning to late night.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#141414] text-white rounded-full pl-6 pr-2 py-2 border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            >
              <span className="font-body font-extrabold text-[15px] uppercase tracking-[0.04em]">
                BOOK A TABLE
              </span>
              <div className="w-9 h-9 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:bg-[#FFAA00] transition-colors">
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column: Retro Diner Receipt / Ticket Card */}
          <motion.div
            variants={sectionFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{
                y: -6,
                rotate: 1,
                transition: { type: "spring", stiffness: 350, damping: 22 },
              }}
              className="relative w-full max-w-[420px] bg-white rounded-[24px] border-[3px] border-[#141414] shadow-[8px_8px_0px_0px_#141414] p-7 sm:p-8 flex flex-col items-center text-center cursor-default"
            >
              {/* Receipt Header */}
              <h3 className="font-display font-normal text-[28px] uppercase tracking-[-0.01em] text-[#237227] mb-1">
                FLAME BURGER
              </h3>
              <p className="font-body text-[14px] text-[#141414]/60 uppercase tracking-[0.04em] mb-5">
                Opening Hours · Order #001
              </p>

              {/* Dashed Line */}
              <div className="w-full border-b-[2px] border-dashed border-[#141414]/25 mb-6" />

              {/* Weekly Schedule */}
              <div className="w-full flex flex-col gap-5 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[20px] uppercase text-[#141414]">
                    MON – THU
                  </span>
                  <span className="font-body font-extrabold text-[19px] text-[#141414]">
                    10 AM – 10 PM
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-[20px] uppercase text-[#141414]">
                    FRI – SUN
                  </span>
                  <span className="font-body font-extrabold text-[19px] text-[#141414]">
                    10 AM – 11 PM
                  </span>
                </div>
              </div>

              {/* Dashed Line */}
              <div className="w-full border-b-[2px] border-dashed border-[#141414]/25 mb-6" />

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 bg-[#FFAA00] text-[#141414] rounded-full px-5 py-2 border-[2px] border-[#141414] shadow-[2px_2px_0px_0px_#141414] mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#237227] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#237227]" />
                </span>
                <span className="font-body font-extrabold text-[14px] uppercase tracking-[0.02em]">
                  Open 7 days a week
                </span>
              </div>

              {/* Footer Note */}
              <p className="font-body text-[13px] text-[#141414]/60 italic">
                Thank you for eating with zest!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
