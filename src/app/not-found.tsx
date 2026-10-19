import React from "react";
import Link from "next/link";
import { Compass, Home, MapPin, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-ivory px-4 py-16">
      <div className="max-w-lg mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-gold-500/15 border-2 border-gold-500/30 flex items-center justify-center mx-auto text-gold-600">
          <Compass className="w-10 h-10 animate-[spin_12s_linear_infinite]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-600 block">
            Error 404 • Page Not Found
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
            Uncharted Territory
          </h1>
          <p className="text-xs sm:text-sm text-slate-text leading-relaxed">
            The destination or page you are looking for has been moved, renamed, or is currently unavailable. Let us guide you back to our curated travel routes.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-gold px-6 py-3 text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/destinations"
            className="btn-outline-gold px-6 py-3 text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <MapPin className="w-4 h-4" />
            <span>All Destinations</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-200/80">
          <p className="text-xs text-slate-text/70">
            Need urgent assistance? Call our Delhi office at{" "}
            <a href="tel:+911123350562" className="text-teal-800 font-semibold underline">
              +91-11-23350562
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
