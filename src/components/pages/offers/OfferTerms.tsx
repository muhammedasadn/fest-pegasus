"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface TermItem {
  question: string;
  answer: string;
}

const TERMS: TermItem[] = [
  {
    question: "Can offer codes be combined with other ongoing promotions?",
    answer: "Only one promotional code or bundle offer can be applied per checkout. Bundle savings are pre-calculated, so you automatically receive the maximum possible discount without needing additional coupons."
  },
  {
    question: "Are these deals valid for both dine-in and online delivery?",
    answer: "Yes! All featured deals (Zestivo Combo, Pizza Night Bundle, Crispy Chicken Box, Family Feast) are available whether you dine in at our Brooklyn diner, pick up takeaway, or order direct delivery."
  },
  {
    question: "How do I redeem a promo code during checkout?",
    answer: "Simply paste your promo code (e.g. FLAMEWEEKEND) into the 'Promo / Voucher Code' input box on the cart summary page and click 'Apply'. The discount will reflect immediately on your total."
  },
  {
    question: "Can I swap items or customize sides in a bundle deal?",
    answer: "Yes, you can customize drink flavors, choose different artisan pizzas within the bundle, or upgrade your fries to loaded specialty fries for a small surcharge."
  }
];

export function OfferTerms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-24 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[860px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge
            variant="dark"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            TERMS & CONDITIONS
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#141414] tracking-tight">
            HOW OUR OFFERS WORK
          </h2>
        </div>

        <div className="space-y-4">
          {TERMS.map((term, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-[20px] border-3 border-[#141414] shadow-[4px_4px_0px_#141414] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display text-base sm:text-lg font-black text-[#141414] cursor-pointer"
                >
                  <span>{term.question}</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-[#141414] flex items-center justify-center shrink-0 transition-transform ${isOpen ? "bg-[#FFAA00]" : "bg-[#FFF4DC]"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#141414]/75 font-medium leading-relaxed border-t-2 border-[#141414]/10">
                        {term.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
