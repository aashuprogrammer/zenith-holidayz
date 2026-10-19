import React from "react";
import { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageCard from "@/components/common/PackageCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { Plane, Compass, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "International Holiday Packages | Bespoke Worldwide Vacations",
  description:
    "Explore luxury international holiday packages to Switzerland, Bali, Dubai, Maldives, Thailand, and Japan with Zenith Holidayz Private Limited.",
};

export default function InternationalPackagesPage() {
  const intlPackages = packages.filter((p) => p.region === "International");

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Plane className="w-3.5 h-3.5 text-gold-400" />
            <span>Worldwide Escapes</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            International Holiday Packages
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From first-class panoramic rail through the Swiss Alps to private overwater villas in the Maldives and futuristic skyline opulence in Dubai.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Packages", href: "/packages" },
            { label: "International Holidays" },
          ]}
        />

        {/* Advisory Card */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-gold-500/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-navy-950">
                International Visa & Flight Coordination
              </h3>
              <p className="text-xs text-slate-text mt-0.5">
                Our specialists provide comprehensive documentation guidance for Schengen, UK, UAE, and Asian visas alongside verified airline connections.
              </p>
            </div>
          </div>
          <Link
            href="/plan-your-trip"
            className="btn-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0"
          >
            Custom Visa & Trip Plan
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {intlPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
