import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/common/Breadcrumb";
import { FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Zenith Holidayz Private Limited",
  description:
    "Terms and Conditions governing holiday bookings, custom itineraries, and concierge services with Zenith Holidayz Private Limited.",
};

export default function TermsAndConditionsPage() {
  const { legalName, offices } = siteConfig;

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-gold-400" />
            <span>Booking Guidelines</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-white/70 text-xs sm:text-sm">
            Effective: October 2026 • {legalName}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Terms and Conditions" }]} />

        {/* Draft Notice Alert */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Draft Terms Notice</span>
            <span>
              These terms and conditions are draft provisions provided for {legalName}. All booking agreements issued to travelers will include specific service contracts, payment schedules, and airline-specific cancellation policies.
            </span>
          </div>
        </div>

        {/* Content Card */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm space-y-6 text-sm text-slate-text leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              1. Quotations and Itinerary Proposals
            </h2>
            <p>
              All sample package rates and estimates presented on this website are indicative starting figures based on standard twin-sharing accommodation and current prevailing seasonal tariffs. Formal pricing is finalized only upon the verification of exact travel dates, flight schedules, and confirmed hotel room availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              2. Bookings, Payments, and Confirmation
            </h2>
            <p>
              A booking is deemed confirmed only once the required initial deposit has been received by {legalName} and an official travel confirmation voucher has been issued. Balance payments must be settled in accordance with the timeline stipulated on your specific booking invoice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              3. Passports, Visas, and Health Regulations
            </h2>
            <p>
              It is the primary responsibility of each international traveler to hold a passport valid for at least 6 months beyond the intended date of return, alongside valid visas, travel insurance, and required entry permits. {legalName} provides advisory guidance but is not liable for border or consular decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              4. Cancellations and Amendments
            </h2>
            <p>
              Cancellation requests must be submitted in writing to our designated email addresses ({offices.delhi.email} or {offices.chandigarh.email}). Cancellation fees depend on airline fare rules, hotel non-refundable booking deadlines, and seasonal peak policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              5. Governing Law and Jurisdiction
            </h2>
            <p>
              Any legal disputes arising out of services provided by {legalName} shall be governed exclusively by the laws of India and subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
