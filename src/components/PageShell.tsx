"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ScheduleModal } from "@/components/ScheduleModal";
import { LegalModal } from "@/components/LegalModals";

interface PageShellProps {
  children: React.ReactNode;
  noTopPadding?: boolean;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  noTopPadding = false,
}) => {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  React.useEffect(() => {
    const handler = () => setScheduleOpen(true);
    window.addEventListener("open-schedule", handler);
    return () => window.removeEventListener("open-schedule", handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090B0E] text-[#F8FAFC] flex flex-col justify-between selection:bg-[#C8A55E] selection:text-[#090B0E]">
      {/* Universal Executive Navbar */}
      <Navbar onOpenSchedule={() => setScheduleOpen(true)} />

      {/* Main Page Content */}
      <main className={`flex-1 ${noTopPadding ? "" : "pt-24 sm:pt-28"}`}>
        {children}
      </main>

      {/* Universal Institutional Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenSchedule={() => setScheduleOpen(true)}
      />

      {/* Interactive Floating WhatsApp Concierge */}
      <WhatsAppWidget />

      {/* Schedule Consultation Modal */}
      <ScheduleModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />

      {/* Legal Privacy & Terms Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};
