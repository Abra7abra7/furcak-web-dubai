import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { Industries } from "@/components/Industries";

export const metadata: Metadata = {
  title: "Industry Ecosystem & Sectors | FURCAK MARKETING MANAGEMENT - FZCO",
  description:
    "Specialized B2B sector expertise across industrial manufacturing, engineering, technology, infrastructure, real estate, and cross-border trade in Dubai and the GCC.",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHeader
        badge="Industry Ecosystem"
        title="Specialized B2B Sector Expertise"
        description="We advise and execute within capital-intensive, operationally rigorous industries requiring deep commercial fluency, regulatory precision, and institutional trust."
        breadcrumbLabel="Industries"
      />
      <div className="pb-16 sm:pb-24">
        <Industries />
      </div>
    </PageShell>
  );
}
