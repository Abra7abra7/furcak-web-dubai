"use client";

import React from "react";
import { FurcakLogo } from "./FurcakLogo";
import { COMPANY_INFO, NAV_LINKS, SERVICES_DATA } from "@/lib/data";
import { MapPin, ShieldCheck, ArrowUp, MessageCircle } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms") => void;
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenSchedule }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08090B] border-t border-[#C5A059]/30 pt-16 pb-12 text-slate-200 text-xs sm:text-sm relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[200px] sm:h-[250px] bg-[#C5A059]/05 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Corporate Description */}
          <div className="lg:col-span-5 space-y-4">
            <FurcakLogo size="lg" />
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-sm pt-2 font-normal">
              Marketing Management, Business Development, and Project Development Consultancy based in Dubai Silicon Oasis. Bridging global enterprises with Middle Eastern growth.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>DIEZA Licensed Free Zone Company (FZCO)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 font-medium">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Dubai Silicon Oasis, Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-extrabold text-sm tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-200 hover:text-[#F3E7C4] transition-colors font-medium block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-extrabold text-sm tracking-wider uppercase mb-4">
              Pillars of Advisory
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="text-slate-200 hover:text-[#F3E7C4] transition-colors line-clamp-1 font-medium block py-0.5"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-extrabold text-sm tracking-wider uppercase mb-4">
              Consultation
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Schedule an executive consultation directly with our General Management.
            </p>
            <button
              onClick={onOpenSchedule}
              className="w-full py-3 px-4 rounded-xl gold-gradient-bg text-[#0B0C0E] font-black text-xs sm:text-sm shadow-md hover:shadow-[0_0_15px_rgba(197,160,89,0.35)] transition-all cursor-pointer"
            >
              Schedule Call
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-emerald-500/50 bg-emerald-500/15 text-emerald-300 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-emerald-500/25 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direct
            </a>
          </div>

        </div>

        {/* Regulatory Strip */}
        <div className="py-6 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-200">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <span>
              <strong className="text-white">Legal Entity:</strong> {COMPANY_INFO.legalName}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              <strong className="text-white">Trade Licence:</strong> <span className="font-mono text-[#F3E7C4] font-bold">{COMPANY_INFO.tradeLicenceNo}</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              <strong className="text-white">Authority:</strong> {COMPANY_INFO.authority}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              <strong className="text-white">Status:</strong> {COMPANY_INFO.legalStatus}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#F3E7C4] transition-colors shrink-0 font-semibold cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 FURCAK MARKETING MANAGEMENT - FZCO. All rights reserved.</p>
          <div className="flex items-center space-x-6 font-medium">
            <button
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-[#F3E7C4] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal("terms")}
              className="hover:text-[#F3E7C4] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-[#F3E7C4] font-bold hover:underline"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
