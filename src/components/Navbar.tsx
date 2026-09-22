"use client";

import React, { useState, useEffect } from "react";
import { FurcakLogo } from "./FurcakLogo";
import { NAV_LINKS } from "@/lib/data";
import { Menu, X, Calendar } from "lucide-react";

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 250;

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
          ? "bg-[#0B0C0E]/95 backdrop-blur-xl border-b border-[#C5A059]/25 shadow-2xl py-3"
          : "bg-[#0B0C0E]/80 backdrop-blur-md border-b border-white/5 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <FurcakLogo size="md" />

        {/* Center: Clean, Minimalist Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#F3E7C4]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Single Refined Executive Action */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 bg-transparent hover:bg-[#C5A059]/15 text-[#F3E7C4] border border-[#C5A059]/60 hover:border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Schedule Call</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSchedule}
            className="p-2 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#F3E7C4] text-xs font-bold"
          >
            Schedule
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#16181D] border border-slate-700 text-white hover:border-[#C5A059]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#F3E7C4]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0C0E]/98 backdrop-blur-3xl border-b border-[#C5A059]/30 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-bold tracking-wider uppercase text-slate-200 hover:text-[#F3E7C4] transition-colors border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-3.5 rounded-xl gold-gradient-bg text-[#0B0C0E] font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#0B0C0E]" />
                <span>Schedule Executive Call</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
