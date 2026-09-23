"use client";

import React from "react";
import Link from "next/link";
import { FurcakLogo } from "./FurcakLogo";
import { COMPANY_INFO, NAV_LINKS, SERVICES_DATA } from "@/lib/data";
import { MapPin, ShieldCheck, ArrowUp, MessageCircle, Mail } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms") => void;
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenSchedule }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07090C] border-t border-[#C8A55E]/20 pt-16 pb-12 text-slate-300 text-xs sm:text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Description */}
          <div className="lg:col-span-5 space-y-4">
            <FurcakLogo size="lg" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2 font-normal">
              Marketing Management, Business Development, and Project Development Consultancy based in Dubai Silicon Oasis. Bridging global enterprises with Middle Eastern growth.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C8A55E] shrink-0" />
                <span>DIEZA Licensed Free Zone Company (FZCO)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 font-medium">
                <MapPin className="w-4 h-4 text-[#C8A55E] shrink-0" />
                <span>Dubai Silicon Oasis, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 font-medium">
                <Mail className="w-4 h-4 text-[#C8A55E] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="hover:text-[#EFE4CA] transition-colors">
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <div className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#EFE4CA] transition-colors font-medium block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3">
            <div className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">
              Pillars of Advisory
            </div>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href="/services"
                    className="text-slate-300 hover:text-[#EFE4CA] transition-colors line-clamp-1 font-medium block py-0.5"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">
              Consultation
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Schedule an executive consultation directly with our General Management.
            </p>
            <button
              onClick={onOpenSchedule}
              className="w-full py-2.5 px-4 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-xs sm:text-sm shadow-sm hover:brightness-105 transition-all cursor-pointer"
            >
              Schedule Call
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-emerald-900/30 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direct
            </a>
          </div>

        </div>

        {/* Regulatory Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <span>
              <strong className="text-white font-medium">Legal Entity:</strong> {COMPANY_INFO.legalName}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-white font-medium">Trade Licence:</strong> <span className="font-mono text-[#EFE4CA] font-bold">{COMPANY_INFO.tradeLicenceNo}</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-white font-medium">Authority:</strong> {COMPANY_INFO.authority}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-white font-medium">Status:</strong> {COMPANY_INFO.legalStatus}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#EFE4CA] transition-colors shrink-0 font-medium cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C8A55E]" />
          </button>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 FURCAK MARKETING MANAGEMENT - FZCO. All rights reserved.</p>
          <div className="flex items-center space-x-6 font-medium">
            <button
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-[#EFE4CA] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal("terms")}
              className="hover:text-[#EFE4CA] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-[#EFE4CA] font-semibold hover:underline"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
