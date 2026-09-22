"use client";

import React, { useState } from "react";
import { INDUSTRIES_DATA, IndustryItem } from "@/lib/data";
import { Factory, Cog, Cpu, Briefcase, Hammer, Building, ArrowLeftRight, FolderKanban } from "lucide-react";

export const Industries: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "industrial-manufacturing":
        return <Factory className="w-5 h-5 text-[#C5A059]" />;
      case "engineering":
        return <Cog className="w-5 h-5 text-[#C5A059]" />;
      case "technology-innovation":
        return <Cpu className="w-5 h-5 text-[#C5A059]" />;
      case "professional-services":
        return <Briefcase className="w-5 h-5 text-[#C5A059]" />;
      case "construction-infrastructure":
        return <Hammer className="w-5 h-5 text-[#C5A059]" />;
      case "real-estate-development":
        return <Building className="w-5 h-5 text-[#C5A059]" />;
      case "international-trade":
        return <ArrowLeftRight className="w-5 h-5 text-[#C5A059]" />;
      case "project-development-sector":
        return <FolderKanban className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Factory className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="industries" className="py-16 sm:py-28 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#C5A059]/06 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-bold text-[#F3E7C4] tracking-widest uppercase mb-3">
            Industry Ecosystem
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Specialized B2B <span className="gold-gradient-text">Sector Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            We operate within complex, capital-intensive, and operationally rigorous industries requiring deep commercial and technical fluency.
          </p>
        </div>

        {/* Quick Tag Pills Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-10 sm:mb-12">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedId(selectedId === ind.id ? null : ind.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                selectedId === ind.id
                  ? "bg-[#C5A059] text-[#0B0C0E] font-black shadow-[0_0_15px_rgba(197,160,89,0.4)] scale-105"
                  : "bg-[#16181D] text-slate-100 border border-slate-750 hover:border-[#C5A059]/60 hover:text-white"
              }`}
            >
              {ind.title}
            </button>
          ))}
        </div>

        {/* Responsive Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES_DATA.map((ind: IndustryItem) => {
            const isSelected = selectedId === ind.id;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedId(isSelected ? null : ind.id)}
                className={`furcak-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-md ${
                  isSelected
                    ? "border-[#C5A059] bg-[#1E222C] shadow-[0_0_25px_rgba(197,160,89,0.25)] -translate-y-1"
                    : "hover:-translate-y-1 hover:border-[#C5A059]/60"
                }`}
              >
                <div>
                  {/* Top Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#222530] border border-[#C5A059]/35 flex items-center justify-center">
                      {getIndustryIcon(ind.id)}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-[#F3E7C4] uppercase px-2 py-0.5 rounded bg-[#C5A059]/20 border border-[#C5A059]/30">
                      {ind.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-white mb-2 leading-snug">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 font-normal">
                    {ind.description}
                  </p>
                </div>

                {/* Focus Areas Badges */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="text-[11px] uppercase font-bold text-[#F3E7C4] mb-2">
                    Core Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.focusAreas.map((focus, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#232733] border border-slate-700 text-slate-100"
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
