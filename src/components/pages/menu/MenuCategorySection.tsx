"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { MenuCategory } from "./MenuData";

interface MenuCategorySectionProps {
  category: MenuCategory;
}

export function MenuCategorySection({ category }: MenuCategorySectionProps) {
  return (
    <section id={category.id} className="py-12 md:py-16 bg-[#FFF4DC] border-b-2 border-[#141414]/10 scroll-mt-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b-3 border-[#141414]">
          <div>
            <span className="text-xs uppercase font-display font-black tracking-widest text-[#E53935] block mb-1">
              CATEGORY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] tracking-tight">
              {category.name}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#141414]/70 font-medium max-w-md">
            {category.tagline}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {category.items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-[24px] border-3 border-[#141414] shadow-[6px_6px_0px_#141414] hover:shadow-[8px_8px_0px_#141414] transition-shadow overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-[210px] bg-[#FFAA00]/20 border-b-3 border-[#141414] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                />

                {/* Price Badge */}
                <div className="absolute top-3.5 right-3.5 bg-[#FFAA00] text-[#141414] font-display text-sm font-black px-3 py-1 rounded-full border-2 border-[#141414] shadow-[3px_3px_0px_#141414]">
                  {item.price}
                </div>

                {/* Optional Status Badge */}
                {item.badge && (
                  <div className="absolute top-3.5 left-3.5 bg-[#E53935] text-white font-display text-xs font-black px-3 py-1 rounded-full border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-black text-[#141414] tracking-tight leading-snug mb-2.5">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#141414]/75 font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#141414]/10 flex items-center justify-between">
                  <span className="font-display text-lg font-black text-[#141414]">
                    {item.price}
                  </span>
                  <a
                    href="#order"
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#141414] text-white font-display text-xs font-bold hover:bg-[#E53935] transition-colors"
                  >
                    ORDER NOW
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
