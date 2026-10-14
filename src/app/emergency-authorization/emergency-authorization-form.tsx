"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  PhoneCall,
  Clock,
  Building2,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  Lock,
  ArrowRight,
  FileCheck,
  Printer,
  Info,
  ExternalLink,
} from "lucide-react";
import { SignaturePad } from "@/components/forms/signature-pad";

interface FormState {
  companyName: string;
  name: string;
  signerTitle: string;
  phone: string;
  email: string;
  propertyAddress: string;
  town: string;
  emergencyType: string;
  description: string;
  shiftType: "weekday" | "after_8pm_weekend";
  technicianCount: 2 | 3 | 4;
  paymentMethod: "credit_card" | "debit_card" | "ach";
  agreeToTerms: boolean;
}

const RATES = {
  weekday: {
    2: 475.0,
    3: 713.0,
    4: 950.0,
  },
  after_8pm_weekend: {
    2: 575.0,
    3: 863.0,
    4: 1150.0,
  },
};

const OVERTIME_RATES = {
  weekday: { perHour: 75.0, perIncrement: 18.75 },
  after_8pm_weekend: { perHour: 95.0, perIncrement: 23.75 },
};

export function EmergencyAuthorizationForm() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const submissionId = searchParams.get("submission_id");
  const isCancelled = searchParams.get("cancelled");

  const [formData, setFormData] = useState<FormState>({
    companyName: "",
    name: "",
    signerTitle: "Facility Manager",
    phone: "",
    email: "",
    propertyAddress: "",
    town: "Worcester",
    emergencyType: "Water / Flood Extraction",
    description: "",
    shiftType: "weekday",
    technicianCount: 2,
    paymentMethod: "credit_card",
    agreeToTerms: false,
  });

  const [signatureData, setSignatureData] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<any | null>(null);

  // Check if returning from Stripe checkout
  useEffect(() => {
    if (sessionId) {
      setIsVerifying(true);
      fetch(
        `/api/emergency/contract/verify-session?session_id=${encodeURIComponent(
          sessionId
        )}&submission_id=${encodeURIComponent(submissionId || "")}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.submission) {
            setSuccessData({
              id: data.submission._id,
              companyName: data.submission.companyName,
              name: data.submission.name,
              phone: data.submission.phone,
              email: data.submission.email,
              propertyAddress: `${data.submission.propertyAddress}, ${data.submission.town}, MA`,
              totalAmount: data.submission.totalAmount,
              baseRate: data.submission.baseRate,
              processingFee: data.submission.processingFee,
              shiftType: data.submission.shiftType,
              technicianCount: data.submission.technicianCount,
              paymentMethod: data.submission.paymentMethod,
              signedAt: data.submission.signedAt
                ? new Date(data.submission.signedAt).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })
                : new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }),
              stripePaymentIntentId: data.submission.stripePaymentIntentId,
              stripeReceiptUrl: data.submission.stripeReceiptUrl,
              isDemo: sessionId.startsWith("demo_"),
            });
          } else {
            setErrorMessage(data.error || "Could not retrieve completed transaction.");
          }
        })
        .catch((err) => {
          console.error("Verification error:", err);
          setErrorMessage("Error verifying payment session. Please call (508) 890-1000.");
        })
        .finally(() => setIsVerifying(false));
    }
  }, [sessionId, submissionId]);

  // Dynamic calculations - Initial deposit is always for 2 Technicians ($475 weekday / $575 after-hours)
  const { baseRate, processingFee, feePercentageLabel, totalAmount, overtimeRates } = useMemo(() => {
    const base = RATES[formData.shiftType][2];
    let feeRate = 0.035;
    let feeLabel = "3.5% Card Surcharge";

    if (formData.paymentMethod === "debit_card") {
      feeRate = 0.015;
      feeLabel = "1.5% Debit Fee";
    } else if (formData.paymentMethod === "ach") {
      feeRate = 0.008;
      feeLabel = "0.8% ACH Surcharge";
    }

    const fee =
      formData.paymentMethod === "ach"
        ? Math.min(5.0, Math.round(base * feeRate * 100) / 100)
        : Math.round(base * feeRate * 100) / 100;

    const total = Math.round((base + fee) * 100) / 100;

    return {
      baseRate: base,
      processingFee: fee,
      feePercentageLabel: feeLabel,
      totalAmount: total,
      overtimeRates: OVERTIME_RATES[formData.shiftType],
    };
  }, [formData.shiftType, formData.paymentMethod]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.companyName.trim()) {
      setErrorMessage("Please enter Customer / Company Name.");
      return;
    }
    if (!formData.name.trim()) {
      setErrorMessage("Please enter Authorized Signer Name.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter a direct Callback Phone Number.");
      return;
    }
    if (!formData.propertyAddress.trim() || !formData.town.trim()) {
      setErrorMessage("Please enter the complete Service Location Address and Town.");
      return;
    }
    if (!signatureData) {
      setErrorMessage("Please provide your digital signature in Section 4 before proceeding to payment.");
      return;
    }
    if (!formData.agreeToTerms) {
      setErrorMessage("You must acknowledge and agree to the 4-hour minimum and travel time terms.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create Stripe Hosted Checkout Session
      const res = await fetch("/api/emergency/contract/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          signatureData,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to initialize Stripe payment session.");
      }

      if (data.url) {
        // Redirect customer to official Stripe Hosted Checkout
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned from payment server.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message || "An error occurred while connecting to Stripe. Please call (508) 890-1000."
      );
      setIsSubmitting(false);
    }
  };

  // VERIFYING STRIPE PAYMENT SPINNER VIEW
  if (isVerifying) {
    return (
      <div className="bg-white text-slate-900 rounded-3xl p-10 sm:p-14 shadow-2xl border border-slate-200 text-center space-y-5">
        <div className="w-14 h-14 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Verifying Stripe Authorization...
        </h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Please wait while we confirm your payment and notify on-call emergency field operations.
        </p>
      </div>
    );
  }

  // SUCCESS CONFIRMATION VIEW (AFTER SUCCESSFUL STRIPE PAYMENT)
  if (successData) {
    return (
      <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-500/30 space-y-6">
        {/* Banner */}
        <div className="text-center pb-8 border-b border-slate-200">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
            Contract Executed &bull; Paid via Stripe
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Emergency Dispatch Authorized
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto mt-2 leading-relaxed">
            Enterprise Cleaning Corporation field operations have received your signed contract and verified payment authorization. Our mobile rapid response crew is rolling.
          </p>
        </div>

        {/* Dispatch Order Card */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Work Order ID</span>
              <div className="text-base font-black text-slate-900 font-mono">
                #{successData.id.slice(-8).toUpperCase()}
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Paid Today</span>
              <div className="text-2xl font-black text-emerald-600">
                ${successData.totalAmount?.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Customer / Company</span>
              <div className="font-extrabold text-slate-900">{successData.companyName}</div>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Authorized Signer</span>
              <div className="font-bold text-slate-900">
                {successData.name} ({successData.phone})
              </div>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Service Location</span>
              <div className="font-bold text-slate-900">{successData.propertyAddress}</div>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Crew &amp; Shift</span>
              <div className="font-bold text-slate-900">
                {successData.technicianCount} Technicians &bull;{" "}
                {successData.shiftType === "weekday" ? "Weekday Job" : "Night/Weekend Job"}
              </div>
            </div>
          </div>

          {successData.stripePaymentIntentId && (
            <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 font-mono flex items-center justify-between flex-wrap gap-2">
              <span>Stripe Reference: {successData.stripePaymentIntentId}</span>
              {successData.stripeReceiptUrl && (
                <a
                  href={successData.stripeReceiptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>View Stripe Receipt</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Important Terms Reminder */}
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
          <div className="font-bold text-sm flex items-center gap-1.5 text-blue-950">
            <Info className="w-4 h-4 text-blue-600" />
            Dispatch &amp; Billing Notes:
          </div>
          <p>
            &bull; <strong>Minimum Charge:</strong> Four-hour minimum charge applies even if work completes sooner.
          </p>
          <p>
            &bull; <strong>Travel Time:</strong> Time starts when technicians leave our West Boylston office (99 Hartwell St) and includes return travel.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => window.print()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
          >
            <Printer className="w-4 h-4" />
            <span>Print Work Order / Contract</span>
          </button>

          <a
            href="tel:5088901000"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E31837] text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-[#FFE800]" />
            <span>Call Operations: 508-890-1000</span>
          </a>
        </div>
      </div>
    );
  }

  // CONTRACT FORM VIEW
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Cancelled Banner if user returned from cancelling checkout */}
      {isCancelled && (
        <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-900 text-sm font-semibold flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <strong>Stripe Checkout Cancelled:</strong> Your payment was not processed. Your form details are preserved below — please review and proceed to Stripe when ready to dispatch crew.
          </div>
        </div>
      )}

      {/* Contract Header Card */}
      <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Top Header Row with Logo and Address */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 border-b border-slate-200 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            <div className="relative w-44 h-16 shrink-0">
              <Image
                src="/images/ecc-new-logo.png"
                alt="Enterprise Cleaning Corporation"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs sm:text-sm font-extrabold tracking-wider text-[#003B7A] uppercase">
                Enterprise Cleaning Corporation
              </div>
              <div className="text-xs text-slate-500 font-medium">
                99 Hartwell Street, West Boylston, MA 01583
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E31837] text-xs font-black uppercase tracking-wider border border-red-200">
              <Clock className="w-3.5 h-3.5" /> 24/7 Rapid Response
            </span>
            <div className="text-xs font-bold text-slate-600">
              Hotline: <a href="tel:5088901000" className="text-[#003B7A] underline font-black">508-890-1000</a>
            </div>
          </div>
        </div>

        {/* Contract Title Banner */}
        <div className="pt-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            Emergency Services Contract &amp; Authorization
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-2xl mx-auto">
            Authorize dispatch of emergency technicians for water damage, flood extraction, sewage cleanup, and disaster recovery.
          </p>
        </div>
      </div>

      {/* Section 1: Customer & Service Details */}
      <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-200 space-y-6">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
          <Building2 className="w-5 h-5 text-[#003B7A]" />
          <h2 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-900">
            1. Customer &amp; Service Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Customer / Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="e.g. Acme Property Management LLC"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Authorized Contact Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Legal Name"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Signer Official Title *
            </label>
            <input
              type="text"
              name="signerTitle"
              required
              value={formData.signerTitle}
              onChange={handleInputChange}
              placeholder="e.g. Property Manager, Facility Director, Owner"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Direct Phone Number (24/7 Callback) *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(508) 555-0123"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Email Address (For Signed Copy &amp; Receipt)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@company.com"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              City / Town (Central MA Zone) *
            </label>
            <input
              type="text"
              name="town"
              required
              value={formData.town}
              onChange={handleInputChange}
              placeholder="e.g. Worcester, West Boylston, Shrewsbury"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Incident Property Street Address *
            </label>
            <input
              type="text"
              name="propertyAddress"
              required
              value={formData.propertyAddress}
              onChange={handleInputChange}
              placeholder="e.g. 100 Main Street, Suite 400"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Nature of Emergency &amp; Scope of Work Requested
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what occurred (e.g. pipe burst on 2nd floor, water leaking into server room, sewage backup, need urgent extraction)..."
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#003B7A] focus:outline-none text-sm font-medium transition-all"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Shift Schedule & Rates */}
      <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-200 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-[#003B7A]/10 text-[#003B7A] flex items-center justify-center font-black text-sm">
              $
            </span>
            <h2 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-900">
              2. Shift Schedule &amp; Authorized Rates
            </h2>
          </div>
          <span className="self-start sm:self-auto text-xs font-bold text-[#003B7A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Official Contract Rates
          </span>
        </div>

        {/* Shift Type Toggle */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Dispatch Shift Window:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, shiftType: "weekday" }))}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                formData.shiftType === "weekday"
                  ? "bg-blue-50/90 border-[#003B7A] ring-2 ring-[#003B7A] shadow-md"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#003B7A] uppercase tracking-wider">
                  Standard Shift
                </span>
                {formData.shiftType === "weekday" && (
                  <CheckCircle2 className="w-5 h-5 text-[#003B7A]" />
                )}
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-2">
                Weekday (Until 10 PM)
              </div>
              <div className="text-xs text-slate-600 mt-2 pt-2 border-t border-slate-200/80">
                Additional time beyond 4 hrs: <strong>$75.00/tech/hr</strong> ($18.75/15-min)
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, shiftType: "after_8pm_weekend" }))}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                formData.shiftType === "after_8pm_weekend"
                  ? "bg-amber-50/90 border-amber-600 ring-2 ring-amber-600 shadow-md"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                  Overnight &bull; Weekend
                </span>
                {formData.shiftType === "after_8pm_weekend" && (
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                )}
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-2">
                Starting After 8 PM &amp; Weekends
              </div>
              <div className="text-xs text-slate-600 mt-2 pt-2 border-t border-amber-200/80">
                Additional time beyond 4 hrs: <strong>$95.00/tech/hr</strong> ($23.75/15-min)
              </div>
            </button>
          </div>
        </div>

        {/* Crew Size & Pricing Schedule with Clean Gapping & In-Card Badges */}
        <div className="space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              Crew Sizing &amp; Contractual Rates (4-Hour Minimum):
            </label>
            <span className="self-start sm:self-auto text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              Initial Deposit = 2 Techs Only
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* 2 Technicians - Active Charge Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-2 border-emerald-500 shadow-xl ring-4 ring-emerald-500/10 flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-800 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Charged Today
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                    Deposit
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-slate-300">
                    2 Technicians Dispatch
                  </div>
                  <div className="text-3xl sm:text-4xl font-black mt-1.5 text-[#FFE800] tracking-tight">
                    ${RATES[formData.shiftType][2].toFixed(2)}
                  </div>
                  <div className="text-xs text-emerald-300 font-semibold mt-1">
                    Active Initial Crew Authorization
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-3 mt-4 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                Covers first 4 hours portal-to-portal
              </div>
            </div>

            {/* 3 Technicians - Contract Reference Rate */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 hover:bg-slate-100/80 transition-all text-slate-900 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-200 mb-3.5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    Contract Rate
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    4-Hour Min
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                    3 Technicians
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mt-1.5 text-slate-800 tracking-tight">
                    ${RATES[formData.shiftType][3].toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Standard Contract Rate
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-200 pt-3 mt-4 text-center sm:text-left">
                Official Contract Schedule
              </div>
            </div>

            {/* 4 Technicians - Contract Reference Rate */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 hover:bg-slate-100/80 transition-all text-slate-900 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-200 mb-3.5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    Contract Rate
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    4-Hour Min
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                    4 Technicians
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mt-1.5 text-slate-800 tracking-tight">
                    ${RATES[formData.shiftType][4].toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Standard Contract Rate
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-200 pt-3 mt-4 text-center sm:text-left">
                Official Contract Schedule
              </div>
            </div>
          </div>

          {/* Explanation Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-xs sm:text-sm text-blue-950 flex items-start gap-3 leading-relaxed font-medium">
            <span className="text-blue-600 font-black text-base shrink-0 mt-0.5">ℹ️</span>
            <div className="space-y-1">
              <div className="font-bold text-blue-950 text-xs uppercase tracking-wider">
                Transparent Crew Sizing Policy:
              </div>
              <p className="text-slate-700 text-xs sm:text-sm">
                Your card is charged today strictly for the <strong>2-technician initial crew deposit (${RATES[formData.shiftType][2].toFixed(2)})</strong>. Once on site, our certified supervisors assess the severity and square footage of the damage. If an expanded crew (3 or 4 technicians) is required to swiftly mitigate loss, the pre-authorized contract rates above will govern final billing.
              </p>
            </div>
          </div>
        </div>

        {/* Contract Legal Clauses Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2 leading-relaxed">
          <div className="font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            Mandatory Contract Terms (As Stated in Contract):
          </div>
          <p>
            &bull; <strong>Four-hour minimum charges:</strong> The minimum charge applies even if the work is completed in less than four hours.
          </p>
          <p>
            &bull; <strong>Travel Time:</strong> Time starts when the technicians leave our office at 99 Hartwell Street, West Boylston, MA 01583. Travel to the service location and return travel to our West Boylston office both count toward billable hours, including the initial four-hour period.
          </p>
        </div>
      </div>

      {/* Section 3: Payment Method & Processing Surcharge */}
      <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-200 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
          <div className="flex items-center gap-2.5">
            <CreditCard className="w-5 h-5 text-[#003B7A]" />
            <h2 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-900">
              3. Payment Method &amp; Processing Surcharge
            </h2>
          </div>
          <span className="self-start sm:self-auto text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-600" /> Stripe 256-Bit SSL Encrypted
          </span>
        </div>

        {/* Payment Method Selector */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Method of Payment:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { id: "credit_card", label: "Credit Card", fee: "3.5% Surcharge", icon: "💳" },
              { id: "debit_card", label: "Debit Card", fee: "1.5% Surcharge", icon: "💳" },
              { id: "ach", label: "ACH Bank Transfer", fee: "0.8% (Capped $5)", icon: "🏦" },
            ].map((method) => {
              const isSelected = formData.paymentMethod === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      paymentMethod: method.id as FormState["paymentMethod"],
                    }))
                  }
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-blue-500"
                      : "bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{method.icon}</span>
                    <span
                      className={`text-[11px] font-black uppercase px-2 py-0.5 rounded ${
                        isSelected ? "bg-blue-900/60 text-[#00B8FF]" : "bg-slate-200/80 text-slate-600"
                      }`}
                    >
                      {method.fee}
                    </span>
                  </div>
                  <div className="text-sm font-black mt-2">{method.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Calculation Summary */}
        <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-900 text-white space-y-3.5 shadow-xl">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Authorization &amp; Billing Breakdown:
          </div>
          <div className="flex items-center justify-between text-sm sm:text-base">
            <span className="text-slate-300">
              Initial Crew Deposit (2 Technicians &bull; 4-Hr Minimum):
            </span>
            <span className="font-bold text-white">${baseRate.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm sm:text-base">
            <span className="text-slate-300">
              Payment Processing Fee ({feePercentageLabel}):
            </span>
            <span className="font-bold text-amber-300">+${processingFee.toFixed(2)}</span>
          </div>
          <div className="pt-3.5 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-lg sm:text-xl font-black">
            <span className="text-white">TOTAL AUTHORIZED TODAY:</span>
            <span className="text-[#FFE800] text-2xl sm:text-3xl font-mono">${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* Stripe Hosted Gateway Explanation Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-start gap-3.5">
          <div className="size-10 rounded-xl bg-[#003B7A] text-white flex items-center justify-center shrink-0 shadow-sm font-black text-sm">
            S
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <span>Secure Stripe Hosted Gateway</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                PCI-DSS Level 1
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              When you submit this agreement, you will be taken directly to Stripe&apos;s encrypted payment gateway. You can securely pay via <strong>Credit Card, Debit Card, Apple Pay, Google Pay, or US Bank Transfer</strong>. Once payment is confirmed, emergency trucks are dispatched.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Legal Authorization & Electronic Signature */}
      <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-200 space-y-6">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
          <FileCheck className="w-5 h-5 text-[#003B7A]" />
          <h2 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-900">
            4. Authorization to Perform Emergency Services
          </h2>
        </div>

        {/* Legal Text from DocuSign Contract */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          <p className="font-semibold text-slate-900 mb-2">Legal Affirmation &amp; Agreement:</p>
          &ldquo;By signing below, I authorize <strong>Enterprise Cleaning Corporation</strong> to perform the emergency services described above. I confirm that I am authorized to request these services on behalf of the customer identified above and agree to the minimum charge, billing start time, travel time policy, and additional hourly charges stated in this contract.&rdquo;
        </div>

        {/* Signature Pad Component */}
        <SignaturePad
          onSignatureChange={setSignatureData}
          signerName={formData.name}
        />

        {/* Mandatory Agreement Checkbox */}
        <label className="flex items-start gap-3.5 cursor-pointer p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-200/80">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 rounded text-[#003B7A] focus:ring-[#003B7A] border-slate-300 shrink-0 cursor-pointer"
          />
          <span className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
            I confirm I am authorized to bind payment for this company and agree to the initial 2-technician deposit of ${baseRate.toFixed(2)} + processing fee (Total: ${totalAmount.toFixed(2)}). I acknowledge and accept the contractual 3 &amp; 4 technician rates and overtime terms if an expanded crew is determined necessary upon on-site evaluation.
          </span>
        </label>
      </div>

      {/* Error Message Display */}
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-bold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit / Dispatch CTA Button */}
      <div className="text-center space-y-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl bg-[#E31837] hover:bg-red-700 active:scale-95 text-white font-black text-base sm:text-xl transition-all shadow-xl hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
              <span>Connecting to Stripe Gateway...</span>
            </>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              <span>Proceed to Secure Stripe Payment — Pay ${totalAmount.toFixed(2)}</span>
              <ArrowRight className="w-6 h-6" />
            </>
          )}
        </button>

        <p className="text-xs text-slate-600 font-medium">
          Once authorized and paid, Enterprise Cleaning dispatch coordinates with on-call supervisors immediately. Questions? Call <a href="tel:5088901000" className="underline font-bold text-[#003B7A] hover:text-[#E31837]">508-890-1000</a>.
        </p>
      </div>
    </form>
  );
}
