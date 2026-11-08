"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#141414] text-white border-b-3 border-[#141414] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E53935]/15 blur-3xl pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-4 md:px-6 relative z-10 text-center">
        <Badge
          variant="yellow"
          className="mb-5 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
        >
          <Mail className="w-3.5 h-3.5" />
          NEWSLETTER
        </Badge>

        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-5">
          A LITTLE ZEST IN YOUR INBOX
        </h2>

        <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed max-w-xl mx-auto mb-10">
          Sign up for occasional updates on secret menu items, weekend flash promos, and behind-the-scenes stories. Zero spam, unsubscribe anytime.
        </p>

        {subscribed ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 rounded-2xl bg-[#237227] text-white border-3 border-[#FFAA00] shadow-[6px_6px_0px_#FFAA00] inline-flex items-center gap-3"
          >
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <span className="font-display text-sm sm:text-base font-black">
              YOU’RE ON THE LIST! WELCOME TO THE CREW.
            </span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-5 py-3.5 rounded-full border-3 border-white bg-white text-[#141414] font-medium text-sm focus:outline-none focus:shadow-[4px_4px_0px_#FFAA00] transition-all"
            />
            <Button
              type="submit"
              variant="yellow"
              size="lg"
              className="w-full sm:w-auto bg-[#FFAA00] hover:bg-[#FFB72B] text-[#141414] font-black px-7 py-3.5 border-3 border-[#141414] shadow-[4px_4px_0px_#141414] cursor-pointer"
            >
              SUBSCRIBE
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
