"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Cake, Home, Users } from "lucide-react";

const OCCASIONS = [
  {
    icon: Briefcase,
    title: "OFFICE LUNCHES",
    description: "Keep the team energized and focused with customized burger boxes, fresh wraps, loaded sides, and easy-to-serve platters.",
    bg: "bg-[#FFAA00]",
    text: "text-[#141414]",
    tag: "MOST POPULAR"
  },
  {
    icon: Cake,
    title: "BIRTHDAYS & CELEBRATIONS",
    description: "Make the big day unforgettable with crowd-pleasing smash burgers, crispy sides, and party packs designed for lively celebrations.",
    bg: "bg-[#E53935]",
    text: "text-white",
    tag: "PARTY FAVORITE"
  },
  {
    icon: Home,
    title: "FAMILY GATHERINGS",
    description: "Generous portions, simple setup, and wholesome choices that everyone from toddlers to grandparents will crave and enjoy.",
    bg: "bg-[#FFF4DC]",
    text: "text-[#141414]",
    tag: "ALL AGES"
  },
  {
    icon: Users,
    title: "COMMUNITY & PRIVATE EVENTS",
    description: "Large-format buffet trays, tailored dietary accommodations, and seamless coordination for festivals, sports meets, and reunions.",
    bg: "bg-[#237227]",
    text: "text-white",
    tag: "LARGE FORMAT"
  }
];

export function OccasionsGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5" />
            EVERY OCCASION
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            WHATEVER THE OCCASION, WE’VE GOT THE FOOD
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Tell us what you are celebrating and we will help make the menu one less thing to worry about with fast, hot, and generous portions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {OCCASIONS.map((occ, idx) => {
            const Icon = occ.icon;
            return (
              <motion.div
                key={occ.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-7 rounded-[24px] border-3 border-[#141414] ${occ.bg} ${occ.text} shadow-[6px_6px_0px_#141414] hover:shadow-[8px_8px_0px_#141414] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#141414] text-white flex items-center justify-center border-2 border-white/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/15">
                      {occ.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-black tracking-tight mb-3">
                    {occ.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium opacity-85 leading-relaxed">
                    {occ.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
