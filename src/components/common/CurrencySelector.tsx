"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCurrency, CURRENCIES, CurrencyCode } from "@/context/CurrencyContext";
import { ChevronDown, Check, Coins } from "lucide-react";

interface CurrencySelectorProps {
  variant?: "dropdown" | "pills";
  className?: string;
  label?: string;
}

export default function CurrencySelector({
  variant = "dropdown",
  className = "",
  label,
}: CurrencySelectorProps) {
  const { currency, setCurrency, currencyInfo } = useCurrency();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currencyList = Object.values(CURRENCIES);

  if (variant === "pills") {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {label && (
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-text flex items-center gap-1.5 mr-1">
            <Coins className="w-3.5 h-3.5 text-gold-600" />
            <span>{label}</span>
          </span>
        )}
        <div className="inline-flex p-1 rounded-xl bg-navy-950/5 border border-gold-500/20 backdrop-blur-sm">
          {currencyList.map((item) => {
            const isActive = currency === item.code;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setCurrency(item.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-navy-950 text-gold-300 shadow-sm border border-gold-500/30"
                    : "text-navy-900/80 hover:text-navy-950 hover:bg-white/60"
                }`}
                title={item.label}
              >
                <span>{item.flag}</span>
                <span>{item.code} ({item.symbol})</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Dropdown variant
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Select currency"
      >
        <span className="text-sm leading-none">{currencyInfo.flag}</span>
        <span className="font-bold tracking-wide">{currencyInfo.code}</span>
        <span className="text-gold-300 font-normal">({currencyInfo.symbol})</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gold-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-navy-950/98 backdrop-blur-xl border border-gold-500/30 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-gold-400/90 border-b border-white/10 mb-1">
            Select Currency
          </div>
          <div className="space-y-0.5">
            {currencyList.map((item) => {
              const isSelected = currency === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setCurrency(item.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-left ${
                    isSelected
                      ? "bg-gold-500/15 text-gold-300 font-semibold border border-gold-500/30"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{item.flag}</span>
                    <div>
                      <span className="font-semibold block text-white">
                        {item.code} – {item.name}
                      </span>
                      <span className="text-[10px] text-white/50 block">
                        {item.country} ({item.symbol})
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
