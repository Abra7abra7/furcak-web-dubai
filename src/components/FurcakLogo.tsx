import React from "react";
import Link from "next/link";

interface FurcakLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const FurcakLogo: React.FC<FurcakLogoProps> = ({
  className = "",
  showTagline = true,
  size = "md",
  href = "/",
}) => {
  const emblemSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  };

  const titleSizes = {
    sm: "text-base sm:text-lg tracking-wider",
    md: "text-lg sm:text-xl tracking-widest",
    lg: "text-2xl sm:text-3xl tracking-widest",
  };

  const subSizes = {
    sm: "text-[9px] tracking-wider",
    md: "text-[10px] sm:text-[11px] tracking-wider",
    lg: "text-xs tracking-widest",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none ${className}`}
      aria-label="FURCAK MARKETING MANAGEMENT - FZCO Home"
    >
      {/* Luxury Geometric Emblem */}
      <div
        className={`relative ${emblemSizes[size]} shrink-0 rounded-xl bg-gradient-to-br from-[#222632] to-[#121318] p-[1px] border border-[#C5A059]/50 shadow-lg group-hover:border-[#C5A059] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] flex items-center justify-center`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#F3E7C4" />
              <stop offset="70%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#9B782B" />
            </linearGradient>
          </defs>
          <rect
            x="3"
            y="3"
            width="34"
            height="34"
            rx="6"
            stroke="url(#logoGoldGrad)"
            strokeWidth="1.4"
            strokeOpacity="0.7"
          />
          <path
            d="M12 10 H28 V14 H17 V19 H25 V23 H17 V30 H12 Z"
            fill="url(#logoGoldGrad)"
          />
          <polygon
            points="28,19 31,22 28,25 25,22"
            fill="url(#logoGoldGrad)"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading font-black text-white tracking-widest group-hover:text-[#F3E7C4] transition-colors drop-shadow-sm ${titleSizes[size]}`}
          >
            FURCAK
          </span>
          <span className="text-[10px] font-bold tracking-wider text-[#0B0C0E] bg-[#C5A059] px-1.5 py-0.5 rounded shadow-sm uppercase">
            FZCO
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-slate-300 font-medium uppercase font-sans ${subSizes[size]} transition-colors group-hover:text-white leading-tight mt-0.5`}
          >
            Marketing Management • Dubai
          </span>
        )}
      </div>
    </Link>
  );
};
