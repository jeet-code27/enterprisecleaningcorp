"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import { 
  Mail, 
  Phone, 
  Building2, 
  Calendar, 
  MessageSquare, 
  Eye, 
  Trash2, 
  RefreshCw, 
  Search, 
  X, 
  Copy, 
  Check, 
  Filter,
  Tag
} from "lucide-react";

export interface ContactSubmissionItem {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  department?: string;
  message: string;
  status?: string;
  createdAt: string;
}

export function ContactSubmissionsClient({ 
  initialSubmissions 
}: { 
  initialSubmissions: ContactSubmissionItem[] 
}) {
  const [submissions, setSubmissions] = useState<ContactSubmissionItem[]>(initialSubmissions);
  const [selectedSub, setSelectedSub] = useState<ContactSubmissionItem | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [filterService, setFilterService] = useState<string>("All");
  const [copied, setCopied] = useState(false);

  // Extract unique services for dropdown filter
  const uniqueServices = useMemo(() => {
    const services = new Set<string>();
    submissions.forEach((s) => {
      if (s.service) services.add(s.service);
    });
    return Array.from(services);
  }, [submissions]);

  const updateStatus = async (id: string, newStatus: string) => {
    setLoadingId(id);
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");

      setSubmissions((prev) =>
        prev.map((sub) => (sub._id === id ? { ...sub, status: newStatus } : sub))
      );
      if (selectedSub && selectedSub._id === id) {
        setSelectedSub((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err) {
      console.error(err);
      alert("Error updating submission status.");
    } finally {
      setLoadingId(null);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact submission? This action cannot be undone.")) return;

    setLoadingId(id);
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete submission");

      setSubmissions((prev) => prev.filter((sub) => sub._id !== id));
      if (selectedSub && selectedSub._id === id) {
        setSelectedSub(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting submission.");
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
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) => {
      // Status Filter
      if (filterStatus !== "All" && (sub.status || "New") !== filterStatus) {
        return false;
      }

      // Service Filter
      if (filterService !== "All" && sub.service !== filterService) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const fullName = `${sub.firstName} ${sub.lastName}`.toLowerCase();
        const email = (sub.email || "").toLowerCase();
        const phone = (sub.phone || "").toLowerCase();
        const company = (sub.company || "").toLowerCase();
        const service = (sub.service || "").toLowerCase();
        const message = (sub.message || "").toLowerCase();

        return (
          fullName.includes(query) ||
          email.includes(query) ||
          phone.includes(query) ||
          company.includes(query) ||
          service.includes(query) ||
          message.includes(query)
        );
      }

      return true;
    });
  }, [submissions, filterStatus, filterService, searchQuery]);

  const newCount = submissions.filter((s) => (s.status || "New") === "New").length;
  const contactedCount = submissions.filter((s) => s.status === "Contacted" || s.status === "In Progress").length;
  const resolvedCount = submissions.filter((s) => s.status === "Resolved" || s.status === "Completed").length;

  const getStatusBadge = (statusStr?: string) => {
    const st = statusStr || "New";
    switch (st) {
      case "New":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Reviewed":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Contacted":
      case "In Progress":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Resolved":
      case "Completed":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Archived":
        return "bg-slate-100 text-slate-600 border-slate-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Contact Submissions</h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">
            View, search, and respond to client inquiries sent from the contact form.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh List
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold uppercase text-slate-400">Total Inquiries</div>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">{submissions.length}</div>
        </div>
        <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100 shadow-sm">
          <div className="text-xs font-bold uppercase text-blue-600">New Submissions</div>
          <div className="text-2xl font-extrabold text-blue-700 mt-1">{newCount}</div>
        </div>
        <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 shadow-sm">
          <div className="text-xs font-bold uppercase text-amber-600">In Progress / Contacted</div>
          <div className="text-2xl font-extrabold text-amber-700 mt-1">{contactedCount}</div>
        </div>
        <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100 shadow-sm">
          <div className="text-xs font-bold uppercase text-emerald-600">Resolved</div>
          <div className="text-2xl font-extrabold text-emerald-700 mt-1">{resolvedCount}</div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, email, phone, company, message..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B8FF] text-slate-900 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Filter className="w-3.5 h-3.5" />
            <span>Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00B8FF] text-slate-800"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Tag className="w-3.5 h-3.5" />
            <span>Service:</span>
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00B8FF] text-slate-800 max-w-[180px] truncate"
            >
              <option value="All">All Services</option>
              {uniqueServices.map((service) => (
                <option key={service} value={service}>
                  {service.replace("-", " ")}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs text-slate-400 font-medium">
            Showing {filteredSubmissions.length} of {submissions.length}
          </span>
        </div>
      </div>

      {/* Main Submissions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse min-w-[950px]">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-4 w-[160px]">Date Submitted</th>
                <th className="px-5 py-4 w-[200px]">Client / Company</th>
                <th className="px-5 py-4 w-[220px]">Contact Info</th>
                <th className="px-5 py-4 w-[180px]">Service Requested</th>
                <th className="px-5 py-4">Message Preview</th>
                <th className="px-5 py-4 w-[130px]">Status</th>
                <th className="px-5 py-4 w-[100px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500 font-medium">
                    No contact submissions found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => {
                  const formattedDate = format(new Date(sub.createdAt), "MMM d, yyyy");
                  const formattedTime = format(new Date(sub.createdAt), "h:mm a");

                  return (
                    <tr
                      key={sub._id}
                      onClick={() => setSelectedSub(sub)}
                      className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                    >
                      {/* Date */}
                      <td className="px-5 py-4 text-xs">
                        <div className="font-semibold text-slate-900">{formattedDate}</div>
                        <div className="text-slate-400 font-normal mt-0.5">{formattedTime}</div>
                      </td>

                      {/* Client / Company */}
                      <td className="px-5 py-4">
                        <div className="font-bold text-slate-900 group-hover:text-[#00B8FF] transition-colors">
                          {sub.firstName} {sub.lastName}
                        </div>
                        {sub.company ? (
                          <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                            <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate max-w-[170px]">{sub.company}</span>
                          </div>
                        ) : (
                          <div className="text-[11px] text-slate-400 italic">Individual</div>
                        )}
                      </td>

                      {/* Contact Info */}
                      <td className="px-5 py-4 text-xs" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1.5 text-slate-900 font-medium">
                          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a
                            href={`mailto:${sub.email}`}
                            className="hover:text-[#00B8FF] hover:underline truncate max-w-[180px]"
                            title={sub.email}
                          >
                            {sub.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 mt-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a
                            href={`tel:${sub.phone}`}
                            className="hover:text-slate-900 hover:underline"
                          >
                            {sub.phone}
                          </a>
                        </div>
                      </td>

                      {/* Service */}
                      <td className="px-5 py-4">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 max-w-[160px] truncate">
                          {sub.service ? sub.service.replace("-", " ") : "General Inquiry"}
                        </span>
                        {sub.department && (
                          <div className="text-[11px] text-slate-400 mt-1 font-medium">
                            Dept: {sub.department}
                          </div>
                        )}
                      </td>

                      {/* Message Preview */}
                      <td className="px-5 py-4">
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed max-w-xs md:max-w-md">
                          {sub.message}
                        </p>
                        <span className="text-[11px] text-[#00B8FF] font-semibold mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to view full message →
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={sub.status || "New"}
                          onChange={(e) => updateStatus(sub._id, e.target.value)}
                          disabled={loadingId === sub._id}
                          className={`text-xs font-bold px-2.5 py-1 rounded-full border cursor-pointer outline-none transition-colors ${getStatusBadge(
                            sub.status
                          )}`}
                        >
                          <option value="New">New</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Resolved">Resolved</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedSub(sub)}
                            className="p-2 text-slate-500 hover:text-[#00B8FF] hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Full Submission Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteSubmission(sub._id)}
                            disabled={loadingId === sub._id}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Submission"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full Detail Modal */}
      {selectedSub && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white z-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase px-3 py-0.5 rounded-full border ${getStatusBadge(selectedSub.status)}`}>
                    {selectedSub.status || "New"}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {format(new Date(selectedSub.createdAt), "MMMM d, yyyy 'at' h:mm a")}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedSub.firstName} {selectedSub.lastName}
                </h3>
                {selectedSub.company && (
                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    Company: {selectedSub.company}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedSub(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Contact Details Grid */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4 text-[#00B8FF]" />
                    <a href={`mailto:${selectedSub.email}`} className="hover:underline hover:text-[#00B8FF]">
                      {selectedSub.email}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Phone Number</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4 text-[#00B8FF]" />
                    <a href={`tel:${selectedSub.phone}`} className="hover:underline hover:text-[#00B8FF]">
                      {selectedSub.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Requested Service</span>
                  <div className="font-semibold text-slate-800 flex items-center gap-2 mt-1">
                    <Tag className="w-4 h-4 text-[#00B8FF]" />
                    {selectedSub.service ? selectedSub.service.replace("-", " ") : "General Inquiry"}
                  </div>
                </div>

                {selectedSub.department && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Target Department</span>
                    <div className="font-semibold text-slate-800 flex items-center gap-2 mt-1">
                      <MessageSquare className="w-4 h-4 text-[#00B8FF]" />
                      {selectedSub.department}
                    </div>
                  </div>
                )}
              </div>

              {/* Full Message Section */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#00B8FF]" />
                    Full Message Content
                  </h4>
                  <button
                    onClick={() => copyToClipboard(selectedSub.message)}
                    className="text-xs font-semibold text-slate-500 hover:text-[#00B8FF] flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200/60"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200 text-sm text-slate-800 leading-relaxed whitespace-pre-line font-normal shadow-inner max-h-[300px] overflow-y-auto">
                  {selectedSub.message}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-slate-50/60 rounded-b-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Change Status:</span>
                <select
                  value={selectedSub.status || "New"}
                  onChange={(e) => updateStatus(selectedSub._id, e.target.value)}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]"
                >
                  <option value="New">New</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${selectedSub.email}?subject=RE: Inquiry - Enterprise Cleaning Corporation`}
                  className="px-4 py-2 bg-[#003B7A] hover:bg-[#002855] text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Client
                </a>
                <button
                  onClick={() => setSelectedSub(null)}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
