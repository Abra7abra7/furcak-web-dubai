"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FurcakLogo } from "./FurcakLogo";
import { NAV_LINKS } from "@/lib/data";
import { Menu, X, Calendar } from "lucide-react";

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090B0E]/95 backdrop-blur-xl border-b border-[#C8A55E]/20 shadow-2xl py-3.5"
          : "bg-[#090B0E]/80 backdrop-blur-md border-b border-white/[0.06] py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="inline-flex items-center">
          <FurcakLogo size="md" />
        </Link>

        {/* Center: Disciplined Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#EFE4CA] font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#C8A55E]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Refined Executive Action */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-[#12151B] hover:bg-[#1A1F29] text-[#EFE4CA] border border-[#C8A55E]/40 hover:border-[#C8A55E] cursor-pointer shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C8A55E]" />
            <span>Schedule Call</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenSchedule}
            className="px-3 py-1.5 rounded-lg bg-[#14171F] border border-[#C8A55E]/40 text-[#EFE4CA] text-xs font-semibold"
          >
            Schedule
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#12151B] border border-slate-800 text-white hover:border-[#C8A55E]/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#EFE4CA]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090B0E]/98 backdrop-blur-2xl border-b border-[#C8A55E]/20 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 text-base font-semibold transition-colors border-b border-slate-800/80 ${
                    isActive ? "text-[#EFE4CA]" : "text-slate-200 hover:text-[#EFE4CA]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#090B0E]" />
                <span>Schedule Executive Call</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
