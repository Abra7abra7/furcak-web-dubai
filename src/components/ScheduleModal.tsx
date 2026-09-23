"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Phone, Send, CheckCircle2, Mail } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/lib/data";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: SERVICES_DATA[0].title,
    preferredTime: "Morning (09:00 - 13:00 GST)",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Consultation Request: ${formData.name} - ${formData.preferredTime}`,
            from_name: formData.name,
            ...formData,
          }),
        });
        setSubmitting(false);
        setSubmitted(true);
        return;
      } catch {
        // Fall back to direct mailto
      }
    }

    // Direct mailto to info@fmm-fzco.com
    const subject = encodeURIComponent(
      `Consultation Request: ${formData.name} (${formData.preferredTime})`
    );
    const body = encodeURIComponent(
      `Executive Consultation Request\n` +
      `-----------------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company || "Not specified"}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not specified"}\n` +
      `Service: ${formData.service}\n` +
      `Preferred Time: ${formData.preferredTime}\n\n` +
      `Project Brief / Notes:\n${formData.notes || "None provided"}\n` +
      `-----------------------------------------\n` +
      `FURCAK MARKETING MANAGEMENT - FZCO\n`
    );

    window.location.href = `mailto:${COMPANY_INFO.emailGeneral}?subject=${subject}&body=${body}`;
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello Jan & FURCAK Team,\n\nI would like to schedule an executive consultation regarding ${formData.service}.\nName: ${formData.name || "Executive"}\nCompany: ${formData.company || "Not specified"}\nPreferred Time: ${formData.preferredTime}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-[#12151B] border border-[#C8A55E]/35 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#181C24] border border-[#C8A55E] flex items-center justify-center mx-auto mb-4 text-[#EFE4CA]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">
              Consultation Request Prepared
            </h3>
            <p className="text-slate-200 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="text-[#EFE4CA] font-semibold">{formData.name}</span>. Your request has been formatted for <strong className="text-white">{COMPANY_INFO.emailGeneral}</strong>. Your mail app will open to transmit the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${COMPANY_INFO.emailGeneral}?subject=${encodeURIComponent(
                  `Consultation Request: ${formData.name} (${formData.preferredTime})`
                )}&body=${encodeURIComponent(
                  `Name: ${formData.name}\nCompany: ${formData.company || "Not specified"}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not specified"}\nService: ${formData.service}\nPreferred Time: ${formData.preferredTime}\nNotes: ${formData.notes || "None"}\n`
                )}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-sm shadow-md hover:brightness-105 transition-all"
              >
                <Mail className="w-4 h-4 text-[#090B0E]" />
                <span>Open Email App</span>
              </a>
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Quick WhatsApp</span>
              </button>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close window
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C24] border border-[#C8A55E]/30 text-xs font-semibold text-[#EFE4CA] tracking-wide mb-3">
                <Calendar className="w-3.5 h-3.5 text-[#C8A55E]" />
                <span>Executive Consultation</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-white">
                Schedule a Strategic Call
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                Direct consultation with Jan Furcak and the senior advisory team in Dubai Silicon Oasis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Weber"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                    Company / Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Tech Solutions FZ"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
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
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
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
                    className="w-full px-3.5 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                  Consultancy Pillar of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm transition-colors"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title} className="bg-[#12151B] text-white">
                      {srv.title}
                    </option>
                  ))}
                  <option value="Multi-disciplinary Advisory" className="bg-[#12151B] text-white">
                    Multi-disciplinary / General Advisory
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                  Preferred Time Window (Gulf Standard Time)
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm transition-colors"
                  >
                    <option value="Morning (09:00 - 13:00 GST)" className="bg-[#12151B] text-white">
                      Morning: 09:00 - 13:00 GST (Dubai Time)
                    </option>
                    <option value="Afternoon (13:00 - 17:00 GST)" className="bg-[#12151B] text-white">
                      Afternoon: 13:00 - 17:00 GST (Dubai Time)
                    </option>
                    <option value="Evening (17:00 - 20:00 GST)" className="bg-[#12151B] text-white">
                      Evening: 17:00 - 20:00 GST (Dubai Time)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                  Brief Project Overview / Objectives (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us briefly about your sector, target objectives, or timeline..."
                  className="w-full px-3.5 py-3 rounded-xl bg-[#090B0E] border border-slate-800 focus:border-[#C8A55E] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-500 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg gold-gradient-bg text-[#090B0E] font-bold text-sm sm:text-base shadow-md hover:brightness-105 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#090B0E]" />
                  <span>Confirm Request</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 text-sm font-semibold transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Quick WhatsApp</span>
                </button>
              </div>

              <p className="text-xs text-slate-400 text-center pt-1 font-normal">
                Direct privacy assured. Licensed under Dubai Integrated Economic Zones Authority (DIEZA).
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
