"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const DETAILS = [
  {
    icon: MapPin,
    title: "ADDRESS",
    value: "123 Flavor Street, Brooklyn, NY 11201",
    subtitle: "Look for the red door and open flame sign",
    bg: "bg-[#FFAA00]",
    link: "https://maps.google.com"
  },
  {
    icon: Phone,
    title: "PHONE",
    value: "+1 (212) 555-0186",
    subtitle: "Direct line to our restaurant host & takeout desk",
    bg: "bg-[#E53935]",
    textColor: "text-white",
    link: "tel:+12125550186"
  },
  {
    icon: Mail,
    title: "EMAIL",
    value: "hello@flameburger.example",
    subtitle: "Catering, general inquiries, press & partnerships",
    bg: "bg-[#FFF4DC]",
    link: "mailto:hello@flameburger.example"
  },
  {
    icon: Clock,
    title: "OPENING HOURS",
    value: "Mon–Thu: 10AM–10PM",
    subtitle: "Fri–Sun: 10AM–11PM (Late Night Window)",
    bg: "bg-[#237227]",
    textColor: "text-white"
  }
];

export function ContactDetailsGrid() {
  return (
    <section className="py-20 md:py-24 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            CONTACT DETAILS
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            HERE’S HOW TO REACH US
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Drop by our diner or reach out through any of the channels below. We respond quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {DETAILS.map((det, idx) => {
            const Icon = det.icon;
            return (
              <motion.div
                key={det.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`p-7 rounded-[24px] border-3 border-[#141414] ${det.bg} ${det.textColor || "text-[#141414]"} shadow-[6px_6px_0px_#141414] hover:shadow-[8px_8px_0px_#141414] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#141414] text-white flex items-center justify-center border-2 border-white/20 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs uppercase font-display font-black tracking-widest opacity-70 block mb-1">
                    {det.title}
                  </span>

                  <h3 className="font-display text-lg sm:text-xl font-black tracking-tight mb-2">
                    {det.value}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium opacity-80 leading-relaxed mb-4">
                    {det.subtitle}
                  </p>
                </div>

                {det.link && (
                  <a
                    href={det.link}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-black uppercase tracking-wider hover:underline"
                  >
                    <span>CONNECT</span>
                    <span>→</span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
