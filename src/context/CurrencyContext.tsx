"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "INR" | "USD" | "EUR" | "GBP";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  label: string;
  country: string;
  flag: string;
  rateFromINR: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  INR: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    label: "INR (₹ – Indian Rupee)",
    country: "India",
    flag: "🇮🇳",
    rateFromINR: 1,
  },
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    label: "USD ($ – US Dollar)",
    country: "United States",
    flag: "🇺🇸",
    rateFromINR: 0.012, // ~ ₹83.33 per USD
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    label: "EUR (€ – Euro)",
    country: "Europe",
    flag: "🇪🇺",
    rateFromINR: 0.011, // ~ ₹90.90 per EUR
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    label: "GBP (£ – British Pound)",
    country: "United Kingdom",
    flag: "🇬🇧",
    rateFromINR: 0.0095, // ~ ₹105.26 per GBP
  },
};

export const BUDGET_RANGES_BY_CURRENCY: Record<CurrencyCode, string[]> = {
  GBP: [
    "Under £1,000 per person",
    "£1,000 – £2,000 per person",
    "£2,000 – £3,500 per person",
    "£3,500+ Ultra Luxury",
    "Flexible / Custom Estimate",
  ],
  INR: [
    "Under ₹1,00,000 per person",
    "₹1,00,000 – ₹1,80,000 per person",
    "₹1,80,000 – ₹3,00,000 per person",
    "₹3,00,000+ Ultra Luxury",
    "Flexible / Best Value",
  ],
  USD: [
    "Under $1,200 per person",
    "$1,200 – $2,500 per person",
    "$2,500 – $4,500 per person",
    "$4,500+ Ultra Luxury",
    "Flexible / Best Value",
  ],
  EUR: [
    "Under €1,100 per person",
    "€1,100 – €2,200 per person",
    "€2,200 – €4,000 per person",
    "€4,000+ Ultra Luxury",
    "Flexible / Best Value",
  ],
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  currencyInfo: CurrencyInfo;
  formatPrice: (amountINR: number) => string;
  formatEstimate: (amountINR: number) => string;
  convertAmount: (amountINR: number) => number;
  availableBudgets: string[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = "zenith_holidayz_currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("INR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
      if (saved && CURRENCIES[saved]) {
        setCurrencyState(saved);
      }
    } catch {
      // Ignore localStorage errors in private browsing
    }
    setMounted(true);
  }, []);

  const setCurrency = (newCurrency: CurrencyCode) => {
    if (!CURRENCIES[newCurrency]) return;
    setCurrencyState(newCurrency);
    try {
      localStorage.setItem(STORAGE_KEY, newCurrency);
    } catch {
      // Ignore
    }
  };

  const currencyInfo = CURRENCIES[currency];

  const convertAmount = (amountINR: number): number => {
    if (currency === "INR") return amountINR;
    const converted = amountINR * currencyInfo.rateFromINR;
    // Round cleanly: round to nearest 10 for clean holiday pricing
    return Math.round(converted / 10) * 10;
  };

  const formatPrice = (amountINR: number): string => {
    const converted = convertAmount(amountINR);
    if (currency === "INR") {
      return `₹${amountINR.toLocaleString("en-IN")}`;
    }
    if (currency === "GBP") {
      return `£${converted.toLocaleString("en-GB")}`;
    }
    if (currency === "EUR") {
      return `€${converted.toLocaleString("de-DE")}`;
    }
    return `$${converted.toLocaleString("en-US")}`;
  };

  const formatEstimate = (amountINR: number): string => {
    return `From ${formatPrice(amountINR)}*`;
  };

  const availableBudgets = BUDGET_RANGES_BY_CURRENCY[currency];

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencyInfo,
        formatPrice,
        formatEstimate,
        convertAmount,
        availableBudgets,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (!context) {
    // Return graceful default if used outside provider
    const defaultInfo = CURRENCIES.INR;
    return {
      currency: "INR",
      setCurrency: () => {},
      currencyInfo: defaultInfo,
      formatPrice: (amountINR) => `₹${amountINR.toLocaleString("en-IN")}`,
      formatEstimate: (amountINR) => `From ₹${amountINR.toLocaleString("en-IN")}*`,
      convertAmount: (amountINR) => amountINR,
      availableBudgets: BUDGET_RANGES_BY_CURRENCY.INR,
    };
  }
  return context;
}
