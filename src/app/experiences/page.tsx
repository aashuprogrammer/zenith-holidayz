import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import Breadcrumb from "@/components/common/Breadcrumb";
import {
  Compass,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Sparkles,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Curated Travel Experiences | Luxury Travel Styles by Zenith Holidayz",
  description:
    "Discover unique ways to travel: romantic honeymoons, alpine mountain adventures, island escapes, private charters, and cultural exploration.",
};

export default function ExperiencesPage() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Curated Travel Philosophies</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Ways to Experience the World
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Travel is deeply personal. We design each expedition around how you desire to feel—whether secluded upon turquoise lagoons, elevated by alpine peaks, or immersed in ancient culture.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Experiences" }]} />

        {/* Quick Nav Chips */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 mb-8">
          {experiences.map((exp) => (
            <a
              key={exp.id}
              href={`#${exp.slug}`}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-gray-200 text-navy-950 hover:border-gold-500 hover:text-gold-700 transition-colors whitespace-nowrap shadow-sm"
            >
              {exp.title}
            </a>
          ))}
        </div>

        {/* Detailed Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <section
                key={exp.id}
                id={exp.slug}
                className="scroll-mt-24 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={exp.heroImage}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-xs sm:text-sm font-medium italic">
                        &ldquo;{exp.tagline}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Text Details Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-xs uppercase font-bold tracking-wider text-gold-600 block">
                        Signature Travel Style
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950">
                        {exp.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-text leading-relaxed">
                      {exp.fullDescription}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs uppercase font-bold tracking-wider text-navy-950 block">
                        Key Inclusions & Highlights:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-navy-900/90">
                        {exp.keyHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Top Destinations */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-slate-text">
                        Ideal Destinations:
                      </span>
                      {exp.idealDestinations.map((dest, i) => (
                        <span
                          key={i}
                          className="bg-ivory border border-gold-500/30 px-2.5 py-1 rounded-md text-navy-950 font-medium text-[11px]"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/plan-your-trip?holidayType=${encodeURIComponent(exp.title)}`}
                        className="btn-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Plan This Experience</span>
                      </Link>

                      <Link
                        href="/packages"
                        className="btn-outline-gold px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5"
                      >
                        <span>View Matching Packages</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
