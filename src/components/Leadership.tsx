"use client";

import React from "react";
import { LEADERSHIP_PROFILE, COMPANY_INFO } from "@/lib/data";
import { ShieldCheck, Scale, Award, Phone } from "lucide-react";

import { useRouter } from "next/navigation";

interface LeadershipProps {
  onOpenSchedule?: () => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onOpenSchedule }) => {
  const router = useRouter();

  const handleScheduleClick = () => {
    if (onOpenSchedule) {
      onOpenSchedule();
    } else {
      router.push("/contact");
    }
  };
  return (
    <section id="leadership" className="py-20 sm:py-28 relative overflow-hidden border-t border-slate-800/80 bg-[#090B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-3">
            Executive Leadership
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Institutional Experience & Commercial Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Founded and directed by Jan Furcak, combining legal rigor with over a decade of international corporate execution.
          </p>
        </div>

        {/* 2-Column Executive Monograph Dossier */}
        <div className="furcak-card rounded-3xl p-7 sm:p-10 lg:p-12 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Executive Monogram Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-sm">
                
                {/* Monogram Seal Container */}
                <div className="relative rounded-2xl bg-[#12151B] border border-[#C8A55E]/40 p-4 sm:p-5 shadow-2xl">
                  <div className="aspect-[4/5] rounded-xl bg-[#161B24] flex flex-col items-center justify-between p-6 border border-[#C8A55E]/20 relative overflow-hidden">
                    
                    {/* Top jurisdiction badge */}
                    <div className="w-full flex justify-between items-center z-10">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#EFE4CA]">
                        Dubai Silicon Oasis
                      </span>
                      <span className="text-[10px] uppercase font-bold bg-[#090B0E] text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        FZCO
                      </span>
                    </div>

                    {/* Central Monogram */}
                    <div className="relative my-auto flex flex-col items-center text-center z-10">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#1D222E] border-2 border-[#C8A55E] flex items-center justify-center shadow-lg mb-3">
                        <span className="font-heading font-black text-3xl sm:text-4xl text-[#EFE4CA] tracking-wider">
                          JF
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wide">
                        Jan Furcak
                      </h4>
                      <p className="text-xs font-semibold tracking-wider uppercase mt-1 text-[#C8A55E]">
                        Founder & General Manager
                      </p>
                    </div>

                    {/* Legal foundation marker */}
                    <div className="w-full z-10 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-2">
                      <Scale className="w-4 h-4 text-[#C8A55E]" />
                      <span className="text-xs font-medium text-slate-200">
                        Legal Foundation Since 2012
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overlaid Experience Badge */}
                <div className="mt-4 w-full rounded-xl bg-[#141720] border border-[#C8A55E]/40 px-4 py-2.5 text-center shadow-md">
                  <div className="text-xs font-bold text-[#EFE4CA] tracking-wide">
                    10+ Years Executive Track Record
                  </div>
                  <div className="text-[11px] text-slate-300 font-normal">
                    Corporate Management & Commercial Law
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Profile & Detailed Bio */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-1.5 block">
                  Leadership Profile
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                  {LEADERSHIP_PROFILE.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#EFE4CA] mt-1">
                  {LEADERSHIP_PROFILE.role} • {LEADERSHIP_PROFILE.company}
                </p>
              </div>

              {/* Track Record Strip */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141822] border border-[#C8A55E]/30 text-xs sm:text-sm font-semibold mb-6 flex items-center gap-3 text-[#EFE4CA]">
                <Award className="w-5 h-5 text-[#C8A55E] shrink-0" />
                <span>{LEADERSHIP_PROFILE.experienceBadge}</span>
              </div>

              {/* Bio Narrative with Guaranteed High Contrast */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-slate-200 font-normal">
                {LEADERSHIP_PROFILE.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Capabilities Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-5 border-t border-slate-800/80">
                {LEADERSHIP_PROFILE.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#C8A55E] shrink-0 mt-0.5" />
                    <span className="text-slate-100">{cred}</span>
                  </div>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={handleScheduleClick}
                  className="px-6 py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all cursor-pointer text-center"
                >
                  Schedule Direct Call with Jan Furcak
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3.5 rounded-lg border border-slate-700 bg-[#141720] hover:border-[#C8A55E]/50 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8A55E]" />
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
