"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ListOrdered, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "SHARE THE DETAILS",
    description: "Tell us your event date, expected guest count, delivery venue, and any special timing constraints.",
    color: "bg-[#FFAA00]"
  },
  {
    num: "02",
    title: "PICK YOUR FAVORITES",
    description: "Choose from our high-value sharing sets or create a customized spread tailored to dietary preferences.",
    color: "bg-[#E53935]",
    textColor: "text-white"
  },
  {
    num: "03",
    title: "WE CONFIRM & COOK",
    description: "Our kitchen verifies your order, preps fresh on the event day, and delivers smoking hot right on schedule.",
    color: "bg-[#237227]",
    textColor: "text-white"
  }
];

export function CateringSteps() {
  return (
    <section className="py-20 md:py-24 bg-[#FFAA00] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="dark"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <ListOrdered className="w-3.5 h-3.5" />
            HOW IT WORKS
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            EASY PLANNING, DELICIOUS RESULTS
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/80 font-medium leading-relaxed">
            Three simple steps to coordinate meals for 10 to 200 guests with zero hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[28px] border-3 border-[#141414] p-8 shadow-[6px_6px_0px_#141414] flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${step.color} ${step.textColor || "text-[#141414]"} font-display text-2xl font-black flex items-center justify-center border-3 border-[#141414] shadow-[3px_3px_0px_#141414] mb-6`}>
                  {step.num}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-[#141414] tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[#141414]/75 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
