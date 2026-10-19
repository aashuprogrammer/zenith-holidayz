import React from "react";
import { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageCard from "@/components/common/PackageCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { Users, Sparkles, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Family Holiday Packages | Multi-Generation Vacations & Adventures",
  description:
    "Stress-free family holiday packages handcrafted with balanced pacing, spacious accommodations, and activities for all generations.",
};

export default function FamilyPackagesPage() {
  const familyPackages = packages.filter((p) => p.categories.includes("family"));

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Users className="w-3.5 h-3.5 text-gold-400" />
            <span>Family & Multi-Gen Travel</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Family Holiday Packages
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Effortless vacations crafted with spacious family suites, relaxing private transit, and unforgettable shared moments from Dubai to Kashmir.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Packages", href: "/packages" },
            { label: "Family Holidays" },
          ]}
        />

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {familyPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
