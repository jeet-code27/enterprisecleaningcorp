"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import {
  HardHat,
  Mail,
  Phone,
  Building2,
  Calendar,
  Eye,
  Trash2,
  Search,
  X,
  Copy,
  Check,
  Filter,
  FileText,
  Download,
  CheckCircle2,
  Clock,
  Layers,
  MapPin,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";

export interface ConstructionBidItem {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  department?: string;
  message: string;
  status: "New" | "Under Review" | "Bid Sent" | "Closed" | string;
  projectName?: string;
  projectAddress?: string;
  projectCity?: string;
  projectState?: string;
  projectType?: string;
  cleaningPhases?: string[];
  approxSqFt?: string;
  bidDueDate?: string;
  cleaningStartDate?: string;
  ownerTurnoverDate?: string;
  prevailingWage?: string;
  unionRequirement?: string;
  nightWeekendWork?: string;
  uploadedDocuments?: {
    [key: string]: { name: string; size: number; url?: string; type?: string } | null;
  };
  createdAt: string;
}

export function ConstructionBidsClient({
  initialBids,
}: {
  initialBids: ConstructionBidItem[];
}) {
  const [bids, setBids] = useState<ConstructionBidItem[]>(initialBids);
  const [selectedBid, setSelectedBid] = useState<ConstructionBidItem | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("All"); // All | Project Bid | Bid List
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [copied, setCopied] = useState(false);
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

  const updateStatus = async (id: string, newStatus: string) => {
    setLoadingId(id);
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");

      setBids((prev) =>
        prev.map((bid) => (bid._id === id ? { ...bid, status: newStatus } : bid))
      );
      if (selectedBid && selectedBid._id === id) {
        setSelectedBid((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err) {
      console.error(err);
      alert("Error updating bid status.");
    } finally {
      setLoadingId(null);
    }
  };

  const deleteBid = async (id: string) => {
    if (!confirm("Are you sure you want to delete this construction bid?")) return;

    setLoadingId(id);
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete bid");

      setBids((prev) => prev.filter((bid) => bid._id !== id));
      if (selectedBid && selectedBid._id === id) {
        setSelectedBid(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting bid.");
    } finally {
      setLoadingId(null);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filtered List
  const filteredBids = useMemo(() => {
    return bids.filter((bid) => {
      // Type Filter
      if (filterType === "Project Bid" && bid.service !== "GC Post-Construction Bid Center") {
        return false;
      }
      if (filterType === "Bid List" && bid.service !== "Subcontractor Bid List Registration") {
        return false;
      }

      // Status Filter
      if (filterStatus !== "All" && (bid.status || "New") !== filterStatus) {
        return false;
      }

      // Search Query
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const fullName = `${bid.firstName} ${bid.lastName}`.toLowerCase();
      const company = (bid.company || "").toLowerCase();
      const project = (bid.projectName || "").toLowerCase();
      const city = (bid.projectCity || "").toLowerCase();
      const email = bid.email.toLowerCase();
      const phone = bid.phone.toLowerCase();

      return (
        fullName.includes(query) ||
        company.includes(query) ||
        project.includes(query) ||
        city.includes(query) ||
        email.includes(query) ||
        phone.includes(query)
      );
    });
  }, [bids, filterType, filterStatus, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const total = bids.length;
    const newCount = bids.filter((b) => !b.status || b.status === "New").length;
    const projectBidsCount = bids.filter(
      (b) => b.service === "GC Post-Construction Bid Center"
    ).length;
    const masterListCount = bids.filter(
      (b) => b.service === "Subcontractor Bid List Registration"
    ).length;

    return { total, newCount, projectBidsCount, masterListCount };
  }, [bids]);

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-2">
            <HardHat className="w-3.5 h-3.5 text-amber-600" /> Commercial Post-Construction Leads
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            GC Construction Bids
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            General contractor takeoff submissions, scope requests, and master subcontractor bid list registrations.
          </p>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
          <div className="text-xs font-medium text-muted-foreground">Total Inquiries</div>
          <div className="text-2xl font-black text-foreground mt-1">{stats.total}</div>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
          <div className="text-xs font-medium text-amber-600 font-bold">New / Needs Action</div>
          <div className="text-2xl font-black text-amber-600 mt-1">{stats.newCount}</div>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
          <div className="text-xs font-medium text-[#0090c8] font-bold">Project Packages</div>
          <div className="text-2xl font-black text-[#0090c8] mt-1">{stats.projectBidsCount}</div>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
          <div className="text-xs font-medium text-muted-foreground font-bold">Master Bid List</div>
          <div className="text-2xl font-black text-foreground mt-1">{stats.masterListCount}</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 rounded-xl bg-card border border-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search GC, project, city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-input bg-background focus:ring-2 focus:ring-brand-blue focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Type Filter */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="text-xs sm:text-sm px-3 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium"
          >
            <option value="All">All Submission Types</option>
            <option value="Project Bid">Project Bids Only</option>
            <option value="Bid List">Master Bid List Only</option>
          </select>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="text-xs sm:text-sm px-3 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Under Review">Under Review</option>
            <option value="Bid Sent">Bid Sent</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Bids List / Table */}
      <div className="rounded-xl border border-border bg-card shadow-xs overflow-hidden">
        {filteredBids.length === 0 ? (
          <div className="p-12 text-center">
            <HardHat className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
            <h3 className="text-base font-bold text-foreground">No Construction Bids Found</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {searchQuery || filterStatus !== "All" || filterType !== "All"
                ? "Try adjusting your search query or filters."
                : "New post-construction project inquiries submitted on the website will appear here in real-time."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-muted-foreground font-bold">
                  <th className="py-3 px-4">Date / Status</th>
                  <th className="py-3 px-4">GC & Contact</th>
                  <th className="py-3 px-4">Project / City</th>
                  <th className="py-3 px-4">Scope & Sq Ft</th>
                  <th className="py-3 px-4">Key Dates</th>
                  <th className="py-3 px-4 text-center">Files</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredBids.map((bid) => {
                  const isProjectBid = bid.service === "GC Post-Construction Bid Center";
                  const fileCount = bid.uploadedDocuments
                    ? Object.values(bid.uploadedDocuments).filter(Boolean).length
                    : 0;

                  return (
                    <tr key={bid._id} className="hover:bg-muted/30 transition-colors">
                      {/* Date & Status */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-semibold text-foreground">
                          {format(new Date(bid.createdAt), "MMM d, yyyy")}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          {format(new Date(bid.createdAt), "h:mm a")}
                        </div>
                        <div className="mt-1.5">
                          <select
                            value={bid.status || "New"}
                            onChange={(e) => updateStatus(bid._id, e.target.value)}
                            disabled={loadingId === bid._id}
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full border cursor-pointer focus:outline-none ${
                              (bid.status || "New") === "New"
                                ? "bg-amber-100 text-amber-800 border-amber-200"
                                : bid.status === "Under Review"
                                ? "bg-blue-100 text-blue-800 border-blue-200"
                                : bid.status === "Bid Sent"
                                ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                                : "bg-slate-100 text-slate-700 border-slate-200"
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Bid Sent">Bid Sent</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </div>
                      </td>

                      {/* GC & Contact */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-foreground">
                          {bid.company || "Independent Contractor"}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                          <span>
                            {bid.firstName} {bid.lastName}
                          </span>
                        </div>
                        <div className="text-[11px] text-muted-foreground flex items-center gap-2 mt-1">
                          <a
                            href={`mailto:${bid.email}`}
                            className="hover:text-brand-blue flex items-center gap-1"
                            title={bid.email}
                          >
                            <Mail className="w-3 h-3" /> Email
                          </a>
                          <span>•</span>
                          <a
                            href={`tel:${bid.phone}`}
                            className="hover:text-brand-blue flex items-center gap-1"
                            title={bid.phone}
                          >
                            <Phone className="w-3 h-3" /> Call
                          </a>
                        </div>
                      </td>

                      {/* Project / City */}
                      <td className="py-3.5 px-4">
                        {isProjectBid ? (
                          <>
                            <div className="font-bold text-foreground">
                              {bid.projectName || "Unnamed Project"}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-[#0090c8] shrink-0" />
                              <span>
                                {bid.projectCity ? `${bid.projectCity}, ${bid.projectState || "MA"}` : "Massachusetts"}
                              </span>
                            </div>
                            <div className="text-[11px] text-amber-700 font-semibold mt-1">
                              {bid.projectType || "Commercial"}
                            </div>
                          </>
                        ) : (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                            Subcontractor Bid List
                          </div>
                        )}
                      </td>

                      {/* Scope & Sq Ft */}
                      <td className="py-3.5 px-4">
                        {isProjectBid ? (
                          <>
                            <div className="font-bold text-foreground">
                              {bid.approxSqFt ? `${bid.approxSqFt} sq ft` : "Sq Ft Unspecified"}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {bid.cleaningPhases && bid.cleaningPhases.length > 0 ? (
                                bid.cleaningPhases.map((phase, pIdx) => (
                                  <span
                                    key={pIdx}
                                    className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200"
                                  >
                                    {phase}
                                  </span>
                                ))
                              ) : (
                                <span className="text-[11px] text-muted-foreground">Standard Final Clean</span>
                              )}
                            </div>
                          </>
                        ) : (
                          <span className="text-xs text-muted-foreground">Master Vendor List Registration</span>
                        )}
                      </td>

                      {/* Key Dates */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-xs">
                        {isProjectBid ? (
                          <div className="space-y-0.5">
                            {bid.bidDueDate && (
                              <div className="text-[11px]">
                                <span className="text-muted-foreground">Bid Due: </span>
                                <span className="font-bold text-red-600">{bid.bidDueDate}</span>
                              </div>
                            )}
                            {bid.cleaningStartDate && (
                              <div className="text-[11px]">
                                <span className="text-muted-foreground">Clean Start: </span>
                                <span className="font-medium text-foreground">{bid.cleaningStartDate}</span>
                              </div>
                            )}
                            {bid.ownerTurnoverDate && (
                              <div className="text-[11px]">
                                <span className="text-muted-foreground">Turnover: </span>
                                <span className="font-medium text-[#003057]">{bid.ownerTurnoverDate}</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">General Notice</span>
                        )}
                      </td>

                      {/* Uploaded Files */}
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        {fileCount > 0 ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs">
                            <FileText className="w-3 h-3" /> {fileCount} doc{fileCount > 1 ? "s" : ""}
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground/60">—</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedBid(bid)}
                            className="p-1.5 rounded-lg bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                            title="View Full Bid Package"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteBid(bid._id)}
                            disabled={loadingId === bid._id}
                            className="p-1.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                            title="Delete Bid"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detailed Bid Modal */}
      {selectedBid && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="p-6 border-b border-border flex items-start justify-between gap-4 sticky top-0 bg-card z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold mb-1.5">
                  <HardHat className="w-3.5 h-3.5 text-amber-600" />
                  {selectedBid.service}
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  {selectedBid.projectName || selectedBid.company || "Construction Inquiry"}
                </h2>
                <p className="text-xs text-muted-foreground">
                  Received on {format(new Date(selectedBid.createdAt), "MMMM d, yyyy 'at' h:mm a")}
                </p>
              </div>
              <button
                onClick={() => setSelectedBid(null)}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact Info Card */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  General Contractor / Contact Information
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-muted-foreground">Company: </span>
                    <span className="font-bold text-foreground">{selectedBid.company || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Contact: </span>
                    <span className="font-bold text-foreground">
                      {selectedBid.firstName} {selectedBid.lastName}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${selectedBid.email}`}
                      className="font-bold text-brand-blue hover:underline"
                    >
                      {selectedBid.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Phone: </span>
                    <a
                      href={`tel:${selectedBid.phone}`}
                      className="font-bold text-brand-blue hover:underline"
                    >
                      {selectedBid.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Specifications */}
              {selectedBid.service === "GC Post-Construction Bid Center" && (
                <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Project Parameters & Scope
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                    <div>
                      <div className="text-muted-foreground text-[11px]">Location</div>
                      <div className="font-bold text-foreground">
                        {selectedBid.projectAddress || "Address not provided"}, {selectedBid.projectCity || "City N/A"}, {selectedBid.projectState || "MA"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Approx Sq Footage</div>
                      <div className="font-bold text-foreground">
                        {selectedBid.approxSqFt ? `${selectedBid.approxSqFt} sq ft` : "Unspecified"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Project Type</div>
                      <div className="font-bold text-foreground">
                        {selectedBid.projectType || "Commercial"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Bid Due Date</div>
                      <div className="font-bold text-red-600">
                        {selectedBid.bidDueDate || "Flexible"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Cleaning Start Date</div>
                      <div className="font-bold text-foreground">
                        {selectedBid.cleaningStartDate || "TBD"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Owner Turnover Date</div>
                      <div className="font-bold text-foreground">
                        {selectedBid.ownerTurnoverDate || "TBD"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Prevailing Wage</div>
                      <div className="font-semibold text-foreground">
                        {selectedBid.prevailingWage || "Unsure"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Union Requirement</div>
                      <div className="font-semibold text-foreground">
                        {selectedBid.unionRequirement || "No"}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[11px]">Night / Weekend Work</div>
                      <div className="font-semibold text-foreground">
                        {selectedBid.nightWeekendWork || "Unsure"}
                      </div>
                    </div>
                  </div>

                  {/* Cleaning Phases Selected */}
                  {selectedBid.cleaningPhases && selectedBid.cleaningPhases.length > 0 && (
                    <div className="pt-2 border-t border-border">
                      <div className="text-xs font-semibold text-muted-foreground mb-1.5">
                        Requested Cleaning Phases:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedBid.cleaningPhases.map((phase, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-2.5 py-1 rounded-md bg-sky-50 text-[#003057] border border-sky-200 text-xs font-bold"
                          >
                            ✓ {phase}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Uploaded Documents / Blueprints */}
              {selectedBid.uploadedDocuments && (
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center justify-between">
                    <span>Attached Blueprints, Drawings & Specs</span>
                    <span className="text-[11px] font-normal text-muted-foreground">Click image for instant full preview</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(selectedBid.uploadedDocuments).map(([key, fileObj]) => {
                      if (!fileObj) return null;
                      const isImg = isImageFile(fileObj.name, fileObj.type);
                      const isPdf = isPdfFile(fileObj.name, fileObj.type);
                      const downloadUrl = fileObj.url
                        ? `/api/download?url=${encodeURIComponent(fileObj.url)}&filename=${encodeURIComponent(fileObj.name)}`
                        : null;
                      const inlinePdfUrl = fileObj.url
                        ? `/api/download?inline=true&url=${encodeURIComponent(fileObj.url)}&filename=${encodeURIComponent(fileObj.name)}`
                        : null;

                      return (
                        <div
                          key={key}
                          className="flex flex-col p-3 rounded-xl bg-card border border-border shadow-sm space-y-2.5"
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            {/* Preview Thumbnail for images */}
                            {isImg && fileObj.url ? (
                              <button
                                type="button"
                                onClick={() => setPreviewImage({ url: fileObj.url!, name: fileObj.name })}
                                className="relative w-14 h-14 rounded-lg overflow-hidden border border-border group shrink-0 bg-slate-100 hover:ring-2 hover:ring-[#0090c8] transition-all cursor-pointer"
                                title="Click for Instant Full Preview"
                              >
                                <img
                                  src={fileObj.url}
                                  alt={fileObj.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                  <Eye className="w-4 h-4 text-white" />
                                </div>
                              </button>
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#0090c8] flex items-center justify-center shrink-0 border border-sky-100">
                                {isPdf ? (
                                  <FileText className="w-6 h-6 text-red-500" />
                                ) : (
                                  <Layers className="w-6 h-6 text-[#0090c8]" />
                                )}
                              </div>
                            )}

                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-foreground truncate" title={fileObj.name}>
                                {fileObj.name}
                              </div>
                              <div className="text-[10px] text-muted-foreground capitalize mt-0.5">
                                <span className="font-semibold text-slate-700 uppercase">{key}</span> • {(fileObj.size / (1024 * 1024)).toFixed(2)} MB
                              </div>
                              {isImg && (
                                <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  Image • Ready to View
                                </span>
                              )}
                              {isPdf && (
                                <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-50 text-red-700 border border-red-200">
                                  PDF Document
                                </span>
                              )}
                              {!isImg && !isPdf && (
                                <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                  CAD / Specs File
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                            {isImg && fileObj.url && (
                              <button
                                type="button"
                                onClick={() => setPreviewImage({ url: fileObj.url!, name: fileObj.name })}
                                className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <Eye className="w-3.5 h-3.5 text-[#0090c8]" /> Instant Preview
                              </button>
                            )}

                            {isPdf && inlinePdfUrl && (
                              <a
                                href={inlinePdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-1.5 px-2.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0090c8] text-xs font-bold transition-colors flex items-center justify-center gap-1 border border-sky-200"
                              >
                                <ExternalLink className="w-3.5 h-3.5" /> Open PDF
                              </a>
                            )}

                            {downloadUrl ? (
                              <a
                                href={downloadUrl}
                                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm ${
                                  isImg
                                    ? "bg-slate-800 text-white hover:bg-slate-700"
                                    : "flex-1 bg-[#0090c8] text-white hover:bg-[#007ba8]"
                                }`}
                                title="Download to Computer"
                              >
                                <Download className="w-3.5 h-3.5" /> Download
                              </a>
                            ) : (
                              <span className="text-[11px] text-muted-foreground">Uploaded with package</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Full Message / Project Notes */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Project Notes & Full Submission Transcript
                  </div>
                  <button
                    onClick={() => copyToClipboard(selectedBid.message)}
                    className="inline-flex items-center gap-1 text-xs text-brand-blue hover:underline"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied" : "Copy Text"}
                  </button>
                </div>
                <pre className="text-xs bg-background p-3 rounded-lg border border-border font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                  {selectedBid.message}
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-border bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 bg-card">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Change Status:</span>
                <select
                  value={selectedBid.status || "New"}
                  onChange={(e) => updateStatus(selectedBid._id, e.target.value)}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg border border-input bg-background focus:outline-none"
                >
                  <option value="New">New</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Bid Sent">Bid Sent</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedBid.email}?subject=Enterprise Cleaning - Proposal for ${selectedBid.projectName || selectedBid.company}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-blue text-white text-xs font-bold hover:bg-brand-blue/90 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Contractor
                </a>
                <button
                  onClick={() => setSelectedBid(null)}
                  className="px-4 py-2 rounded-lg border border-input text-xs font-medium hover:bg-muted transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Instant Image Preview Lightbox ─── */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-3.5 px-4 bg-slate-800/90 border-b border-slate-700 text-white shrink-0">
              <div className="flex items-center gap-2 min-w-0 pr-4">
                <ImageIcon className="w-4 h-4 text-[#0090c8] shrink-0" />
                <span className="font-bold text-xs sm:text-sm truncate">{previewImage.name}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`/api/download?url=${encodeURIComponent(previewImage.url)}&filename=${encodeURIComponent(previewImage.name)}`}
                  className="px-3 py-1.5 rounded-lg bg-[#0090c8] text-white text-xs font-bold hover:bg-[#007ba8] flex items-center gap-1.5 transition-colors"
                  title="Download Image"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Body */}
            <div className="p-4 flex items-center justify-center overflow-auto bg-slate-950/60 max-h-[75vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewImage.url}
                alt={previewImage.name}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
