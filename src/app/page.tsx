"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { COMPANY_INFO, SERVICES_DATA, INDUSTRIES_DATA, APPROACH_STEPS } from "@/lib/data";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  Globe2,
  Handshake,
  Briefcase,
  Calendar,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export default function Home() {
  const handleOpenSchedule = () => {
    window.dispatchEvent(new CustomEvent("open-schedule"));
  };

  return (
    <PageShell noTopPadding={true}>
      {/* 1. Master Architectural Hero */}
      <Hero />

      {/* Mobile Executive Quick-Directory Hub */}
      <section className="sm:hidden px-4 py-6 bg-[#090B0E] border-t border-slate-800/80">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A55E] mb-3 text-center">
          Executive Mobile Directory
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <Link
            href="/about"
            className="p-3 rounded-xl bg-[#12151B] border border-slate-800 active:border-[#C8A55E] transition-all flex flex-col justify-between"
          >
            <div className="w-8 h-8 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] mb-2">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-heading">Corporate Profile</div>
              <div className="text-[10px] text-slate-400 mt-0.5">DIEZA Licence 89324</div>
            </div>
          </Link>

          <Link
            href="/services"
            className="p-3 rounded-xl bg-[#12151B] border border-slate-800 active:border-[#C8A55E] transition-all flex flex-col justify-between"
          >
            <div className="w-8 h-8 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] mb-2">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-heading">6 Advisory Pillars</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Scope & Deliverables</div>
            </div>
          </Link>

          <Link
            href="/industries"
            className="p-3 rounded-xl bg-[#12151B] border border-slate-800 active:border-[#C8A55E] transition-all flex flex-col justify-between"
          >
            <div className="w-8 h-8 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] mb-2">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-heading">8 B2B Sectors</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Industrial, Tech, Energy</div>
            </div>
          </Link>

          <Link
            href="/approach"
            className="p-3 rounded-xl bg-[#12151B] border border-slate-800 active:border-[#C8A55E] transition-all flex flex-col justify-between"
          >
            <div className="w-8 h-8 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] mb-2">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-heading">5-Stage Roadmap</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Execution Methodology</div>
            </div>
          </Link>
        </div>
      </section>

      {/* 2. Corporate Profile Executive Overview */}
      <section className="py-12 sm:py-24 relative overflow-hidden bg-[#090B0E] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative Summary */}
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-2 sm:mb-3">
                Corporate Profile & Stature
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4 sm:mb-5">
                Strategic UAE Advisory from the Heart of Dubai Silicon Oasis
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-4 sm:mb-6">
                <strong className="text-white font-semibold">{COMPANY_INFO.legalName}</strong> is an agile, multi-disciplinary corporate consultancy incorporated within Dubai Silicon Oasis under the regulatory oversight of the Dubai Integrated Economic Zones Authority (DIEZA).
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6 sm:mb-8">
                We advise and execute for B2B enterprises operating in high-complexity sectors including industrial manufacturing, engineering, and technology—bridging European corporate ambition with Middle Eastern market execution.
              </p>

              {/* Competencies Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                {[
                  "Focus on High-Value B2B Sectors",
                  "DIEZA Free Zone Certified Entity",
                  "Cross-Border Contract & Project Acumen",
                  "Direct Senior-Level Advisory",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A55E] shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action to About Subpage */}
              <Link
                href="/about"
                className="inline-flex items-center justify-center sm:justify-start gap-2.5 px-6 py-3 rounded-lg bg-[#12151B] hover:bg-[#1A1F29] border border-[#C8A55E]/40 hover:border-[#C8A55E] text-[#EFE4CA] font-semibold text-xs sm:text-sm transition-all w-full sm:w-auto"
              >
                <span>Read Full Corporate Profile & Licensing</span>
                <ArrowRight className="w-4 h-4 text-[#C8A55E]" />
              </Link>
            </div>

            {/* Right Column: Institutional Verification Card */}
            <div className="lg:col-span-5">
              <div className="furcak-card p-5 sm:p-8 rounded-2xl relative shadow-xl">
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-800/80">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                      Dubai Silicon Oasis (DSO-IFZA)
                    </h3>
                    <p className="text-xs font-semibold text-[#EFE4CA]">
                      Trade Licence No. {COMPANY_INFO.tradeLicenceNo}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C8A55E] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Licensing Authority:</strong> Dubai Integrated Economic Zones Authority (DIEZA).
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C8A55E] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Jurisdiction:</strong> 0% Corporate & Personal Tax Alignment under UAE Free Zone legislation.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C8A55E] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Boardroom Counsel:</strong> Direct engagement with Founder & Managing Director Jan Furcak.
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 sm:pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Headquarters</span>
                  <span className="text-white font-medium">Dubai Digital Park, DSO, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Six Pillars of Corporate Value (Services Teaser) */}
      <section className="py-12 sm:py-24 relative overflow-hidden bg-[#07090C] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-2 sm:mb-3">
                Core Competencies
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Six Pillars of Advisory Excellence
              </h2>
              <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-300 font-normal">
                Structured frameworks designed for enterprise clarity, contract precision, and market expansion.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EFE4CA] hover:text-white transition-colors shrink-0"
            >
              <span>Explore All 6 Pillars & Deliverables</span>
              <ArrowRight className="w-4 h-4 text-[#C8A55E]" />
            </Link>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex items-center justify-between text-xs text-[#EFE4CA] font-medium sm:hidden mb-3 px-1">
            <span className="text-slate-400">Swipe horizontally to browse</span>
            <span className="text-[#C8A55E] font-mono text-[11px] font-bold">01 — 06 →</span>
          </div>

          {/* Swipeable Track on Mobile / 3-Column Grid on Desktop */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {SERVICES_DATA.slice(0, 6).map((service) => {
              const getServiceIcon = (name: string) => {
                switch (name) {
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
                  default:
                    return <Briefcase className="w-5 h-5 text-[#C8A55E]" />;
                }
              };

              return (
                <Link
                  key={service.id}
                  href="/services"
                  className="group furcak-card rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#C8A55E]/50 transition-all block min-w-[85vw] sm:min-w-0 snap-center shrink-0 sm:shrink"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5 pb-3 border-b border-slate-800/80">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center group-hover:border-[#C8A55E] transition-colors">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="font-mono text-xs text-[#C8A55E] font-bold">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-[#EFE4CA] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4 line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#EFE4CA] transition-colors">
                    <span>View Scope & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A55E]" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all w-full sm:w-auto"
            >
              <span>Explore Complete Services Catalog & Scope</span>
              <ArrowRight className="w-4 h-4 text-[#090B0E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Industries & Sectors Overview */}
      <section className="py-12 sm:py-24 relative overflow-hidden bg-[#090B0E] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-2 sm:mb-3">
                Sector Ecosystem
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Specialized B2B Industry Sectors
              </h2>
              <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-300 font-normal">
                Strategic counsel focused on capital-intensive, technically complex industries.
              </p>
            </div>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EFE4CA] hover:text-white transition-colors shrink-0"
            >
              <span>View All 8 Sectors & Focus Areas</span>
              <ArrowRight className="w-4 h-4 text-[#C8A55E]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            {INDUSTRIES_DATA.map((ind) => (
              <Link
                key={ind.id}
                href="/industries"
                className="group p-3.5 sm:p-5 rounded-xl bg-[#12151B] border border-slate-800 hover:border-[#C8A55E]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#C8A55E] block mb-1">
                    {ind.category}
                  </span>
                  <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-[#EFE4CA] transition-colors leading-snug">
                    {ind.title}
                  </h3>
                </div>
                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 group-hover:text-[#EFE4CA]">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 text-[#C8A55E]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Advisory Approach & Methodology Teaser */}
      <section className="py-12 sm:py-24 relative overflow-hidden bg-[#07090C] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-2 sm:mb-3">
              Execution Methodology
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Disciplined Five-Stage Roadmap
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-300 font-normal">
              From market intelligence to compound enterprise growth, we apply a methodical framework ensuring commercial predictability.
            </p>
          </div>

          {/* Stepper on Mobile / 5-Column Grid on Desktop */}
          <div className="relative pl-6 sm:pl-0 sm:grid sm:grid-cols-5 gap-3.5 sm:gap-4 space-y-3.5 sm:space-y-0 mb-8 sm:mb-10">
            {/* Vertical connector line on mobile */}
            <div className="absolute left-2.5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#C8A55E] via-[#C8A55E]/40 to-slate-800 sm:hidden" />

            {APPROACH_STEPS.map((step) => (
              <div
                key={step.step}
                className="furcak-card p-4 sm:p-5 rounded-xl flex flex-col justify-between relative"
              >
                {/* Timeline node circle on mobile */}
                <div className="absolute -left-6 top-4 w-5 h-5 rounded-full bg-[#181C24] border-2 border-[#C8A55E] flex items-center justify-center font-mono text-[9px] font-bold text-[#EFE4CA] sm:hidden shadow-sm">
                  {step.step}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-mono text-xs font-bold text-[#C8A55E]">
                      PHASE {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#EFE4CA] font-medium mb-2 sm:mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/approach"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#12151B] hover:bg-[#1A1F29] border border-[#C8A55E]/40 hover:border-[#C8A55E] text-[#EFE4CA] font-semibold text-xs sm:text-sm transition-all w-full sm:w-auto"
            >
              <span>Learn More About Our 5-Stage Methodology & Milestones</span>
              <ArrowRight className="w-4 h-4 text-[#C8A55E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Executive Leadership Spotlight (Jan Furcak) */}
      <section className="py-12 sm:py-24 relative overflow-hidden bg-[#090B0E] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="furcak-card rounded-2xl p-5 sm:p-10 lg:p-12 relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-[#1D222E] border-2 border-[#C8A55E] flex items-center justify-center shadow-lg mb-3 sm:mb-4">
                  <span className="font-heading font-black text-2xl sm:text-4xl text-[#EFE4CA] tracking-wider">
                    JF
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold font-heading text-white">
                  Jan Furcak
                </h3>
                <p className="text-xs sm:text-sm text-[#EFE4CA] font-semibold mt-0.5">
                  Founder & Managing Director
                </p>
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181C24] border border-[#C8A55E]/30 text-[11px] text-slate-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A55E]" />
                  <span>Legal Foundation Est. 2012</span>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-2">
                  Managing Director Monograph
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-heading text-white mb-3 sm:mb-4">
                  Decade of Corporate Management & Cross-Border Execution
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5 sm:mb-6">
                  Jan Furcak synthesizes deep contractual discipline with dynamic commercial acumen. With an established legal foundation specializing in corporate law, Jan leads FURCAK&apos;s mission to bridge global enterprises with Dubai&apos;s commercial ecosystem.
                </p>

                <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4">
                  <Link
                    href="/leadership"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all text-center"
                  >
                    <span>View Leadership Monograph</span>
                    <ArrowRight className="w-4 h-4 text-[#090B0E]" />
                  </Link>
                  <button
                    onClick={handleOpenSchedule}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#12151B] hover:bg-[#1A1F29] border border-[#C8A55E]/40 text-[#EFE4CA] font-semibold text-xs sm:text-sm transition-all cursor-pointer text-center"
                  >
                    <Calendar className="w-4 h-4 text-[#C8A55E]" />
                    <span>Schedule Direct Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Direct Mandate Engagement CTA Strip */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#12151B] via-[#161B24] to-[#12151B] border-t border-[#C8A55E]/30 pb-20 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-2">
              Ready to Initiate Mandate
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white">
              Schedule Your Confidential Advisory Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl font-normal">
              Direct discussions regarding market entry, business development, or project development consultancy in the UAE and GCC.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all text-center"
            >
              <span>Initiate Mandate Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#090B0E]" />
            </Link>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 border border-emerald-500/40 font-semibold text-xs sm:text-sm transition-all text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Concierge Action Bar on Mobile */}
      <aside aria-label="Mobile Concierge" className="fixed bottom-0 left-0 right-0 z-30 sm:hidden p-2.5 bg-[#090B0E]/95 backdrop-blur-xl border-t border-[#C8A55E]/30 flex items-center gap-2 shadow-2xl">
        <button
          onClick={handleOpenSchedule}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#14171F] border border-[#C8A55E]/40 text-[#EFE4CA] font-semibold text-xs active:scale-[0.98] transition-transform cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#C8A55E]" />
          <span>Schedule Call</span>
        </button>
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#075E54] hover:bg-[#128C7E] text-white font-semibold text-xs active:scale-[0.98] transition-transform shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </aside>

    </PageShell>
  );
}
