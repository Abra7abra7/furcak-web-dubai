"use client";

import React, { useState } from "react";
import { INDUSTRIES_DATA, IndustryItem } from "@/lib/data";
import { Factory, Cog, Cpu, Briefcase, Hammer, Building2, ArrowLeftRight, FolderKanban } from "lucide-react";

export const Industries: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "industrial-manufacturing":
        return <Factory className="w-5 h-5 text-[#C8A55E]" />;
      case "engineering":
        return <Cog className="w-5 h-5 text-[#C8A55E]" />;
      case "technology-innovation":
        return <Cpu className="w-5 h-5 text-[#C8A55E]" />;
      case "professional-services":
        return <Briefcase className="w-5 h-5 text-[#C8A55E]" />;
      case "construction-infrastructure":
        return <Hammer className="w-5 h-5 text-[#C8A55E]" />;
      case "real-estate-development":
        return <Building2 className="w-5 h-5 text-[#C8A55E]" />;
      case "international-trade":
        return <ArrowLeftRight className="w-5 h-5 text-[#C8A55E]" />;
      case "project-development-sector":
        return <FolderKanban className="w-5 h-5 text-[#C8A55E]" />;
      default:
        return <Factory className="w-5 h-5 text-[#C8A55E]" />;
    }
  };

  return (
    <section id="industries" className="py-20 sm:py-28 relative overflow-hidden border-t border-slate-800/80 bg-[#090B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-3">
            Industry Ecosystem
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Specialized B2B Sector Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            We operate within complex, capital-intensive, and operationally rigorous industries requiring deep commercial and technical fluency.
          </p>
        </div>

        {/* Sector Quick Filter Bar */}
        <div className="flex flex-wrap gap-2 max-w-4xl mb-12">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedId(selectedId === ind.id ? null : ind.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer ${
                selectedId === ind.id
                  ? "bg-[#C8A55E] text-[#090B0E] font-bold shadow-sm"
                  : "bg-[#12151B] text-slate-300 border border-slate-800 hover:border-[#C8A55E]/40 hover:text-white"
              }`}
            >
              {ind.title}
            </button>
          ))}
        </div>

        {/* Institutional Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES_DATA.map((ind: IndustryItem) => {
            const isSelected = selectedId === ind.id;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedId(isSelected ? null : ind.id)}
                className={`furcak-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-[#C8A55E] bg-[#161B24] shadow-lg"
                    : "hover:border-[#C8A55E]/50"
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                    <div className="w-10 h-10 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center">
                      {getIndustryIcon(ind.id)}
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider text-[#EFE4CA] uppercase px-2 py-0.5 rounded bg-[#181C24] border border-[#C8A55E]/20">
                      {ind.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-white mb-2 leading-snug">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {ind.description}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[10px] uppercase font-semibold text-[#C8A55E] tracking-wider mb-2">
                    Core Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.focusAreas.map((focus, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-normal px-2.5 py-1 rounded bg-[#181C24] text-slate-200 border border-slate-800"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
