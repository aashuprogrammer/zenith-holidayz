import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Compass,
  MapPin,
  Sparkles,
  Headphones,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Personalised Trip Planning",
      description:
        "Every itinerary begins with an in-depth conversation. We take the time to understand your personal travel style, pacing preferences, and specific interests before crafting a bespoke proposal.",
    },
    {
      icon: Compass,
      title: "Authentic Destination Guidance",
      description:
        "Our team provides transparent, verified advice regarding local seasons, regional transit options, visa requirements, and must-see cultural landmarks to ensure effortless exploration.",
    },
    {
      icon: CalendarCheck,
      title: "Tailored Holiday Experiences",
      description:
        "Whether you prefer private champagne boat cruises on Lake Lucerne or quiet sunrise shikara journeys on Dal Lake, our packages are built with handpicked local moments rather than rigid tour crowds.",
    },
    {
      icon: Headphones,
      title: "Attentive Travel Assistance",
      description:
        "From pre-departure briefings and visa documentation guidance to on-ground coordination while abroad, our travel specialists in Delhi and Chandigarh remain reachable throughout your journey.",
    },
    {
      icon: FileCheck,
      title: "Attention to Itinerary Details",
      description:
        "We handle the intricate details—hotel check-in coordination, verified private chauffeurs, panoramic rail seat reservations, and attraction passes—so you can travel with complete peace of mind.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Corporate Offices",
      description:
        "Visit or connect with our physical registered offices located in Connaught Place, New Delhi, and Sector-55, Chandigarh for face-to-face consultation and transparent planning.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Philosophy"
          title="Why Plan With Zenith Holidayz"
          subtitle="We believe an extraordinary vacation is built upon thoughtful listening, meticulous planning, and genuine care for your travel experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-gold-500/20 shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-950 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-text leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
