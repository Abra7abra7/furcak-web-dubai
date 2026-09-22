"use client";

import React, { useState, useEffect } from "react";
import { FurcakLogo } from "./FurcakLogo";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/data";
import { Menu, X, Calendar, MessageCircle, Phone } from "lucide-react";

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0C0E]/95 backdrop-blur-2xl border-b border-[#C5A059]/30 shadow-xl shadow-black/60 py-2.5 sm:py-3"
          : "bg-[#0B0C0E]/80 backdrop-blur-lg border-b border-white/10 py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <FurcakLogo size="md" />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all tracking-wider uppercase ${
                  isActive
                    ? "text-[#F3E7C4] bg-[#C5A059]/25 border border-[#C5A059]/50 shadow-[0_0_15px_rgba(197,160,89,0.2)]"
                    : "text-slate-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Quick WhatsApp Icon */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 hover:text-white hover:bg-emerald-500/30 hover:border-emerald-400 transition-all shadow-sm"
            title="Chat on WhatsApp"
            aria-label="Direct WhatsApp Contact"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Schedule Call Button (Gold Outline / Gradient) */}
          <button
            onClick={onOpenSchedule}
            className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs xl:text-sm font-bold tracking-wide transition-all duration-300 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 text-[#F3E7C4] border border-[#C5A059]/60 hover:border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.2)] hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059] group-hover:scale-110 transition-transform" />
            <span>Schedule Call</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSchedule}
            className="p-2.5 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/50 text-[#F3E7C4] text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition-transform"
            title="Schedule Consultation"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[11px] font-bold">Call</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#16181D] border border-slate-700 text-white hover:border-[#C5A059] active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F3E7C4]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0C0E]/98 backdrop-blur-3xl border-b border-[#C5A059]/30 px-5 py-6 shadow-2xl transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#F3E7C4] bg-[#C5A059]/20 border border-[#C5A059]/40"
                      : "text-slate-100 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#C5A059]">›</span>
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-3.5 rounded-xl gold-gradient-bg text-[#0B0C0E] font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-transform"
              >
                <Calendar className="w-4 h-4 text-[#0B0C0E]" />
                <span>Schedule Executive Call</span>
              </button>
              
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl border border-emerald-500/50 bg-emerald-500/15 text-emerald-300 font-bold text-sm text-center flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+971 50 539 5412)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 font-semibold text-xs text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Direct Line: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
