"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { packages, HolidayPackage, PackageCategory } from "@/data/packages";
import PackageCard from "@/components/common/PackageCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Search, Filter, RotateCcw, Compass, Clock, MapPin } from "lucide-react";

export default function PackagesClient() {
  const searchParams = useSearchParams();

  // Initial params from query string if directed from HeroSearchBox
  const initialDestination = searchParams.get("destination") || "";
  const initialCategory = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState(initialDestination);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedRegion, setSelectedRegion] = useState<"all" | "International" | "Domestic">("all");
  const [durationFilter, setDurationFilter] = useState<"all" | "short" | "medium" | "long">("all");
  const [sortBy, setSortBy] = useState<"featured" | "duration-asc" | "duration-desc">("featured");

  const categories = [
    { label: "All Collections", value: "all" },
    { label: "International", value: "international" },
    { label: "Domestic", value: "domestic" },
    { label: "Honeymoon", value: "honeymoon" },
    { label: "Family", value: "family" },
    { label: "Luxury", value: "luxury" },
    { label: "Adventure", value: "adventure" },
    { label: "Cultural", value: "cultural" },
  ];

  // Filter & sort logic
  const filteredPackages = useMemo(() => {
    let result = [...packages];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.destinationName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) =>
        p.categories.includes(selectedCategory as PackageCategory)
      );
    }

    // Region filter
    if (selectedRegion !== "all") {
      result = result.filter((p) => p.region === selectedRegion);
    }

    // Duration filter
    if (durationFilter === "short") {
      result = result.filter((p) => p.duration.days <= 5);
    } else if (durationFilter === "medium") {
      result = result.filter((p) => p.duration.days >= 6 && p.duration.days <= 8);
    } else if (durationFilter === "long") {
      result = result.filter((p) => p.duration.days >= 9);
    }

    // Sorting
    if (sortBy === "duration-asc") {
      result.sort((a, b) => a.duration.days - b.duration.days);
    } else if (sortBy === "duration-desc") {
      result.sort((a, b) => b.duration.days - a.duration.days);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedRegion, durationFilter, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedRegion("all");
    setDurationFilter("all");
    setSortBy("featured");
  };

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Tailored Journeys</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Curated Holiday Packages
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover complete travel itineraries handcrafted by Zenith Holidayz Private Limited. Use the filters below to browse by vacation style, duration, and destination.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Holiday Packages" }]} />

        {/* Filters & Search Control Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-md mt-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input (5 cols) */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destination (e.g. Switzerland, Bali, Kashmir)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>

            {/* Region Filter (2 cols) */}
            <div className="md:col-span-3">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                <option value="all">All Regions (Intl & Domestic)</option>
                <option value="International">International Only</option>
                <option value="Domestic">Domestic (India) Only</option>
              </select>
            </div>

            {/* Duration Filter (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                <option value="all">Any Duration</option>
                <option value="short">1 – 5 Days</option>
                <option value="medium">6 – 8 Days</option>
                <option value="long">9+ Days</option>
              </select>
            </div>

            {/* Sort Options (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                <option value="featured">Featured First</option>
                <option value="duration-asc">Duration: Short to Long</option>
                <option value="duration-desc">Duration: Long to Short</option>
              </select>
            </div>
          </div>

          {/* Category Horizontal Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-gray-100">
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-text mr-2 shrink-0">
              Style:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-navy-950 text-gold-400 shadow-sm"
                    : "bg-gray-100 text-navy-900 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between mt-8 mb-6">
          <p className="text-xs sm:text-sm text-slate-text">
            Showing <span className="font-bold text-navy-950">{filteredPackages.length}</span> curated holiday packages
          </p>

          {(searchQuery || selectedCategory !== "all" || selectedRegion !== "all" || durationFilter !== "all") && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-semibold text-gold-700 hover:text-gold-800 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Package Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 max-w-lg mx-auto space-y-4 my-8">
            <Compass className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-display text-xl font-bold text-navy-950">
              No matching packages found
            </h3>
            <p className="text-xs text-slate-text leading-relaxed">
              We couldn’t find an itinerary matching your current search parameters. Our concierge can craft an entirely custom package for your requirements.
            </p>
            <button
              onClick={handleResetFilters}
              className="btn-gold px-6 py-2.5 text-xs font-bold uppercase inline-flex cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Transparency Note */}
        <div className="mt-12 p-4 bg-white rounded-xl border border-gold-500/20 text-xs text-slate-text text-center max-w-3xl mx-auto">
          <p className="font-medium text-navy-950 mb-1">
            Zenith Holidayz Transparent Pricing Commitment
          </p>
          <p className="text-[11px] leading-relaxed">
            All prices displayed are sample verified starting estimates based on twin-sharing room accommodation and standard season travel. Our travel concierges provide formal verified quotes tailored to your chosen airline, hotel category, and travel dates.
          </p>
        </div>
      </div>
    </div>
  );
}
