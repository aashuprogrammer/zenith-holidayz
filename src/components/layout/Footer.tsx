import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Compass,
  MapPin,
  PhoneCall,
  Printer,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Heart,
  Globe,
} from "lucide-react";

export default function Footer() {
  const { offices, legalName, tagline, description } = siteConfig;

  return (
    <footer className="bg-navy-950 text-white/80 border-t border-gold-500/20 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background luxury glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info & Mission (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-300 p-0.5">
                <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  ZENITH
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold -mt-1">
                  HOLIDAYZ PVT LTD
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              {description}
            </p>

            <div className="pt-2 text-xs text-gold-400/90 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Certified Travel Planners & Bespoke Concierge</span>
            </div>

            <div className="pt-2">
              <Link
                href="/plan-your-trip"
                className="btn-gold px-5 py-2.5 text-xs uppercase font-bold tracking-wider inline-flex"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Links & Categories (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-display text-base font-semibold tracking-wide border-b border-gold-500/30 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-gold-400 transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-gold-400 transition-colors">
                  Holiday Packages
                </Link>
              </li>
              <li>
                <Link href="/packages/international" className="hover:text-gold-400 transition-colors">
                  International Holidays
                </Link>
              </li>
              <li>
                <Link href="/packages/domestic" className="hover:text-gold-400 transition-colors">
                  Domestic Holidays
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-gold-400 transition-colors">
                  Curated Experiences
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-gold-400 transition-colors">
                  Travel Inspiration
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Destinations (Cols 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-display text-base font-semibold tracking-wide border-b border-gold-500/30 pb-2 inline-block">
              Top Escapes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/destinations/switzerland" className="hover:text-gold-400 transition-colors">
                  Switzerland Holidays
                </Link>
              </li>
              <li>
                <Link href="/destinations/bali" className="hover:text-gold-400 transition-colors">
                  Bali Private Villas
                </Link>
              </li>
              <li>
                <Link href="/destinations/dubai" className="hover:text-gold-400 transition-colors">
                  Dubai Skyline Tours
                </Link>
              </li>
              <li>
                <Link href="/destinations/maldives" className="hover:text-gold-400 transition-colors">
                  Maldives Overwater
                </Link>
              </li>
              <li>
                <Link href="/destinations/thailand" className="hover:text-gold-400 transition-colors">
                  Thailand Islands
                </Link>
              </li>
              <li>
                <Link href="/destinations/japan" className="hover:text-gold-400 transition-colors">
                  Japan Sakura & Rail
                </Link>
              </li>
              <li>
                <Link href="/destinations/united-kingdom" className="hover:text-gold-400 transition-colors">
                  United Kingdom Royal Heritage
                </Link>
              </li>
              <li>
                <Link href="/destinations/kashmir" className="hover:text-gold-400 transition-colors">
                  Kashmir Valleys
                </Link>
              </li>
              <li>
                <Link href="/destinations/rajasthan" className="hover:text-gold-400 transition-colors">
                  Royal Rajasthan Palaces
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices: Delhi & Chandigarh (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-white font-display text-base font-semibold tracking-wide border-b border-gold-500/30 pb-2 inline-block">
              Our Registered Offices
            </h4>

            {/* Delhi Head Office */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2 hover:border-gold-500/40 transition-colors">
              <div className="flex items-center justify-between text-gold-400 font-semibold uppercase tracking-wider text-[11px]">
                <span>{offices.delhi.name}</span>
                <span className="text-[10px] bg-gold-500/20 px-1.5 py-0.5 rounded text-gold-300">
                  Head Office
                </span>
              </div>
              <p className="text-white/70 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{offices.delhi.address}</span>
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/80 pt-1">
                <a
                  href={`tel:${offices.delhi.phoneTel}`}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3 text-gold-400" />
                  <span>{offices.delhi.phoneDisplay}</span>
                </a>
                <span className="flex items-center gap-1 text-white/50">
                  <Printer className="w-3 h-3" />
                  <span>Fax: {offices.delhi.fax}</span>
                </span>
              </div>
              <div className="pt-1">
                <a
                  href={`mailto:${offices.delhi.email}`}
                  className="text-gold-400 hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>{offices.delhi.email}</span>
                </a>
              </div>
            </div>

            {/* Chandigarh Branch Office */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2 hover:border-gold-500/40 transition-colors">
              <div className="flex items-center justify-between text-gold-400 font-semibold uppercase tracking-wider text-[11px]">
                <span>{offices.chandigarh.name}</span>
                <span className="text-[10px] bg-teal-500/20 px-1.5 py-0.5 rounded text-teal-300">
                  Branch Office
                </span>
              </div>
              <p className="text-white/70 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{offices.chandigarh.address}</span>
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/80 pt-1">
                <a
                  href={`tel:${offices.chandigarh.phoneTel}`}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3 text-gold-400" />
                  <span>{offices.chandigarh.phoneDisplay}</span>
                </a>
                <span className="flex items-center gap-1 text-white/50">
                  <Printer className="w-3 h-3" />
                  <span>Fax: {offices.chandigarh.fax}</span>
                </span>
              </div>
              <div className="pt-1">
                <a
                  href={`mailto:${offices.chandigarh.email}`}
                  className="text-gold-400 hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>{offices.chandigarh.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="text-center md:text-left">
            <p>© 2026 {legalName}. All rights reserved.</p>
            <p className="text-[11px] text-white/40 mt-0.5">
              Handcrafting bespoke luxury journeys with precision, privacy & care.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="text-center py-1.5 px-4 rounded-full bg-white/[0.04] border border-gold-500/25 text-white/80 text-[11px] sm:text-xs shadow-sm">
            <span>Development and Deployment: </span>
            <span className="text-gold-400 font-semibold tracking-wide">Anurag Maurya</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Support & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
