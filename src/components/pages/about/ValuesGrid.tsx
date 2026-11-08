"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Award, Flame, Users, Smile } from "lucide-react";

const VALUES = [
  {
    icon: Award,
    title: "QUALITY FIRST",
    description: "No frozen mystery patties or artificial shortcuts. We source fresh, wholesome ingredients daily and prepare food with meticulous respect.",
    bg: "bg-[#FFAA00]",
    text: "text-[#141414]"
  },
  {
    icon: Flame,
    title: "FLAVOR WITHOUT COMPROMISE",
    description: "Every sauce is balanced to perfection, every smash burger gets that signature crispy lace edge, and every slice of pizza has the ideal pull.",
    bg: "bg-[#E53935]",
    text: "text-white"
  },
  {
    icon: Users,
    title: "PEOPLE MATTER",
    description: "Our kitchen crew, service team, and neighborhood regulars are the beating heart of Flame Burger. We believe in treating everyone like family.",
    bg: "bg-[#FFF4DC]",
    text: "text-[#141414]"
  },
  {
    icon: Smile,
    title: "ALWAYS WELCOMING",
    description: "Whether it is your first visit or your fiftieth, step through our red door and feel right at home with good music, warm smiles, and zero pretension.",
    bg: "bg-[#237227]",
    text: "text-white"
  }
];

export function ValuesGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <Award className="w-3.5 h-3.5" />
            WHAT WE STAND FOR
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            WHAT WE BRING TO THE TABLE
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            The four foundational pillars that guide how we source our ingredients, craft our recipes, and welcome every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-7 rounded-[24px] border-3 border-[#141414] ${val.bg} ${val.text} shadow-[6px_6px_0px_#141414] hover:shadow-[8px_8px_0px_#141414] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#141414] text-white flex items-center justify-center border-2 border-white/20 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-black tracking-tight mb-3">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium opacity-85 leading-relaxed">
                    {val.description}
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
