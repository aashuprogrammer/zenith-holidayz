import React from "react";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

export default function ExperiencesSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curated Travel Styles"
          title="Ways to Experience the World"
          subtitle="Every journey carries its own rhythm. Whether seeking private island solitude, high-altitude alpine thrills, or multi-generational harmony, explore holidays crafted around how you love to travel."
          dark={true}
        />

        {/* Editorial Grid of Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group glass-card-dark rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with subtle hover zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={exp.heroImage}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-navy-950 px-2.5 py-0.5 rounded-full">
                    Curated Style
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    {exp.shortDescription}
                  </p>
                </div>

                {/* Popular Destinations for this style */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                    Ideal Escapes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.idealDestinations.map((dest, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/80"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <Link
                    href={`/experiences#${exp.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors group/link"
                  >
                    <span>Discover Style</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore all experiences CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/experiences"
            className="btn-gold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
          >
            <span>Explore All Travel Experiences</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
