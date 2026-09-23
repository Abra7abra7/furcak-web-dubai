"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Building2, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface HeroProps {
  onOpenSchedule?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  const handleScheduleClick = () => {
    if (onOpenSchedule) {
      onOpenSchedule();
    } else {
      window.dispatchEvent(new CustomEvent("open-schedule"));
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-28 flex flex-col justify-center items-center overflow-hidden architectural-grid"
    >
      {/* Subtle Architectural Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[450px] rounded-full bg-[#C8A55E]/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#090B0E] to-transparent" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Institutional Regulatory Strip */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-[#12151B] border border-[#C8A55E]/30 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A55E]" />
          <span className="text-xs font-semibold tracking-wide text-[#EFE4CA]">
            Dubai Silicon Oasis (DSO-IFZA)
          </span>
          <span className="text-[#C8A55E]/50">|</span>
          <span className="text-xs text-slate-300 font-medium">
            DIEZA Trade Licence No. {COMPANY_INFO.tradeLicenceNo}
          </span>
        </div>

        {/* Master Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white max-w-5xl leading-[1.12] mb-7 tracking-tight">
          Driving Business Growth. Developing Opportunities. Connecting Markets.
        </h1>

        {/* Executive Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed mb-10 font-normal">
          <strong className="text-white font-semibold">{COMPANY_INFO.legalName}</strong> is a Dubai-based business consultancy providing Marketing Management, Business Development and Project Development Consultancy services.
        </p>

        {/* High-Contrast Executive Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full max-w-lg mb-16">
          {/* Explore Services */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all hover:brightness-105 active:scale-[0.99]"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-[#090B0E]" />
          </Link>

          {/* Schedule Direct Consultation */}
          <button
            onClick={handleScheduleClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#14171F] hover:bg-[#1A1F29] text-[#EFE4CA] border border-[#C8A55E]/40 hover:border-[#C8A55E] font-semibold text-sm sm:text-base transition-all active:scale-[0.99] cursor-pointer shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-[#C8A55E]" />
            <span className="text-[#EFE4CA]">Schedule Call</span>
          </button>

          {/* Contact Us */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#12151B] hover:bg-[#1A1F29] border border-white/20 hover:border-white/40 text-white font-medium text-sm sm:text-base transition-colors"
          >
            <span className="text-white">Contact Us</span>
          </Link>
        </div>

        {/* Regulatory Governance Ledger */}
        <div className="w-full max-w-4xl pt-6 pb-2 border-t border-slate-800/80">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-4 text-center">
            Official UAE Licensing & Regulatory Framework
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {COMPANY_INFO.trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-start sm:justify-center gap-3 p-3.5 rounded-xl bg-[#12151B] border border-[#C8A55E]/20 hover:border-[#C8A55E]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1A1F29] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0">
                  {idx === 0 ? (
                    <Building2 className="w-4 h-4" />
                  ) : idx === 1 ? (
                    <ShieldCheck className="w-4 h-4" />
                  ) : (
                    <Award className="w-4 h-4" />
                  )}
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white font-heading">
                    {badge.label}
                  </div>
                  <div className="text-xs text-slate-300 font-normal">
                    {badge.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Metrics Matrix */}
        <div className="w-full max-w-5xl mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#12151B] border border-slate-800 hover:border-[#C8A55E]/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#EFE4CA] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300 mt-0.5 leading-snug font-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
