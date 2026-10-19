import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Shield, Sparkles } from "lucide-react";
import HeroSearchBox from "@/components/home/HeroSearchBox";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-navy-950 pt-20 pb-16">
      {/* Background Cinematic Destination Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2100&q=85"
          alt="Luxury Swiss Alpine Valley at Sunrise - Zenith Holidayz"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />

        {/* Sophisticated Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
      </div>

      {/* Floating Accent Ring */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full text-center lg:text-left py-12">
        <div className="max-w-3xl space-y-6">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Zenith Holidayz Private Limited</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08]">
            Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">Extraordinary</span> Journey Begins Here.
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-2xl">
            Experience bespoke international getaways and timeless domestic treasures. From Swiss alpine panoramas and private Bali villas to royal Rajasthan havelis, our travel concierges tailor every nuance to perfection.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/packages"
              className="btn-gold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-2xl w-full sm:w-auto"
            >
              <span>Explore Holidays</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/plan-your-trip"
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold text-white border border-white/20 hover:border-gold-400 hover:bg-white/10 transition-all w-full sm:w-auto text-center"
            >
              <span>Plan Your Journey</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Panel Docked at Bottom of Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <HeroSearchBox />
      </div>
    </section>
  );
}
