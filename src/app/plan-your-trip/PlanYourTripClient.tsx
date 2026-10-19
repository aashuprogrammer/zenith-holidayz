"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Compass, Sparkles, ShieldCheck, PhoneCall, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function PlanYourTripClient() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "";
  const holidayType = searchParams.get("holidayType") || "Luxury & Bespoke";
  const packageParam = searchParams.get("package") || "";

  const initialDest = packageParam ? `${destination} (${packageParam})` : destination;

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Dedicated Travel Concierge</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Plan Your Journey
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Tell us about your dream destination, dates, and party size. Our senior destination specialists will handcraft an exceptional itinerary tailored to you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Plan Your Trip" }]} />

        {/* 3 Step Process Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-700 font-bold flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h3 className="font-display font-bold text-navy-950 text-sm">
                Share Preferences
              </h3>
              <p className="text-xs text-slate-text mt-1 leading-relaxed">
                Submit the enquiry form below with your destinations, preferred dates, and party size.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-800 font-bold flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h3 className="font-display font-bold text-navy-950 text-sm">
                Bespoke Proposal
              </h3>
              <p className="text-xs text-slate-text mt-1 leading-relaxed">
                A dedicated senior travel planner reviews your dates and curates a customized proposal.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy-950/10 text-navy-950 font-bold flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h3 className="font-display font-bold text-navy-950 text-sm">
                Seamless Travel
              </h3>
              <p className="text-xs text-slate-text mt-1 leading-relaxed">
                We coordinate all bookings, private transfers, vouchers, and remain reachable throughout.
              </p>
            </div>
          </div>
        </div>

        {/* The Form */}
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            initialDestination={initialDest}
            initialHolidayType={holidayType}
          />
        </div>

        {/* Support Phone Card */}
        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl p-6 border border-gold-500/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PhoneCall className="w-6 h-6 text-gold-600 shrink-0" />
            <div>
              <span className="font-bold text-navy-950 text-xs sm:text-sm block">
                Prefer to Speak Directly With a Concierge?
              </span>
              <span className="text-xs text-slate-text">
                Call our Delhi office ({siteConfig.offices.delhi.phoneDisplay}) or Chandigarh branch ({siteConfig.offices.chandigarh.phoneDisplay}).
              </span>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.offices.delhi.phoneTel}`}
            className="btn-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
