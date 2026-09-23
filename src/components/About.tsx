"use client";

import React from "react";
import { Compass, Target, CheckCircle2, MapPin, Building2, Globe } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden border-t border-slate-800/80 bg-[#090B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-3">
            Corporate Profile
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Strategic Consultancy from the Heart of Dubai
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Operating from the Dubai Silicon Oasis free zone under DIEZA authority, FURCAK bridges cross-border ambition with practical Middle Eastern execution.
          </p>
        </div>

        {/* Narrative & Institutional Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-14 sm:mb-18">
          {/* Main Narrative Dossier */}
          <div className="lg:col-span-7 furcak-card p-7 sm:p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-7 pb-5 border-b border-slate-800/80">
                <div className="w-11 h-11 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Dubai Silicon Oasis (DSO-IFZA) FZCO
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#EFE4CA]">
                    Licence No. {COMPANY_INFO.tradeLicenceNo} • DIEZA Authority
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-slate-200 text-sm sm:text-base mb-4 font-normal">
                <strong className="text-white font-semibold">
                  FURCAK MARKETING MANAGEMENT - FZCO
                </strong>{" "}
                is an agile, multi-disciplinary corporate consultancy incorporated within Dubai Silicon Oasis. We advise and execute for B2B enterprises operating in high-complexity sectors including{" "}
                <strong className="text-[#EFE4CA] font-medium">
                  industrial manufacturing, engineering, and technology
                </strong>.
              </p>

              <p className="leading-relaxed text-slate-200 text-sm sm:text-base mb-7 font-normal">
                In an era of rapid supply chain realignment and global energy shifts, Dubai serves as the preeminent hub connecting East and West. We provide our international and regional clients with the strategic clarity, regulatory confidence, and commercial execution power necessary to capture high-value market share.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-800/80">
              {[
                "Focus on High-Value B2B Sectors",
                "DIEZA Free Zone Certified Entity",
                "Cross-Border Contract & Project Acumen",
                "Direct Senior-Level Advisory",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A55E] shrink-0" />
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Location & Advantages Dossier */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-6 rounded-2xl bg-[#12151B] border border-slate-800/90 hover:border-[#C8A55E]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#181C24] text-[#C8A55E] shrink-0 border border-[#C8A55E]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading mb-1.5">
                    Dubai Silicon Oasis (DSO)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Headquartered within DSO-IFZA, one of the UAE’s premier commercial free zones, providing clients with regulatory efficiency and world-class infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151B] border border-slate-800/90 hover:border-[#C8A55E]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#181C24] text-[#C8A55E] shrink-0 border border-[#C8A55E]/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading mb-1.5">
                    Global Trade & Investment Hub
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Facilitating strategic commercial corridors between European industrial leaders, GCC infrastructure projects, and emerging Asian technology networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#151922] border border-[#C8A55E]/30">
              <div className="text-xs uppercase tracking-wider text-[#C8A55E] font-bold mb-1.5">
                FZCO Governance Standard
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                Operating under rigorous compliance benchmarks overseen by the Dubai Integrated Economic Zones Authority (DIEZA).
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission */}
          <div className="furcak-card p-7 sm:p-9 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-800/80">
                <div className="w-11 h-11 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E]">
                    Strategic Purpose
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Our Mission
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                To empower industrial, manufacturing, and technological enterprises by structuring resilient commercial bridges, orchestrating high-stake B2B market entry, and delivering actionable marketing and project development strategies that generate measurable enterprise value in the UAE and internationally.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="furcak-card p-7 sm:p-9 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-800/80">
                <div className="w-11 h-11 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E]">
                    Long-Term Horizon
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Our Vision
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                To be recognized as the premier boutique Dubai consultancy for cross-border industrial and technology ventures—distinguished by uncompromising commercial precision, rigorous legal foundations, and enduring strategic partnerships that thrive in complex global marketplaces.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
