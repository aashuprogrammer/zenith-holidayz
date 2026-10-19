import React from "react";
import { Metadata } from "next";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/common/DestinationCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";
import { Compass, Sparkles, MapPin, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore World Destinations | Curated International & Domestic Travel",
  description:
    "Explore iconic travel destinations across the globe with Zenith Holidayz Private Limited. From the Swiss Alps to Bali's rainforests and royal Rajasthan.",
};

export default function DestinationsPage() {
  const international = destinations.filter((d) => d.region === "International");
  const domestic = destinations.filter((d) => d.region === "Domestic");

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Worldwide Portfolio</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Curated Global Destinations
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Handpicked escapes spanning pristine European peaks, tropical Indian Ocean atolls, and the timeless regal heritage of India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Destinations" }]} />

        {/* International Section */}
        <section className="mt-10">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-gold-600 block">
                Worldwide Escapes
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                International Destinations
              </h2>
            </div>
            <span className="text-xs text-slate-text bg-white px-3 py-1 rounded-full border border-gray-200">
              {international.length} Iconic Countries
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {international.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </section>

        {/* Domestic Treasures Section */}
        <section className="mt-16 sm:mt-24">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-teal-700 block">
                Incredible India
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                Domestic Treasures
              </h2>
            </div>
            <span className="text-xs text-slate-text bg-white px-3 py-1 rounded-full border border-gray-200">
              {domestic.length} Regal Regions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {domestic.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </section>

        {/* Custom Destination Banner */}
        <div className="mt-20 bg-gradient-to-r from-navy-950 to-navy-900 rounded-2xl p-8 sm:p-12 text-white border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Looking for a Destination Not Listed Above?
            </h3>
            <p className="text-xs sm:text-sm text-white/75 max-w-xl">
              Zenith Holidayz arranges bespoke private journeys to Singapore, Vietnam, Australia, New Zealand, the United Kingdom, Scandinavia, and beyond.
            </p>
          </div>
          <Link
            href="/plan-your-trip"
            className="btn-gold px-8 py-3.5 text-xs uppercase font-bold tracking-wider whitespace-nowrap shadow-lg shrink-0"
          >
            <span>Request Custom Destination</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
