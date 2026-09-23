"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Target,
  Building2,
  Globe2,
  Handshake,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { SERVICES_DATA, ServiceItem } from "@/lib/data";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const router = useRouter();
  const [, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      router.push(`/contact?service=${encodeURIComponent(title)}`);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#C8A55E]" />;
      case "Target":
        return <Target className="w-5 h-5 text-[#C8A55E]" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-[#C8A55E]" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5 text-[#C8A55E]" />;
      case "Handshake":
        return <Handshake className="w-5 h-5 text-[#C8A55E]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#C8A55E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C8A55E]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden bg-[#090B0E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-3">
            Core Competencies
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Six Pillars of Corporate Value
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Delivering holistic strategic, commercial, and project coordination frameworks tailored for institutional and enterprise clients.
          </p>
        </div>

        {/* 3x2 Architectural Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service: ServiceItem) => {
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group furcak-card rounded-2xl p-7 flex flex-col justify-between cursor-pointer active:scale-[0.99]"
                onClick={() => handleCardClick(service.title)}
              >
                <div>
                  {/* Top Bar with Icon & Action Trigger */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                    <div className="w-11 h-11 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center group-hover:border-[#C8A55E] transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#151922] border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[#090B0E] group-hover:bg-[#C8A55E] group-hover:border-[#C8A55E] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#EFE4CA] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A55E] mb-2">
                      Key Deliverables
                    </div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A55E] shrink-0 mt-0.5" />
                        <span className="leading-snug text-slate-100 font-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#EFE4CA] transition-colors">
                  <span>Inquire About Mandate</span>
                  <span className="text-[#C8A55E] font-medium text-xs">Details & Scope</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customized Scope Institutional Strip */}
        <div className="mt-14 p-7 sm:p-9 rounded-2xl bg-[#12151B] border border-[#C8A55E]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Looking for a Customized Commercial or Project Mandate?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-normal max-w-2xl">
              We structure multi-phase consultancy agreements adapted to your corporate scope, regulatory requirements, and target milestones.
            </p>
          </div>
          <button
            onClick={() => handleCardClick("Multi-Pillar Strategic Mandate")}
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
