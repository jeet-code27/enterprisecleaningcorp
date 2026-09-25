"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building2,
  Trash2,
  CheckCircle2,
  Clock,
  ExternalLink,
  Flame,
  Droplets,
  AlertTriangle,
  FileCheck,
  Send,
  Save,
  Check,
  X,
  FileText,
  ShieldCheck,
  Image as ImageIcon,
} from "lucide-react";
import { EmergencyRequestItem } from "@/models/EmergencySubmission";

export function EmergencyDetailClient({ item: initialItem }: { item: EmergencyRequestItem }) {
  const router = useRouter();
  const [item, setItem] = useState<EmergencyRequestItem>(initialItem);
  const [status, setStatus] = useState<string>(initialItem.status);
  const [notes, setNotes] = useState<string>(initialItem.notes || "");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  const handleSave = async (newStatus?: string) => {
    setIsSaving(true);
    const targetStatus = newStatus || status;
    try {
      const res = await fetch(`/api/emergency/${item._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: targetStatus,
          notes,
        }),
      });

      if (res.ok) {
        setStatus(targetStatus);
        setItem((prev) => ({ ...prev, status: targetStatus, notes }));
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2500);
      }
    } catch (err) {
      console.error("Failed to update emergency request:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/emergency/${item._id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.push("/admin/blog/emergency");
      }
    } catch (err) {
      console.error("Failed to delete request:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const getEmergencyIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes("water") || t.includes("flood")) {
      return <Droplets className="size-6 text-blue-500" />;
    }
    if (t.includes("spill") || t.includes("hazard")) {
      return <Flame className="size-6 text-amber-500" />;
    }
    return <AlertTriangle className="size-6 text-red-500" />;
  };

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${item.propertyAddress}, ${item.town}, MA`
  )}`;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/admin/blog/emergency"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Emergency Queue</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDeleteModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
          >
            <Trash2 className="size-3.5" />
            <span>Delete Request</span>
          </button>
        </div>
      </div>

      {/* Main Urgent Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-[#FFE800] text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#FFE800] animate-ping" />
            <span>Emergency Dispatch Item #{item._id.slice(-6).toUpperCase()}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {item.emergencyType}
          </h1>
          <p className="text-sm text-white/90 font-medium flex items-center gap-2">
            <MapPin className="size-4 text-[#FFE800]" />
            <span>{item.town} — {item.propertyAddress}</span>
          </p>
        </div>

        {/* Immediate Call Button */}
        <div className="shrink-0 flex flex-col gap-2">
          <a
            href={`tel:${item.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white text-red-600 hover:bg-slate-100 font-black text-base shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="size-5 text-red-600" />
            <span>Call: {item.phone}</span>
          </a>
          <span className="text-[11px] text-white/80 text-center font-semibold">
            Click to dial customer immediately
          </span>
        </div>
      </div>

      {/* Quick Status Workflow Switcher */}
      <div className="p-4 rounded-2xl bg-card border border-border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
          Current Dispatch Status:
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {(["New", "Acknowledged", "Dispatched", "In Progress", "Completed"] as const).map((st) => (
            <button
              key={st}
              onClick={() => handleSave(st)}
              disabled={isSaving}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                status === st
                  ? "bg-red-600 text-white shadow-md scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {st === "New" && "🚨 "}
              {st === "Acknowledged" && "📞 "}
              {st === "Dispatched" && "🚒 "}
              {st === "In Progress" && "⏳ "}
              {st === "Completed" && "✅ "}
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Grid: Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Caller & Incident (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Caller Details Card */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <h2 className="text-sm font-black uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Phone className="size-4 text-red-600" />
              <span>Caller &amp; Contact Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                <span className="text-xs font-bold text-muted-foreground uppercase">Caller Full Name</span>
                <p className="text-base font-black text-foreground mt-0.5">{item.name}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                <span className="text-xs font-bold text-muted-foreground uppercase">Callback Phone</span>
                <p className="text-base font-black text-red-600 mt-0.5">
                  <a href={`tel:${item.phone.replace(/[^0-9+]/g, "")}`} className="hover:underline">
                    {item.phone}
                  </a>
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                <span className="text-xs font-bold text-muted-foreground uppercase">Company / Facility</span>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  {item.companyName || <span className="text-muted-foreground italic">Not provided</span>}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                <span className="text-xs font-bold text-muted-foreground uppercase">Email Address</span>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  {item.email ? (
                    <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline">
                      {item.email}
                    </a>
                  ) : (
                    <span className="text-muted-foreground italic">Not provided</span>
                  )}
                </p>
              </div>
            </div>

            <div className="text-xs text-muted-foreground flex items-center gap-1.5 pt-2">
              <Calendar className="size-3.5" />
              <span>
                Received: {item.createdAt ? format(new Date(item.createdAt), "EEEE, MMMM d, yyyy 'at' h:mm a") : "Recently"}
              </span>
            </div>
          </div>

          {/* Location Details Card */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <MapPin className="size-4 text-red-600" />
                <span>Incident Property Location</span>
              </h2>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 font-bold text-xs hover:underline"
              >
                <span>Google Maps</span>
                <ExternalLink className="size-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-muted/50 border border-border/60 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white font-black text-xs">
                  {item.town}
                </span>
                <span className="text-xs text-muted-foreground">Central MA Emergency Response Zone</span>
              </div>
              <p className="text-base font-bold text-foreground">{item.propertyAddress}</p>
            </div>
          </div>

          {/* Emergency Description Card */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <FileText className="size-4 text-red-600" />
              <span>Incident Description &amp; Requirements</span>
            </h2>

            <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
              <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line font-medium">
                {item.description}
              </p>
            </div>
          </div>

          {/* Photos / Attachments Gallery */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <h2 className="text-sm font-black uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <ImageIcon className="size-4 text-red-600" />
              <span>Photo Evidence ({item.photos?.length || 0})</span>
            </h2>

            {item.photos && item.photos.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {item.photos.map((url, idx) => (
                  <div
                    key={idx}
                    onClick={() => setPreviewPhoto(url)}
                    className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-black cursor-pointer shadow-sm"
                  >
                    <img
                      src={url}
                      alt={`Damage photo ${idx + 1}`}
                      className="size-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                      Click to Enlarge
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground italic p-3 bg-muted/40 rounded-xl">
                No photos were attached with this emergency submission.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Dispatch Protocol & Admin Notes (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Dispatch Standard Operating Protocol */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl space-y-4 border border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-[#FFE800]" />
              <h3 className="text-sm font-black uppercase tracking-wider text-[#FFE800]">
                On-Call Dispatch Protocol
              </h3>
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-medium">
              Enterprise Emergency Dispatch Standard Operating Procedure:
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="size-6 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Call Customer &amp; Check Availability</h4>
                  <p className="text-[11px] text-white/75 mt-0.5">
                    Call <a href={`tel:${item.phone}`} className="underline text-[#FFE800]">{item.phone}</a> immediately to confirm scope and confirm on-call technician availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="size-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Send DocuSign Authorization</h4>
                  <p className="text-[11px] text-white/75 mt-0.5">
                    Send emergency service authorization agreement via DocuSign to customer for digital sign-off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="size-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Dispatch Rapid Response Fleet</h4>
                  <p className="text-[11px] text-white/75 mt-0.5">
                    Dispatch fully-equipped emergency van and certified crew with extraction &amp; drying gear to the site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dispatcher Internal Notes */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <FileCheck className="size-4 text-foreground" />
              <span>Internal Dispatcher Notes</span>
            </h3>

            <textarea
              rows={6}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add dispatcher notes, technician assigned, estimated arrival time, DocuSign status, insurance claim #..."
              className="w-full p-3.5 rounded-xl bg-muted/40 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-muted-foreground">
                {saveSuccess ? (
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <Check className="size-3.5" /> Notes saved!
                  </span>
                ) : (
                  "Notes are visible only to admins"
                )}
              </span>

              <button
                onClick={() => handleSave()}
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-colors disabled:opacity-50"
              >
                <Save className="size-3.5" />
                <span>{isSaving ? "Saving..." : "Save Notes"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4">
            <div className="size-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mx-auto">
              <Trash2 className="size-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">Delete Emergency Request?</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Are you sure you want to permanently delete this emergency callback record?
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border font-bold text-xs hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 rounded-xl bg-destructive text-destructive-foreground font-bold text-xs hover:bg-destructive/90 transition-colors"
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Photo Lightbox */}
      {previewPhoto && (
        <div
          onClick={() => setPreviewPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] p-2 bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-10"
            >
              <X className="size-5" />
            </button>
            <img src={previewPhoto} alt="Full Damage" className="max-h-[85vh] w-auto rounded-xl object-contain mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
