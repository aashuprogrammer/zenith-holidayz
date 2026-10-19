"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, PhoneCall, Mail } from "lucide-react";
import EnquiryModal from "@/components/common/EnquiryModal";
import { siteConfig } from "@/config/site";

interface EnquiryModalWrapperProps {
  destinationName: string;
  packageTitle: string;
  travelType: "international" | "domestic";
}

export default function EnquiryModalWrapper({
  destinationName,
  packageTitle,
  travelType,
}: EnquiryModalWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
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

      <EnquiryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        destinationName={destinationName}
        packageTitle={packageTitle}
        travelType={travelType}
      />
    </>
  );
}
