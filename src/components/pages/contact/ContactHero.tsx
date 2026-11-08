"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MessageSquare, ArrowDown, Zap } from "lucide-react";

export function ContactHero() {
  const scrollToForm = () => {
    const el = document.getElementById("message-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF4DC] border-b-3 border-[#141414] pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#FFAA00]/20 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Badge
            variant="yellow"
            className="mb-5 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            GET IN TOUCH
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#141414] tracking-tight leading-[1.05] mb-6">
            LET’S TALK <span className="text-[#E53935]">FOOD.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#141414]/80 font-medium leading-relaxed max-w-xl mx-auto mb-8">
            Questions about the menu, a recent order, large catering for an event, or planning a visit to Brooklyn? Our team is always here to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="yellow"
              size="lg"
              onClick={scrollToForm}
              className="bg-[#FFAA00] hover:bg-[#FFB72B] text-[#141414] flex items-center gap-2 group cursor-pointer font-black"
            >
              <span>SEND US A MESSAGE</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#237227] text-white font-display text-xs font-black border-2 border-[#141414] shadow-[3px_3px_0px_#141414]">
              <Zap className="w-3.5 h-3.5 fill-white" />
              WE REPLY FAST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
