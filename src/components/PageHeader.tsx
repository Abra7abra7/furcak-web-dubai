import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  breadcrumbLabel,
}) => {
  return (
    <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-slate-800/80 overflow-hidden architectural-grid">
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] rounded-full bg-[#C8A55E]/[0.05] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
          <Link href="/" className="hover:text-[#EFE4CA] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#EFE4CA]">{breadcrumbLabel}</span>
        </nav>

        {/* Header Content */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151B] border border-[#C8A55E]/30 text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A55E]" />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-[#12151B] border border-slate-800 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A55E]" />
              <span>DIEZA Trade Licence No. {COMPANY_INFO.tradeLicenceNo}</span>
            </div>
            <div className="py-1 px-2.5 rounded-md bg-[#12151B] border border-slate-800 text-slate-300">
              <span>Dubai Silicon Oasis (DSO-IFZA)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
