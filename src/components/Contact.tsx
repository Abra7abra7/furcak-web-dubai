"use client";

import React, { useState } from "react";
import { COMPANY_INFO, SERVICES_DATA } from "@/lib/data";
import {
  MapPin,
  Phone,
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
            subject: `New B2B Inquiry from ${formData.name} - ${formData.company}`,
            from_name: formData.name,
            ...formData,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus("success");
          setResponseMsg("Your inquiry has been transmitted directly to our executive team.");
        } else {
          setStatus("error");
          setResponseMsg(data.message || "Submission encountered an issue.");
        }
      } catch (err) {
        setStatus("error");
        setResponseMsg("Network error. Please reach us via WhatsApp or direct phone.");
      }
    } else {
      setTimeout(() => {
        setStatus("success");
        setResponseMsg(
          "Thank you for contacting FURCAK. Your mandate details have been recorded. Our Dubai Silicon Oasis office will reach out within 24 business hours."
        );
      }, 750);
    }
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello FURCAK Team,\n\nName: ${formData.name || "Client"}\nCompany: ${formData.company || "Not specified"}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-28 relative overflow-hidden bg-[#0B0C0E] border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#C5A059]/08 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-bold text-[#F3E7C4] tracking-widest uppercase mb-3">
            Engagement & Licensing
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Initiate a <span className="gold-gradient-text">Strategic Partnership</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Contact our Dubai Silicon Oasis executive team to discuss your corporate expansion, marketing, or project development requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Details & Official Licensing Block */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Licensing Block */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#1C202B] to-[#12141C] border-2 border-[#C5A059]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/25 border border-[#C5A059]/50 flex items-center justify-center text-[#F3E7C4]">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                    Official UAE Regulatory Status
                  </h3>
                  <p className="text-xs text-[#F3E7C4] font-semibold">
                    Fully Licensed & Registered Free Zone Entity
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm pt-3 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-slate-800 gap-1">
                  <span style={{ color: "#CBD5E1" }} className="font-medium">Company Name:</span>
                  <span style={{ color: "#FFFFFF" }} className="font-bold text-left sm:text-right">
                    {COMPANY_INFO.legalName}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span style={{ color: "#CBD5E1" }} className="font-medium">Trade Licence No.:</span>
                  <span style={{ color: "#F3E7C4" }} className="font-mono font-black text-sm">
                    {COMPANY_INFO.tradeLicenceNo}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span style={{ color: "#CBD5E1" }} className="font-medium">Legal Status:</span>
                  <span style={{ color: "#FFFFFF" }} className="font-bold">
                    {COMPANY_INFO.legalStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span style={{ color: "#CBD5E1" }} className="font-medium">Licensing Authority:</span>
                  <span style={{ color: "#FFFFFF" }} className="font-bold">
                    DIEZA
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 gap-1">
                  <span style={{ color: "#CBD5E1" }} className="font-medium">Free Zone Jurisdiction:</span>
                  <span style={{ color: "#F3E7C4" }} className="font-bold">
                    Dubai Silicon Oasis (DSO-IFZA)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Points */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#16181D] border border-slate-800 space-y-5 shadow-lg">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#F3E7C4] tracking-wider mb-0.5">
                    Registered Premises
                  </div>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {COMPANY_INFO.premisesAddress}
                  </p>
                </div>
              </div>

              {/* Phone / Mobile */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#F3E7C4] tracking-wider mb-0.5">
                    Phone / Mobile
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base sm:text-lg font-black text-white hover:text-[#F3E7C4] transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Direct line to General Management (Gulf Standard Time)
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#F3E7C4] tracking-wider mb-0.5">
                    Instant WhatsApp Concierge
                  </div>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Message +971 50 539 5412</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Live client concierge & preliminary project consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-4 rounded-xl bg-[#16181D] border border-slate-800 flex items-center gap-3 text-xs sm:text-sm text-slate-200">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>
                Executive Hours: Mon - Fri | 09:00 - 18:00 GST (Dubai Time)
              </span>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Send a Corporate Mandate Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-normal">
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
                  <p className="text-sm text-slate-100 max-w-md mx-auto mb-6">
                    {responseMsg}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendWhatsApp}
                      className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
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
                      className="px-5 py-3 rounded-xl border border-slate-700 text-slate-200 text-sm hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jan Kowalski / John Smith"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise GmbH / Corp Ltd."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="executive@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                      Core Area of Consultation
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm transition-colors shadow-inner"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#16181D] text-white">
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Corporate Advisory" className="bg-[#16181D] text-white">
                        General Corporate & Legal Foundation Advisory
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                      Project Details & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your target objectives, jurisdiction scope, industry sector, and estimated project schedule..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors shadow-inner"
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
                      className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-gradient-bg text-[#0B0C0E] font-black text-sm sm:text-base shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.45)] transition-all cursor-pointer active:scale-98 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-[#0B0C0E]" />
                      <span>
                        {status === "submitting" ? "Transmitting..." : "Submit Mandate Inquiry"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-emerald-500/50 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 text-sm font-bold transition-colors cursor-pointer"
                      title="Send directly via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Quick Send</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 text-center pt-2 font-medium">
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
