"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { sectionFadeUpVariants, SPRING_PRESETS } from "@/lib/motion";

interface Review {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  tilt: number;
}

const REVIEWS: Review[] = [
  {
    id: "alex",
    quote: "“The burger was juicy, the fries were perfectly crisp, and everything arrived hot. FLAME BURGER is officially our new go-to.”",
    author: "Alex M.",
    role: "Local Guest",
    avatar: "/assets/images/testimonial-avatar-1.jpg",
    tilt: -2,
  },
  {
    id: "taylor",
    quote: "“Great portions, bold flavors, and friendly service. Ordering for the whole team was easy.”",
    author: "Taylor R.",
    role: "Office Manager",
    avatar: "/assets/images/testimonial-avatar-2.jpg",
    tilt: 2,
  },
  {
    id: "jordan",
    quote: "“Everything tasted fresh, and the hot honey chicken burger was incredible. I will definitely be back.”",
    author: "Jordan K.",
    role: "Happy Customer",
    avatar: "/assets/images/testimonial-avatar-3.jpg",
    tilt: -2,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-framer-name="Testimonials"
      className="relative w-full bg-[#FFAA00] py-24 md:py-32 overflow-hidden"
    >
      <Container>
        {/* Section Header (Centered) */}
        <motion.div
          variants={sectionFadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 md:mb-20"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-[#141414] text-[#FFAA00] rounded-full px-4 py-2 border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_rgba(20,20,20,0.25)] mb-5">
            <Heart className="w-4 h-4 fill-[#FFAA00] stroke-[#FFAA00]" />
            <span className="font-body font-extrabold text-[13px] tracking-[0.08em] uppercase">
              LOVE FROM OUR GUESTS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[54px] leading-[1.04] tracking-[-0.01em] uppercase text-[#141414]">
            THE WORD ON FLAME BURGER
          </h2>
        </motion.div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              variants={sectionFadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.1, ...SPRING_PRESETS.enter }}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  rotate: rev.tilt,
                  transition: { type: "spring", stiffness: 350, damping: 22 },
                }}
                className="group relative flex flex-col h-full justify-between bg-white rounded-[28px] border-[3px] border-[#141414] shadow-[6px_6px_0px_0px_#141414] p-8 transition-colors cursor-default"
              >
                {/* Top: 5 Stars */}
                <div>
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FFAA00] stroke-[#141414] stroke-[1.5]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-body font-medium text-[18px] sm:text-[19px] leading-[1.55] text-[#141414] mb-8">
                    {rev.quote}
                  </p>
                </div>

                {/* Bottom: Author with Avatar */}
                <div>
                  <div className="w-full border-b border-[#141414]/15 mb-6" />

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-[2.5px] border-[#141414] bg-[#FFF4DC] flex-shrink-0">
                      <Image
                        src={rev.avatar}
                        alt={rev.author}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-display font-normal text-[20px] uppercase text-[#141414] leading-tight">
                        {rev.author}
                      </h3>
                      <span className="font-body text-[14px] text-[#141414]/65">
                        {rev.role}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
