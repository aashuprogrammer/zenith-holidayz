import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CtaBanner() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden text-white">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2000&q=80"
          alt="Bespoke Luxury Travel with Zenith Holidayz"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/70" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/80 border border-gold-500/40 text-gold-300 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Bespoke Travel Planning</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Let’s Plan Your Next Journey.
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Share your desired destinations, dates, and preferences with our dedicated travel concierges. We will tailor every flight, chalet, private boat, and excursion to match your vision.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/plan-your-trip"
            className="btn-gold px-9 py-4 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-2xl w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Start Planning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${siteConfig.offices.delhi.phoneTel}`}
            className="px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold text-white border border-white/30 hover:border-gold-400 hover:bg-white/10 transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            <span>Speak with a Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
}
