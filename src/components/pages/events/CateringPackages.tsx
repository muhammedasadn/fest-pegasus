"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Check, ArrowRight } from "lucide-react";

interface Package {
  title: string;
  serves: string;
  price: string;
  description: string;
  items: string[];
  image: string;
}

const PACKAGES: Package[] = [
  {
    title: "BURGER PARTY BOX",
    serves: "Serves 10–12",
    price: "$95",
    description: "Our signature smashed burgers in party-ready format. Pick between classic cheddar smash, crispy chicken, or veggie options.",
    items: ["12 Signature Mini Burgers", "Large Tray of Seasoned Fries", "House Pickles & Zest Sauces", "Disposable Napkins & Trays"],
    image: "/assets/images/cat-smash-burgers.jpg"
  },
  {
    title: "PIZZA SHARING SET",
    serves: "Serves 12–16",
    price: "$85",
    description: "Four artisan stone-baked pizzas freshly pulled from the oven, accompanied by warm cheesy garlic bread.",
    items: ["4 Large Artisan Pizzas of Choice", "2 Trays of Cheesy Garlic Bread", "Signature Dipping Sauces", "Paper Plates & Cutlery Included"],
    image: "/assets/images/gallery-03.jpg"
  },
  {
    title: "CRISPY CHICKEN PLATTER",
    serves: "Serves 8–10",
    price: "$75",
    description: "Golden, crispy hand-breaded chicken tenders paired with three specialty house dips and a heap of fries.",
    items: ["24 Crispy Chicken Tenders", "Large Golden Fries Platter", "Garlic Mayo, Smoky BBQ & Hot Honey Dips", "Lemon Wedges & Fresh Slaw"],
    image: "/assets/images/offer-crispy-chicken.jpg"
  },
  {
    title: "SIDES & DIPS TRAY",
    serves: "Serves 10–15",
    price: "$45",
    description: "The crowd-pleasing snack trio: loaded cheese fries, crispy battered onion rings, and gooey mozzarella bites.",
    items: ["Loaded Cheese & Bacon Fries", "Crispy Onion Rings", "Golden Mozzarella Sticks", "Choice of 3 Gourmet Dips"],
    image: "/assets/images/cat-loaded-fries.jpg"
  }
];

export function CateringPackages() {
  return (
    <section className="py-20 md:py-28 bg-[#141414] text-white border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            CATERING MENU
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            MADE FOR SHARING
          </h2>
          <p className="text-base sm:text-lg text-white/75 font-medium leading-relaxed">
            Generously portioned trays and platters designed for quick serving, bold flavor, and zero setup stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white text-[#141414] rounded-[28px] border-3 border-white/20 shadow-[8px_8px_0px_#FFAA00] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[220px] bg-[#FFF4DC] border-b-3 border-[#141414] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFAA00] text-[#141414] font-display text-sm font-black px-3.5 py-1.5 rounded-full border-2 border-[#141414] shadow-[3px_3px_0px_#141414]">
                    {pkg.price}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#141414] text-white font-display text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.serves}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl font-black tracking-tight mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#141414]/75 font-medium leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#141414]/90">
                        <span className="w-5 h-5 rounded-full bg-[#237227] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t-2 border-[#141414]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-[#141414]/60 block">Price</span>
                  <span className="font-display text-2xl font-black text-[#141414]">{pkg.price}</span>
                </div>
                <a
                  href="#catering-form"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-display text-xs sm:text-sm font-black border-2 border-[#141414] shadow-[3px_3px_0px_#141414] transition-transform hover:-translate-y-0.5"
                >
                  <span>SELECT PACKAGE</span>
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
