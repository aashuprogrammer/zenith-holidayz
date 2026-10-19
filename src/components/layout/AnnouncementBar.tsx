"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Sparkles, X, PhoneCall, Mail } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const { announcement, offices } = siteConfig;

  if (!announcement.enabled || !isVisible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="bg-navy-950 text-ivory border-b border-gold-500/20 text-xs py-2 px-4 relative z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Seasonal announcement */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 bg-gold-500/20 text-gold-300 font-semibold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider border border-gold-500/30">
            <Sparkles className="w-2.5 h-2.5 text-gold-400" />
            {announcement.badge}
          </span>
          <span className="text-white/85 font-normal tracking-wide">
            {announcement.text}
          </span>
          {announcement.linkText && (
            <Link
              href={announcement.linkHref || "/plan-your-trip"}
              className="text-gold-400 hover:text-gold-300 underline underline-offset-2 font-medium transition-colors ml-1 hidden md:inline"
            >
              {announcement.linkText} →
            </Link>
          )}
        </div>

        {/* Right: Quick contact links for Delhi & Chandigarh */}
        <div className="flex items-center gap-4 text-[11px] text-white/70">
          <a
            href={`tel:${offices.delhi.phoneTel}`}
            className="hidden lg:flex items-center gap-1 hover:text-gold-400 transition-colors"
            title="Delhi Office"
          >
            <PhoneCall className="w-3 h-3 text-gold-400" />
            <span>Delhi: {offices.delhi.phoneDisplay}</span>
          </a>
          <span className="text-white/20 hidden lg:inline">|</span>
          <a
            href={`mailto:${offices.delhi.email}`}
            className="flex items-center gap-1 hover:text-gold-400 transition-colors"
            title="Direct Email"
          >
            <Mail className="w-3 h-3 text-gold-400" />
            <span>{offices.delhi.email}</span>
          </a>

          {/* Dismiss button */}
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="text-white/50 hover:text-white transition-colors ml-2 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
