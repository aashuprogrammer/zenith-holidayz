"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site";
import { useCurrency } from "@/context/CurrencyContext";
import CurrencySelector from "@/components/common/CurrencySelector";
import {
  Calendar,
  Users,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  PhoneCall,
  Mail,
  ShieldCheck,
  Compass,
  Coins,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const ADMIN_EMAIL = "mauryaanurag866@gmail.com";

interface EnquiryFormProps {
  initialDestination?: string;
  initialTravelType?: "international" | "domestic";
  initialHolidayType?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export default function EnquiryForm({
  initialDestination = "",
  initialTravelType = "international",
  initialHolidayType = "Luxury & Bespoke",
  isModal = false,
  onSuccess,
}: EnquiryFormProps) {
  const { currency, currencyInfo, availableBudgets } = useCurrency();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "+91 ",
    destination: initialDestination,
    travelType: initialTravelType,
    departureDate: "",
    returnDate: "",
    adults: 2,
    children: 0,
    budgetRange: availableBudgets[1] || availableBudgets[0] || "Flexible",
    holidayType: initialHolidayType,
    additionalRequirements: "",
    consent: false,
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  // When currency changes, keep the budget preference updated to match active currency options
  useEffect(() => {
    if (availableBudgets && availableBudgets.length > 0) {
      const match = availableBudgets.find((b) => b === formData.budgetRange);
      if (!match) {
        setFormData((prev) => ({
          ...prev,
          budgetRange: availableBudgets[1] || availableBudgets[0],
        }));
      }
    }
  }, [availableBudgets, currency]);

  // Keep initial destination synced if prop changes
  useEffect(() => {
    if (initialDestination) {
      setFormData((prev) => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    enquiryId?: string;
    message?: string;
    error?: string;
    mailtoUrl?: string;
    submittedSummary?: {
      destination: string;
      travelType: string;
      currency: string;
      budget: string;
      dates: string;
      guests: string;
    };
  } | null>(null);

  // Validate on client before sending
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneDigits = formData.phone.replace(/[^\d]/g, "");
    if (!formData.phone.trim() || phoneDigits.length < 8) {
      errors.phone = "Please enter a valid contact number with country code.";
    }

    if (!formData.destination.trim()) {
      errors.destination = "Please specify a preferred destination.";
    }

    if (!formData.departureDate) {
      errors.departureDate = "Please select your planned departure date.";
    }

    if (!formData.returnDate) {
      errors.returnDate = "Please select your return date.";
    }

    if (formData.departureDate && formData.returnDate) {
      const dep = new Date(formData.departureDate);
      const ret = new Date(formData.returnDate);
      if (ret < dep) {
        errors.returnDate = "Return date must be on or after departure date.";
      }
    }

    if (formData.adults < 1) {
      errors.adults = "At least 1 adult traveller is required.";
    }

    if (!formData.consent) {
      errors.consent = "Please authorize personal communication to proceed.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear specific error as user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null);

    // Generate clean client-side reference ID
    const enquiryId = `ZH-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const formattedPayload = {
      _subject: `New Bespoke Holiday Inquiry (${enquiryId}) from ${formData.fullName.trim()}`,
      _replyto: formData.email.trim(),
      _template: "table",
      _captcha: "false",
      Reference_ID: enquiryId,
      Full_Name: formData.fullName.trim(),
      Email_Address: formData.email.trim(),
      Phone_Number: formData.phone.trim(),
      Travel_Category:
        formData.travelType === "international"
          ? "International Holidays"
          : "Domestic (India) Holidays",
      Preferred_Destination: formData.destination.trim(),
      Preferred_Currency: `${currencyInfo.code} (${currencyInfo.symbol} – ${currencyInfo.name})`,
      Budget_Preference: formData.budgetRange,
      Holiday_Experience_Style: formData.holidayType,
      Departure_Date: formData.departureDate,
      Return_Date: formData.returnDate,
      Adults_Count: Number(formData.adults),
      Children_Count: Number(formData.children) || 0,
      Special_Requests: (formData.additionalRequirements || "").trim() || "None specified",
      Submission_Timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      Admin_Recipient_Email: ADMIN_EMAIL,
      Personal_Communication_Notice:
        "The customer awaits personal contact from the admin to discuss their requirements and plan their bespoke itinerary. No automated booking or payment was processed.",
    };

    try {
      // Direct frontend submission to FormSubmit delivering straight to admin's email
      const response = await fetch(`https://formsubmit.co/ajax/${ADMIN_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formattedPayload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === "true" || data.success === true))) {
        setSubmissionResult({
          success: true,
          enquiryId,
          message: `Thank you, ${formData.fullName.trim()}! Your bespoke travel inquiry (${enquiryId}) has been successfully submitted directly to the admin email (${ADMIN_EMAIL}). Our senior travel concierge will personally review your preferences and contact you via phone or email within 24 business hours to curate your itinerary.`,
          submittedSummary: {
            destination: formData.destination.trim(),
            travelType:
              formData.travelType === "international"
                ? "International Holiday"
                : "Domestic (India) Holiday",
            currency: currencyInfo.label,
            budget: formData.budgetRange,
            dates: `${formData.departureDate} to ${formData.returnDate}`,
            guests: `${formData.adults} Adults${formData.children > 0 ? `, ${formData.children} Children` : ""}`,
          },
        });

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 90,
            spread: 65,
            origin: { y: 0.6 },
            colors: ["#D8B574", "#147D83", "#10243A"],
          });
        } catch {
          // graceful fallback
        }

        if (onSuccess) {
          onSuccess();
        }
      } else {
        const errorMsg =
          (data && data.message) ||
          "Unable to transmit your enquiry directly to the concierge email. Please try again or use the direct email option below.";

        const mailtoUrl = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(
          `Bespoke Holiday Inquiry from ${formData.fullName.trim()} (${enquiryId})`
        )}&body=${encodeURIComponent(
          `Hello Zenith Holidayz Team,\n\nI would like to plan a bespoke holiday with you:\n\n- Name: ${formData.fullName.trim()}\n- Email: ${formData.email.trim()}\n- Phone: ${formData.phone.trim()}\n- Destination: ${formData.destination.trim()}\n- Category: ${formData.travelType}\n- Currency: ${currencyInfo.label}\n- Budget: ${formData.budgetRange}\n- Departure Date: ${formData.departureDate}\n- Return Date: ${formData.returnDate}\n- Travellers: ${formData.adults} Adults, ${formData.children} Children\n- Experience Style: ${formData.holidayType}\n- Special Requests: ${formData.additionalRequirements || "None"}\n\nReference ID: ${enquiryId}`
        )}`;

        setSubmissionResult({
          success: false,
          error: errorMsg,
          mailtoUrl,
        });
      }
    } catch {
      const mailtoUrl = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(
        `Bespoke Holiday Inquiry from ${formData.fullName.trim()} (${enquiryId})`
      )}&body=${encodeURIComponent(
        `Hello Zenith Holidayz Team,\n\nI would like to plan a bespoke holiday with you:\n\n- Name: ${formData.fullName.trim()}\n- Email: ${formData.email.trim()}\n- Phone: ${formData.phone.trim()}\n- Destination: ${formData.destination.trim()}\n- Category: ${formData.travelType}\n- Currency: ${currencyInfo.label}\n- Budget: ${formData.budgetRange}\n- Departure Date: ${formData.departureDate}\n- Return Date: ${formData.returnDate}\n- Travellers: ${formData.adults} Adults, ${formData.children} Children\n- Experience Style: ${formData.holidayType}\n- Special Requests: ${formData.additionalRequirements || "None"}\n\nReference ID: ${enquiryId}`
      )}`;

      setSubmissionResult({
        success: false,
        error:
          "Network connectivity issue occurred while delivering your inquiry to the admin. Please verify your connection or click the button below to send your details directly via email.",
        mailtoUrl,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "+91 ",
      destination: "",
      travelType: "international",
      departureDate: "",
      returnDate: "",
      adults: 2,
      children: 0,
      budgetRange: availableBudgets[1] || availableBudgets[0] || "Flexible",
      holidayType: "Luxury & Bespoke",
      additionalRequirements: "",
      consent: false,
    });
  };

  // Success Confirmation Screen
  if (submissionResult?.success) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gold-500/30 shadow-xl text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto border-2 border-teal-200 shadow-sm">
          <CheckCircle2 className="w-10 h-10 text-teal-700" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Inquiry Successfully Transmitted
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
            Your Bespoke Journey Begins
          </h3>
          <p className="text-xs sm:text-sm text-slate-text max-w-lg mx-auto leading-relaxed">
            {submissionResult.message}
          </p>
        </div>

        {/* Inquiry Receipt & Details Card */}
        <div className="bg-ivory rounded-2xl p-5 border border-gold-500/20 max-w-lg mx-auto text-left text-xs space-y-2.5 shadow-sm">
          <div className="flex justify-between items-center pb-2 border-b border-gold-500/10">
            <span className="text-slate-text font-medium">Reference Code:</span>
            <span className="font-mono font-bold text-navy-950 bg-gold-500/15 px-2.5 py-0.5 rounded-md border border-gold-500/30">
              {submissionResult.enquiryId}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-text">Admin Recipient:</span>
            <span className="font-semibold text-teal-800">{ADMIN_EMAIL}</span>
          </div>

          {submissionResult.submittedSummary && (
            <>
              <div className="flex justify-between items-center">
                <span className="text-slate-text">Destination:</span>
                <span className="font-semibold text-navy-950">
                  {submissionResult.submittedSummary.destination}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-text">Selected Currency:</span>
                <span className="font-semibold text-navy-950">
                  {submissionResult.submittedSummary.currency}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-text">Budget Preference:</span>
                <span className="font-semibold text-navy-950">
                  {submissionResult.submittedSummary.budget}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-text">Travel Dates:</span>
                <span className="font-semibold text-navy-950">
                  {submissionResult.submittedSummary.dates}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-text">Party Size:</span>
                <span className="font-semibold text-navy-950">
                  {submissionResult.submittedSummary.guests}
                </span>
              </div>
            </>
          )}

          <div className="pt-2 border-t border-gold-500/10 flex justify-between items-center text-teal-700 font-medium">
            <span>Next Step:</span>
            <span>Admin Personal Contact within 24 Hours</span>
          </div>
        </div>

        {/* Personal Communication Guarantee Callout */}
        <div className="bg-teal-50/60 rounded-xl p-4 border border-teal-200/60 max-w-lg mx-auto text-xs text-teal-900 leading-relaxed text-left flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-teal-950 mb-0.5">
              Personal Bespoke Planning Guarantee
            </span>
            <span>
              The admin will personally contact you to discuss your exact requirements and design your tailored itinerary. No automated bookings or credit card charges are processed on this website.
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="btn-outline-gold px-6 py-2.5 text-xs font-semibold cursor-pointer w-full sm:w-auto"
          >
            Submit Another Inquiry
          </button>
          <a
            href={`tel:${siteConfig.offices.delhi.phoneTel}`}
            className="btn-gold px-6 py-2.5 text-xs font-bold w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Delhi Concierge</span>
          </a>
        </div>
      </div>
    );
  }

  // Active Form
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl border border-gold-500/30 shadow-xl overflow-hidden ${
        isModal ? "p-5 sm:p-7" : "p-6 sm:p-10"
      }`}
    >
      {/* Form Header */}
      <div className="border-b border-gray-100 pb-5 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Zenith Travel Concierge</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-text bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-200">
            <Mail className="w-3.5 h-3.5 text-teal-700" />
            <span className="text-[11px]">Direct to: {ADMIN_EMAIL}</span>
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold text-navy-950 mt-1">
          Plan Your Bespoke Holiday
        </h3>
        <p className="text-xs sm:text-sm text-slate-text mt-1">
          Share your travel preferences below. All details are submitted directly to the admin, who will personally contact you to plan your handcrafted holiday.
        </p>
      </div>

      {/* Global Error Banner with mailto fallback */}
      {submissionResult?.error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Submission Notice</span>
              <span>{submissionResult.error}</span>
            </div>
          </div>

          {submissionResult.mailtoUrl && (
            <div className="pt-2 border-t border-red-200/60 flex items-center justify-between gap-3">
              <span className="text-[11px] text-red-700">
                You can also dispatch this inquiry directly via your email client:
              </span>
              <a
                href={submissionResult.mailtoUrl}
                className="btn-gold px-3.5 py-1.5 text-[11px] font-bold rounded-lg shrink-0 flex items-center gap-1.5"
              >
                <Mail className="w-3 h-3" />
                <span>Send to {ADMIN_EMAIL}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      )}

      <div className="space-y-5">
        {/* Row 1: Domestic vs International Selector & Currency Choice */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
            <label className="block text-xs font-semibold text-navy-900">
              Travel Category <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-text flex items-center gap-1">
                <Coins className="w-3 h-3 text-gold-600" />
                <span>Currency:</span>
              </span>
              <CurrencySelector variant="dropdown" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, travelType: "international" }))}
              className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all border text-center cursor-pointer ${
                formData.travelType === "international"
                  ? "bg-navy-950 text-white border-navy-950 shadow-md"
                  : "bg-gray-50 text-navy-900 border-gray-200 hover:bg-gray-100"
              }`}
            >
              International Holidays
            </button>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, travelType: "domestic" }))}
              className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all border text-center cursor-pointer ${
                formData.travelType === "domestic"
                  ? "bg-navy-950 text-white border-navy-950 shadow-md"
                  : "bg-gray-50 text-navy-900 border-gray-200 hover:bg-gray-100"
              }`}
            >
              Domestic (India) Holidays
            </button>
          </div>
        </div>

        {/* Row 2: Destination & Holiday Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="destination" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Preferred Destination(s) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. United Kingdom, Switzerland, Bali, Kashmir, Dubai"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                validationErrors.destination
                  ? "border-red-400 bg-red-50/50"
                  : "border-gray-300 focus:border-gold-500"
              }`}
            />
            {validationErrors.destination && (
              <p className="text-[11px] text-red-600 mt-1">{validationErrors.destination}</p>
            )}
          </div>

          <div>
            <label htmlFor="holidayType" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Holiday Experience Style
            </label>
            <select
              id="holidayType"
              name="holidayType"
              value={formData.holidayType}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
            >
              <option value="Luxury & Bespoke">Luxury & Bespoke</option>
              <option value="Honeymoon & Romantic">Honeymoon & Romantic</option>
              <option value="Family Vacation">Family Vacation</option>
              <option value="Cultural & Royal Heritage">Cultural & Royal Heritage</option>
              <option value="Adventure & Nature">Adventure & Nature</option>
              <option value="Beach & Island Relaxation">Beach & Island Relaxation</option>
            </select>
          </div>
        </div>

        {/* Row 3: Travel Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="departureDate" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Tentative Departure Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                min={minDate || undefined}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  validationErrors.departureDate
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-300 focus:border-gold-500"
                }`}
              />
            </div>
            {validationErrors.departureDate && (
              <p className="text-[11px] text-red-600 mt-1">{validationErrors.departureDate}</p>
            )}
          </div>

          <div>
            <label htmlFor="returnDate" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Tentative Return Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                min={formData.departureDate || minDate || undefined}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  validationErrors.returnDate
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-300 focus:border-gold-500"
                }`}
              />
            </div>
            {validationErrors.returnDate && (
              <p className="text-[11px] text-red-600 mt-1">{validationErrors.returnDate}</p>
            )}
          </div>
        </div>

        {/* Row 4: Travellers & Dynamic Budget in Selected Currency */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="adults" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Adults (12+ yrs) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="adults"
              name="adults"
              min="1"
              max="30"
              value={formData.adults}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                validationErrors.adults
                  ? "border-red-400 bg-red-50/50"
                  : "border-gray-300 focus:border-gold-500"
              }`}
            />
            {validationErrors.adults && (
              <p className="text-[11px] text-red-600 mt-1">{validationErrors.adults}</p>
            )}
          </div>

          <div>
            <label htmlFor="children" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Children (Below 12 yrs)
            </label>
            <input
              type="number"
              id="children"
              name="children"
              min="0"
              max="20"
              value={formData.children}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          <div>
            <label htmlFor="budgetRange" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Budget in {currencyInfo.code} ({currencyInfo.symbol})
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
            >
              {availableBudgets.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 5: Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-gray-100">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe / Rajesh Sharma"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                validationErrors.fullName
                  ? "border-red-400 bg-red-50/50"
                  : "border-gray-300 focus:border-gold-500"
              }`}
            />
            {validationErrors.fullName && (
              <p className="text-[11px] text-red-600 mt-1">{validationErrors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                validationErrors.email
                  ? "border-red-400 bg-red-50/50"
                  : "border-gray-300 focus:border-gold-500"
              }`}
            />
            {validationErrors.email && (
              <p className="text-[11px] text-red-600 mt-1">{validationErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-navy-900 mb-1.5">
              Phone Number (with Code) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+44 7911 123456 / +91 98765 43210"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                validationErrors.phone
                  ? "border-red-400 bg-red-50/50"
                  : "border-gray-300 focus:border-gold-500"
              }`}
            />
            {validationErrors.phone && (
              <p className="text-[11px] text-red-600 mt-1">{validationErrors.phone}</p>
            )}
          </div>
        </div>

        {/* Row 6: Additional Requirements */}
        <div>
          <label htmlFor="additionalRequirements" className="block text-xs font-semibold text-navy-900 mb-1.5">
            Special Requests & Travel Preferences (Optional)
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            rows={3}
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Tell us about hotel preferences (4-star / 5-star / villas), flight classes, dietary requirements, celebrations (anniversary/honeymoon), specific sights you wish to see..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gold-600 focus:ring-gold-400 cursor-pointer"
            />
            <span className="text-[11px] sm:text-xs text-slate-text leading-relaxed">
              I authorize the Zenith Holidayz concierge admin to contact me personally via phone, WhatsApp, or email to discuss my travel preferences. I understand my details will be kept confidential and never shared with third parties.
            </span>
          </label>
          {validationErrors.consent && (
            <p className="text-[11px] text-red-600 mt-1">{validationErrors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold w-full py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-navy-950" />
                <span>Transmitting Inquiry to Admin ({ADMIN_EMAIL})...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Bespoke Holiday Inquiry</span>
              </>
            )}
          </button>
        </div>

        {/* Personal Concierge Notice */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-text text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
          <span>
            Delivered directly to admin • Personal consultation • No automated charge
          </span>
        </div>
      </div>
    </form>
  );
}
