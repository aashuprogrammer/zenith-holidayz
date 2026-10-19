"use client";

import React, { useState } from "react";
import Link from "next/link";
import { packages, PackageCategory } from "@/data/packages";
import PackageCard from "@/components/common/PackageCard";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { label: "All Packages", value: "all" },
    { label: "International", value: "international" },
    { label: "Domestic", value: "domestic" },
    { label: "Honeymoon", value: "honeymoon" },
    { label: "Family Holidays", value: "family" },
    { label: "Luxury Escapes", value: "luxury" },
    { label: "Cultural", value: "cultural" },
  ];

  const filteredPackages = packages.filter((pkg) => {
    if (activeCategory === "all") return true;
    return pkg.categories.includes(activeCategory as PackageCategory);
  });

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Signature Itineraries"
          title="Holiday Packages & Journeys"
          subtitle="Explore meticulously balanced vacations designed by senior travel specialists. Every itinerary includes premium lodging, private transfers, and handpicked local experiences."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-start lg:justify-center gap-2 mb-12 overflow-x-auto pb-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-navy-950 text-gold-400 shadow-md"
                  : "bg-ivory text-navy-900 border border-gray-200 hover:border-gold-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-8 text-center text-xs text-slate-text/70 italic">
          * Starting estimates are sample indicators per person on twin-sharing basis. Exact pricing is verified based on your chosen travel dates, flight class & accommodation preferences.
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href="/packages"
            className="btn-gold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
          >
            <span>View All Packages with Full Filters</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
