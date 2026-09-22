"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Approach } from "@/components/Approach";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ScheduleModal } from "@/components/ScheduleModal";
import { LegalModal } from "@/components/LegalModals";

export default function Home() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    // Smooth scroll to contact section
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0C0E] text-[#F8FAFC]">
      {/* Navigation Header */}
      <Navbar onOpenSchedule={() => setScheduleOpen(true)} />

      {/* Main Single-Page Sections */}
      <main>
        <Hero onOpenSchedule={() => setScheduleOpen(true)} />
        <About />
        <Services onSelectService={handleSelectService} />
        <Industries />
        <Approach />
        <Leadership onOpenSchedule={() => setScheduleOpen(true)} />
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenSchedule={() => setScheduleOpen(true)}
      />

      {/* Interactive Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Schedule Call Consultation Modal */}
      <ScheduleModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />

      {/* Legal Privacy / Terms Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
