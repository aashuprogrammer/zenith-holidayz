import React from "react";
import { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageCard from "@/components/common/PackageCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { MapPin, Compass, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Domestic Holiday Packages | Incredible India Tours & Royal Heritage",
  description:
    "Discover the beauty of India with Zenith Holidayz Private Limited. Kashmir houseboats, royal Rajasthan palace stays, and serene Kerala backwaters.",
};

export default function DomesticPackagesPage() {
  const domesticPackages = packages.filter((p) => p.region === "Domestic");

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>Incredible India</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Domestic Holiday Packages
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Experience the royal majesty of Rajasthan, tranquil cedar houseboats in Kashmir, and misty tea hill sanctuaries in Kerala.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Packages", href: "/packages" },
            { label: "Domestic Holidays" },
          ]}
        />

        {/* Advisory Card */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-teal-500/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-navy-950">
                Chauffeur Driven Private Touring
              </h3>
              <p className="text-xs text-slate-text mt-0.5">
                Every domestic itinerary features verified premium private vehicles (Innova Crysta / Luxury SUVs) with vetted chauffeurs and all interstate permits included.
              </p>
            </div>
          </div>
          <Link
            href="/plan-your-trip"
            className="btn-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0"
          >
            Plan Domestic Holiday
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {domesticPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
