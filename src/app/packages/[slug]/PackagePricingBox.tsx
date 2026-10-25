"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, PhoneCall, Mail, Coins } from "lucide-react";
import EnquiryModal from "@/components/common/EnquiryModal";
import CurrencySelector from "@/components/common/CurrencySelector";
import { siteConfig } from "@/config/site";
import { useCurrency } from "@/context/CurrencyContext";

interface PackagePricingBoxProps {
  startingPriceINR?: number;
  defaultEstimate: string;
  pricingNote: string;
  destinationName: string;
  packageTitle: string;
  travelType: "international" | "domestic";
}

export default function PackagePricingBox({
  startingPriceINR,
  defaultEstimate,
  pricingNote,
  destinationName,
  packageTitle,
  travelType,
}: PackagePricingBoxProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { formatEstimate, currencyInfo } = useCurrency();

  const displayPrice = startingPriceINR
    ? formatEstimate(startingPriceINR)
    : defaultEstimate;

  return (
    <>
      <div className="space-y-4">
        {/* Currency Switcher & Starting Indicator Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1.5">
            <Coins className="w-3.5 h-3.5 text-gold-400" />
            <span>Pricing Estimate</span>
          </span>
          <CurrencySelector variant="dropdown" />
        </div>

        <div>
          <div className="text-3xl font-display font-bold text-white">
            {displayPrice}
          </div>
          <div className="text-[11px] text-gold-300/80 font-medium mt-1">
            Displayed in {currencyInfo.label}
          </div>
          <p className="text-[11px] text-white/60 leading-relaxed mt-2 italic">
            {pricingNote}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-gold w-full py-4 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Enquire For This Package</span>
          </button>

          <Link
            href={`/plan-your-trip?destination=${encodeURIComponent(destinationName)}&package=${encodeURIComponent(packageTitle)}`}
            className="w-full py-3 rounded-xl border border-white/20 hover:border-gold-400 hover:bg-white/5 transition-all text-xs font-semibold uppercase text-center block text-white/90"
          >
            Open Custom Trip Planner
          </Link>
        </div>

        <div className="pt-2 flex flex-col gap-2 text-xs text-white/60">
          <a
            href={`tel:${siteConfig.offices.delhi.phoneTel}`}
            className="hover:text-gold-400 transition-colors flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
            <span>Call Delhi: {siteConfig.offices.delhi.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${siteConfig.offices.delhi.email}`}
            className="hover:text-gold-400 transition-colors flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span>Email: {siteConfig.offices.delhi.email}</span>
          </a>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        destinationName={destinationName}
        packageTitle={packageTitle}
        travelType={travelType}
      />
    </>
  );
}
