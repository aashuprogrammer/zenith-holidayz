import React, { Suspense } from "react";
import { Metadata } from "next";
import PackagesClient from "@/app/packages/PackagesClient";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "All Holiday Packages | International & Domestic Vacation Itineraries",
  description:
    "Browse luxury and bespoke holiday packages handcrafted by Zenith Holidayz Private Limited. Filter by destination, trip duration, honeymoon, or family vacations.",
};

export default function PackagesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center p-8">
          <div className="flex items-center gap-3 text-navy-950 font-semibold text-sm">
            <Loader2 className="w-6 h-6 animate-spin text-gold-500" />
            <span>Loading holiday packages...</span>
          </div>
        </div>
      }
    >
      <PackagesClient />
    </Suspense>
  );
}
