"use client";

import React, { useState } from "react";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/common/DestinationCard";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function FeaturedDestinations() {
  const [activeTab, setActiveTab] = useState<"all" | "International" | "Domestic">("all");

  const filteredDestinations = destinations.filter((dest) => {
    if (activeTab === "all") return true;
    return dest.region === activeTab;
  });

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Global Portfolio"
          title="Featured Destinations"
          subtitle="From soaring Swiss peaks to overwater Maldivian lagoons and the royal palaces of Rajasthan, uncover iconic landscapes handcrafted for the discerning traveller."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-navy-950 text-gold-400 shadow-md"
                : "bg-white text-navy-900 border border-gray-200 hover:border-gold-400"
            }`}
          >
            All Destinations ({destinations.length})
          </button>
          <button
            onClick={() => setActiveTab("International")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === "International"
                ? "bg-navy-950 text-gold-400 shadow-md"
                : "bg-white text-navy-900 border border-gray-200 hover:border-gold-400"
            }`}
          >
            International Escapes
          </button>
          <button
            onClick={() => setActiveTab("Domestic")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === "Domestic"
                ? "bg-navy-950 text-gold-400 shadow-md"
                : "bg-white text-navy-900 border border-gray-200 hover:border-gold-400"
            }`}
          >
            Domestic Treasures (India)
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/destinations"
            className="btn-outline-gold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
          >
            <span>Explore All {destinations.length} Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
