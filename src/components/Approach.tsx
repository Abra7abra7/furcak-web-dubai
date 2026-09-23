"use client";

import React from "react";
import { APPROACH_STEPS, ProcessStep } from "@/lib/data";
import { Search, Compass, Users, GitMerge, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";

export const Approach: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return <Search className="w-5 h-5 text-[#C8A55E]" />;
      case "02":
        return <Compass className="w-5 h-5 text-[#C8A55E]" />;
      case "03":
        return <Users className="w-5 h-5 text-[#C8A55E]" />;
      case "04":
        return <GitMerge className="w-5 h-5 text-[#C8A55E]" />;
      case "05":
        return <TrendingUp className="w-5 h-5 text-[#C8A55E]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#C8A55E]" />;
    }
  };

  return (
    <section id="approach" className="py-20 sm:py-28 relative overflow-hidden bg-[#090B0E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-3">
            Execution Methodology
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Our Structured Five-Stage Approach
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            From initial market intelligence to compound enterprise growth, we apply a methodical framework ensuring risk governance and commercial predictability.
          </p>
        </div>

        {/* 5-Step Architectural Timeline Grid */}
        <div className="relative mb-14 sm:mb-18">
          {/* Subtle connecting guideline (desktop) */}
          <div className="hidden lg:block absolute top-9 left-12 right-12 h-[1px] bg-[#C8A55E]/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {APPROACH_STEPS.map((step: ProcessStep) => (
              <div
                key={step.step}
                className="furcak-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#C8A55E]/60 transition-colors"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                    <div className="w-10 h-10 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center">
                      {getStepIcon(step.step)}
                    </div>
                    <span className="font-heading font-black text-2xl text-[#EFE4CA]">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#C8A55E] uppercase tracking-wider block mb-1">
                    {step.tagline}
                  </span>

                  <h3 className="text-base font-bold font-heading text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Key Outputs */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[10px] uppercase font-semibold text-[#C8A55E] tracking-wider mb-2">
                    Key Outputs
                  </div>
                  <div className="space-y-1.5">
                    {step.keyOutputs.map((out, idx) => (
                      <div key={idx} className="text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A55E] shrink-0" />
                        <span className="leading-snug text-slate-200 font-normal">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Realization Pathway Banner */}
        <div className="rounded-2xl bg-[#12151B] border border-[#C8A55E]/30 p-7 sm:p-9 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] block mb-1">
                Value Realization Pathway
              </span>
              <h4 className="text-lg sm:text-2xl font-bold font-heading text-white">
                Opportunity → Strategy → Partnerships → Projects → Growth
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-medium text-slate-200">
              {["Opportunity", "Strategy", "Partnerships", "Projects", "Growth"].map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#181C24] border border-slate-800 text-[#EFE4CA] font-semibold">
                    {step}
                  </span>
                  {idx < 4 && <ChevronRight className="w-3.5 h-3.5 text-[#C8A55E] shrink-0" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
