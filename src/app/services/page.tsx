import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Advisory Capabilities & Core Pillars | FURCAK MARKETING MANAGEMENT - FZCO",
  description:
    "Comprehensive B2B advisory pillars: Marketing Management, Business Development, Project Development Consultancy, International Market Development, Strategic Partnerships, and Commercial Coordination.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        badge="Core Competencies"
        title="Six Pillars of Enterprise Value Creation"
        description="Delivering holistic strategic, commercial, and project coordination frameworks tailored for institutional and enterprise clients across the UAE, GCC, and European corridors."
        breadcrumbLabel="Services"
      />
      <div className="pb-16 sm:pb-24">
        <Services />
      </div>
    </PageShell>
  );
}
