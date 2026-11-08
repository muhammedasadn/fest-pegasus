"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { sectionFadeUpVariants, staggerContainerVariants, SPRING_PRESETS } from "@/lib/motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Do you offer delivery?",
    answer:
      "Yes. Delivery options depend on your location. Enter your address when ordering to check availability.",
  },
  {
    question: "Can I order ahead for pickup?",
    answer:
      "Absolutely. Place your order online and choose pickup when the option is available.",
  },
  {
    question: "Do you offer catering?",
    answer:
      "Yes. We offer group-friendly menus for office lunches, parties, and special events. Contact us to discuss your needs.",
  },
  {
    question: "Can I reserve a table?",
    answer:
      "Yes. Use our booking form or contact the team to request a table. Reservations are confirmed by our team.",
  },
  {
    question: "Can you accommodate dietary needs?",
    answer:
      "Please contact us before ordering to discuss ingredients and possible allergen concerns. Our kitchen handles common allergens.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#FFF4DC] px-5 py-[72px] sm:px-8 sm:py-[96px] lg:px-10 lg:py-[120px] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
        {/* Left Column: Heading & CTA */}
        <motion.div
          className="w-full lg:w-[420px] flex flex-col items-start shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          {/* Eyebrow Pill */}
          <motion.div
            variants={sectionFadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] text-[#FFAA00] font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-[1.12px] border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_#FFAA00]"
          >
            <span>Good Questions</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={sectionFadeUpVariants}
            className="font-display text-[38px] sm:text-[46px] lg:text-[54px] font-black uppercase text-[#141414] leading-[1.05] tracking-tight mt-6"
          >
            A Few Things You Might Be Wondering
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={sectionFadeUpVariants}
            className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] font-medium leading-[1.45] text-[#141414]/75 mt-5 max-w-[420px]"
          >
            Still hungry for answers? Our team is happy to help with orders,
            catering, and anything in between.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={sectionFadeUpVariants} className="mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-[#237227] text-white font-sans font-extrabold text-[15px] sm:text-[16px] uppercase tracking-[0.48px] border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] hover:shadow-[2px_2px_0px_0px_#141414] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
            >
              <span>Ask Us Anything</span>
              <span className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-200">
                <ArrowUpRight className="w-4 h-4 text-[#237227] stroke-[3]" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Accordion List */}
        <motion.div
          className="w-full lg:w-[708px] flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <motion.div
                key={faq.question}
                variants={sectionFadeUpVariants}
                className="w-full rounded-[24px] bg-white border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#141414] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 sm:px-7 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <h4 className="font-display text-[18px] sm:text-[20px] lg:text-[21px] font-black uppercase text-[#141414] leading-[1.2]">
                    {faq.question}
                  </h4>

                  {/* Toggle Circle */}
                  <div
                    className={`w-[42px] h-[42px] rounded-full border-[3px] border-[#141414] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#141414] rotate-180"
                        : "bg-[#FFAA00] group-hover:scale-105"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                    >
                      {/* Horizontal bar */}
                      <line
                        x1="4"
                        y1="12"
                        x2="20"
                        y2="12"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        className={isOpen ? "text-[#FFAA00]" : "text-[#141414]"}
                      />
                      {/* Vertical bar (animates opacity & scale) */}
                      {!isOpen && (
                        <line
                          x1="12"
                          y1="4"
                          x2="12"
                          y2="20"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          className="text-[#141414]"
                        />
                      )}
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-6 pt-0 border-t border-[#141414]/10 mt-1">
                        <p className="font-sans text-[16px] sm:text-[17px] font-medium leading-[1.55] text-[#141414]/80 pt-3">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
