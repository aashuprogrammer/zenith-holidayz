import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/common/Breadcrumb";
import {
  Compass,
  MapPin,
  PhoneCall,
  Mail,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
  Printer,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Zenith Holidayz Private Limited",
  description:
    "Learn about Zenith Holidayz Private Limited. We craft bespoke international and domestic travel itineraries with registered offices in New Delhi and Chandigarh.",
};

export default function AboutPage() {
  const { offices, legalName, description } = siteConfig;

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Company Profile</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            About {legalName}
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Dedicated to creating thoughtful, bespoke travel journeys across the world’s most captivating landscapes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "About Us" }]} />

        {/* Narrative Section */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-gold-600 block">
                Our Foundation & Vision
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 leading-tight">
                Crafting Meaningful Journeys with Precision & Care
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-text leading-relaxed">
              At <strong className="text-navy-950 font-semibold">{legalName}</strong>, we believe travel should transcend standard commercial packages. True discovery occurs when every day of your itinerary is thoughtfully calibrated to your preferences, comfort, and rhythm.
            </p>

            <p className="text-sm sm:text-base text-slate-text leading-relaxed">
              With full-service operations centered in New Delhi and Chandigarh, our travel specialists coordinate international expeditions to Europe, Southeast Asia, the Emirates, and island atolls alongside extraordinary domestic circuits spanning royal Rajasthan, Jammu & Kashmir, and Kerala.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-navy-900">
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Dedicated Travel Specialists</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Transparent Verified Quoting</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Handpicked 4-Star & 5-Star Stays</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Full Logistics & Chauffeur Coordination</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30 bg-navy-950">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
              alt="Zenith Holidayz Alpine Inspiration"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                Our Promise
              </span>
              <p className="text-sm font-display font-medium leading-relaxed">
                &ldquo;Transforming your holiday aspirations into seamless, unforgettable memories.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Our Planning Approach */}
        <section className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-gold-600 block">
              Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              Our Travel Planning Approach
            </h2>
            <p className="text-xs sm:text-sm text-slate-text">
              How we take your initial vacation idea from concept to flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 relative">
              <span className="text-4xl font-display font-bold text-gold-500/30">01</span>
              <h3 className="font-display text-lg font-bold text-navy-950">
                Consultation & Discovery
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                We listen closely to your destination wishes, departure timeline, party composition, and accommodation style.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 relative">
              <span className="text-4xl font-display font-bold text-gold-500/30">02</span>
              <h3 className="font-display text-lg font-bold text-navy-950">
                Itinerary Architecture
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                We craft a day-by-day plan balancing marquee sightseeing with leisurely downtime, selecting prime hotels and private transfers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 relative">
              <span className="text-4xl font-display font-bold text-gold-500/30">03</span>
              <h3 className="font-display text-lg font-bold text-navy-950">
                Refinement & Confirmation
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                We adjust hotel categories, train passes, or excursion slots based on your review until the journey fits you perfectly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 relative">
              <span className="text-4xl font-display font-bold text-gold-500/30">04</span>
              <h3 className="font-display text-lg font-bold text-navy-950">
                Ongoing Assistance
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                Our Delhi and Chandigarh teams prepare all vouchers, flight tickets, and visa guidance, remaining reachable while you travel.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Offices Section */}
        <section className="mt-20 sm:mt-28 bg-navy-950 rounded-3xl p-8 sm:p-14 text-white border border-gold-500/30">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-gold-400 block">
              Corporate Presence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Our Registered Offices
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Connect directly with our corporate team in New Delhi or our regional branch in Chandigarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delhi Head Office */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-gold-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-display text-xl font-bold">
                  {offices.delhi.name}
                </span>
                <span className="text-[10px] bg-gold-500/20 text-gold-300 font-semibold px-2 py-0.5 rounded uppercase">
                  Head Office
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{offices.delhi.address}</span>
              </p>
              <div className="space-y-1.5 text-xs text-white/80 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                  <a href={`tel:${offices.delhi.phoneTel}`} className="hover:text-gold-400 transition-colors">
                    Phone: {offices.delhi.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Fax: {offices.delhi.fax}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <a href={`mailto:${offices.delhi.email}`} className="text-gold-400 hover:underline">
                    {offices.delhi.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Chandigarh Branch Office */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-gold-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-display text-xl font-bold">
                  {offices.chandigarh.name}
                </span>
                <span className="text-[10px] bg-teal-500/20 text-teal-300 font-semibold px-2 py-0.5 rounded uppercase">
                  Branch Office
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{offices.chandigarh.address}</span>
              </p>
              <div className="space-y-1.5 text-xs text-white/80 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                  <a href={`tel:${offices.chandigarh.phoneTel}`} className="hover:text-gold-400 transition-colors">
                    Phone: {offices.chandigarh.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Fax: {offices.chandigarh.fax}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <a href={`mailto:${offices.chandigarh.email}`} className="text-gold-400 hover:underline">
                    {offices.chandigarh.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/plan-your-trip"
            className="btn-gold px-9 py-4 text-xs sm:text-sm uppercase font-bold tracking-wider inline-flex items-center gap-2"
          >
            <span>Start Planning With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
