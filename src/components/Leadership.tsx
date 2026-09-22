"use client";

import React from "react";
import { LEADERSHIP_PROFILE, COMPANY_INFO } from "@/lib/data";
import { ShieldCheck, Scale, Award, Phone } from "lucide-react";

interface LeadershipProps {
  onOpenSchedule: () => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onOpenSchedule }) => {
  return (
    <section id="leadership" className="py-16 sm:py-28 relative overflow-hidden border-t border-slate-800">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#C5A059]/08 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-bold text-[#F3E7C4] tracking-widest uppercase mb-3">
            Executive Leadership
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Institutional Experience & <span className="gold-gradient-text">Commercial Leadership</span>
          </h2>
          <p
            style={{ color: "#E2E8F0" }}
            className="mt-4 text-base sm:text-lg leading-relaxed font-normal"
          >
            Founded and directed by Jan Furcak, combining legal rigor with over a decade of international corporate execution.
          </p>
        </div>

        {/* 2-Column Leadership Card */}
        <div className="furcak-card rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Executive Portrait Frame with Gold Accents */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-sm">
                {/* Outer halo */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#C5A059] via-[#F3E7C4]/60 to-[#9B782B] opacity-50 blur-sm" />

                {/* Portrait Container */}
                <div className="relative rounded-2xl bg-[#12141A] border-2 border-[#C5A059]/50 p-3 sm:p-4 overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-[#1E222D] via-[#161820] to-[#0D0E12] flex flex-col items-center justify-between p-5 sm:p-6 border border-[#C5A059]/30 relative overflow-hidden">
                    {/* Architectural background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                    
                    {/* Top crest */}
                    <div className="w-full flex justify-between items-center z-10">
                      <span style={{ color: "#F3E7C4" }} className="text-[11px] uppercase font-black tracking-widest">
                        Dubai Silicon Oasis
                      </span>
                      <span style={{ color: "#FFFFFF" }} className="text-[10px] uppercase font-bold bg-[#0B0C0E]/90 px-2 py-0.5 rounded border border-slate-700">
                        FZCO
                      </span>
                    </div>

                    {/* Central Monogram */}
                    <div className="relative my-auto flex flex-col items-center text-center z-10">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#2D3240] to-[#121319] border-2 border-[#C5A059] flex items-center justify-center shadow-[0_0_35px_rgba(197,160,89,0.35)] mb-3">
                        <span className="font-heading font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#FFFFFF] via-[#F3E7C4] to-[#C5A059] tracking-wider">
                          JF
                        </span>
                      </div>
                      <h4 style={{ color: "#FFFFFF" }} className="text-xl sm:text-2xl font-bold font-heading tracking-wide">
                        Jan Furcak
                      </h4>
                      <p style={{ color: "#F3E7C4" }} className="text-xs font-bold tracking-wider uppercase mt-1">
                        Founder & General Manager
                      </p>
                    </div>

                    {/* Legal Badge Pill */}
                    <div className="w-full z-10 pt-3 border-t border-[#C5A059]/30 flex items-center justify-center gap-2">
                      <Scale className="w-4 h-4 text-[#C5A059]" />
                      <span style={{ color: "#F1F5F9" }} className="text-xs font-semibold">
                        Legal Foundation Since 2012
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overlaid Experience Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[94%] rounded-xl bg-[#16181D] border-2 border-[#C5A059] px-3.5 py-2 text-center shadow-2xl">
                  <div style={{ color: "#F3E7C4" }} className="text-xs font-black tracking-wide">
                    10+ Years Executive Track Record
                  </div>
                  <div style={{ color: "#E2E8F0" }} className="text-[11px] font-medium">
                    Corporate Management & Commercial Law
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Profile & Detailed Bio */}
            <div className="lg:col-span-7 flex flex-col justify-center mt-8 lg:mt-0">
              <div className="mb-4">
                <span style={{ color: "#C5A059" }} className="text-xs font-bold uppercase tracking-widest mb-1 block">
                  Leadership Profile
                </span>
                <h3 style={{ color: "#FFFFFF" }} className="text-2xl sm:text-4xl font-black font-heading">
                  {LEADERSHIP_PROFILE.name}
                </h3>
                <p style={{ color: "#F3E7C4" }} className="text-sm sm:text-base font-bold mt-1">
                  {LEADERSHIP_PROFILE.role} • {LEADERSHIP_PROFILE.company}
                </p>
              </div>

              {/* Key Badge */}
              <div
                style={{ backgroundColor: "rgba(197, 160, 89, 0.15)", borderColor: "rgba(197, 160, 89, 0.5)", color: "#F3E7C4" }}
                className="p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-bold mb-6 flex items-center gap-3 shadow-sm"
              >
                <Award className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span style={{ color: "#F3E7C4" }}>{LEADERSHIP_PROFILE.experienceBadge}</span>
              </div>

              {/* Bio Narrative with Guaranteed High-Contrast White/Silver Text */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
                {LEADERSHIP_PROFILE.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx} style={{ color: "#E2E8F0" }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8 pt-4 border-t border-slate-800">
                {LEADERSHIP_PROFILE.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span style={{ color: "#F1F5F9" }}>{cred}</span>
                  </div>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenSchedule}
                  style={{ backgroundColor: "#C5A059", color: "#0B0C0E" }}
                  className="px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm shadow-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all cursor-pointer text-center"
                >
                  Schedule Direct Call with Jan Furcak
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  style={{ color: "#FFFFFF", backgroundColor: "#1A1D24", borderColor: "#475569" }}
                  className="px-5 py-3.5 rounded-xl border hover:border-[#C5A059] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
