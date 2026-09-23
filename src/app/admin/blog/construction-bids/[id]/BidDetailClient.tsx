"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Building2,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  FileText,
  Download,
  Eye,
  Trash2,
  HardHat,
  Printer,
  Copy,
  Check,
  ShieldCheck,
  ExternalLink,
  X,
  AlertTriangle,
  ZoomIn
} from "lucide-react";
import { ConstructionBidItem } from "../ConstructionBidsClient";

interface BidDetailClientProps {
  bid: ConstructionBidItem;
}

export function BidDetailClient({ bid: initialBid }: BidDetailClientProps) {
  const router = useRouter();
  const [bid, setBid] = useState<ConstructionBidItem>(initialBid);
  const [status, setStatus] = useState<string>(initialBid.status || "New");
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<{ url: string; name: string } | null>(null);

  const isImageFile = (filename: string, fileType?: string) => {
    if (fileType && fileType.startsWith("image/")) return true;
    const ext = filename.split(".").pop()?.toLowerCase();
    return ["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(ext || "");
  };

  const isPdfFile = (filename: string, fileType?: string) => {
    if (fileType === "application/pdf") return true;
    return filename.toLowerCase().endsWith(".pdf");
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdatingStatus(true);
    setStatus(newStatus);
    try {
      const res = await fetch(`/api/contact/${bid._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      setBid((prev) => ({ ...prev, status: newStatus }));
    } catch (err) {
      console.error("Status update error:", err);
      alert("Failed to update status. Please try again.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = confirm(
      "Are you sure you want to permanently delete this bid package?\n\nThis will also remove all uploaded drawings, blueprints, and files from Cloudinary storage."
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/contact/${bid._id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete bid");
      router.push("/admin/blog/construction-bids");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting bid package. Please try again.");
      setIsDeleting(false);
    }
  };

  const isProjectBid = bid.service === "GC Post-Construction Bid Center";
  const attachedFiles = bid.uploadedDocuments
    ? Object.entries(bid.uploadedDocuments).filter(([_, f]) => f !== null)
    : [];

  const getStatusColor = (s: string) => {
    switch (s.toLowerCase()) {
      case "new":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "contacted":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "in progress":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "quoted":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "closed":
        return "bg-slate-100 text-slate-800 border-slate-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const formattedDate = new Date(bid.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in duration-200">
      {/* ─── TOP ACTION BAR ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <Link
          href="/admin/blog/construction-bids"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to All Construction Bids
        </Link>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Status Dropdown */}
          <div className="flex items-center gap-2 bg-card border border-border px-3 py-1.5 rounded-xl shadow-sm">
            <span className="text-xs font-bold text-muted-foreground uppercase">Status:</span>
            <select
              value={status}
              disabled={isUpdatingStatus}
              onChange={(e) => handleStatusChange(e.target.value)}
              className={`text-xs font-bold px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${getStatusColor(
                status
              )}`}
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Quoted">Quoted</option>
              <option value="Closed">Closed</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          {/* Email Contractor */}
          <a
            href={`mailto:${bid.email}?subject=${encodeURIComponent(
              `Re: ${bid.projectName || "Post-Construction Cleaning"} - Bid Proposal`
            )}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-[#007aa8] transition-colors shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" /> Email Contractor
          </a>

          {/* Call Contractor */}
          {bid.phone && (
            <a
              href={`tel:${bid.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-card border border-border text-foreground text-xs font-bold hover:bg-muted transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" /> Call
            </a>
          )}

          {/* Print */}
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors text-xs font-medium shadow-sm"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" /> Print
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-bold transition-colors shadow-sm disabled:opacity-50"
            title="Delete Bid and All Files"
          >
            <Trash2 className="w-3.5 h-3.5" />
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>

      {/* ─── EXECUTIVE HEADER CARD ─── */}
      <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-black text-xs uppercase tracking-wider border border-brand-blue/20">
                <HardHat className="w-3.5 h-3.5 text-[#E31837]" />
                {isProjectBid ? "GC Post-Construction Takeoff" : "Subcontractor Vendor Registration"}
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusColor(status)}`}>
                {status}
              </span>
              <span className="text-xs text-muted-foreground">Received on {formattedDate}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
              {bid.projectName || "General Contractor Subcontractor Bid"}
            </h1>

            {bid.projectAddress || bid.projectCity ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>
                  {bid.projectAddress ? `${bid.projectAddress}, ` : ""}
                  {bid.projectCity || "City Unspecified"}, {bid.projectState || "MA"}
                </span>
              </div>
            ) : null}
          </div>

          {/* GC Company Badge */}
          <div className="bg-muted/50 border border-border p-4 rounded-xl flex items-center gap-4 min-w-[240px]">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">General Contractor</div>
              <div className="font-extrabold text-foreground text-base leading-tight">{bid.company || "Company N/A"}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{bid.firstName} {bid.lastName}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 4 HIGHLIGHT METRICS (PROJECT BIDS) ─── */}
      {isProjectBid && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Approximate Size</div>
            <div className="text-2xl font-black text-foreground">
              {bid.approxSqFt ? `${Number(bid.approxSqFt).toLocaleString()} sq ft` : "Not Specified"}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Project Type: <span className="font-bold text-foreground">{bid.projectType || "Commercial"}</span>
            </div>
          </div>

          <div className="bg-card p-5 rounded-2xl border border-red-200 bg-red-50/30 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Bid Due Date
            </div>
            <div className="text-2xl font-black text-red-600">
              {bid.bidDueDate || "Flexible"}
            </div>
            <div className="text-xs text-red-600/80 mt-1 font-medium">Critical Pricing Deadline</div>
          </div>

          <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-blue" /> Cleaning Start
            </div>
            <div className="text-2xl font-black text-foreground">
              {bid.cleaningStartDate || "TBD"}
            </div>
            <div className="text-xs text-muted-foreground mt-1 font-medium">Estimated On-Site Date</div>
          </div>

          <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Owner Turnover
            </div>
            <div className="text-2xl font-black text-emerald-700">
              {bid.ownerTurnoverDate || "TBD"}
            </div>
            <div className="text-xs text-muted-foreground mt-1 font-medium">Certificate of Occupancy</div>
          </div>
        </div>
      )}

      {/* ─── MAIN 2-COLUMN GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT COLUMN: Project Details, Compliance & Documents (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Cleaning Phases */}
          {isProjectBid && (
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Requested Cleaning Phases
              </h2>
              {bid.cleaningPhases && bid.cleaningPhases.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {bid.cleaningPhases.map((phase, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 text-[#003057] border border-sky-200 text-xs sm:text-sm font-bold shadow-sm"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-blue" /> {phase}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Standard Final Construction Clean</p>
              )}
            </div>
          )}

          {/* Site Compliance & Labor Conditions */}
          {isProjectBid && (
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Labor & Site Compliance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                  <div className="text-xs text-muted-foreground font-semibold">Prevailing Wage</div>
                  <div className="text-base font-black text-foreground mt-0.5">
                    {bid.prevailingWage || "Unsure / Open"}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                  <div className="text-xs text-muted-foreground font-semibold">Union Requirement</div>
                  <div className="text-base font-black text-foreground mt-0.5">
                    {bid.unionRequirement || "Non-Union / Open"}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                  <div className="text-xs text-muted-foreground font-semibold">Night / Weekend Shifts</div>
                  <div className="text-base font-black text-foreground mt-0.5">
                    {bid.nightWeekendWork || "Unsure"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Notes & Full Description */}
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-blue" /> Project Scope & Special Instructions
            </h2>
            <div className="bg-muted/40 border border-border rounded-xl p-5 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line font-medium">
              {bid.message || "No additional project notes submitted."}
            </div>
          </div>

          {/* ─── ATTACHED BLUEPRINTS, DRAWINGS & SPECS (BIG BEAUTIFUL CARDS) ─── */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border">
              <div>
                <h2 className="text-lg font-black text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-blue" />
                  Attached Blueprints, Drawings & Specs
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Full resolution files uploaded directly by general contractor
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-muted border border-border text-foreground self-start sm:self-auto">
                {attachedFiles.length} Document{attachedFiles.length === 1 ? "" : "s"}
              </span>
            </div>

            {attachedFiles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {attachedFiles.map(([key, fileObj]) => {
                  if (!fileObj) return null;
                  const isImg = isImageFile(fileObj.name, fileObj.type);
                  const isPdf = isPdfFile(fileObj.name, fileObj.type);
                  const downloadUrl = fileObj.url
                    ? `/api/download?url=${encodeURIComponent(fileObj.url)}&filename=${encodeURIComponent(
                        fileObj.name
                      )}`
                    : null;
                  const inlinePdfUrl = fileObj.url
                    ? `/api/download?inline=true&url=${encodeURIComponent(fileObj.url)}&filename=${encodeURIComponent(
                        fileObj.name
                      )}`
                    : null;
                  const sizeMb = (fileObj.size / (1024 * 1024)).toFixed(2);

                  return (
                    <div
                      key={key}
                      className="bg-muted/30 border border-border rounded-2xl p-5 hover:border-brand-blue/50 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        {/* Header Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-brand-blue/10 text-brand-blue text-[11px] font-black uppercase tracking-wider border border-brand-blue/20">
                            {key}
                          </span>
                          <span className="text-xs font-semibold text-muted-foreground">{sizeMb} MB</span>
                        </div>

                        {/* Image Preview Thumbnail */}
                        {isImg && fileObj.url && (
                          <div
                            onClick={() => setPreviewImage({ url: fileObj.url!, name: fileObj.name })}
                            className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900/5 border border-border cursor-pointer group-hover:opacity-95 transition-opacity"
                          >
                            <Image
                              src={fileObj.url}
                              alt={fileObj.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold">
                              <ZoomIn className="w-5 h-5" /> Click to Expand
                            </div>
                          </div>
                        )}

                        {/* File Meta */}
                        <div>
                          <div
                            className="font-bold text-foreground text-sm truncate"
                            title={fileObj.name}
                          >
                            {fileObj.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {isImg ? "Image Document" : isPdf ? "Adobe PDF Document" : "CAD / Drawing Document"}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-border mt-4 flex items-center gap-2">
                        {isImg && fileObj.url && (
                          <button
                            onClick={() => setPreviewImage({ url: fileObj.url!, name: fileObj.name })}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-card border border-border hover:bg-muted text-foreground text-xs font-bold transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5 text-brand-blue" /> Preview
                          </button>
                        )}

                        {isPdf && inlinePdfUrl && (
                          <a
                            href={inlinePdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-card border border-border hover:bg-muted text-foreground text-xs font-bold transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-brand-blue" /> View PDF
                          </a>
                        )}

                        {downloadUrl && (
                          <a
                            href={downloadUrl}
                            download={fileObj.name}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-brand-blue text-white hover:bg-[#007aa8] text-xs font-bold transition-colors shadow-sm"
                          >
                            <Download className="w-3.5 h-3.5" /> Download
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center bg-muted/20 border border-dashed border-border rounded-2xl">
                <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                <p className="text-sm font-semibold text-muted-foreground">
                  No blueprint files or drawings attached with this inquiry.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: General Contractor Profile & Fast Contacts (1 Col) */}
        <div className="space-y-6">
          {/* GC Contact Profile */}
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-blue" /> Contractor Profile
            </h2>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-muted-foreground font-semibold">General Contractor / Firm</div>
                <div className="text-lg font-black text-foreground">{bid.company || "Not Provided"}</div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground font-semibold">Primary Contact Name</div>
                <div className="text-base font-bold text-foreground">
                  {bid.firstName} {bid.lastName}
                </div>
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1">
                <div className="text-xs text-muted-foreground font-semibold flex items-center justify-between">
                  <span>Direct Email</span>
                  <button
                    onClick={() => handleCopy(bid.email, "email")}
                    className="text-brand-blue hover:underline text-[11px] font-bold inline-flex items-center gap-1"
                  >
                    {copiedField === "email" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${bid.email}`}
                  className="font-bold text-brand-blue text-sm hover:underline break-all block"
                >
                  {bid.email}
                </a>
              </div>

              {/* Phone */}
              {bid.phone && (
                <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1">
                  <div className="text-xs text-muted-foreground font-semibold flex items-center justify-between">
                    <span>Direct Phone</span>
                    <button
                      onClick={() => handleCopy(bid.phone, "phone")}
                      className="text-brand-blue hover:underline text-[11px] font-bold inline-flex items-center gap-1"
                    >
                      {copiedField === "phone" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`tel:${bid.phone}`}
                    className="font-black text-foreground text-sm hover:text-brand-blue transition-colors block"
                  >
                    {bid.phone}
                  </a>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-border space-y-2">
              <a
                href={`mailto:${bid.email}?subject=${encodeURIComponent(
                  `Enterprise Cleaning Corp - Proposal for ${bid.projectName || "Project"}`
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-blue text-white font-bold text-sm hover:bg-[#007aa8] transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" /> Send Email Proposal
              </a>

              {bid.phone && (
                <a
                  href={`tel:${bid.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue" /> Call {bid.firstName}
                </a>
              )}
            </div>
          </div>

          {/* Submission Metadata */}
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-3 text-xs text-muted-foreground">
            <h3 className="font-bold text-foreground uppercase tracking-wider text-[11px]">System Record</h3>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span>Submission ID:</span>
              <span className="font-mono text-foreground font-semibold">{bid._id}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span>Form Channel:</span>
              <span className="text-foreground font-semibold">{bid.service}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span>Department:</span>
              <span className="text-foreground font-semibold">{bid.department || "Estimating"}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Date Logged:</span>
              <span className="text-foreground font-semibold">{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── IMAGE FULLSCREEN PREVIEW LIGHTBOX ─── */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-950 flex items-center justify-between text-white border-b border-white/10">
              <span className="font-bold text-sm truncate max-w-[80%]">{previewImage.name}</span>
              <div className="flex items-center gap-2">
                <a
                  href={previewImage.url}
                  download={previewImage.name}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Download Image"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative flex-1 min-h-[500px] w-full bg-black/60 flex items-center justify-center p-4">
              <Image
                src={previewImage.url}
                alt={previewImage.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
