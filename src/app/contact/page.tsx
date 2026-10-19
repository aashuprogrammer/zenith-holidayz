import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/common/Breadcrumb";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import {
  MapPin,
  PhoneCall,
  Printer,
  Mail,
  Clock,
  Compass,
  Sparkles,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Delhi Head Office & Chandigarh Branch | Zenith Holidayz",
  description:
    "Get in touch with Zenith Holidayz Private Limited. Contact our Delhi Head Office in World Trade Centre, Connaught Place or our Chandigarh branch office.",
};

export default function ContactPage() {
  const { offices, legalName } = siteConfig;

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-gold-400" />
            <span>Connect With Us</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Contact Zenith Holidayz
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Reach out to our corporate head office in Connaught Place, New Delhi, or our regional branch in Chandigarh. We look forward to planning your next voyage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Contact Us" }]} />

        {/* Office Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Delhi Head Office Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-md hover:shadow-xl hover:border-gold-500/40 transition-all space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 block">
                  Head Office • Connaught Place
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                  {offices.delhi.name}
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 flex items-center justify-center text-gold-700">
                <Compass className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-navy-900/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Postal Address:</span>
                  <span className="text-slate-text leading-relaxed">
                    {offices.delhi.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Telephone Lines:</span>
                  <a
                    href={`tel:${offices.delhi.phoneTel}`}
                    className="text-teal-800 hover:text-teal-900 font-semibold"
                  >
                    {offices.delhi.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Printer className="w-5 h-5 text-slate-text/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Office Fax:</span>
                  <span className="text-slate-text">{offices.delhi.fax}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Enquiry Email:</span>
                  <a
                    href={`mailto:${offices.delhi.email}`}
                    className="text-gold-700 hover:text-gold-800 font-semibold underline underline-offset-2"
                  >
                    {offices.delhi.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-text/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Visiting Hours:</span>
                  <span className="text-slate-text">{offices.delhi.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chandigarh Branch Office Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-md hover:shadow-xl hover:border-gold-500/40 transition-all space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-700 block">
                  Regional Branch • Sector-55
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                  {offices.chandigarh.name}
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 flex items-center justify-center text-teal-800">
                <Building2 className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-navy-900/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Postal Address:</span>
                  <span className="text-slate-text leading-relaxed">
                    {offices.chandigarh.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Telephone Lines:</span>
                  <a
                    href={`tel:${offices.chandigarh.phoneTel}`}
                    className="text-teal-800 hover:text-teal-900 font-semibold"
                  >
                    {offices.chandigarh.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Printer className="w-5 h-5 text-slate-text/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Office Fax:</span>
                  <span className="text-slate-text">{offices.chandigarh.fax}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">General Email:</span>
                  <a
                    href={`mailto:${offices.chandigarh.email}`}
                    className="text-teal-700 hover:text-teal-800 font-semibold underline underline-offset-2"
                  >
                    {offices.chandigarh.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-text/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-navy-950">Visiting Hours:</span>
                  <span className="text-slate-text">{offices.chandigarh.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Enquiry Form Container */}
        <section className="mt-20">
          <div className="max-w-4xl mx-auto">
            <EnquiryForm />
          </div>
        </section>
      </div>
    </div>
  );
}
