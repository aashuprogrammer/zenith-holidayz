import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Clock, BookOpen, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Inspiration & Journal | Guides & Advice by Zenith Holidayz",
  description:
    "Explore destination guides, packing strategies, and holiday planning insights written by the travel specialists at Zenith Holidayz Private Limited.",
};

export default function JournalPage() {
  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            <span>Editorial Journal</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Stories & Travel Inspiration
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Curated destination spotlights, expert vacation planning advice, and cultural insights crafted to ignite your wanderlust.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Travel Journal" }]} />

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
                <Image
                  src={art.coverImage}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-navy-950/90 text-gold-300 px-3 py-1 rounded-full border border-gold-500/30">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-text">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    <span>{art.readTime}</span>
                    <span>•</span>
                    <span>{art.publishDate}</span>
                    <span>•</span>
                    <span className="text-gold-700 font-medium">{art.author}</span>
                  </div>

                  <Link href={`/journal/${art.slug}`} className="block group-hover:text-teal-700 transition-colors">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-950 leading-snug">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-text leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/journal/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-700 hover:text-gold-800 transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={`/destinations/${art.relatedDestinationSlug}`}
                    className="text-xs text-slate-text/70 hover:text-navy-950 transition-colors underline"
                  >
                    Explore Destination →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
