import React from "react";
import { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageCard from "@/components/common/PackageCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { Heart, Sparkles, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Honeymoon Packages & Romantic Escapes | Zenith Holidayz",
  description:
    "Intimate honeymoon tour packages designed for romance. Overwater villas in Maldives, jungle retreats in Bali, and romantic chalets in the Swiss Alps.",
};

export default function HoneymoonPackagesPage() {
  const honeymoonPackages = packages.filter((p) =>
    p.categories.includes("honeymoon")
  );

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 text-gold-400" />
            <span>Romantic Celebrations</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Curated Honeymoon Packages
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Begin married life in timeless splendor. Indulge in private infinity pool villas, candlelit sandbank dinners, couples&apos; spa rituals, and sunset catamaran cruises.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Packages", href: "/packages" },
            { label: "Honeymoon Packages" },
          ]}
        />

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {honeymoonPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
