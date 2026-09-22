"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Phone, Send, CheckCircle2 } from "lucide-react";
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        className="relative w-full max-w-xl rounded-3xl bg-[#16181D] border-2 border-[#C5A059]/40 shadow-2xl p-5 sm:p-8 overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto mb-4 text-[#F3E7C4]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">
              Consultation Request Received
            </h3>
            <p className="text-slate-100 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="text-[#F3E7C4] font-bold">{formData.name}</span>. Our executive office at Dubai Silicon Oasis will review your request and confirm the appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Connect on WhatsApp Immediately
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-white text-sm font-semibold transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-xs font-bold text-[#F3E7C4] tracking-wide mb-3">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                EXECUTIVE CONSULTATION
              </div>
              <h2 className="text-2xl font-bold font-heading text-white">
                Schedule a Strategic Call
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 font-normal">
                Direct consultation with Jan Furcak and the senior advisory team in Dubai Silicon Oasis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Weber"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                    Company / Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Tech Solutions FZ"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors"
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
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors"
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
                    className="w-full px-3.5 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                  Consultancy Pillar of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm transition-colors"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title} className="bg-[#16181D] text-white">
                      {srv.title}
                    </option>
                  ))}
                  <option value="Multi-disciplinary Advisory" className="bg-[#16181D] text-white">
                    Multi-disciplinary / General Advisory
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                  Preferred Time Window (Gulf Standard Time)
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-300" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm transition-colors"
                  >
                    <option value="Morning (09:00 - 13:00 GST)" className="bg-[#16181D] text-white">
                      Morning: 09:00 - 13:00 GST (Dubai Time)
                    </option>
                    <option value="Afternoon (13:00 - 17:00 GST)" className="bg-[#16181D] text-white">
                      Afternoon: 13:00 - 17:00 GST (Dubai Time)
                    </option>
                    <option value="Evening (17:00 - 20:00 GST)" className="bg-[#16181D] text-white">
                      Evening: 17:00 - 20:00 GST (Dubai Time)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                  Brief Project Overview / Objectives (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us briefly about your sector, target objectives, or timeline..."
                  className="w-full px-3.5 py-3 rounded-xl bg-[#0B0C0E] border border-slate-700 focus:border-[#C5A059] focus:outline-none text-white text-base sm:text-sm placeholder:text-slate-400 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gold-gradient-bg text-[#0B0C0E] font-black text-sm sm:text-base shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.45)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#0B0C0E]" />
                  <span>Confirm Request</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-emerald-500/50 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/40 text-sm font-bold transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Quick WhatsApp</span>
                </button>
              </div>

              <p className="text-xs text-slate-300 text-center pt-1 font-medium">
                Direct privacy assured. Licensed under Dubai Integrated Economic Zones Authority (DIEZA).
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
