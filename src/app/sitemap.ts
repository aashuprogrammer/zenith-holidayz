import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/destinations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/packages`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/packages/international`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/packages/domestic`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/packages/honeymoon`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/packages/family`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/experiences`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/plan-your-trip`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/journal`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${baseUrl}/destinations/${d.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packages.map((p) => ({
    url: `${baseUrl}/packages/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...packageRoutes,
    ...articleRoutes,
  ];
}
