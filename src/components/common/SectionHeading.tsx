import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 ${
            dark
              ? "bg-gold-500/20 text-gold-300 border border-gold-500/30"
              : "bg-gold-500/15 text-gold-700 border border-gold-500/30"
          }`}
        >
          <Sparkles className="w-3 h-3 text-gold-500" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? "text-white/70" : "text-slate-text"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Gold Underline Bar */}
      <div
        className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
