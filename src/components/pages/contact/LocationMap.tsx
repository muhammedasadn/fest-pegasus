"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MapPin, Navigation, Compass } from "lucide-react";

export function LocationMap() {
  return (
    <section className="py-20 md:py-24 bg-[#FFAA00] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="bg-[#FFF4DC] rounded-[32px] border-3 border-[#141414] shadow-[8px_8px_0px_#141414] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <Badge
                variant="red"
                className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                FIND US
              </Badge>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-5">
                VISIT FLAME BURGER
              </h2>

              <p className="text-base sm:text-lg text-[#141414]/80 font-medium leading-relaxed mb-6">
                We’re located at <span className="font-bold text-[#141414]">123 Flavor Street, Brooklyn, NY 11201</span>. Look for our signature red door, neon burger sign, and follow the smell of fresh sizzling beef.
              </p>

              <div className="bg-white rounded-2xl border-3 border-[#141414] p-5 mb-8 w-full shadow-[4px_4px_0px_#141414]">
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-bold text-[#141414]">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#141414]/60 block mb-1">
                      SUBWAY LINES
                    </span>
                    <span>A, C, F to Jay St-MetroTech</span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#141414]/60 block mb-1">
                      PARKING
                    </span>
                    <span>Street parking + Garage nearby</span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#141414] hover:bg-[#E53935] text-white font-display text-xs sm:text-sm font-black border-3 border-[#141414] shadow-[4px_4px_0px_#141414] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>

            {/* Right Map Canvas Simulation */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] border-3 border-[#141414] shadow-[6px_6px_0px_#141414] overflow-hidden bg-[#237227]/20 p-6 flex flex-col justify-between">
                {/* Simulated Street Grid Lines */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#141414_2px,transparent_2px),linear-gradient(to_bottom,#141414_2px,transparent_2px)] [background-size:40px_40px] pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3.5 py-1.5 rounded-full bg-white border-2 border-[#141414] font-display text-xs font-black shadow-[2px_2px_0px_#141414] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#E53935]" />
                    <span>BROOKLYN, NEW YORK</span>
                  </div>
                </div>

                {/* Center Pin Marker */}
                <div className="relative z-10 self-center text-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-full bg-[#E53935] text-white flex items-center justify-center border-3 border-[#141414] shadow-[4px_4px_0px_#141414] mx-auto mb-2"
                  >
                    <MapPin className="w-7 h-7 fill-white" />
                  </motion.div>
                  <div className="px-4 py-1.5 rounded-xl bg-white border-2 border-[#141414] shadow-[3px_3px_0px_#141414] inline-block font-display text-xs font-black text-[#141414]">
                    FLAME BURGER NYC
                  </div>
                </div>

                <div className="relative z-10 text-right">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#141414]/70 bg-white/80 px-2.5 py-1 rounded-md border border-[#141414]/30">
                    LIVE STATUS: OPEN NOW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
