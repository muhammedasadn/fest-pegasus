"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSent(true);
    }
  };

  return (
    <section id="message-form" className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414] scroll-mt-24">
      <div className="max-w-[760px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            SEND A MESSAGE
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            DROP US A LINE
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Compliments, questions, order hiccups, or big catering dreams—tell us everything. A real human reads every message.
          </p>
        </div>

        <div className="bg-white rounded-[32px] border-3 border-[#141414] p-8 sm:p-12 shadow-[8px_8px_0px_#141414]">
          {sent ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-[#237227] text-white flex items-center justify-center mx-auto mb-6 border-3 border-[#141414] shadow-[4px_4px_0px_#141414]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#141414] mb-3">
                MESSAGE DISPATCHED!
              </h3>
              <p className="text-sm sm:text-base text-[#141414]/75 font-medium max-w-md mx-auto mb-8">
                Thanks for reaching out, <span className="font-bold text-[#141414]">{formData.name}</span>. One of our team members will get back to you at {formData.email} within 24 hours.
              </p>
              <Button
                variant="yellow"
                onClick={() => setSent(false)}
                className="font-black px-6 py-2.5"
              >
                SEND ANOTHER MESSAGE
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                  WHAT CAN WE HELP WITH?
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-3 border-[#141414] bg-[#FFF4DC]/40 text-[#141414] font-medium text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#141414] transition-all"
                >
                  <option value="general">General Question</option>
                  <option value="order">Order Support & Feedback</option>
                  <option value="catering">Catering Inquiry</option>
                  <option value="press">Press & Collaborations</option>
                </select>
              </div>

              <div>
                <label className="block font-display text-xs font-black uppercase text-[#141414] mb-2 tracking-wider">
                  YOUR MESSAGE *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us what is on your mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                <span>SEND MESSAGE</span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
