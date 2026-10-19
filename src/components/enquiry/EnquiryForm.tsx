"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site";
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
} from "lucide-react";

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
    budgetRange: "₹1,50,000 – ₹2,50,000 per person",
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

  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    enquiryId?: string;
    message?: string;
    error?: string;
  } | null>(null);

  // Validate on client before sending
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errors.phone = "Please enter a valid contact number with country code.";
    }

    if (!formData.destination.trim()) {
      errors.destination = "Please specify a destination.";
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
        errors.returnDate = "Return date must be after departure date.";
      }
    }

    if (formData.adults < 1) {
      errors.adults = "At least 1 adult traveller is required.";
    }

    if (!formData.consent) {
      errors.consent = "Please check the consent box to proceed.";
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

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult({
          success: true,
          enquiryId: data.enquiryId,
          message: data.message,
        });

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 60,
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
        setSubmissionResult({
          success: false,
          error: data.error || "Failed to submit enquiry. Please try again.",
        });
        if (data.validationErrors) {
          setValidationErrors(data.validationErrors);
        }
      }
    } catch {
      setSubmissionResult({
        success: false,
        error: "Network error occurred. Please verify your connection or call us directly.",
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
      budgetRange: "₹1,50,000 – ₹2,50,000 per person",
      holidayType: "Luxury & Bespoke",
      additionalRequirements: "",
      consent: false,
    });
  };

  // Success view
  if (submissionResult?.success) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gold-500/30 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto border-2 border-teal-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Enquiry Confirmed
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
            Your Journey Planning Has Begun
          </h3>
          <p className="text-sm text-slate-text max-w-lg mx-auto">
            {submissionResult.message}
          </p>
        </div>

        <div className="bg-ivory rounded-xl p-4 border border-gold-500/20 max-w-md mx-auto text-left text-xs space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-text">Reference ID:</span>
            <span className="font-mono font-bold text-navy-950">
              {submissionResult.enquiryId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-text">Assigned Office:</span>
            <span className="font-semibold text-navy-950">
              {siteConfig.offices.delhi.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-text">Estimated Response Time:</span>
            <span className="font-semibold text-teal-700">Within 24 Hours</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleReset}
            className="btn-outline-gold px-6 py-2.5 text-xs font-semibold"
          >
            Submit Another Enquiry
          </button>
          <a
            href={`tel:${siteConfig.offices.delhi.phoneTel}`}
            className="btn-gold px-6 py-2.5 text-xs font-bold"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Concierge Now</span>
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
        <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Zenith Travel Concierge</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy-950 mt-1">
          Plan Your Bespoke Holiday
        </h3>
        <p className="text-xs sm:text-sm text-slate-text mt-1">
          Share your travel preferences below. Our specialists will handcraft an itinerary tailored to your schedule, party size, and desires.
        </p>
      </div>

      {/* Global Error Banner */}
      {submissionResult?.error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Submission Error</span>
            <span>{submissionResult.error}</span>
          </div>
        </div>
      )}

      <div className="space-y-5">
        {/* Row 1: Domestic vs International Selector */}
        <div>
          <label className="block text-xs font-semibold text-navy-900 mb-1.5">
            Travel Category <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, travelType: "international" }))}
              className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all border text-center ${
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
              className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all border text-center ${
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
              placeholder="e.g. Switzerland, Bali, Kashmir, Dubai"
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
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <option value="Honeymoon & Romantic">Honeymoon & Romantic</option>
              <option value="Family Vacation">Family Vacation</option>
              <option value="Luxury & Bespoke">Luxury & Bespoke</option>
              <option value="Adventure & Nature">Adventure & Nature</option>
              <option value="Cultural & Royal Heritage">Cultural & Royal Heritage</option>
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

        {/* Row 4: Travellers & Budget */}
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
              Budget Preference
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <option value="Under ₹1,00,000 per person">Under ₹1,00,000 per person</option>
              <option value="₹1,00,000 – ₹1,80,000 per person">₹1,00,000 – ₹1,80,000 per person</option>
              <option value="₹1,80,000 – ₹3,00,000 per person">₹1,80,000 – ₹3,00,000 per person</option>
              <option value="₹3,00,000+ Ultra Luxury">₹3,00,000+ Ultra Luxury</option>
              <option value="Flexible / Best Value">Flexible / Best Value</option>
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
              placeholder="e.g. Rajesh Sharma"
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
              placeholder="+91 98765 43210"
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
            Special Requests & Preferences (Optional)
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            rows={3}
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Tell us about specific hotel categories (4-star / 5-star / villas), flight preferences, dietary needs, celebrations (anniversary/honeymoon), or preferred activities..."
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
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gold-600 focus:ring-gold-400"
            />
            <span className="text-[11px] sm:text-xs text-slate-text leading-relaxed">
              I authorize ZENITH HOLIDAYZ PRIVATE LIMITED to contact me via phone, email, or WhatsApp regarding this vacation enquiry. I understand my data will be handled securely and never shared with unauthorized parties.
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
                <span>Validating & Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Trip Enquiry</span>
              </>
            )}
          </button>
        </div>

        {/* Trust Note */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-text">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
          <span>No spam guarantee • Confidential bespoke planning</span>
        </div>
      </div>
    </form>
  );
}
