"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar, Users, Compass } from "lucide-react";

export default function HeroSearchBox() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [holidayType, setHolidayType] = useState("all");
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (destination.trim()) {
      params.set("destination", destination.trim());
    }
    if (travelDate) {
      params.set("date", travelDate);
    }
    if (travellers) {
      params.set("travellers", travellers);
    }
    if (holidayType && holidayType !== "all") {
      params.set("category", holidayType);
    }

    router.push(`/packages?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="glass-card-dark rounded-2xl p-4 sm:p-5 shadow-2xl border border-gold-500/30 text-white w-full max-w-5xl mx-auto backdrop-blur-xl transition-all"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
        {/* Field 1: Destination */}
        <div className="bg-white/10 hover:bg-white/15 focus-within:bg-white/20 transition-colors rounded-xl p-3 border border-white/15">
          <label
            htmlFor="hero-dest"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider mb-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Destination</span>
          </label>
          <input
            id="hero-dest"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where do you wish to go?"
            className="w-full bg-transparent text-white placeholder-white/50 text-xs sm:text-sm font-medium focus:outline-none"
          />
        </div>

        {/* Field 2: Travel Date */}
        <div className="bg-white/10 hover:bg-white/15 focus-within:bg-white/20 transition-colors rounded-xl p-3 border border-white/15">
          <label
            htmlFor="hero-date"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider mb-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Travel Date</span>
          </label>
          <input
            id="hero-date"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            min={minDate || undefined}
            className="w-full bg-transparent text-white placeholder-white/50 text-xs sm:text-sm font-medium focus:outline-none [color-scheme:dark]"
          />
        </div>

        {/* Field 3: Travellers */}
        <div className="bg-white/10 hover:bg-white/15 focus-within:bg-white/20 transition-colors rounded-xl p-3 border border-white/15">
          <label
            htmlFor="hero-travellers"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider mb-1"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Travellers</span>
          </label>
          <select
            id="hero-travellers"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            className="w-full bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer [&>option]:bg-navy-950 [&>option]:text-white"
          >
            <option value="1">1 Solo Connoisseur</option>
            <option value="2">2 Travellers (Couple)</option>
            <option value="3">3 Travellers (Small Family)</option>
            <option value="4">4 Travellers (Family / Friends)</option>
            <option value="5+">5+ Travellers (Group / Multi-Gen)</option>
          </select>
        </div>

        {/* Field 4: Holiday Type & Search Button */}
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <div className="w-full bg-white/10 hover:bg-white/15 focus-within:bg-white/20 transition-colors rounded-xl p-3 border border-white/15 flex-1">
            <label
              htmlFor="hero-type"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider mb-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Holiday Type</span>
            </label>
            <select
              id="hero-type"
              value={holidayType}
              onChange={(e) => setHolidayType(e.target.value)}
              className="w-full bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer [&>option]:bg-navy-950 [&>option]:text-white"
            >
              <option value="all">All Holiday Styles</option>
              <option value="international">International Holidays</option>
              <option value="domestic">Domestic Holidays</option>
              <option value="honeymoon">Honeymoon Packages</option>
              <option value="family">Family Holidays</option>
              <option value="luxury">Luxury Escapes</option>
              <option value="adventure">Adventure Trips</option>
              <option value="cultural">Cultural Experiences</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-gold w-full sm:w-auto h-[58px] px-6 rounded-xl text-xs sm:text-sm uppercase font-bold tracking-wider shrink-0 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
            <span className="sm:hidden">Search Holidays</span>
          </button>
        </div>
      </div>
    </form>
  );
}
