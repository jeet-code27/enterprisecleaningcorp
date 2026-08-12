"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  Eye, 
  Trash2, 
  CheckCircle, 
  RefreshCw, 
  X,
  Search,
  Filter,
  Copy,
  Check
} from "lucide-react";

export interface Application {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  cityStateZip: string;
  position: string;
  employmentType: string;
  shiftPreference: string;
  startDate?: string;
  yearsExperience: string;
  hasDriversLicense: string;
  hasReliableTransport: string;
  authorizedToWork: string;
  workExperience?: string;
  additionalNotes?: string;
  status: "New" | "Reviewed" | "Contacted" | "Rejected";
  createdAt: string;
}

export function CareerApplicationsClient({ initialApplications }: { initialApplications: Application[] }) {
  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPosition, setFilterPosition] = useState<string>("All");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [copied, setCopied] = useState(false);

  const updateStatus = async (id: string, newStatus: "New" | "Reviewed" | "Contacted" | "Rejected") => {
    setLoadingId(id);
    try {
      const res = await fetch(`/api/careers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");

      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
      );
      if (selectedApp && selectedApp._id === id) {
        setSelectedApp((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err) {
      console.error(err);
      alert("Error updating application status.");
    } finally {
      setLoadingId(null);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job application? This action cannot be undone.")) return;

    setLoadingId(id);
    try {
      const res = await fetch(`/api/careers/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete application");

      setApplications((prev) => prev.filter((app) => app._id !== id));
      if (selectedApp && selectedApp._id === id) {
        setSelectedApp(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting application.");
    } finally {
      setLoadingId(null);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filtered applications
  const filteredApps = useMemo(() => {
    return applications.filter((app) => {
      // Position Filter
      if (filterPosition !== "All" && app.position !== filterPosition) {
        return false;
      }

      // Status Filter
      if (filterStatus !== "All" && app.status !== filterStatus) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const name = app.fullName.toLowerCase();
        const email = app.email.toLowerCase();
        const phone = app.phone.toLowerCase();
        const city = app.cityStateZip.toLowerCase();
        const pos = app.position.toLowerCase();
        const notes = (app.additionalNotes || "").toLowerCase();
        const exp = (app.workExperience || "").toLowerCase();

        return (
          name.includes(q) ||
          email.includes(q) ||
          phone.includes(q) ||
          city.includes(q) ||
          pos.includes(q) ||
          notes.includes(q) ||
          exp.includes(q)
        );
      }

      return true;
    });
  }, [applications, filterPosition, filterStatus, searchQuery]);

  const newCount = applications.filter((a) => a.status === "New").length;
  const contactedCount = applications.filter((a) => a.status === "Contacted").length;
  const reviewedCount = applications.filter((a) => a.status === "Reviewed").length;

  const getStatusBadge = (st: string) => {
    switch (st) {
      case "New":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Reviewed":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Contacted":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Rejected":
        return "bg-slate-100 text-slate-600 border-slate-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Job Applications</h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">
            Review and manage employment submissions from job candidates.
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
          <div className="text-xs font-bold uppercase text-slate-400">Total Applicants</div>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">{applications.length}</div>
        </div>
        <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100 shadow-sm">
          <div className="text-xs font-bold uppercase text-blue-600">New Applications</div>
          <div className="text-2xl font-extrabold text-blue-700 mt-1">{newCount}</div>
        </div>
        <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 shadow-sm">
          <div className="text-xs font-bold uppercase text-amber-600">Reviewed</div>
          <div className="text-2xl font-extrabold text-amber-700 mt-1">{reviewedCount}</div>
        </div>
        <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100 shadow-sm">
          <div className="text-xs font-bold uppercase text-emerald-600">Contacted</div>
          <div className="text-2xl font-extrabold text-emerald-700 mt-1">{contactedCount}</div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by candidate name, email, phone, city, notes..."
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
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            <span>Position:</span>
            <select
              value={filterPosition}
              onChange={(e) => setFilterPosition(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00B8FF] text-slate-800 max-w-[200px] truncate"
            >
              <option value="All">All Positions ({applications.length})</option>
              <option value="Cleaning Technician – Derm Clinic (Concord, NH)">Cleaning Technician – Derm Clinic (Concord, NH)</option>
              <option value="Commercial Cleaning Technician">Commercial Cleaning Technician</option>
              <option value="Day Porter">Day Porter</option>
              <option value="Floor Care Specialist (Stripping & Waxing)">Floor Care Specialist</option>
              <option value="Night Shift Supervisor">Night Shift Supervisor</option>
              <option value="General Facility Cleaner">General Facility Cleaner</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
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
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <span className="text-xs text-slate-400 font-medium">
            Showing {filteredApps.length} of {applications.length}
          </span>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse min-w-[1000px]">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-4 w-[160px]">Submitted Date</th>
                <th className="px-5 py-4 w-[200px]">Applicant Name</th>
                <th className="px-5 py-4 w-[230px]">Contact Info</th>
                <th className="px-5 py-4 w-[220px]">Position Applied</th>
                <th className="px-5 py-4 w-[170px]">Shift & Exp.</th>
                <th className="px-5 py-4 w-[130px]">Status</th>
                <th className="px-5 py-4 w-[90px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredApps.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500 font-medium">
                    No job applications found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredApps.map((app) => {
                  const formattedDate = format(new Date(app.createdAt), "MMM d, yyyy");
                  const formattedTime = format(new Date(app.createdAt), "h:mm a");

                  return (
                    <tr
                      key={app._id}
                      onClick={() => setSelectedApp(app)}
                      className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                    >
                      {/* Date */}
                      <td className="px-5 py-4 text-xs">
                        <div className="font-semibold text-slate-900">{formattedDate}</div>
                        <div className="text-slate-400 font-normal mt-0.5">{formattedTime}</div>
                      </td>

                      {/* Name & City */}
                      <td className="px-5 py-4">
                        <div className="font-bold text-slate-900 group-hover:text-[#00B8FF] transition-colors">
                          {app.fullName}
                        </div>
                        {app.cityStateZip && (
                          <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate max-w-[170px] uppercase">{app.cityStateZip}</span>
                          </div>
                        )}
                      </td>

                      {/* Contact Info */}
                      <td className="px-5 py-4 text-xs" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1.5 text-slate-900 font-medium">
                          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a
                            href={`mailto:${app.email}`}
                            className="hover:text-[#00B8FF] hover:underline truncate max-w-[190px]"
                            title={app.email}
                          >
                            {app.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 mt-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a href={`tel:${app.phone}`} className="hover:text-slate-900 hover:underline">
                            {app.phone}
                          </a>
                        </div>
                      </td>

                      {/* Position */}
                      <td className="px-5 py-4">
                        <div className="font-semibold text-slate-900 text-xs leading-snug">
                          {app.position}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                          <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                            {app.employmentType}
                          </span>
                        </div>
                      </td>

                      {/* Shift & Experience */}
                      <td className="px-5 py-4 text-xs">
                        <div className="font-medium text-slate-800">{app.shiftPreference}</div>
                        <div className="text-slate-500 text-[11px] mt-0.5 font-medium">
                          Exp: <span className="text-slate-700 font-semibold">{app.yearsExperience}</span>
                        </div>
                      </td>

                      {/* Status Dropdown */}
                      <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={app.status || "New"}
                          onChange={(e) => updateStatus(app._id, e.target.value as any)}
                          disabled={loadingId === app._id}
                          className={`text-xs font-bold px-2.5 py-1 rounded-full border cursor-pointer outline-none transition-colors ${getStatusBadge(
                            app.status || "New"
                          )}`}
                        >
                          <option value="New">New</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedApp(app)}
                            className="p-2 text-slate-500 hover:text-[#00B8FF] hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Full Application Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteApplication(app._id)}
                            disabled={loadingId === app._id}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Application"
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

      {/* Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white z-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00B8FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {selectedApp.position}
                  </span>
                  <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full border ${getStatusBadge(selectedApp.status)}`}>
                    {selectedApp.status || "New"}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">{selectedApp.fullName}</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Applied on {format(new Date(selectedApp.createdAt), "MMMM d, yyyy 'at' h:mm a")}
                </p>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Contact Info Grid */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4 text-[#00B8FF]" />
                    <a href={`mailto:${selectedApp.email}`} className="hover:underline hover:text-[#00B8FF]">{selectedApp.email}</a>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Phone Number</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4 text-[#00B8FF]" />
                    <a href={`tel:${selectedApp.phone}`} className="hover:underline hover:text-[#00B8FF]">{selectedApp.phone}</a>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Location / City</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-[#00B8FF]" />
                    {selectedApp.cityStateZip || "N/A"}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Available Start Date</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-[#00B8FF]" />
                    {selectedApp.startDate || "Immediate"}
                  </div>
                </div>
              </div>

              {/* Preferences & Qualifications */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Position Preferences & Qualifications</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-400 font-medium block">Employment Type</span>
                    <strong className="text-slate-900 text-sm mt-0.5 block">{selectedApp.employmentType}</strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-400 font-medium block">Shift Preference</span>
                    <strong className="text-slate-900 text-sm mt-0.5 block">{selectedApp.shiftPreference}</strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-400 font-medium block">Cleaning Experience</span>
                    <strong className="text-slate-900 text-sm mt-0.5 block">{selectedApp.yearsExperience}</strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-400 font-medium block">US Work Authorized?</span>
                    <strong className="text-slate-900 text-sm mt-0.5 block">{selectedApp.authorizedToWork}</strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-400 font-medium block">Driver's License?</span>
                    <strong className="text-slate-900 text-sm mt-0.5 block">{selectedApp.hasDriversLicense}</strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-400 font-medium block">Reliable Transport?</span>
                    <strong className="text-slate-900 text-sm mt-0.5 block">{selectedApp.hasReliableTransport}</strong>
                  </div>
                </div>
              </div>

              {/* Work History */}
              {selectedApp.workExperience && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Previous Work History / Cleaning Experience</h4>
                  <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200 text-sm text-slate-800 whitespace-pre-line leading-relaxed">
                    {selectedApp.workExperience}
                  </div>
                </div>
              )}

              {/* Additional Comments */}
              {selectedApp.additionalNotes && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Additional Comments / Cover Message</span>
                    <button
                      onClick={() => copyToClipboard(selectedApp.additionalNotes || "")}
                      className="text-xs text-[#00B8FF] hover:underline flex items-center gap-1 capitalize normal-case font-semibold"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      {copied ? "Copied!" : "Copy Notes"}
                    </button>
                  </h4>
                  <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200 text-sm text-slate-800 whitespace-pre-line leading-relaxed">
                    {selectedApp.additionalNotes}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-slate-50/60 rounded-b-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Update Status:</span>
                <select
                  value={selectedApp.status || "New"}
                  onChange={(e) => updateStatus(selectedApp._id, e.target.value as any)}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]"
                >
                  <option value="New">New</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${selectedApp.email}?subject=Job Application - Enterprise Cleaning Corporation`}
                  className="px-4 py-2 bg-[#003B7A] hover:bg-[#002855] text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Applicant
                </a>
                <button
                  onClick={() => setSelectedApp(null)}
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
