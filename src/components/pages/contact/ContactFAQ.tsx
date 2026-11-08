"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "HOW CAN I CHECK IF DELIVERY IS AVAILABLE?",
    answer: "We deliver within a 5-mile radius of our Brooklyn diner. Simply enter your delivery address at checkout on our Online Order page to verify instant driver availability."
  },
  {
    question: "HOW DO I ASK ABOUT A RECENT ORDER?",
    answer: "If you have an immediate inquiry regarding an active or recent delivery order, give us a quick call at +1 (212) 555-0186 for real-time order tracking and support."
  },
  {
    question: "HOW FAR IN ADVANCE SHOULD I BOOK CATERING?",
    answer: "For standard party boxes (up to 25 guests), 24 hours notice is plenty. For large corporate spreads or weddings (50-200 guests), we recommend booking 3 to 5 business days in advance."
  },
  {
    question: "DO YOU ACCEPT FEEDBACK?",
    answer: "Absolutely! We read and review every single piece of feedback. Drop us a note via our contact form or leave a review on Google—your thoughts help us keep our food and hospitality world-class."
  }
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414] scroll-mt-24">
      <div className="max-w-[860px] mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            QUICK ANSWERS
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            NEED A QUICK ANSWER?
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Here are the most frequently asked questions about visits, deliveries, and catering orders.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
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
                  <span>{faq.question}</span>
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
                        {faq.answer}
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
