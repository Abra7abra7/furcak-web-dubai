import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { Approach } from "@/components/Approach";

export const metadata: Metadata = {
  title: "Advisory Methodology & Approach | FURCAK MARKETING MANAGEMENT - FZCO",
  description:
    "Structured 5-stage advisory approach: Identify Opportunities, Develop Strategy, Connect Partners, Coordinate Projects, and Expand Markets under DIEZA compliance standards.",
};

export default function ApproachPage() {
  return (
    <PageShell>
      <PageHeader
        badge="Execution Methodology"
        title="Disciplined Five-Stage Strategic Roadmap"
        description="From initial market intelligence to compound enterprise growth, we apply a methodical framework ensuring risk governance, legal precision, and commercial predictability."
        breadcrumbLabel="Approach"
      />
      <div className="pb-16 sm:pb-24">
        <Approach />
      </div>
    </PageShell>
  );
}
