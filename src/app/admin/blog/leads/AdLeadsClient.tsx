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
  Search, 
  X, 
  Copy, 
  Check, 
  Filter,
  Target
} from "lucide-react";

export interface AdLeadItem {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceType: string;
  facilitySize?: string;
  message?: string;
  source: string;
  status: "New" | "Contacted" | "In Progress" | "Closed";
  createdAt: string;
}

export function AdLeadsClient({ initialLeads }: { initialLeads: AdLeadItem[] }) {
  const [leads, setLeads] = useState<AdLeadItem[]>(initialLeads);
  const [selectedLead, setSelectedLead] = useState<AdLeadItem | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [copied, setCopied] = useState(false);

  const updateStatus = async (id: string, newStatus: "New" | "Contacted" | "In Progress" | "Closed") => {
    setLoadingId(id);
    try {
      const res = await fetch(`/api/admin/ad-leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");

      setLeads((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, status: newStatus } : lead))
      );
      if (selectedLead && selectedLead._id === id) {
        setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err) {
      console.error(err);
      alert("Error updating lead status.");
    } finally {
      setLoadingId(null);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this ad lead?")) return;

    setLoadingId(id);
    try {
      const res = await fetch(`/api/admin/ad-leads/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete lead");

      setLeads((prev) => prev.filter((lead) => lead._id !== id));
      if (selectedLead && selectedLead._id === id) {
        setSelectedLead(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting lead.");
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
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      if (filterStatus !== "All" && (lead.status || "New") !== filterStatus) {
        return false;
      }
      if (!searchQuery) return true;

      const q = searchQuery.toLowerCase();
      return (
        lead.fullName.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.phone.toLowerCase().includes(q) ||
        (lead.companyName && lead.companyName.toLowerCase().includes(q)) ||
        lead.serviceType.toLowerCase().includes(q) ||
        (lead.facilitySize && lead.facilitySize.toLowerCase().includes(q))
      );
    });
  }, [leads, searchQuery, filterStatus]);

  // Counts
  const counts = useMemo(() => {
    return {
      all: leads.length,
      new: leads.filter((l) => l.status === "New").length,
      contacted: leads.filter((l) => l.status === "Contacted").length,
      inProgress: leads.filter((l) => l.status === "In Progress").length,
      closed: leads.filter((l) => l.status === "Closed").length,
    };
  }, [leads]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003057] text-xs font-bold uppercase tracking-wider mb-2">
            <Target className="w-3.5 h-3.5 text-[#00B8FF]" />
            <span>Ad Campaigns Lead Management</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Commercial Cleaning Ad Leads</h1>
          <p className="text-slate-500 text-sm mt-1">
            Real-time leads submitted via the Meta & Google ad landing page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-red-50 text-[#E31837] border border-red-200 px-4 py-2 rounded-xl text-center">
            <div className="text-xl font-extrabold">{counts.new}</div>
            <div className="text-xs font-bold uppercase">New Leads</div>
          </div>
          <div className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-center">
            <div className="text-xl font-bold">{counts.all}</div>
            <div className="text-xs font-medium uppercase">Total Leads</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, company, email, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#003057]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          {["All", "New", "Contacted", "In Progress", "Closed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterStatus === status
                  ? "bg-[#003057] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {status} {status === "New" && counts.new > 0 && `(${counts.new})`}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 text-xs font-bold uppercase border-b border-slate-200">
              <tr>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Company & Size</th>
                <th className="p-4">Service Requested</th>
                <th className="p-4">Submitted Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-400">
                    No leads found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-slate-900 text-base">{lead.fullName}</div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <a href={`mailto:${lead.email}`} className="hover:text-[#00B8FF]">{lead.email}</a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <a href={`tel:${lead.phone}`} className="font-semibold text-slate-700 hover:text-[#003057]">{lead.phone}</a>
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{lead.companyName || "N/A"}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Size: <span className="font-medium text-slate-700">{lead.facilitySize || "Not Specified"}</span>
                      </div>
                    </td>

                    <td className="p-4">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-sky-50 text-[#003057] text-xs font-bold border border-sky-100">
                        {lead.serviceType}
                      </span>
                    </td>

                    <td className="p-4 whitespace-nowrap text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{format(new Date(lead.createdAt), "MMM d, yyyy h:mm a")}</span>
                      </div>
                    </td>

                    <td className="p-4">
                      <select
                        value={lead.status || "New"}
                        disabled={loadingId === lead._id}
                        onChange={(e) => updateStatus(lead._id, e.target.value as any)}
                        className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border focus:outline-hidden cursor-pointer ${
                          lead.status === "New"
                            ? "bg-red-50 text-red-700 border-red-200"
                            : lead.status === "Contacted"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : lead.status === "In Progress"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-emerald-50 text-emerald-700 border-emerald-200"
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-[#003057] hover:text-white text-slate-600 transition-colors"
                          title="View Full Lead Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteLead(lead._id)}
                          disabled={loadingId === lead._id}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-400 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Lead Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#003057] text-[#00B8FF] flex items-center justify-center font-bold text-xl">
                {selectedLead.fullName.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedLead.fullName}</h3>
                <p className="text-xs text-slate-500">Ad Campaign Lead • {selectedLead.source}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Company Name</span>
                <span className="font-bold text-slate-800">{selectedLead.companyName || "N/A"}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Facility Size</span>
                <span className="font-bold text-slate-800">{selectedLead.facilitySize || "Not Specified"}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</span>
                <div className="flex items-center justify-between">
                  <a href={`mailto:${selectedLead.email}`} className="font-semibold text-[#00B8FF] hover:underline">
                    {selectedLead.email}
                  </a>
                  <button onClick={() => copyToClipboard(selectedLead.email)} className="text-slate-400 hover:text-slate-600">
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</span>
                <a href={`tel:${selectedLead.phone}`} className="font-extrabold text-[#003057] hover:underline text-base">
                  {selectedLead.phone}
                </a>
              </div>
            </div>

            <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Service Requested</span>
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-100 text-[#003057] font-bold text-sm">
                {selectedLead.serviceType}
              </span>
            </div>

            {selectedLead.message && (
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Message / Facility Notes</span>
                <p className="text-slate-700 text-sm whitespace-pre-wrap font-serif italic">{selectedLead.message}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-400">
                Submitted: {format(new Date(selectedLead.createdAt), "PPPP 'at' p")}
              </div>
              <a
                href={`tel:${selectedLead.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E31837] text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Lead Immediately</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
