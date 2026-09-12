"use client";

import React, { useState, useRef } from "react";
import { 
  Building2, 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  FileText, 
  Calendar, 
  HardHat, 
  ShieldCheck, 
  Clock, 
  X,
  Send,
  PlusCircle,
  FileCheck,
  ExternalLink
} from "lucide-react";

export function GcBidCenter() {
  const [activeTab, setActiveTab] = useState<"projectBid" | "bidList">("projectBid");
  
  // Project Bid Form State
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    role: "", // Estimator / Project Manager
    email: "",
    phone: "",
    projectName: "",
    projectAddress: "",
    city: "",
    state: "MA",
    approxSqFt: "",
    projectType: "New Construction",
    cleaningPhases: ["Final Construction Clean"] as string[],
    bidDueDate: "",
    cleaningStartDate: "",
    ownerTurnoverDate: "",
    prevailingWage: "Unsure",
    unionRequirement: "No",
    nightWeekendWork: "Unsure",
    specialSecurity: "",
    projectNotes: "",
  });

  // Uploaded files & their Cloudinary URLs
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: { name: string; size: number; url?: string } | null }>({
    plans: null,
    scope: null,
    specs: null,
    bidDocs: null,
  });

  const [uploadingKey, setUploadingKey] = useState<string | null>(null);

  // Bid list form state (Secondary CTA)
  const [bidListData, setBidListData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    territory: "Massachusetts & Greater Boston",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const cleaningOptions = [
    "Rough Clean",
    "Final Construction Clean",
    "Final Touch-Up / Punch List",
    "Window Cleaning",
    "Carpet Cleaning",
    "Floor Care",
    "Tile & Grout",
    "Other",
  ];

  const projectTypeOptions = [
    "New Construction",
    "Renovation",
    "Tenant Fit-Out",
    "Addition",
    "Other",
  ];

  const handleCleaningPhaseToggle = (phase: string) => {
    setFormData((prev) => {
      const exists = prev.cleaningPhases.includes(phase);
      if (exists) {
        return {
          ...prev,
          cleaningPhases: prev.cleaningPhases.filter((p) => p !== phase),
        };
      } else {
        return {
          ...prev,
          cleaningPhases: [...prev.cleaningPhases, phase],
        };
      }
    });
  };

  const handleFileSelect = async (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadingKey(key);

      try {
        const body = new FormData();
        body.append("file", file);
        body.append("folder", "enterprise_gc_bids");

        const res = await fetch("/api/upload", {
          method: "POST",
          body,
        });

        if (res.ok) {
          const data = await res.json();
          setUploadedFiles((prev) => ({
            ...prev,
            [key]: {
              name: file.name,
              size: file.size,
              url: data.url,
            },
          }));
        } else {
          // If upload fails, still track file locally for note logging
          setUploadedFiles((prev) => ({
            ...prev,
            [key]: {
              name: file.name,
              size: file.size,
            },
          }));
        }
      } catch (error) {
        console.error("Upload error:", error);
        setUploadedFiles((prev) => ({
          ...prev,
          [key]: {
            name: file.name,
            size: file.size,
          },
        }));
      } finally {
        setUploadingKey(null);
      }
    }
  };

  const handleRemoveFile = (key: string) => {
    setUploadedFiles((prev) => ({ ...prev, [key]: null }));
  };

  const handleSubmitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const fileEntries = Object.entries(uploadedFiles)
        .filter(([_, f]) => f !== null)
        .map(([key, f]) => {
          if (f?.url) {
            return `• ${key.toUpperCase()}: ${f.name} -> ${f.url}`;
          }
          return `• ${key.toUpperCase()}: ${f?.name}`;
        });

      const fileListStr = fileEntries.length > 0 ? fileEntries.join("\n") : "None uploaded";

      const structuredMessage = `
--- GC POST-CONSTRUCTION BID SUBMISSION ---
GC / Company: ${formData.company}
Contact Name: ${formData.contactName} (${formData.role || "Role Not Specified"})
Email: ${formData.email} | Phone: ${formData.phone}
Project: ${formData.projectName}
Location: ${formData.projectAddress}, ${formData.city}, ${formData.state}
Approx Sq Ft: ${formData.approxSqFt || "N/A"}
Project Type: ${formData.projectType}
Cleaning Required: ${formData.cleaningPhases.join(", ") || "None specified"}

SCHEDULE & MILESTONES:
- Bid Due Date: ${formData.bidDueDate || "Flexible"}
- Anticipated Cleaning Start: ${formData.cleaningStartDate || "TBD"}
- Anticipated Owner Turnover: ${formData.ownerTurnoverDate || "TBD"}

COMPLIANCE & CONDITIONS:
- Prevailing Wage: ${formData.prevailingWage}
- Union Requirement: ${formData.unionRequirement}
- Night / Weekend Work: ${formData.nightWeekendWork}
- Special Security / Site Protocols: ${formData.specialSecurity || "Standard"}

ATTACHED DRAWINGS & BID DOCUMENTS:
${fileListStr}

PROJECT NOTES:
${formData.projectNotes || "No additional notes provided"}
      `.trim();

      const payload = {
        firstName: formData.contactName.split(" ")[0] || "Valued",
        lastName: formData.contactName.split(" ").slice(1).join(" ") || "GC Partner",
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        department: "Operations & Estimating",
        service: "GC Post-Construction Bid Center",
        message: structuredMessage,
        // MongoDB Document Fields (Stored permanently in database)
        projectName: formData.projectName,
        projectAddress: formData.projectAddress,
        projectCity: formData.city,
        projectState: formData.state,
        projectType: formData.projectType,
        cleaningPhases: formData.cleaningPhases,
        approxSqFt: formData.approxSqFt,
        bidDueDate: formData.bidDueDate,
        cleaningStartDate: formData.cleaningStartDate,
        ownerTurnoverDate: formData.ownerTurnoverDate,
        prevailingWage: formData.prevailingWage,
        unionRequirement: formData.unionRequirement,
        nightWeekendWork: formData.nightWeekendWork,
        uploadedDocuments: uploadedFiles,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed. Please try again or call us at 508-890-1000.");
      }

      setSubmitStatus("success");
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "An error occurred while submitting your bid package.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitBidList = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const structuredMessage = `
--- ADD ENTERPRISE TO SUBCONTRACTOR BID LIST REQUEST ---
GC / Construction Firm: ${bidListData.company}
Contact Name: ${bidListData.contactName}
Email: ${bidListData.email} | Phone: ${bidListData.phone}
Target Region / Territory: ${bidListData.territory}
Notes / Trade Scope: ${bidListData.notes || "Add Enterprise Cleaning Corporation to active vendor/subcontractor master bid list."}
      `.trim();

      const payload = {
        firstName: bidListData.contactName.split(" ")[0] || "GC",
        lastName: bidListData.contactName.split(" ").slice(1).join(" ") || "Partner",
        email: bidListData.email,
        phone: bidListData.phone,
        company: bidListData.company,
        department: "Sales & Estimating",
        service: "Subcontractor Bid List Registration",
        message: structuredMessage,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to register at this time. Please email Alex directly or call 508-890-1000.");
      }

      setSubmitStatus("success");
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="gc-bid-center" ref={formRef} className="relative scroll-mt-24">
      {/* Bid Center Container */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden text-slate-800">
        
        {/* Navy Header Banner with Responsive Flex Layout */}
        <div className="bg-[#003057] p-5 sm:p-8 lg:p-10 text-white border-b-4 border-[#0090c8]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFE800] text-xs font-bold uppercase tracking-wider mb-3">
                <HardHat className="w-3.5 h-3.5" /> GC Post-Construction Bid Center
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Have a Project Out to Bid?
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm lg:text-base mt-2 leading-relaxed">
                Send Enterprise Cleaning Corporation your project information, drawings, or cleaning specifications. We provide clear, comprehensive bids matched to your construction closeout schedule.
              </p>
            </div>

            {/* Tab Switcher - Fully Responsive Grid on Mobile, Stacking nicely without cut-off */}
            <div className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-white/15 shrink-0">
              <button
                type="button"
                onClick={() => { setActiveTab("projectBid"); setSubmitStatus("idle"); }}
                className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-center transition-all ${
                  activeTab === "projectBid"
                    ? "bg-[#FFE800] text-slate-950 shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Submit Project for Bid
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab("bidList"); setSubmitStatus("idle"); }}
                className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-center transition-all ${
                  activeTab === "bidList"
                    ? "bg-[#FFE800] text-slate-950 shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                Add to Master Bid List
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 lg:p-10">
          {/* Success State Notification */}
          {submitStatus === "success" && (
            <div className="mb-8 p-6 sm:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {activeTab === "projectBid" ? "Bid Package Received!" : "Added to Subcontractor Bid List!"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
                {activeTab === "projectBid"
                  ? "Our Massachusetts estimating team has received your project details. We will review drawings and specifications, coordinate any requested walkthrough, and deliver a detailed proposal promptly."
                  : "Enterprise Cleaning Corporation is now registered on your subcontractor list. We look forward to receiving future Invitations to Bid (ITBs)."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#0090c8]" /> Fast 24-48h Estimating Turnaround</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#0090c8]" /> Direct Superintendent Coordination</span>
                <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#0090c8]" /> Massachusetts In-House Teams</span>
              </div>
              <button
                type="button"
                onClick={() => setSubmitStatus("idle")}
                className="mt-6 text-xs text-[#0090c8] underline font-bold hover:text-[#003057]"
              >
                Submit another project
              </button>
            </div>
          )}

          {/* Error State Notification */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* TAB 1: SUBMIT PROJECT FOR BID */}
          {activeTab === "projectBid" && submitStatus !== "success" && (
            <form onSubmit={handleSubmitProject} className="space-y-8">
              {/* Step 1: GC & Estimator Contact */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0090c8] text-white text-xs font-bold">1</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Contractor & Contact Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      General Contractor / Company <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Walsh Brothers, Consigli, Shawmut"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white focus:ring-1 focus:ring-[#0090c8] text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Contact Name <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white focus:ring-1 focus:ring-[#0090c8] text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Estimator / Project Manager / Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Senior Estimator, Lead Super"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@contractor.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white text-xs sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(508) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Project Location & Specifications */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0090c8] text-white text-xs font-bold">2</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Project Details & Location</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Name <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Tech Park Fit-Out, Westborough Medical"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white text-xs sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Address <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street Address"
                      value={formData.projectAddress}
                      onChange={(e) => setFormData({ ...formData, projectAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      City <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Worcester, Marlborough"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      State <span className="text-[#0090c8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Approximate Square Footage
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 25,000 sq. ft."
                      value={formData.approxSqFt}
                      onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0090c8]"
                    >
                      {projectTypeOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Cleaning Required (Phases & Scope) */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0090c8] text-white text-xs font-bold">3</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Cleaning Required (Select all that apply)</h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Enterprise coordinates multi-phase cleaning mobilizations around your construction milestones.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {cleaningOptions.map((opt) => {
                    const selected = formData.cleaningPhases.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleCleaningPhaseToggle(opt)}
                        className={`p-3 rounded-xl text-xs font-bold text-left border transition-all flex items-center justify-between min-h-[46px] ${
                          selected
                            ? "bg-sky-50 border-[#0090c8] text-[#003057] ring-1 ring-[#0090c8]"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span>{opt}</span>
                        {selected && <CheckCircle2 className="w-4 h-4 text-[#0090c8] shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Schedule & Milestones */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0090c8] text-white text-xs font-bold">4</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Schedule & Anticipated Milestones</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0090c8]" /> Bid Due Date
                    </label>
                    <input
                      type="date"
                      value={formData.bidDueDate}
                      onChange={(e) => setFormData({ ...formData, bidDueDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0090c8]" /> Anticipated Cleaning Start Date
                    </label>
                    <input
                      type="date"
                      value={formData.cleaningStartDate}
                      onChange={(e) => setFormData({ ...formData, cleaningStartDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0090c8]" /> Anticipated Owner Turnover Date
                    </label>
                    <input
                      type="date"
                      value={formData.ownerTurnoverDate}
                      onChange={(e) => setFormData({ ...formData, ownerTurnoverDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Step 5: Compliance & Site Conditions */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0090c8] text-white text-xs font-bold">5</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Prevailing Wage & Site Requirements</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Prevailing Wage Requirement?
                    </label>
                    <div className="flex items-center gap-3">
                      {["Yes", "No", "Unsure"].map((val) => (
                        <label key={val} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium cursor-pointer">
                          <input
                            type="radio"
                            name="prevailingWage"
                            value={val}
                            checked={formData.prevailingWage === val}
                            onChange={(e) => setFormData({ ...formData, prevailingWage: e.target.value })}
                            className="text-[#0090c8] focus:ring-[#0090c8]"
                          />
                          {val}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Union Requirement?
                    </label>
                    <div className="flex items-center gap-3">
                      {["Yes", "No", "Unsure"].map((val) => (
                        <label key={val} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium cursor-pointer">
                          <input
                            type="radio"
                            name="unionRequirement"
                            value={val}
                            checked={formData.unionRequirement === val}
                            onChange={(e) => setFormData({ ...formData, unionRequirement: e.target.value })}
                            className="text-[#0090c8] focus:ring-[#0090c8]"
                          />
                          {val}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Night / Weekend Work Required?
                    </label>
                    <div className="flex items-center gap-3">
                      {["Yes", "No", "Unsure"].map((val) => (
                        <label key={val} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium cursor-pointer">
                          <input
                            type="radio"
                            name="nightWeekendWork"
                            value={val}
                            checked={formData.nightWeekendWork === val}
                            onChange={(e) => setFormData({ ...formData, nightWeekendWork: e.target.value })}
                            className="text-[#0090c8] focus:ring-[#0090c8]"
                          />
                          {val}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Special Security or Site Requirements (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., CORI checks, badge clearance, OSHA 10, PPE requirements"
                    value={formData.specialSecurity}
                    onChange={(e) => setFormData({ ...formData, specialSecurity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Step 6: Document Upload Zones - Connected to Cloudinary Storage */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0090c8] text-white text-xs font-bold">6</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Upload Plans, Scopes & Specifications</h3>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">PDF, DWG, DOCX, ZIP, Images</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Files are securely stored and directly shared with our commercial estimating team for review:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { key: "plans", label: "Upload Plans", hint: "Architectural Drawings" },
                    { key: "scope", label: "Upload Scope of Work", hint: "Scope & Addenda" },
                    { key: "specs", label: "Upload Cleaning Specs", hint: "Division 01 Specs" },
                    { key: "bidDocs", label: "Upload Bid Documents", hint: "ITB & Project RFPs" },
                  ].map(({ key, label, hint }) => {
                    const file = uploadedFiles[key];
                    const isUploading = uploadingKey === key;

                    return (
                      <div
                        key={key}
                        className={`relative border-2 border-dashed rounded-2xl p-4 text-center transition-all flex flex-col items-center justify-center min-h-[125px] ${
                          file
                            ? "border-[#0090c8] bg-sky-50/70"
                            : "border-slate-300 bg-slate-50/50 hover:border-[#0090c8] hover:bg-sky-50/30"
                        }`}
                      >
                        {isUploading ? (
                          <div className="flex flex-col items-center justify-center">
                            <Loader2 className="w-6 h-6 text-[#0090c8] animate-spin mb-1.5" />
                            <span className="text-xs font-bold text-slate-700">Uploading file...</span>
                          </div>
                        ) : file ? (
                          <div className="w-full flex flex-col items-center">
                            <FileCheck className="w-6 h-6 text-[#0090c8] mb-1.5" />
                            <span className="text-xs font-bold text-slate-900 truncate max-w-[170px]" title={file.name}>{file.name}</span>
                            <span className="text-[10px] text-slate-500 mt-0.5">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB • {file.url ? "Stored in Cloud" : "Attached"}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(key)}
                              className="mt-2 text-[11px] text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                            >
                              <X className="w-3 h-3" /> Remove
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                            <UploadCloud className="w-6 h-6 text-[#0090c8] mb-1.5" />
                            <span className="text-xs font-bold text-slate-800">{label}</span>
                            <span className="text-[10px] text-slate-500 mt-0.5">{hint}</span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileSelect(key, e)}
                            />
                          </label>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 7: Project Notes & Submission */}
              <div className="pt-6 border-t border-slate-200">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Project Notes & Closeout Instructions
                </label>
                <textarea
                  rows={4}
                  placeholder="Include specific milestone details, phased turnover sequences, trade finish challenges, or site access instructions..."
                  value={formData.projectNotes}
                  onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0090c8] focus:bg-white text-xs sm:text-sm mb-6"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Confidential. All uploaded drawings, specifications and bid proposals are securely stored and encrypted.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || uploadingKey !== null}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFE800] text-slate-950 font-extrabold text-sm sm:text-base tracking-wide hover:bg-yellow-300 shadow-lg shadow-yellow-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting Project...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> SUBMIT PROJECT FOR REVIEW
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* TAB 2: SECONDARY CTA - ADD TO SUBCONTRACTOR BID LIST */}
          {activeTab === "bidList" && submitStatus !== "success" && (
            <form onSubmit={handleSubmitBidList} className="space-y-6 max-w-3xl">
              <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200">
                <h4 className="text-sm font-bold text-[#003057] mb-1">Don't Have a Current Active Project?</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Add Enterprise Cleaning Corporation to your master subcontractor bid list. When future commercial construction opportunities arise across Massachusetts, our team will receive your Invitation to Bid (ITB).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    General Contractor / Construction Firm <span className="text-[#0090c8]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Company Name"
                    value={bidListData.company}
                    onChange={(e) => setBidListData({ ...bidListData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Estimating / Procurement Contact <span className="text-[#0090c8]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={bidListData.contactName}
                    onChange={(e) => setBidListData({ ...bidListData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Bid Distribution Email <span className="text-[#0090c8]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="bids@contractor.com"
                    value={bidListData.email}
                    onChange={(e) => setBidListData({ ...bidListData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone Number <span className="text-[#0090c8]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(508) 000-0000"
                    value={bidListData.phone}
                    onChange={(e) => setBidListData({ ...bidListData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Primary Geographical Service Territory
                </label>
                <input
                  type="text"
                  value={bidListData.territory}
                  onChange={(e) => setBidListData({ ...bidListData, territory: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Additional Vendor Requirements or Trade Portal Link (BuildingConnected, Procore, etc.)
                </label>
                <textarea
                  rows={3}
                  placeholder="Include vendor portal details, qualification forms, or estimating notes..."
                  value={bidListData.notes}
                  onChange={(e) => setBidListData({ ...bidListData, notes: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-xl bg-[#FFE800] text-slate-950 font-extrabold text-sm sm:text-base tracking-wide hover:bg-yellow-300 shadow-lg shadow-yellow-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Adding to Directory...
                    </>
                  ) : (
                    <>
                      <PlusCircle className="w-4 h-4" /> ADD ENTERPRISE TO BID LIST
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
