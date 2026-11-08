"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Check, ArrowRight } from "lucide-react";

interface Deal {
  id: string;
  badge: string;
  title: string;
  description: string;
  includes: string[];
  originalPrice: string;
  dealPrice: string;
  bgColor: string;
  textColor: string;
  badgeBg: string;
  badgeText: string;
  image: string;
}

const DEALS: Deal[] = [
  {
    id: "zestivo-combo",
    badge: "SAVE 25%",
    title: "THE ZESTIVO COMBO",
    description: "The ultimate single diner feast: our signature smashed beef patty paired with loaded cheesy fries and ice-cold drink.",
    includes: ["Flame Burger Smash Burger", "Loaded Zest Fries", "Any Soft Drink or Lemonade"],
    originalPrice: "$18.00",
    dealPrice: "$13.50",
    bgColor: "bg-[#E53935]",
    textColor: "text-white",
    badgeBg: "bg-[#FFAA00]",
    badgeText: "text-[#141414]",
    image: "/assets/images/offer-zestivo-combo.jpg"
  },
  {
    id: "pizza-bundle",
    badge: "SAVE 30%",
    title: "PIZZA NIGHT BUNDLE",
    description: "Perfect for two or three: choose any two artisan stone-baked pizzas, paired with hot garlic bread and two chilled sodas.",
    includes: ["Any 2 Large Artisan Pizzas", "Cheesy Garlic Herb Bread", "2 Cans or Bottled Drinks"],
    originalPrice: "$38.00",
    dealPrice: "$26.50",
    bgColor: "bg-[#FFAA00]",
    textColor: "text-[#141414]",
    badgeBg: "bg-[#141414]",
    badgeText: "text-white",
    image: "/assets/images/offer-pizza-party.jpg"
  },
  {
    id: "chicken-box",
    badge: "SAVE 20%",
    title: "CRISPY CHICKEN BOX",
    description: "Crispy chicken lovers rejoice: tender hand-breaded chicken tenders served with crispy seasoned fries and two gourmet dips.",
    includes: ["6 Hand-Breaded Tenders", "Large Seasoned Fries", "2 Signature House Dips"],
    originalPrice: "$16.00",
    dealPrice: "$12.80",
    bgColor: "bg-[#FFF4DC]",
    textColor: "text-[#141414]",
    badgeBg: "bg-[#E53935]",
    badgeText: "text-white",
    image: "/assets/images/offer-crispy-chicken.jpg"
  },
  {
    id: "family-feast",
    badge: "GROUP FAVE",
    title: "FAMILY FEAST",
    description: "Feeds the whole crowd with big smiles: four signature burgers, two large fries, onion rings, and four drinks.",
    includes: ["4 Signature Smash Burgers", "2 Large French Fries", "Crispy Onion Rings", "4 Soft Drinks"],
    originalPrice: "$55.00",
    dealPrice: "$42.00",
    bgColor: "bg-[#237227]",
    textColor: "text-white",
    badgeBg: "bg-[#FFAA00]",
    badgeText: "text-[#141414]",
    image: "/assets/images/catering-party-spread.jpg"
  }
];

export function DealsGrid() {
  return (
    <section id="featured-deals" className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            FEATURED OFFERS
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            PICK YOUR DEAL
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Hand-picked bundles designed around your favorite combinations. Made fresh to order and available for dine-in, takeaway, or direct delivery.
          </p>
        </div>

        {/* 2x2 Grid of High-Impact Deal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {DEALS.map((deal, idx) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-[28px] border-3 border-[#141414] ${deal.bgColor} ${deal.textColor} shadow-[8px_8px_0px_#141414] hover:shadow-[10px_10px_0px_#141414] transition-all overflow-hidden flex flex-col justify-between`}
            >
              <div>
                {/* Image Top */}
                <div className="relative w-full h-[220px] border-b-3 border-[#141414] overflow-hidden bg-black/10">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className={`absolute top-4 left-4 ${deal.badgeBg} ${deal.badgeText} font-display text-xs md:text-sm font-black px-3.5 py-1.5 rounded-full border-2 border-[#141414] shadow-[3px_3px_0px_#141414]`}>
                    {deal.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight">
                      {deal.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base opacity-90 font-medium leading-relaxed mb-6">
                    {deal.description}
                  </p>

                  {/* Bullet checklist */}
                  <ul className="space-y-2 mb-8">
                    {deal.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                        <span className="w-5 h-5 rounded-full bg-[#141414] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Price & Order CTA */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t-2 border-[#141414]/15 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold line-through opacity-60 block">
                    Regular {deal.originalPrice}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-black">
                    {deal.dealPrice}
                  </span>
                </div>

                <a
                  href="#order-deal"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] text-white hover:bg-[#E53935] font-display text-xs sm:text-sm font-black border-2 border-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:-translate-y-0.5"
                >
                  <span>ORDER THIS DEAL</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
