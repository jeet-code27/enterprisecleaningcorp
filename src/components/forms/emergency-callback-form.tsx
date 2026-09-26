"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  UploadCloud,
  X,
  ShieldCheck,
  Building2,
  MapPin,
  FileCheck,
  Droplets,
  Loader2,
} from "lucide-react";

const EMERGENCY_TYPES = [
  "Water extraction and drying",
  "Urgent bathroom cleanup",
  "Unexpected spills",
  "Emergency commercial deep cleaning & floor care",
  "We coordinate with insurance companies",
  "Other Urgent Facility Cleanup",
];

export function EmergencyCallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyAddress: "",
    town: "",
    emergencyType: "",
    description: "",
    email: "",
    companyName: "",
  });

  const [photos, setPhotos] = useState<string[]>([]);
  const [uploadingPhotos, setUploadingPhotos] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingPhotos(true);
    setErrorMessage("");

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const bodyData = new FormData();
        bodyData.append("file", file);
        bodyData.append("folder", "emergency_requests");

        const res = await fetch("/api/upload", {
          method: "POST",
          body: bodyData,
        });

        if (!res.ok) {
          throw new Error("Failed to upload image");
        }

        const data = await res.json();
        return data.url as string;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      setPhotos((prev) => [...prev, ...uploadedUrls.filter(Boolean)]);
    } catch (err: any) {
      console.error("Photo upload error:", err);
      setErrorMessage("Could not upload one or more photos. You can still submit the form without them.");
    } finally {
      setUploadingPhotos(false);
    }
  };

  const removePhoto = (indexToRemove: number) => {
    setPhotos((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.propertyAddress.trim() ||
      !formData.town.trim() ||
      !formData.emergencyType.trim() ||
      !formData.description.trim()
    ) {
      setErrorMessage("Please fill in all required fields and select what service you need.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/emergency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          photos,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit emergency callback request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please call our hotline immediately at (508) 890-1000 Option 1.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-red-500 shadow-2xl text-center space-y-6 animate-fadeIn">
        <div className="size-20 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center mx-auto border-2 border-red-500/30">
          <CheckCircle2 className="size-10" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider">
            🚨 Emergency Request Dispatched
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            We Have Received Your Emergency Request!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            Our on-call operations supervisor has been alerted. We are checking crew and fleet availability right now and will call your phone number:
          </p>
          <p className="text-xl font-black text-red-600">{formData.phone}</p>
        </div>

        {/* 3 Steps Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[10px] font-black text-red-600 uppercase tracking-widest block">Step 1</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Availability Check &amp; Call</p>
            <p className="text-[11px] text-slate-500 mt-1">Our on-call supervisor will call your callback number in minutes.</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">Step 2</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">DocuSign Authorization</p>
            <p className="text-[11px] text-slate-500 mt-1">Quick digital authorization form sent to start recovery work.</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">Step 3</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Fleet Dispatch</p>
            <p className="text-[11px] text-slate-500 mt-1">Equipped mobile van and certified cleanup crew mobilized.</p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:5088901000"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#E31837] text-white hover:bg-red-700 font-black text-base shadow-xl transition-transform hover:scale-105"
          >
            <Phone className="size-5" />
            <span>Need Instant Verbal Contact? Call (508) 890-1000</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="emergency-form" className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-red-500/80 shadow-2xl relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 mb-2">
            <AlertTriangle className="size-3.5 text-red-600 animate-pulse" />
            <span className="text-xs font-black tracking-wider uppercase">
              Immediate Response Dispatch Queue
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Urgent Cleanup Callback Form
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Short 1-minute form for emergency dispatch. Our on-call crew responds immediately.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="size-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
            <Phone className="size-5 animate-bounce" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Direct Emergency Hotline
            </div>
            <a href="tel:5088901000" className="text-base font-black text-slate-900 hover:text-red-600">
              (508) 890-1000
            </a>
            <div className="text-[11px] font-bold text-red-600">24/7 Immediate Dispatch</div>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold mb-6 flex items-start gap-2.5">
          <AlertTriangle className="size-5 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Name & Phone (Required) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
              Callback Phone Number <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="tel"
                name="phone"
                required
                placeholder="(508) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              We will call this number immediately to confirm crew availability.
            </span>
          </div>
        </div>

        {/* Row 2: Property Address & Town (Required, Separated per user instruction) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-7">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
              Property Address <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                name="propertyAddress"
                required
                placeholder="Street address where cleanup is required"
                value={formData.propertyAddress}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="sm:col-span-5">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
              Town / City <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="town"
              required
              placeholder="e.g. Worcester, Westborough, etc."
              value={formData.town}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Row 3: Emergency Type (Required) */}
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
            Type of Emergency <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <select
              name="emergencyType"
              required
              value={formData.emergencyType}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all cursor-pointer ${
                formData.emergencyType ? "text-slate-900 font-black" : "text-slate-500 font-semibold"
              }`}
            >
              <option value="" disabled className="text-slate-400">
                Choose one...
              </option>
              {EMERGENCY_TYPES.map((type) => (
                <option key={type} value={type} className="text-slate-900 font-bold">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Brief Description (Required) */}
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
            Brief Description <span className="text-red-600">*</span>
          </label>
          <textarea
            name="description"
            required
            rows={3}
            placeholder="Briefly describe what happened (e.g. pipe burst on 2nd floor, approx 1,500 sq ft carpet wet, restroom drain overflow)..."
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Optional Section: Company & Email */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Optional Details (Skip if in a rush)
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Company / Facility Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="e.g. Apex Biotech, Central Medical"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Email Address <span className="text-slate-400 font-normal">(Optional — for DocuSign / Receipt)</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Optional Photos of Damage */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">
            Photos of Damage / Facility <span className="text-slate-400 font-normal">(Optional)</span>
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-bold text-slate-700 transition-colors">
              <UploadCloud className="size-4 text-slate-600" />
              <span>{uploadingPhotos ? "Uploading Photo..." : "Take Photo or Upload Files"}</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                disabled={uploadingPhotos}
                className="hidden"
              />
            </label>

            {uploadingPhotos && (
              <span className="text-xs text-red-600 font-semibold flex items-center gap-1.5 animate-pulse">
                <Loader2 className="size-3.5 animate-spin" /> Uploading to secure server...
              </span>
            )}
          </div>

          {photos.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {photos.map((url, index) => (
                <div key={index} className="relative size-16 rounded-xl overflow-hidden border border-slate-300 bg-slate-100 group">
                  <img src={url} alt={`Upload ${index + 1}`} className="size-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 p-0.5 rounded-full bg-black/70 text-white hover:bg-red-600 transition-colors"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button & Response Protocol */}
        <div className="pt-3 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#E31837] hover:bg-red-700 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                <span>Alerting On-Call Dispatcher...</span>
              </>
            ) : (
              <>
                <Send className="size-5" />
                <span>Submit Emergency Callback Request →</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-500 text-center font-medium">
            🔒 By submitting, you request an immediate callback from Enterprise Cleaning Corporation. We will check availability, send a DocuSign authorization agreement, and dispatch our crew.
          </p>
        </div>
      </form>
    </div>
  );
}
