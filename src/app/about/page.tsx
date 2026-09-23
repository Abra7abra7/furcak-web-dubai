import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About Us | FURCAK MARKETING MANAGEMENT - FZCO",
  description:
    "Corporate Profile, DIEZA Licensing, Mission, Vision, and Dubai Silicon Oasis (DSO-IFZA) Free Zone Advantages of FURCAK MARKETING MANAGEMENT - FZCO.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        badge="Corporate Profile"
        title="Institutional Advisory & UAE Corporate Stature"
        description="Operating from the Dubai Silicon Oasis free zone under DIEZA authority, FURCAK bridges cross-border ambition with practical Middle Eastern execution."
        breadcrumbLabel="About Us"
      />
      <div className="pb-16 sm:pb-24">
        <About />
      </div>
    </PageShell>
  );
}
