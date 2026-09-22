"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Target,
  Building2,
  Globe2,
  Handshake,
  Briefcase,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/lib/data";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#C5A059]" />;
      case "Target":
        return <Target className="w-6 h-6 text-[#C5A059]" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-[#C5A059]" />;
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-[#C5A059]" />;
      case "Handshake":
        return <Handshake className="w-6 h-6 text-[#C5A059]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-28 relative overflow-hidden bg-[#0B0C0E]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#C5A059]/08 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#F3E7C4]/06 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-bold text-[#F3E7C4] tracking-widest uppercase mb-3">
            Core Competencies
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Six Pillars of <span className="gold-gradient-text">Corporate Value</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Delivering holistic strategic, commercial, and project coordination frameworks tailored for institutional and enterprise clients.
          </p>
        </div>

        {/* 3x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative furcak-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.99]"
                onClick={() => onSelectService(service.title)}
              >
                {/* Top indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#222530] to-[#14151A] border border-[#C5A059]/40 flex items-center justify-center group-hover:border-[#C5A059] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-sm text-[#F3E7C4] tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-[#0B0C0E] group-hover:bg-[#C5A059] transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#F3E7C4] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-100 text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F3E7C4]">
                      Key Deliverables
                    </div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="leading-snug font-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200 group-hover:text-[#F3E7C4] transition-colors">
                  <span>Inquire About {service.title}</span>
                  <span className="text-[#C5A059] font-heading font-extrabold text-base">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Trigger */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#16181D] via-[#1E212B] to-[#16181D] border border-[#C5A059]/40 text-center flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Looking for a Customized Commercial or Project Mandate?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 font-normal">
              We structure multi-phase consultancy agreements adapted to your corporate scope and target milestones.
            </p>
          </div>
          <button
            onClick={() => onSelectService("Multi-Pillar Strategic Mandate")}
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl gold-gradient-bg text-[#0B0C0E] font-black text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] transition-all cursor-pointer"
          >
            Request Custom Scope
          </button>
        </div>
      </div>
    </section>
  );
};
