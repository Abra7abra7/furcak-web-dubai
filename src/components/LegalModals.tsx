"use client";

import React from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-xl bg-[#12151B] border border-[#C8A55E]/30 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-11 h-11 rounded-lg bg-[#C8A55E]/10 border border-[#C8A55E]/25 flex items-center justify-center text-[#C8A55E]">
            {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white tracking-tight">
              {isPrivacy ? "Privacy & Data Protection Policy" : "Terms & Conditions of Engagement"}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              {COMPANY_INFO.legalName} • DSO-IFZA
            </p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed border-t border-white/10 pt-5">
          {isPrivacy ? (
            <>
              <p>
                <strong className="text-white">1. Corporate Governance & Commitment:</strong> FURCAK MARKETING MANAGEMENT - FZCO (&quot;FURCAK&quot;), registered under Trade Licence No. 89324 with the Dubai Integrated Economic Zones Authority (DIEZA), is committed to safeguarding all corporate and personal data in strict compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and international business standards.
              </p>
              <p>
                <strong className="text-white">2. Scope of Collected Information:</strong> We only process enterprise and representative information voluntarily provided through our mandate inquiry forms, direct corporate correspondence, WhatsApp communications, and formal advisory agreements.
              </p>
              <p>
                <strong className="text-white">3. Confidentiality & Non-Disclosure:</strong> All project descriptions, business data, commercial proposals, and intellectual assets communicated to FURCAK are treated under strict professional non-disclosure obligations. Information is never sold, shared, or distributed to third parties without prior written client authorization.
              </p>
              <p>
                <strong className="text-white">4. Data Security:</strong> Industry-standard cryptographic transmission protocols are maintained. Inquiries and client documentation are held on secure, encrypted corporate repositories.
              </p>
              <p>
                <strong className="text-white">5. Contact & Inquiries:</strong> For questions regarding corporate confidentiality or data management, inquiries may be directed to our General Management at <span className="text-[#EFE4CA] font-medium">{COMPANY_INFO.premisesAddress}</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-white">1. Legal Incorporation:</strong> FURCAK MARKETING MANAGEMENT - FZCO is a Free Zone Company duly incorporated within the Dubai Silicon Oasis (DSO-IFZA) jurisdiction under Trade Licence No. 89324 issued by DIEZA.
              </p>
              <p>
                <strong className="text-white">2. Scope of Services:</strong> FURCAK provides specialized Marketing Management, Business Development, and Project Development Consultancy services. All advisory scopes, milestone deliverables, retainers, and performance criteria are governed by bespoke bilateral consultancy agreements.
              </p>
              <p>
                <strong className="text-white">3. No Regulatory or Unlicensed Practice:</strong> Information provided across this website represents corporate consultancy capabilities and does not constitute formal financial, banking, or non-consultancy legal representations without a signed engagement letter.
              </p>
              <p>
                <strong className="text-white">4. Intellectual Property:</strong> All branding, emblems, methodologies, and web contents are the exclusive proprietary assets of FURCAK MARKETING MANAGEMENT - FZCO (© 2026).
              </p>
              <p>
                <strong className="text-white">5. Governing Jurisdiction:</strong> Any relationship or engagement entered into shall be governed by and construed in accordance with the regulations of the Dubai Integrated Economic Zones Authority (DIEZA) and the applicable laws of the Emirate of Dubai and the United Arab Emirates.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold tracking-wider uppercase transition-all"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
