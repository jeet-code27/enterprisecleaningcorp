"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Eye,
  Trash2,
  Search,
  CheckCircle2,
  Clock,
  ExternalLink,
  Flame,
  Droplets,
  Building2,
  Image as ImageIcon,
  Check,
  X,
  FileCheck,
  ShieldAlert,
} from "lucide-react";

import { EmergencyRequestItem } from "@/models/EmergencySubmission";
export type { EmergencyRequestItem };

export function EmergencyRequestsClient({
  initialRequests,
}: {
  initialRequests: EmergencyRequestItem[];
}) {
  const [requests, setRequests] = useState<EmergencyRequestItem[]>(initialRequests);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  // Status updating state
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Filtered requests
  const filteredRequests = useMemo(() => {
    return requests.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        item.propertyAddress.toLowerCase().includes(q) ||
        item.town.toLowerCase().includes(q) ||
        item.emergencyType.toLowerCase().includes(q) ||
        (item.companyName && item.companyName.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q));

      const matchesStatus =
        statusFilter === "All" ? true : item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [requests, searchQuery, statusFilter]);

  // Statistics
  const stats = useMemo(() => {
    return {
      total: requests.length,
      newCalls: requests.filter((r) => r.status === "New").length,
      dispatched: requests.filter((r) => r.status === "Dispatched" || r.status === "In Progress").length,
      completed: requests.filter((r) => r.status === "Completed").length,
    };
  }, [requests]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/emergency/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setRequests((prev) =>
          prev.map((r) => (r._id === id ? { ...r, status: newStatus } : r))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/emergency/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setRequests((prev) => prev.filter((r) => r._id !== id));
        setDeleteConfirmId(null);
      }
    } catch (err) {
      console.error("Failed to delete emergency request:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30 animate-pulse";
      case "Acknowledged":
        return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30";
      case "Dispatched":
        return "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case "In Progress":
        return "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30";
      case "Completed":
        return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      default:
        return "bg-slate-500/15 text-slate-600 border-slate-500/30";
    }
  };

  const getEmergencyIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes("water") || t.includes("flood")) {
      return <Droplets className="size-4 text-blue-500 shrink-0" />;
    }
    if (t.includes("spill") || t.includes("hazard")) {
      return <Flame className="size-4 text-amber-500 shrink-0" />;
    }
    return <AlertTriangle className="size-4 text-red-500 shrink-0" />;
  };

  return (
    <div className="space-y-6">
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-red-500/10 text-red-600 border border-red-500/20">
              <ShieldAlert className="size-6" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              Emergency Dispatch Requests 🚨
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Dedicated queue for rapid-response callbacks, water flood extractions, and urgent facility cleanup requests.
          </p>
        </div>

        {/* Action hotline indicator */}
        <div className="flex items-center gap-2 p-3 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 shadow-sm">
          <Phone className="size-4 text-red-600 animate-pulse" />
          <div className="text-xs">
            <span className="font-bold text-red-700 dark:text-red-400">Emergency Hotline: </span>
            <span className="font-black text-slate-900 dark:text-white">(508) 890-1000</span>
          </div>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Emergencies</p>
            <p className="text-2xl font-black text-foreground mt-1">{stats.total}</p>
          </div>
          <div className="p-3 rounded-xl bg-muted text-muted-foreground">
            <AlertTriangle className="size-5" />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-red-200 dark:border-red-900/50 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-red-600 uppercase tracking-wider">New (Action Required)</p>
            <p className="text-2xl font-black text-red-600 mt-1">{stats.newCalls}</p>
          </div>
          <div className="p-3 rounded-xl bg-red-500/10 text-red-600">
            <Clock className="size-5 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-blue-200 dark:border-blue-900/50 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Dispatched / Active</p>
            <p className="text-2xl font-black text-blue-600 mt-1">{stats.dispatched}</p>
          </div>
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600">
            <FileCheck className="size-5" />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-emerald-200 dark:border-emerald-900/50 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Resolved</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">{stats.completed}</p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
            <CheckCircle2 className="size-5" />
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-card border border-border shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by caller name, phone, town, property address, type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Status Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-muted/60 rounded-xl border border-border">
          {["All", "New", "Acknowledged", "Dispatched", "Completed"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === st
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {st}
              {st === "New" && stats.newCalls > 0 && (
                <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-red-500 text-white text-[10px]">
                  {stats.newCalls}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Requests Table / Cards */}
      <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
        {filteredRequests.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="size-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
              <CheckCircle2 className="size-6 text-emerald-500" />
            </div>
            <h3 className="text-base font-bold text-foreground">No emergency requests found</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              {searchQuery || statusFilter !== "All"
                ? "Try clearing your search query or status filter to see other requests."
                : "No emergency requests have been submitted yet."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  <th className="py-3.5 px-4">Emergency Incident</th>
                  <th className="py-3.5 px-4">Caller / Callback Contact</th>
                  <th className="py-3.5 px-4">Location (Town &amp; Address)</th>
                  <th className="py-3.5 px-4">Photos</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Received</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredRequests.map((item) => (
                  <tr
                    key={item._id}
                    className={`hover:bg-muted/40 transition-colors ${
                      item.status === "New" ? "bg-red-50/40 dark:bg-red-950/20" : ""
                    }`}
                  >
                    {/* Emergency Incident */}
                    <td className="py-4 px-4 align-top">
                      <div className="flex items-start gap-2">
                        {getEmergencyIcon(item.emergencyType)}
                        <div>
                          <div className="font-bold text-foreground flex items-center gap-1.5">
                            <span>{item.emergencyType}</span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-1 max-w-xs leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Caller Info */}
                    <td className="py-4 px-4 align-top">
                      <div className="space-y-1">
                        <div className="font-bold text-foreground">{item.name}</div>
                        {item.companyName && (
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Building2 className="size-3" />
                            <span>{item.companyName}</span>
                          </div>
                        )}
                        <div className="pt-1">
                          <a
                            href={`tel:${item.phone.replace(/[^0-9+]/g, "")}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 font-black text-xs shadow-sm transition-colors"
                          >
                            <Phone className="size-3" />
                            <span>{item.phone}</span>
                          </a>
                        </div>
                        {item.email && (
                          <div className="text-xs text-muted-foreground pt-0.5">
                            <a href={`mailto:${item.email}`} className="hover:underline text-blue-600 dark:text-blue-400">
                              {item.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Location (Town & Address) */}
                    <td className="py-4 px-4 align-top">
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted text-foreground font-black text-xs">
                          <MapPin className="size-3 text-red-500" />
                          <span>{item.town}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-snug">{item.propertyAddress}</p>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            item.propertyAddress + ", " + item.town + ", MA"
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline pt-0.5"
                        >
                          <span>Open in Maps</span>
                          <ExternalLink className="size-2.5" />
                        </a>
                      </div>
                    </td>

                    {/* Photos */}
                    <td className="py-4 px-4 align-top">
                      {item.photos && item.photos.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {item.photos.slice(0, 3).map((url, idx) => (
                            <button
                              key={idx}
                              onClick={() => setPreviewPhoto(url)}
                              className="size-9 rounded-lg overflow-hidden border border-border relative hover:scale-105 transition-transform"
                            >
                              <img src={url} alt="Damage" className="size-full object-cover" />
                            </button>
                          ))}
                          {item.photos.length > 3 && (
                            <span className="size-9 rounded-lg bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                              +{item.photos.length - 3}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground italic">None</span>
                      )}
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-4 align-top">
                      <select
                        value={item.status}
                        disabled={updatingId === item._id}
                        onChange={(e) => handleStatusChange(item._id, e.target.value)}
                        className={`text-xs font-black px-2.5 py-1.5 rounded-lg border focus:outline-none cursor-pointer ${getStatusBadge(
                          item.status
                        )}`}
                      >
                        <option value="New">🚨 New</option>
                        <option value="Acknowledged">📞 Acknowledged</option>
                        <option value="Dispatched">🚒 Dispatched</option>
                        <option value="In Progress">⏳ In Progress</option>
                        <option value="Completed">✅ Completed</option>
                      </select>
                    </td>

                    {/* Received Date */}
                    <td className="py-4 px-4 align-top text-xs text-muted-foreground whitespace-nowrap">
                      {item.createdAt ? format(new Date(item.createdAt), "MMM d, yyyy h:mm a") : "Just now"}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/admin/blog/emergency/${item._id}`}
                          className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                          title="View Full Details"
                        >
                          <Eye className="size-4" />
                        </Link>
                        <button
                          onClick={() => setDeleteConfirmId(item._id)}
                          className="p-2 rounded-lg bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors"
                          title="Delete Request"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-6 max-w-sm w-full shadow-2xl space-y-4">
            <div className="size-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mx-auto">
              <Trash2 className="size-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">Delete Emergency Request?</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Are you sure you want to permanently delete this emergency request and any attached photos? This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border font-bold text-xs hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-3xl max-h-[85vh] p-2 bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-10"
            >
              <X className="size-5" />
            </button>
            <img src={previewPhoto} alt="Preview Damage" className="max-h-[80vh] w-auto rounded-xl object-contain mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
