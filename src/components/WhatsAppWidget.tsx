"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSend = () => {
    const textToSend = customMsg.trim()
      ? encodeURIComponent(customMsg)
      : encodeURIComponent(
          "Hello FURCAK Team, I would like to inquire about your services."
        );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${textToSend}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Chat Bubble */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-3xl bg-[#16181D] border-2 border-[#C5A059]/50 shadow-2xl p-4 sm:p-5 overflow-hidden transition-all duration-300 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-750">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-emerald-600/25 border border-emerald-500/50 flex items-center justify-center text-emerald-300">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#16181D]"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  FURCAK Advisory Concierge
                </h4>
                <p className="text-xs text-emerald-300 font-semibold">
                  Direct Line • Dubai Silicon Oasis
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="py-3 text-xs sm:text-sm text-slate-100 space-y-2">
            <div className="p-3.5 rounded-2xl bg-[#0B0C0E] border border-slate-750">
              <p className="text-slate-100 leading-relaxed font-normal">
                Welcome to <span className="text-[#F3E7C4] font-bold">FURCAK MARKETING MANAGEMENT - FZCO</span>.
                How may our corporate advisory team assist your project or expansion today?
              </p>
              <span className="block text-[11px] text-[#C5A059] font-medium text-right mt-1.5">
                Typical response: Under 30 mins
              </span>
            </div>
          </div>

          {/* Input & Action */}
          <div className="pt-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your project inquiry..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                className="w-full pr-10 pl-3.5 py-2.5 text-base sm:text-xs rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white placeholder:text-slate-400 font-normal"
              />
              <button
                onClick={handleSend}
                className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#C5A059] text-[#0B0C0E] hover:bg-[#F3E7C4] transition-colors cursor-pointer"
                title="Send via WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              onClick={handleSend}
              className="w-full mt-2.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+971 50 539 5412)</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {!isOpen && !hasScrolled && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3.5 py-1.5 rounded-xl bg-[#16181D] border border-[#C5A059]/60 text-xs font-bold text-[#F3E7C4] shadow-2xl pointer-events-none hidden md:block animate-bounce">
            Chat with FURCAK on WhatsApp
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#16181D] border-r border-t border-[#C5A059]/60 rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30 cursor-pointer"
          aria-label="Direct WhatsApp Contact"
          title="Direct WhatsApp Contact (+971 50 539 5412)"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#F3E7C4] border-2 border-[#0B0C0E] rounded-full animate-subtle-pulse"></span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
