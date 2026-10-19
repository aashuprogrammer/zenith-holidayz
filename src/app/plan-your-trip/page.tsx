import React, { Suspense } from "react";
import { Metadata } from "next";
import PlanYourTripClient from "@/app/plan-your-trip/PlanYourTripClient";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan Your Trip | Bespoke Vacation Planning | Zenith Holidayz",
  description:
    "Design your customized international or domestic holiday with Zenith Holidayz Private Limited. Submit your preferred dates, budget, and destinations for a tailored proposal.",
};

export default function PlanYourTripPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center p-8">
          <div className="flex items-center gap-3 text-navy-950 font-semibold text-sm">
            <Loader2 className="w-6 h-6 animate-spin text-gold-500" />
            <span>Loading trip planning concierge...</span>
          </div>
        </div>
      }
    >
      <PlanYourTripClient />
    </Suspense>
  );
}
