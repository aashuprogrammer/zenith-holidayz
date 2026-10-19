import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import { destinations } from "@/data/destinations";
import Breadcrumb from "@/components/common/Breadcrumb";
import {
  Clock,
  Calendar,
  User,
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Travel Inspiration`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedDestination = destinations.find(
    (d) => d.slug === article.relatedDestinationSlug
  );

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header Banner */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden bg-navy-950">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-gold-500/20 backdrop-blur-md text-gold-300 px-3 py-1 rounded-full border border-gold-500/30">
              {article.category}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-1">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gold-400" />
              <span>{article.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>{article.publishDate}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Reading Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Travel Journal", href: "/journal" },
            { label: article.title },
          ]}
        />

        {/* Article Body */}
        <article className="mt-8 bg-white rounded-3xl p-6 sm:p-12 border border-gray-200/90 shadow-sm space-y-8">
          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg text-navy-900 font-medium leading-relaxed italic border-l-4 border-gold-500 pl-4 py-1">
            {article.excerpt}
          </p>

          {/* Content Sections */}
          <div className="space-y-8 text-sm sm:text-base text-slate-text leading-relaxed">
            {article.content.map((sec, index) => (
              <div key={index} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-navy-950 pt-4">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((p, pIndex) => (
                  <p key={pIndex}>{p}</p>
                ))}

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-2 pt-2 text-sm text-navy-900">
                    {sec.bulletPoints.map((bp, bpIndex) => (
                      <li key={bpIndex} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-1" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Related Destination Callout Box */}
          {relatedDestination && (
            <div className="mt-12 bg-ivory rounded-2xl p-6 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-600 block">
                  Featured Destination
                </span>
                <h3 className="font-display text-xl font-bold text-navy-950">
                  Ready to Experience {relatedDestination.name}?
                </h3>
                <p className="text-xs text-slate-text max-w-md">
                  View curated packages, best travel seasons, and luxury highlights for {relatedDestination.name}.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href={`/destinations/${relatedDestination.slug}`}
                  className="btn-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  <span>Explore {relatedDestination.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </article>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/journal"
            className="text-xs font-bold uppercase tracking-wider text-gold-700 hover:text-gold-800"
          >
            ← Back to Travel Journal
          </Link>
        </div>
      </div>
    </div>
  );
}
