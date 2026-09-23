"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";

function ContactContent() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") || undefined;

  return (
    <>
      <PageHeader
        badge="Mandate Engagement"
        title="Direct Boardroom Inquiries & Strategic Counsel"
        description="Initiate a confidential advisory mandate with FURCAK MARKETING MANAGEMENT - FZCO. Licensed under DIEZA Trade Licence No. 89324 at Dubai Silicon Oasis (DSO-IFZA)."
        breadcrumbLabel="Contact"
      />
      <div className="pb-16 sm:pb-24">
        <Contact initialService={requestedService} />
      </div>
    </>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center text-slate-400">
            Loading contact gateway...
          </div>
        }
      >
        <ContactContent />
      </Suspense>
    </PageShell>
  );
}
