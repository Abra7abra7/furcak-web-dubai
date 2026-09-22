"use client";

import React from "react";
import { Compass, Target, CheckCircle2, MapPin, Building2, Globe } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-28 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#C5A059]/08 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-bold text-[#F3E7C4] tracking-widest uppercase mb-3">
            Corporate Profile
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Strategic Consultancy from the{" "}
            <span className="gold-gradient-text">Heart of Dubai</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Operating from the Dubai Silicon Oasis free zone under DIEZA authority, FURCAK bridges cross-border ambition with practical Middle Eastern execution.
          </p>
        </div>

        {/* Narrative & Key Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 furcak-card p-6 sm:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#F3E7C4]">
                  <Building2 className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Dubai Silicon Oasis (DSO-IFZA) FZCO
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F3E7C4] font-medium">
                    Licence No. {COMPANY_INFO.tradeLicenceNo} • DIEZA Authority
                  </p>
                </div>
              </div>

              <p className="text-slate-100 leading-relaxed text-sm sm:text-base mb-4 font-normal">
                <strong className="text-white font-bold">FURCAK MARKETING MANAGEMENT - FZCO</strong> is an agile, multi-disciplinary corporate consultancy incorporated within Dubai Silicon Oasis. We advise and execute for B2B enterprises operating in high-complexity sectors including <strong className="text-[#F3E7C4] font-semibold">industrial manufacturing, engineering, and technology</strong>.
              </p>

              <p className="text-slate-100 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                In an era of rapid supply chain realignment and global energy shifts, Dubai serves as the preeminent hub connecting East and West. We provide our international and regional clients with the strategic clarity, regulatory confidence, and commercial execution power necessary to capture high-value market share.
              </p>
            </div>

            {/* Checklist highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-slate-800">
              {[
                "Focus on High-Value B2B Sectors",
                "DIEZA Free Zone Certified Entity",
                "Cross-Border Contract & Project Acumen",
                "Direct Senior-Level Advisory",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Location & Advantages */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#16181D] border border-slate-800 hover:border-[#C5A059]/40 transition-all shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#C5A059]/15 text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading mb-1">
                    Dubai Silicon Oasis (DSO)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Headquartered within DSO-IFZA, one of the UAE’s premier commercial free zones, providing clients with regulatory efficiency and world-class infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#16181D] border border-slate-800 hover:border-[#C5A059]/40 transition-all shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#C5A059]/15 text-[#C5A059] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading mb-1">
                    Global Trade & Investment Hub
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Facilitating strategic commercial corridors between European industrial leaders, GCC infrastructure projects, and emerging Asian technology networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1A1D24] to-[#222632] border border-[#C5A059]/40 shadow-md">
              <div className="text-xs uppercase tracking-widest text-[#F3E7C4] font-bold mb-1">
                FZCO Governance Standard
              </div>
              <p className="text-xs sm:text-sm text-slate-100 font-medium">
                Operating under rigorous compliance benchmarks overseen by the Dubai Integrated Economic Zones Authority (DIEZA).
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission Card */}
          <div className="group relative furcak-card p-6 sm:p-10 rounded-2xl overflow-hidden hover:border-[#C5A059] transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A059]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            
            <div className="flex items-center gap-3.5 sm:gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#222530] to-[#16181D] border border-[#C5A059]/50 flex items-center justify-center text-[#F3E7C4] group-hover:border-[#C5A059] shadow-lg">
                <Compass className="w-6 h-6 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Strategic Purpose
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Our Mission
                </h3>
              </div>
            </div>

            <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
              To empower industrial, manufacturing, and technological enterprises by structuring resilient commercial bridges, orchestrating high-stake B2B market entry, and delivering actionable marketing and project development strategies that generate measurable enterprise value in the UAE and internationally.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group relative furcak-card p-6 sm:p-10 rounded-2xl overflow-hidden hover:border-[#C5A059] transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#F3E7C4]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            
            <div className="flex items-center gap-3.5 sm:gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#222530] to-[#16181D] border border-[#C5A059]/50 flex items-center justify-center text-[#F3E7C4] group-hover:border-[#C5A059] shadow-lg">
                <Target className="w-6 h-6 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Long-Term Horizon
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Our Vision
                </h3>
              </div>
            </div>

            <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
              To be recognized as the premier boutique Dubai consultancy for cross-border industrial and technology ventures—distinguished by uncompromising commercial precision, rigorous legal foundations, and enduring strategic partnerships that thrive in complex global marketplaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
