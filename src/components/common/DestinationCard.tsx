import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/destinations";
import { ArrowUpRight, MapPin, Compass } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block rounded-2xl overflow-hidden shadow-lg border border-gold-500/20 bg-navy-950 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gold-400/50"
    >
      {/* Destination Image with Zoom on hover */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
        <Image
          src={destination.cardImage}
          alt={`Travel to ${destination.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-85 transition-opacity group-hover:opacity-75" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 backdrop-blur-md text-gold-300 px-3 py-1 rounded-full border border-gold-500/30">
            {destination.region}
          </span>
          <span className="text-[10px] font-medium bg-black/40 backdrop-blur-md text-white/90 px-2.5 py-1 rounded-full">
            {destination.packageCount} {destination.packageCount === 1 ? "Package" : "Packages"}
          </span>
        </div>

        {/* Bottom Details Content */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-gold-400 font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.country}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide group-hover:text-gold-300 transition-colors">
            {destination.name}
          </h3>

          <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-normal">
            {destination.shortDescription}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>Explore Destination</span>
            </span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors flex items-center justify-center text-white">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
