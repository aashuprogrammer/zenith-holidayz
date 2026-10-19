import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import SectionHeading from "@/components/common/SectionHeading";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export default function JournalSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Travel Journal"
          title="Stories & Travel Inspiration"
          subtitle="Insightful destination guides, itinerary suggestions, and practical packing strategies written to inspire your upcoming expeditions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group bg-ivory rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
                <Image
                  src={art.coverImage}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-navy-950/85 text-gold-300 px-2.5 py-0.5 rounded-full border border-gold-500/30">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-text">
                    <Clock className="w-3 h-3 text-gold-600" />
                    <span>{art.readTime}</span>
                    <span>•</span>
                    <span>{art.publishDate}</span>
                  </div>

                  <Link href={`/journal/${art.slug}`} className="block group-hover:text-teal-700 transition-colors">
                    <h3 className="font-display text-base font-bold text-navy-950 line-clamp-2 leading-snug">
                      {art.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-text line-clamp-2 leading-relaxed font-normal">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200/60">
                  <Link
                    href={`/journal/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/journal"
            className="btn-outline-gold px-7 py-3 text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore All Editorial Articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
