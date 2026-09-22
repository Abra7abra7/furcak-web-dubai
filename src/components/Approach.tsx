"use client";

import React from "react";
import { APPROACH_STEPS, ProcessStep } from "@/lib/data";
import { Search, Compass, Users, GitMerge, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";

export const Approach: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return <Search className="w-5 h-5 text-[#C5A059]" />;
      case "02":
        return <Compass className="w-5 h-5 text-[#C5A059]" />;
      case "03":
        return <Users className="w-5 h-5 text-[#C5A059]" />;
      case "04":
        return <GitMerge className="w-5 h-5 text-[#C5A059]" />;
      case "05":
        return <TrendingUp className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="approach" className="py-16 sm:py-28 relative overflow-hidden bg-[#0B0C0E] border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-[#C5A059]/08 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-bold text-[#F3E7C4] tracking-widest uppercase mb-3">
            Execution Methodology
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Our Structured <span className="gold-gradient-text">Five-Stage Approach</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            From initial market intelligence to compound enterprise growth, we apply a methodical framework ensuring risk governance and commercial predictability.
          </p>
        </div>

        {/* Horizontal Responsive Stepper */}
        <div className="relative mb-12 sm:mb-16">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[#C5A059]/20 via-[#C5A059]/60 to-[#C5A059]/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative z-10">
            {APPROACH_STEPS.map((step: ProcessStep) => (
              <div
                key={step.step}
                className="furcak-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 group shadow-md"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#222530] border border-[#C5A059]/40 group-hover:border-[#C5A059] flex items-center justify-center shadow-lg transition-colors">
                      {getStepIcon(step.step)}
                    </div>
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#F3E7C4] group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                    {step.tagline}
                  </span>

                  <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-[#F3E7C4] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Outputs */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="text-[11px] uppercase font-bold text-[#F3E7C4] mb-2">
                    Key Outputs
                  </div>
                  <div className="space-y-1.5">
                    {step.keyOutputs.map((out, idx) => (
                      <div key={idx} className="text-xs text-slate-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                        <span className="leading-tight">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#16181D] via-[#222634] to-[#16181D] border border-[#C5A059]/45 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3E7C4] block mb-1">
                Value Realization Pathway
              </span>
              <h4 className="text-lg sm:text-2xl font-bold font-heading text-white">
                Opportunity → Strategy → Partnerships → Projects → Growth
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-bold text-slate-200">
              {["Opportunity", "Strategy", "Partnerships", "Projects", "Growth"].map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-3 py-1.5 rounded-lg bg-[#0B0C0E] border border-slate-700 text-[#F3E7C4] font-semibold">
                    {step}
                  </span>
                  {idx < 4 && <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
