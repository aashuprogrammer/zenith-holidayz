import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import Breadcrumb from "@/components/common/Breadcrumb";
import PackageCard from "@/components/common/PackageCard";
import {
  Calendar,
  Clock,
  Coins,
  Globe2,
  FileCheck2,
  CheckCircle2,
  Sparkles,
  MapPin,
  ArrowRight,
  Compass,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${destination.name} Holiday Packages & Luxury Itineraries`,
    description: destination.shortDescription,
    openGraph: {
      title: `${destination.name} Travel with Zenith Holidayz`,
      description: destination.shortDescription,
      images: [{ url: destination.cardImage }],
    },
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Get packages matching this destination
  const destinationPackages = packages.filter(
    (p) => p.destinationSlug === destination.slug
  );

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Hero Header */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden bg-navy-950">
        <Image
          src={destination.heroImage}
          alt={`Discover ${destination.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>
              {destination.country} • {destination.region}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {destination.name}
          </h1>

          <p className="text-base sm:text-xl text-white/85 max-w-3xl font-light italic">
            &ldquo;{destination.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Destinations", href: "/destinations" },
            { label: destination.name },
          ]}
        />

        {/* Quick Travel Essentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-1">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-gold-600 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Best Season</span>
            </span>
            <p className="text-xs sm:text-sm font-semibold text-navy-950">
              {destination.bestTimeToVisit}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-1">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-gold-600 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Ideal Duration</span>
            </span>
            <p className="text-xs sm:text-sm font-semibold text-navy-950">
              {destination.idealDuration}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-1">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-gold-600 uppercase tracking-wider">
              <Coins className="w-3.5 h-3.5" />
              <span>Currency</span>
            </span>
            <p className="text-xs sm:text-sm font-semibold text-navy-950">
              {destination.currency}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-1">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-gold-600 uppercase tracking-wider">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Visa Guidelines</span>
            </span>
            <p className="text-xs sm:text-sm font-semibold text-navy-950 truncate" title={destination.visaInfo}>
              {destination.visaInfo}
            </p>
          </div>
        </div>

        {/* Narrative & Highlights Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: Overview & Highlights (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy-950 pb-3 border-b border-gray-100">
                About Travelling in {destination.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-text leading-relaxed">
                {destination.overview}
              </p>
            </div>

            {/* Highlights Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="font-display text-xl font-bold text-navy-950">
                Signature Experiences & Highlights
              </h3>
              <ul className="space-y-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-navy-900/90">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Destination Gallery */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-navy-950">
                Photographic Glimpses of {destination.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${destination.name} landscape ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Concierge Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl p-6 sm:p-8 text-white border border-gold-500/30 shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Bespoke Concierge</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                Plan a Custom {destination.name} Holiday
              </h3>

              <p className="text-xs text-white/75 leading-relaxed">
                Connect with our senior destination specialists. We customize flight connections, 4-star and 5-star properties, private vehicle transfers, and day-by-day itineraries.
              </p>

              <div className="pt-2">
                <Link
                  href={`/plan-your-trip?destination=${encodeURIComponent(destination.name)}`}
                  className="btn-gold w-full py-3.5 text-xs uppercase font-bold tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Enquire For {destination.name}</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-white/60 space-y-1">
                <p>✓ Available from Delhi & Chandigarh Offices</p>
                <p>✓ Certified Travel Itinerary Planning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Holiday Packages */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-gold-600 block">
                Recommended Itineraries
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                Featured Packages for {destination.name}
              </h2>
            </div>
          </div>

          {destinationPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinationPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 shadow-sm max-w-xl mx-auto space-y-4">
              <Compass className="w-10 h-10 text-gold-500 mx-auto" />
              <h3 className="font-display text-xl font-bold text-navy-950">
                Custom {destination.name} Itinerary on Request
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                We craft individual private departures for {destination.name} matching your desired dates and group size. Contact our concierge to receive a customized quote.
              </p>
              <Link
                href={`/plan-your-trip?destination=${encodeURIComponent(destination.name)}`}
                className="btn-gold px-6 py-2.5 text-xs font-bold uppercase inline-flex"
              >
                Request Custom Itinerary
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
