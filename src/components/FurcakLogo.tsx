import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FurcakLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
}

export const FurcakLogo: React.FC<FurcakLogoProps> = ({
  className = "",
  showTagline = true,
  size = "md",
  href = "/",
}) => {
  const emblemSizes = {
    sm: "w-8 h-8 p-1",
    md: "w-8 h-8 sm:w-10 sm:h-10 p-1 sm:p-1.5",
    lg: "w-10 h-10 sm:w-14 sm:h-14 p-1.5 sm:p-2",
    xl: "w-14 h-14 sm:w-20 sm:h-20 p-2 sm:p-2.5",
  };

  const titleSizes = {
    sm: "text-sm sm:text-base tracking-wider",
    md: "text-sm sm:text-xl tracking-wider sm:tracking-widest",
    lg: "text-lg sm:text-3xl tracking-widest",
    xl: "text-xl sm:text-4xl tracking-widest",
  };

  const subSizes = {
    sm: "text-[9px] tracking-wider",
    md: "text-[10px] sm:text-[11px] tracking-wider",
    lg: "text-xs tracking-widest",
    xl: "text-sm tracking-widest",
  };

  const logoContent = (
    <>
      {/* Official Luxury Gold Monogram Emblem */}
      <div
        className={`relative ${emblemSizes[size]} shrink-0 rounded-xl bg-gradient-to-br from-[#1C202B] to-[#0D0F14] border border-[#C8A55E]/40 shadow-md group-hover:border-[#C8A55E] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(200,165,94,0.35)] flex items-center justify-center`}
      >
        <Image
          src="/images/furcak-logo.png"
          alt="FURCAK Monogram"
          width={80}
          height={80}
          className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading font-black text-white tracking-widest group-hover:text-[#F3E7C4] transition-colors drop-shadow-sm ${titleSizes[size]}`}
          >
            FURCAK
          </span>
          <span className="text-[10px] font-bold tracking-wider text-[#0B0C0E] bg-[#C8A55E] px-1.5 py-0.5 rounded shadow-sm uppercase">
            FZCO
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-slate-300 font-medium uppercase font-sans ${subSizes[size]} transition-colors group-hover:text-white leading-tight mt-0.5 hidden sm:block`}
          >
            Marketing Management • Dubai
          </span>
        )}
      </div>
    </>
  );

  if (!href) {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 group ${className}`}>
        {logoContent}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none ${className}`}
      aria-label="FURCAK MARKETING MANAGEMENT - FZCO Home"
    >
      {logoContent}
    </Link>
  );
};

