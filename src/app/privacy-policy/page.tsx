import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/common/Breadcrumb";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Zenith Holidayz Private Limited",
  description:
    "Privacy Policy for Zenith Holidayz Private Limited. Details on data handling, client confidentiality, and contact channels.",
};

export default function PrivacyPolicyPage() {
  const { legalName, offices } = siteConfig;

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Client Confidentiality</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-xs sm:text-sm">
            Last Updated: October 2026 • {legalName}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        {/* Draft Notice Alert */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Draft Document Notice</span>
            <span>
              This privacy policy is a draft document provided for the operations of {legalName}. It is subject to formal legal review by company management prior to regulatory filings.
            </span>
          </div>
        </div>

        {/* Content Card */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm space-y-6 text-sm text-slate-text leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              1. Information We Collect
            </h2>
            <p>
              When you submit a trip enquiry, request a travel quotation, or communicate with our concierges, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-navy-900">
              <li>Full Name, Contact Phone Number, and Email Address</li>
              <li>Travel preferences, preferred destinations, departure dates, and party sizes</li>
              <li>Passport numbers and visa documentation details only when required for ticketing and official hotel registrations</li>
              <li>Special requirements (e.g., dietary needs, room accessibility, milestone celebrations)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              2. How We Use Your Information
            </h2>
            <p>
              The information collected is used solely to provide bespoke travel concierge services, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-navy-900">
              <li>Formulating customized day-by-day vacation itineraries</li>
              <li>Contacting you regarding your submitted travel enquiry</li>
              <li>Issuing confirmed airline reservations, rail passes, hotel vouchers, and transport services</li>
              <li>Providing emergency travel assistance during your journey</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              3. Data Protection and Confidentiality
            </h2>
            <p>
              {legalName} does not sell, rent, or trade your personal information to third-party marketing companies. Information is shared only with verified service providers (such as booked hotels, private transport operators, and airlines) strictly as necessary to execute your travel arrangements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-navy-950">
              4. Contact Our Privacy Office
            </h2>
            <p>
              For inquiries regarding personal data, updates, or deletion requests, please contact:
            </p>
            <div className="bg-ivory p-4 rounded-xl border border-gold-500/20 text-xs space-y-1 text-navy-950">
              <p className="font-bold">{legalName}</p>
              <p>Delhi Head Office: {offices.delhi.address}</p>
              <p>Email: {offices.delhi.email}</p>
              <p>Phone: {offices.delhi.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
