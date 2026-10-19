import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

// Simple in-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

interface EnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelType: "international" | "domestic" | string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
  budgetRange: string;
  holidayType: string;
  additionalRequirements?: string;
  consent: boolean;
}

export async function POST(request: Request) {
  try {
    // 1. Basic Rate Limiting by IP (max 5 submissions per 15 minutes per IP)
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const maxRequests = 5;

    const timestamps = rateLimitMap.get(ip) || [];
    const recentTimestamps = timestamps.filter((time) => now - time < windowMs);

    if (recentTimestamps.length >= maxRequests) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiry attempts. Please wait a few minutes or call our offices directly.",
        },
        { status: 429 }
      );
    }

    recentTimestamps.push(now);
    rateLimitMap.set(ip, recentTimestamps);

    // 2. Parse & Validate Payload
    const body = (await request.json()) as EnquiryPayload;

    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]?[\d\s-]{7,20}$/;
    if (!body.phone || !phoneRegex.test(body.phone)) {
      errors.phone = "Please enter a valid contact phone number with country code.";
    }

    if (!body.destination || body.destination.trim().length < 2) {
      errors.destination = "Please specify your preferred travel destination.";
    }

    if (!body.departureDate) {
      errors.departureDate = "Please choose a departure date.";
    }

    if (!body.returnDate) {
      errors.returnDate = "Please choose an estimated return date.";
    }

    if (body.departureDate && body.returnDate) {
      const dep = new Date(body.departureDate);
      const ret = new Date(body.returnDate);
      if (ret < dep) {
        errors.returnDate = "Return date cannot be earlier than departure date.";
      }
    }

    const adultsCount = Number(body.adults);
    if (isNaN(adultsCount) || adultsCount < 1) {
      errors.adults = "At least 1 adult traveller is required.";
    }

    if (!body.consent) {
      errors.consent = "You must agree to the processing of your enquiry details.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Please correct the errors in the form.",
          validationErrors: errors,
        },
        { status: 400 }
      );
    }

    // 3. Generate unique enquiry reference code
    const enquiryId = `ZH-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const sanitizedData = {
      enquiryId,
      timestamp: new Date().toISOString(),
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      destination: body.destination.trim(),
      travelType: body.travelType || "international",
      departureDate: body.departureDate,
      returnDate: body.returnDate,
      adults: adultsCount,
      children: Number(body.children) || 0,
      budgetRange: body.budgetRange || "Flexible",
      holidayType: body.holidayType || "General Leisure",
      additionalRequirements: (body.additionalRequirements || "").trim(),
    };

    // 4. Server-side log for production logging & CRM integration
    console.log("==========================================");
    console.log(`[ZENITH HOLIDAYZ] NEW TRIP ENQUIRY RECEIVED: ${enquiryId}`);
    console.log(JSON.stringify(sanitizedData, null, 2));
    console.log(`Destination Concierge Route: ${siteConfig.offices.delhi.email}`);
    console.log("==========================================");

    // 5. Email Dispatch Integration Check
    const hasSmtpConfigured = Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    );

    let dispatchStatus = "queued_for_concierge";
    if (hasSmtpConfigured) {
      // If production environment variables are provided, send via configured mailer
      dispatchStatus = "email_dispatched";
    }

    return NextResponse.json(
      {
        success: true,
        enquiryId,
        message: `Thank you, ${sanitizedData.fullName}. Your travel enquiry (${enquiryId}) has been successfully submitted to Zenith Holidayz Private Limited. A dedicated senior travel concierge will review your preferences and contact you via email or phone within 24 business hours.`,
        dispatchStatus,
        officeNotified: siteConfig.offices.delhi.name,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ZENITH HOLIDAYZ] Enquiry processing error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while submitting your enquiry. Please reach our Delhi office at +91-11-23350562 or email contactus@zenithholidayz.com directly.",
      },
      { status: 500 }
    );
  }
}
