import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";
import Breadcrumb from "@/components/common/Breadcrumb";
import PackageCard from "@/components/common/PackageCard";
import EnquiryModalWrapper from "./EnquiryModalWrapper";
import {
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  Sparkles,
  ShieldCheck,
  Hotel,
  ArrowRight,
  Sun,
  Compass,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: "Holiday Package Not Found",
    };
  }

  return {
    title: `${pkg.title} (${pkg.duration.days}D/${pkg.duration.nights}N)`,
    description: pkg.shortDescription,
    openGraph: {
      title: `${pkg.title} | Zenith Holidayz`,
      description: pkg.shortDescription,
      images: [{ url: pkg.coverImage }],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  // Similar packages
  const similarPackages = packages
    .filter((p) => p.id !== pkg.id && p.region === pkg.region)
    .slice(0, 3);

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Hero Header */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden bg-navy-950">
        <Image
          src={pkg.coverImage}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-gold-500/20 backdrop-blur-md border border-gold-500/30 text-gold-300 px-3 py-1 rounded-full">
              {pkg.region} Holiday
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/90 text-navy-950 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-gold-600" />
              <span>
                {pkg.duration.days} Days / {pkg.duration.nights} Nights
              </span>
            </div>
            <Link
              href={`/destinations/${pkg.destinationSlug}`}
              className="flex items-center gap-1.5 text-xs font-semibold bg-navy-900/80 backdrop-blur-md text-white/90 hover:text-gold-300 px-3 py-1 rounded-full border border-white/20 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{pkg.destinationName}</span>
            </Link>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl">
            {pkg.title}
          </h1>

          <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
            {pkg.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Holiday Packages", href: "/packages" },
            { label: pkg.destinationName, href: `/destinations/${pkg.destinationSlug}` },
            { label: pkg.title },
          ]}
        />

        {/* Two-column Layout: Content (8) + Pricing/Enquiry Sidebar (4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
          {/* Main Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy-950 pb-3 border-b border-gray-100">
                Itinerary Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-text leading-relaxed">
                {pkg.overview}
              </p>

              {/* Highlights Chips */}
              <div className="pt-4 space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-gold-600 block">
                  Itinerary Highlights:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-navy-900">
                  {pkg.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 bg-ivory p-2.5 rounded-lg border border-gray-200/60">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Day-by-Day Itinerary Accordion */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h2 className="font-display text-2xl font-bold text-navy-950">
                  Day-by-Day Schedule
                </h2>
                <span className="text-xs text-slate-text font-medium">
                  {pkg.itinerary.length} Days Planned
                </span>
              </div>

              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="relative pl-8 sm:pl-10 pb-6 border-l-2 border-gold-400/40 last:border-l-0 last:pb-0"
                  >
                    {/* Timeline Node Badge */}
                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center text-xs font-bold border-2 border-gold-400 shadow-sm">
                      {day.day}
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-navy-950">
                          {day.title}
                        </h3>
                        <span className="text-[11px] font-semibold bg-teal-50 text-teal-800 px-2.5 py-0.5 rounded-full border border-teal-200">
                          Meals: {day.meals}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-text leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-2xl p-6 border border-teal-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-teal-800 font-display text-lg font-bold pb-2 border-b border-teal-100">
                  <Check className="w-5 h-5 text-teal-700" />
                  <span>Package Inclusions</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-navy-900">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-navy-950 font-display text-lg font-bold pb-2 border-b border-gray-100">
                  <X className="w-5 h-5 text-gray-400" />
                  <span>Package Exclusions</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-text">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Accommodation & Best Season Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Hotel className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase font-bold text-slate-text block">
                    Lodging Standard:
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-navy-950">
                    {pkg.accommodationType}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase font-bold text-slate-text block">
                    Recommended Season:
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-navy-950">
                    {pkg.bestSeason}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Pricing & Quick Action (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-navy-950 rounded-2xl p-6 sm:p-8 text-white border border-gold-500/30 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold block">
                  Starting Estimate Indicator
                </span>
                <div className="text-3xl font-display font-bold text-white mt-1">
                  {pkg.startingEstimate}
                </div>
                <p className="text-[11px] text-white/60 leading-relaxed mt-2 italic">
                  {pkg.pricingNote}
                </p>
              </div>

              {/* Action Buttons via Client Modal Trigger */}
              <EnquiryModalWrapper
                destinationName={pkg.destinationName}
                packageTitle={pkg.title}
                travelType={pkg.region === "Domestic" ? "domestic" : "international"}
              />

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>100% Tailored Private Itinerary</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Delhi & Chandigarh Branch Concierge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Packages */}
        {similarPackages.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-8">
              Other {pkg.region} Journeys You May Enjoy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarPackages.map((simPkg) => (
                <PackageCard key={simPkg.id} pkg={simPkg} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
