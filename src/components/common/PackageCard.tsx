"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HolidayPackage } from "@/data/packages";
import { Clock, MapPin, Check, ArrowRight, Calendar, Sparkles } from "lucide-react";
import EnquiryModal from "@/components/common/EnquiryModal";

interface PackageCardProps {
  pkg: HolidayPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between">
        {/* Top Image Section */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
          <Image
            src={pkg.coverImage}
            alt={pkg.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-navy-950/85 backdrop-blur-md text-gold-300 px-2.5 py-1 rounded-full border border-gold-500/30">
              {pkg.region}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-semibold bg-white/90 backdrop-blur-md text-navy-950 px-2.5 py-1 rounded-full shadow-sm">
              <Clock className="w-3 h-3 text-gold-600" />
              <span>
                {pkg.duration.days}D / {pkg.duration.nights}N
              </span>
            </div>
          </div>

          {/* Bottom Destination Tag on Image */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 text-xs text-white/90 font-medium">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>{pkg.destinationName}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <Link href={`/packages/${pkg.slug}`} className="block group-hover:text-teal-700 transition-colors">
              <h3 className="font-display text-lg sm:text-xl font-bold text-navy-950 leading-snug line-clamp-2">
                {pkg.title}
              </h3>
            </Link>

            <p className="text-xs text-slate-text line-clamp-2 leading-relaxed">
              {pkg.shortDescription}
            </p>
          </div>

          {/* Inclusions Highlights Preview */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-text/70 block">
              Package Inclusions:
            </span>
            <ul className="space-y-1 text-xs text-navy-900/80">
              {pkg.inclusions.slice(0, 3).map((inc, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] line-clamp-1">
                  <Check className="w-3 h-3 text-teal-700 shrink-0 mt-0.5" />
                  <span className="truncate">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Actions */}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-text block">
                  Starting Indicator
                </span>
                <span className="text-base sm:text-lg font-bold text-navy-950">
                  {pkg.startingEstimate}
                </span>
              </div>
              <span className="text-[10px] text-slate-text/70 italic text-right max-w-[120px]">
                Twin sharing basis
              </span>
            </div>

            {/* Buttons: View Details & Enquire Now */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href={`/packages/${pkg.slug}`}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold text-center border border-navy-950/20 text-navy-950 hover:bg-navy-950 hover:text-white transition-all flex items-center justify-center gap-1"
              >
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-gold py-2.5 px-3 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1 cursor-pointer"
              >
                <Calendar className="w-3 h-3" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        destinationName={pkg.destinationName}
        packageTitle={pkg.title}
        travelType={pkg.region === "Domestic" ? "domestic" : "international"}
      />
    </>
  );
}
