"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  ChevronDown,
  Menu,
  X,
  Compass,
  Plane,
  MapPin,
  Calendar,
  Sparkles,
  PhoneCall,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Track scroll position to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-xl border-b border-gold-500/20 py-3"
          : isHomePage
          ? "bg-navy-950/80 backdrop-blur-sm border-b border-white/10 py-4"
          : "bg-navy-950/95 backdrop-blur-md border-b border-gold-500/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg p-1"
            aria-label="Zenith Holidayz Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-300 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center">
                <Compass className="w-5 h-5 text-gold-400 transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white">
                ZENITH
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-semibold -mt-1">
                HOLIDAYZ PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                pathname === "/"
                  ? "text-gold-400 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("destinations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  pathname.startsWith("/destinations")
                    ? "text-gold-400 font-semibold"
                    : "text-white/85 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={activeDropdown === "destinations"}
                aria-haspopup="true"
              >
                <span>Destinations</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "destinations" ? "rotate-180 text-gold-400" : ""
                  }`}
                />
              </button>

              {/* Destinations Mega Dropdown */}
              {activeDropdown === "destinations" && (
                <div className="absolute top-full left-0 mt-1 w-[580px] bg-navy-950/98 backdrop-blur-xl border border-gold-500/30 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* International Column */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10 text-gold-400 font-semibold text-xs tracking-wider uppercase">
                      <Plane className="w-3.5 h-3.5" />
                      <span>International Escapes</span>
                    </div>
                    <ul className="space-y-1">
                      {siteConfig.navigation.destinationsMenu[0].items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/destinations/${item.slug}`}
                            className="flex items-center justify-between px-2.5 py-1.5 text-xs text-white/80 hover:text-gold-300 hover:bg-white/5 rounded-md transition-colors"
                          >
                            <span>{item.name}</span>
                            {item.tag && (
                              <span className="text-[10px] text-white/40 font-normal">
                                {item.tag}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Domestic Column */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10 text-gold-400 font-semibold text-xs tracking-wider uppercase">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Domestic Treasures</span>
                      </div>
                      <ul className="space-y-1">
                        {siteConfig.navigation.destinationsMenu[1].items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/destinations/${item.slug}`}
                              className="flex items-center justify-between px-2.5 py-1.5 text-xs text-white/80 hover:text-gold-300 hover:bg-white/5 rounded-md transition-colors"
                            >
                              <span>{item.name}</span>
                              {item.tag && (
                                <span className="text-[10px] text-white/40 font-normal">
                                  {item.tag}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 mt-4">
                      <Link
                        href="/destinations"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        <span>View All Destinations</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Holiday Packages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("packages")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  pathname.startsWith("/packages")
                    ? "text-gold-400 font-semibold"
                    : "text-white/85 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={activeDropdown === "packages"}
                aria-haspopup="true"
              >
                <span>Holiday Packages</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "packages" ? "rotate-180 text-gold-400" : ""
                  }`}
                />
              </button>

              {/* Packages Dropdown */}
              {activeDropdown === "packages" && (
                <div className="absolute top-full left-0 mt-1 w-[540px] bg-navy-950/98 backdrop-blur-xl border border-gold-500/30 rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-gold-400 font-semibold text-xs tracking-wider uppercase">
                    <span>Curated Holiday Collections</span>
                    <Link
                      href="/packages"
                      className="text-[11px] lowercase text-white/50 hover:text-gold-400 transition-colors"
                    >
                      all packages →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {siteConfig.navigation.packagesMenu.map((pkg) => (
                      <Link
                        key={pkg.slug}
                        href={`/packages/${pkg.slug}`}
                        className="p-2.5 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-gold-500/20 group"
                      >
                        <div className="text-xs font-semibold text-white group-hover:text-gold-300 transition-colors flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-gold-400" />
                          <span>{pkg.category}</span>
                        </div>
                        <p className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                          {pkg.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/experiences"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                pathname === "/experiences"
                  ? "text-gold-400 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/5"
              }`}
            >
              Experiences
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                pathname === "/about"
                  ? "text-gold-400 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/5"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                pathname === "/contact"
                  ? "text-gold-400 font-semibold"
                  : "text-white/85 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Plan Your Trip CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/plan-your-trip"
              className="btn-gold px-5 py-2.5 text-xs uppercase tracking-wider font-bold shadow-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Your Trip</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/plan-your-trip"
              className="btn-gold px-3 py-1.5 text-xs font-bold sm:inline-flex hidden"
            >
              Plan Trip
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/98 border-t border-gold-500/20 backdrop-blur-2xl px-5 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 text-sm">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                pathname === "/" ? "bg-gold-500/10 text-gold-400 font-semibold" : "text-white/90 hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                pathname.startsWith("/destinations")
                  ? "bg-gold-500/10 text-gold-400 font-semibold"
                  : "text-white/90 hover:bg-white/5"
              }`}
            >
              All Destinations
            </Link>
            <div className="pl-6 space-y-1">
              <Link
                href="/destinations/switzerland"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • Switzerland
              </Link>
              <Link
                href="/destinations/bali"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • Bali
              </Link>
              <Link
                href="/destinations/dubai"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • Dubai
              </Link>
              <Link
                href="/destinations/kashmir"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • Kashmir
              </Link>
            </div>

            <Link
              href="/packages"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                pathname.startsWith("/packages")
                  ? "bg-gold-500/10 text-gold-400 font-semibold"
                  : "text-white/90 hover:bg-white/5"
              }`}
            >
              Holiday Packages
            </Link>
            <div className="pl-6 space-y-1">
              <Link
                href="/packages/international"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • International Holidays
              </Link>
              <Link
                href="/packages/domestic"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • Domestic Holidays
              </Link>
              <Link
                href="/packages/honeymoon"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • Honeymoon Specials
              </Link>
              <Link
                href="/packages/family"
                className="block py-1 text-xs text-white/60 hover:text-gold-300"
              >
                • Family Holidays
              </Link>
            </div>

            <Link
              href="/experiences"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                pathname === "/experiences"
                  ? "bg-gold-500/10 text-gold-400 font-semibold"
                  : "text-white/90 hover:bg-white/5"
              }`}
            >
              Experiences
            </Link>

            <Link
              href="/journal"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                pathname.startsWith("/journal")
                  ? "bg-gold-500/10 text-gold-400 font-semibold"
                  : "text-white/90 hover:bg-white/5"
              }`}
            >
              Travel Inspiration
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                pathname === "/about"
                  ? "bg-gold-500/10 text-gold-400 font-semibold"
                  : "text-white/90 hover:bg-white/5"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                pathname === "/contact"
                  ? "bg-gold-500/10 text-gold-400 font-semibold"
                  : "text-white/90 hover:bg-white/5"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              href="/plan-your-trip"
              className="btn-gold w-full py-3 text-xs uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </Link>

            <div className="pt-2 flex flex-col gap-2 text-xs text-white/70">
              <a
                href={`tel:${siteConfig.offices.delhi.phoneTel}`}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                <span>Delhi: {siteConfig.offices.delhi.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${siteConfig.offices.chandigarh.phoneTel}`}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                <span>Chandigarh: {siteConfig.offices.chandigarh.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.offices.delhi.email}`}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>{siteConfig.offices.delhi.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
