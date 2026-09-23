"use client";

import React, { useState } from "react";
import { COMPANY_INFO, SERVICES_DATA } from "@/lib/data";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Send,
  CheckCircle2,
  MessageCircle,
  Clock,
  ExternalLink,
} from "lucide-react";

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: initialService || SERVICES_DATA[0].title,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New B2B Inquiry from ${formData.name} - ${formData.company || "Direct Client"}`,
            from_name: formData.name,
            ...formData,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus("success");
          setResponseMsg("Your inquiry has been transmitted directly to our executive team.");
          return;
        }
      } catch {
        // Fall back to direct mailto if API encountered an issue
      }
    }

    // Direct mailto to info@fmm-fzco.com (routed automatically by Cloudflare to Jan's Gmail)
    const subject = encodeURIComponent(
      `Mandate Inquiry: ${formData.company ? `${formData.company} - ` : ""}${formData.name} (${formData.service})`
    );
    const body = encodeURIComponent(
      `Executive Mandate Inquiry\n` +
      `-----------------------------------------\n` +
      `Full Name: ${formData.name}\n` +
      `Company / Entity: ${formData.company || "Not specified"}\n` +
      `Direct Email: ${formData.email}\n` +
      `Phone / Mobile: ${formData.phone || "Not specified"}\n` +
      `Area of Consultation: ${formData.service}\n\n` +
      `Project Details & Objectives:\n${formData.message}\n` +
      `-----------------------------------------\n` +
      `Sent via fmm-fzco.com\n`
    );

    const mailtoUrl = `mailto:${COMPANY_INFO.emailGeneral}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatus("success");
    setResponseMsg(
      `Your inquiry has been prepared for ${COMPANY_INFO.emailGeneral}. Your email app will open to confirm and send. You can also connect via WhatsApp immediately.`
    );
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello FURCAK Team,\n\nName: ${formData.name || "Client"}\nCompany: ${formData.company || "Not specified"}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-[#090B0E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A55E] mb-3">
            Engagement & Licensing
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Initiate a Strategic Partnership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Contact our Dubai Silicon Oasis executive team to discuss your corporate expansion, marketing, or project development requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Regulatory Ledger & Direct Contact Points */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Licensing Ledger */}
            <div className="p-7 rounded-2xl bg-[#12151B] border border-[#C8A55E]/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-800/80">
                <div className="w-10 h-10 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                    Official UAE Regulatory Status
                  </h3>
                  <p className="text-xs text-[#EFE4CA] font-medium">
                    Fully Licensed & Registered Free Zone Entity
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                  <span className="text-slate-300 font-normal">Company Name:</span>
                  <span className="text-white font-semibold text-left sm:text-right">
                    {COMPANY_INFO.legalName}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-300 font-normal">Trade Licence No.:</span>
                  <span className="text-[#EFE4CA] font-mono font-bold text-sm">
                    {COMPANY_INFO.tradeLicenceNo}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-300 font-normal">Legal Status:</span>
                  <span className="text-white font-semibold">
                    {COMPANY_INFO.legalStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-300 font-normal">Licensing Authority:</span>
                  <span className="text-white font-semibold">
                    DIEZA
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 gap-1">
                  <span className="text-slate-300 font-normal">Free Zone Jurisdiction:</span>
                  <span className="text-[#EFE4CA] font-semibold">
                    Dubai Silicon Oasis (DSO-IFZA)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Points */}
            <div className="p-7 rounded-2xl bg-[#12151B] border border-slate-800/90 space-y-6 shadow-md">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-semibold text-[#C8A55E] tracking-wider mb-1">
                    Registered Premises
                  </div>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    {COMPANY_INFO.premisesAddress}
                  </p>
                </div>
              </div>

              {/* Phone / Mobile */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-semibold text-[#C8A55E] tracking-wider mb-1">
                    Phone / Mobile
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-[#EFE4CA] transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-300 mt-0.5 font-normal">
                    Direct line to General Management (Gulf Standard Time)
                  </p>
                </div>
              </div>

              {/* Corporate Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#181C24] border border-[#C8A55E]/30 flex items-center justify-center text-[#C8A55E] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-semibold text-[#C8A55E] tracking-wider mb-1">
                    Corporate Email
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.emailGeneral}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-[#EFE4CA] transition-colors block"
                  >
                    {COMPANY_INFO.emailGeneral}
                  </a>
                  <p className="text-xs text-slate-300 mt-0.5 font-normal">
                    Official inquiries & strategic partnership mandates
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-semibold text-[#C8A55E] tracking-wider mb-1">
                    Instant WhatsApp Concierge
                  </div>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Message +971 50 539 5412</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-slate-300 mt-0.5 font-normal">
                    Live client concierge & preliminary project consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-4 rounded-xl bg-[#12151B] border border-slate-800 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <Clock className="w-4 h-4 text-[#C8A55E] shrink-0" />
              <span>
                Executive Hours: Mon - Fri | 09:00 - 18:00 GST (Dubai Time)
              </span>
            </div>
          </div>

          {/* Right Column: Boardroom Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="furcak-card p-7 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="mb-7 pb-5 border-b border-slate-800/80">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Send a Corporate Mandate Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                  All communications are governed under strict executive non-disclosure standards.
                </p>
              </div>

              {status === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/50 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-white mb-2">
                    Inquiry Successfully Transmitted
                  </h4>
                  <p className="text-sm text-slate-200 max-w-md mx-auto mb-6">
                    {responseMsg}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`mailto:${COMPANY_INFO.emailGeneral}?subject=${encodeURIComponent(
                        `Mandate Inquiry: ${formData.company ? `${formData.company} - ` : ""}${formData.name} (${formData.service})`
                      )}&body=${encodeURIComponent(
                        `Full Name: ${formData.name}\nCompany: ${formData.company || "Not specified"}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not specified"}\nService: ${formData.service}\n\nProject Details:\n${formData.message}\n`
                      )}`}
                      className="px-5 py-3 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:brightness-105"
                    >
                      <Mail className="w-4 h-4 text-[#090B0E]" />
                      Open Email App
                    </a>
                    <button
                      onClick={handleSendWhatsApp}
                      className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Forward Directly to WhatsApp
                    </button>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          service: SERVICES_DATA[0].title,
                          message: "",
                        });
                      }}
                      className="px-5 py-3 rounded-lg border border-slate-700 text-slate-200 text-sm hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jan Kowalski / John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise GmbH / Corp Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="executive@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      Core Area of Consultation
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm transition-colors"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#12151B] text-white">
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Corporate Advisory" className="bg-[#12151B] text-white">
                        General Corporate & Legal Foundation Advisory
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      Project Details & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your target objectives, jurisdiction scope, industry sector, and estimated project schedule..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-800 text-rose-200 text-xs font-medium">
                      {responseMsg}
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-sm sm:text-base shadow-md hover:brightness-105 transition-all cursor-pointer active:scale-98 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-[#090B0E]" />
                      <span>
                        {status === "submitting" ? "Transmitting..." : "Submit Mandate Inquiry"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 text-sm font-semibold transition-colors cursor-pointer"
                      title="Send directly via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Quick Send</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 text-center pt-2 font-normal">
                    Official Free Zone Company (FZCO) registered in Dubai Silicon Oasis. Trade Licence No. 89324.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
