"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Award, Building, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface HeroProps {
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Ambient Lighting & Luxury Glow Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Central Radial Gold Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] md:w-[900px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-b from-[#C5A059]/20 via-[#9B782B]/10 to-transparent blur-[90px] sm:blur-[130px]" />
        
        {/* Secondary highlights */}
        <div className="absolute top-12 left-6 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-[#C5A059]/12 blur-[80px]" />
        <div className="absolute bottom-10 right-6 sm:right-10 w-52 sm:w-80 h-52 sm:h-80 rounded-full bg-[#F3E7C4]/10 blur-[90px]" />
        
        {/* Subtle geometric grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Entity & Jurisdiction Tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#16181D] border border-[#C5A059]/40 backdrop-blur-md shadow-[0_0_20px_rgba(197,160,89,0.18)] mb-6 sm:mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F3E7C4]"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#F3E7C4] uppercase">
            Dubai Silicon Oasis • DSO-IFZA
          </span>
          <span className="hidden sm:inline-block text-[#C5A059]">•</span>
          <span className="text-xs text-slate-200 font-semibold">
            Licence No. {COMPANY_INFO.tradeLicenceNo}
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white max-w-5xl leading-[1.15] sm:leading-[1.1] mb-6 drop-shadow-md">
          Driving Business Growth.{" "}
          <span className="gold-gradient-text block sm:inline font-black">
            Developing Opportunities.
          </span>{" "}
          Connecting Markets.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal">
          <strong className="text-white font-bold">{COMPANY_INFO.legalName}</strong> is a Dubai-based business consultancy providing Marketing Management, Business Development and Project Development Consultancy services.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mb-12 sm:mb-16">
          {/* Explore Services */}
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl gold-gradient-bg text-[#0B0C0E] font-black text-sm sm:text-base tracking-wide shadow-[0_4px_25px_rgba(197,160,89,0.35)] hover:shadow-[0_6px_35px_rgba(197,160,89,0.5)] active:scale-[0.98] transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-[#0B0C0E]" />
          </a>

          {/* Contact Us */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-panel text-white hover:text-[#F3E7C4] hover:border-[#C5A059] font-bold text-sm sm:text-base tracking-wide active:scale-[0.98] transition-all"
          >
            <span>Contact Us</span>
          </a>

          {/* Schedule Direct CTA */}
          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-750 hover:border-[#C5A059] bg-[#16181D]/90 text-[#F3E7C4] text-sm sm:text-base font-bold transition-all active:scale-[0.98] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#C5A059]" />
            <span>Schedule Call</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="w-full max-w-4xl pt-6 pb-2 border-t border-slate-800">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F3E7C4] mb-4">
            Official UAE Licensing & Regulatory Framework
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {COMPANY_INFO.trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-start sm:justify-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#16181D] border border-[#C5A059]/30 hover:border-[#C5A059]/60 transition-colors shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#F3E7C4] shrink-0">
                  {idx === 0 ? (
                    <Building className="w-4 h-4 text-[#C5A059]" />
                  ) : idx === 1 ? (
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  ) : (
                    <Award className="w-4 h-4 text-[#C5A059]" />
                  )}
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-white font-heading">
                    {badge.label}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {badge.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics / Highlights Bar */}
        <div className="w-full max-w-5xl mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#16181D] border border-slate-800 hover:border-[#C5A059]/50 transition-all shadow-md"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading gold-gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
