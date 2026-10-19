"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import EnquiryForm from "@/components/enquiry/EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationName?: string;
  travelType?: "international" | "domestic";
  packageTitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  destinationName = "",
  travelType = "international",
  packageTitle,
}: EnquiryModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const defaultDestination = packageTitle
    ? `${destinationName} (${packageTitle})`
    : destinationName;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-navy-950/60 hover:text-navy-950 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Form Content */}
        <EnquiryForm
          initialDestination={defaultDestination}
          initialTravelType={travelType}
          isModal={true}
          onSuccess={() => {
            // Can optionally close after short delay or leave the success screen
          }}
        />
      </div>
    </div>
  );
}
