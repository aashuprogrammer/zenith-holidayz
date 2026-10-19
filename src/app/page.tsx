import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PackagesSection from "@/components/home/PackagesSection";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import JournalSection from "@/components/home/JournalSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Cinematic Photography & Search Bar */}
      <HeroSection />

      {/* Featured Destinations Portfolio */}
      <FeaturedDestinations />

      {/* Curated Holiday Packages with Filters */}
      <PackagesSection />

      {/* Ways to Travel / Editorial Experiences */}
      <ExperiencesSection />

      {/* Why Choose Zenith Holidayz Planning Approach */}
      <WhyChooseUs />

      {/* Travel Inspiration Journal & Guides */}
      <JournalSection />

      {/* Call to Action Banner */}
      <CtaBanner />
    </>
  );
}
