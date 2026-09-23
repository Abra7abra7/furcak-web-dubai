import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { Leadership } from "@/components/Leadership";

export const metadata: Metadata = {
  title: "Executive Leadership | FURCAK MARKETING MANAGEMENT - FZCO",
  description:
    "Executive monograph and legal-commercial background of Jan Furcak, Founder and Managing Director of FURCAK MARKETING MANAGEMENT - FZCO in Dubai.",
};

export default function LeadershipPage() {
  return (
    <PageShell>
      <PageHeader
        badge="Executive Leadership"
        title="Institutional Experience & Commercial Direction"
        description="Founded and directed by Jan Furcak, combining legal discipline established in 2012 with over a decade of international corporate execution and Dubai market expertise."
        breadcrumbLabel="Leadership"
      />
      <div className="pb-16 sm:pb-24">
        <Leadership />
      </div>
    </PageShell>
  );
}
