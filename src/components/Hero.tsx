"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Building2, PhoneCall, Mail } from "lucide-react";
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
      className="relative min-h-[90vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-center items-center overflow-hidden architectural-grid"
    >
      {/* Architectural Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[450px] rounded-full bg-[#C8A55E]/[0.09] blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#090B0E] to-transparent" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* 1. Official Corporate Emblem Feature */}
        <div className="relative mb-5 sm:mb-7 flex flex-col items-center group">
          <div className="absolute -inset-4 sm:-inset-6 bg-[#C8A55E]/20 rounded-full blur-2xl -z-10 pointer-events-none group-hover:bg-[#C8A55E]/30 transition-all duration-500" />
          
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#1E232F] to-[#0E1015] p-3.5 sm:p-5 border-2 border-[#C8A55E]/50 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/furcak-logo.png"
              alt="FURCAK MARKETING MANAGEMENT - FZCO Official Logo"
              width={140}
              height={140}
              className="w-full h-full object-contain filter drop-shadow-[0_4px_14px_rgba(200,165,94,0.45)]"
              priority
            />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-[0.22em]">
              FURCAK
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#090B0E] bg-[#C8A55E] px-2 py-0.5 rounded shadow-sm uppercase">
              FZCO
            </span>
          </div>
        </div>

        {/* 2. Institutional Regulatory Strip */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#12151B] border border-[#C8A55E]/30 mb-5 sm:mb-7 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A55E] animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#EFE4CA]">
            <span className="sm:hidden">DSO-IFZA DUBAI</span>
            <span className="hidden sm:inline">Dubai Silicon Oasis (DSO-IFZA)</span>
          </span>
          <span className="text-[#C8A55E]/40">•</span>
          <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
            <span className="sm:hidden">LICENCE #{COMPANY_INFO.tradeLicenceNo}</span>
            <span className="hidden sm:inline">DIEZA Trade Licence No. {COMPANY_INFO.tradeLicenceNo}</span>
          </span>
        </div>

        {/* 3. Master Editorial Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white max-w-4xl leading-[1.18] sm:leading-[1.12] mb-3.5 sm:mb-6 tracking-tight px-1">
          Driving Business Growth. <br className="hidden sm:inline" />
          Developing Opportunities. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EFE4CA] to-[#C8A55E]">
            Connecting Markets.
          </span>
        </h1>

        {/* 4. Executive Subtitle */}
        <p className="text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 sm:mb-9 font-normal px-2">
          <strong className="text-white font-semibold">{COMPANY_INFO.legalName}</strong> is a Dubai-based consultancy providing Marketing Management, Business Development, and Project Advisory across the UAE and GCC.
        </p>

        {/* 5. Mobile-Refined Action Buttons */}
        <div className="w-full max-w-xs sm:max-w-xl mb-8 sm:mb-14">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-xs sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all hover:brightness-105 active:scale-[0.99]"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#090B0E]" />
            </Link>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
              <button
                onClick={handleScheduleClick}
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-[#14171F] hover:bg-[#1A1F29] text-[#EFE4CA] border border-[#C8A55E]/40 hover:border-[#C8A55E] font-semibold text-xs sm:text-sm transition-all active:scale-[0.99] cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C8A55E] shrink-0" />
                <span>Schedule Call</span>
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-[#12151B] hover:bg-[#1A1F29] border border-white/20 hover:border-white/40 text-white font-medium text-xs sm:text-sm transition-colors text-center"
              >
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300 shrink-0" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Regulatory Verification Highlights */}
        <div className="w-full max-w-4xl pt-5 sm:pt-6 pb-2 border-t border-slate-800/80">
          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-3 text-center">
            Official UAE Licensing & Regulatory Framework
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {COMPANY_INFO.trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-[#12151B] border border-[#C8A55E]/20 hover:border-[#C8A55E]/40 transition-colors text-center sm:text-left"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#1A1F29] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0">
                  {idx === 0 ? (
                    <Building2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  ) : idx === 1 ? (
                    <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  ) : (
                    <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  )}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white font-heading leading-tight">
                    {badge.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-normal leading-tight mt-0.5">
                    {badge.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Institutional Metrics Matrix */}
        <div className="w-full max-w-5xl mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-left">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-5 rounded-xl bg-[#12151B] border border-slate-800 hover:border-[#C8A55E]/30 transition-colors"
            >
              <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm font-semibold text-[#EFE4CA] mt-0.5 sm:mt-1 leading-snug">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 mt-0.5 leading-snug font-normal line-clamp-1 sm:line-clamp-none">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
