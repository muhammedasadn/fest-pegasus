"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar, CheckCircle2, Send } from "lucide-react";

export function CateringForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "25-50",
    packageChoice: "burger-party-box",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="catering-form" className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414] scroll-mt-24">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            BOOK YOUR EVENT
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            LET’S PLAN YOUR SPREAD
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Fill out the details below and our catering coordinator will get back to you within 2 business hours with availability and an exact quote.
          </p>
        </div>

        <div className="bg-white rounded-[32px] border-3 border-[#141414] p-8 sm:p-12 shadow-[8px_8px_0px_#141414]">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-[#237227] text-white flex items-center justify-center mx-auto mb-6 border-3 border-[#141414] shadow-[4px_4px_0px_#141414]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#141414] mb-3">
                CATERING REQUEST RECEIVED!
              </h3>
              <p className="text-sm sm:text-base text-[#141414]/75 font-medium max-w-md mx-auto mb-8">
                Thank you, <span className="font-bold text-[#141414]">{formData.fullName || "Guest"}</span>. We have logged your request for {formData.eventDate || "your upcoming event"}. Our team is preparing your custom proposal right now.
              </p>
              <Button
                variant="yellow"
                onClick={() => setSubmitted(false)}
                className="font-black px-6 py-2.5"
              >
                SUBMIT ANOTHER INQUIRY
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                    EVENT DATE *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                    ESTIMATED GUESTS
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                  >
                    <option value="10-25">10 to 25 Guests</option>
                    <option value="25-50">25 to 50 Guests</option>
                    <option value="50-100">50 to 100 Guests</option>
                    <option value="100+">100+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                    PRIMARY PACKAGE
                  </label>
                  <select
                    value={formData.packageChoice}
                    onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                  >
                    <option value="burger-party-box">Burger Party Box ($95)</option>
                    <option value="pizza-sharing-set">Pizza Sharing Set ($85)</option>
                    <option value="crispy-chicken-platter">Crispy Chicken Platter ($75)</option>
                    <option value="sides-dips-tray">Sides & Dips Tray ($45)</option>
                    <option value="custom">Custom Mix Spread</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                  EVENT DETAILS & DIETARY NOTES
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the venue, schedule, or dietary preferences (vegetarian, gluten-free, etc.)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="red"
                size="lg"
                className="w-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-black py-4 border-3 border-[#141414] shadow-[5px_5px_0px_#141414] hover:shadow-[7px_7px_0px_#141414] text-base flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-5 h-5" />
                <span>SUBMIT CATERING REQUEST</span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
