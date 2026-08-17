"use client";

import { useState, useMemo, useEffect } from "react";
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
  Tag,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LayoutGrid,
  Table as TableIcon,
  CheckSquare,
  Square,
  ArrowUpDown,
  SlidersHorizontal,
  Clock,
  User,
  ExternalLink,
  CheckCircle2
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
  const [isBulkLoading, setIsBulkLoading] = useState(false);
  
  // Selection State
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // View Mode: 'table' or 'card'
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [filterService, setFilterService] = useState<string>("All");
  const [dateFilter, setDateFilter] = useState<string>("all"); // all, today, 7days, 30days, thisMonth
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "nameAsc" | "nameDesc">("newest");
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  // Utility States
  const [copied, setCopied] = useState(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Extract unique services for dropdown filter
  const uniqueServices = useMemo(() => {
    const services = new Set<string>();
    submissions.forEach((s) => {
      if (s.service) services.add(s.service);
    });
    return Array.from(services).sort();
  }, [submissions]);

  // Single Item Status Update
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

  // Single Item Delete
  const deleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact submission? This action cannot be undone.")) return;

    setLoadingId(id);
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete submission");

      setSubmissions((prev) => prev.filter((sub) => sub._id !== id));
      setSelectedIds((prev) => prev.filter((i) => i !== id));
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

  // Bulk Status Update
  const handleBulkStatusChange = async (newStatus: string) => {
    if (selectedIds.length === 0) return;
    setIsBulkLoading(true);
    try {
      await Promise.all(
        selectedIds.map((id) =>
          fetch(`/api/contact/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
          })
        )
      );
      setSubmissions((prev) =>
        prev.map((sub) => (selectedIds.includes(sub._id) ? { ...sub, status: newStatus } : sub))
      );
      setSelectedIds([]);
    } catch (err) {
      console.error(err);
      alert("Error carrying out bulk status update.");
    } finally {
      setIsBulkLoading(false);
    }
  };

  // Bulk Delete
  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`Are you sure you want to delete ${selectedIds.length} selected submission(s)? This action cannot be undone.`)) return;

    setIsBulkLoading(true);
    try {
      await Promise.all(
        selectedIds.map((id) => fetch(`/api/contact/${id}`, { method: "DELETE" }))
      );
      setSubmissions((prev) => prev.filter((sub) => !selectedIds.includes(sub._id)));
      setSelectedIds([]);
    } catch (err) {
      console.error(err);
      alert("Error executing bulk delete.");
    } finally {
      setIsBulkLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter & Search Logic
  const filteredSubmissions = useMemo(() => {
    const now = new Date();
    
    return submissions.filter((sub) => {
      // Status Filter
      if (filterStatus !== "All" && (sub.status || "New") !== filterStatus) {
        return false;
      }

      // Service Filter
      if (filterService !== "All" && sub.service !== filterService) {
        return false;
      }

      // Date Range Filter
      if (dateFilter !== "all" && sub.createdAt) {
        const subDate = new Date(sub.createdAt);
        if (dateFilter === "today") {
          if (subDate.toDateString() !== now.toDateString()) return false;
        } else if (dateFilter === "7days") {
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          if (subDate < sevenDaysAgo) return false;
        } else if (dateFilter === "30days") {
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          if (subDate < thirtyDaysAgo) return false;
        } else if (dateFilter === "thisMonth") {
          if (subDate.getMonth() !== now.getMonth() || subDate.getFullYear() !== now.getFullYear()) {
            return false;
          }
        }
      }

      // Search Query Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const fullName = `${sub.firstName} ${sub.lastName}`.toLowerCase();
        const email = (sub.email || "").toLowerCase();
        const phone = (sub.phone || "").toLowerCase();
        const company = (sub.company || "").toLowerCase();
        const service = (sub.service || "").toLowerCase();
        const department = (sub.department || "").toLowerCase();
        const message = (sub.message || "").toLowerCase();

        return (
          fullName.includes(query) ||
          email.includes(query) ||
          phone.includes(query) ||
          company.includes(query) ||
          service.includes(query) ||
          department.includes(query) ||
          message.includes(query)
        );
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      } else if (sortBy === "nameAsc") {
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      } else if (sortBy === "nameDesc") {
        return `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`);
      }
      return 0;
    });
  }, [submissions, filterStatus, filterService, dateFilter, searchQuery, sortBy]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterStatus, filterService, dateFilter, sortBy, pageSize]);

  // Pagination Math
  const totalPages = Math.ceil(filteredSubmissions.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredSubmissions.length);
  const paginatedSubmissions = useMemo(() => {
    return filteredSubmissions.slice(startIndex, endIndex);
  }, [filteredSubmissions, startIndex, endIndex]);

  // Select All logic for current page
  const allCurrentPageSelected = paginatedSubmissions.length > 0 && paginatedSubmissions.every((s) => selectedIds.includes(s._id));
  const toggleSelectAllCurrentPage = () => {
    if (allCurrentPageSelected) {
      const currentPageIds = paginatedSubmissions.map((s) => s._id);
      setSelectedIds((prev) => prev.filter((id) => !currentPageIds.includes(id)));
    } else {
      const currentPageIds = paginatedSubmissions.map((s) => s._id);
      const uniqueIds = Array.from(new Set([...selectedIds, ...currentPageIds]));
      setSelectedIds(uniqueIds);
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // CSV Export Logic
  const exportToCSV = () => {
    if (filteredSubmissions.length === 0) {
      alert("No data available to export.");
      return;
    }

    const headers = [
      "Date Submitted",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Company",
      "Requested Service",
      "Department",
      "Status",
      "Message Content"
    ];

    const rows = filteredSubmissions.map((sub) => [
      format(new Date(sub.createdAt), "yyyy-MM-dd HH:mm"),
      `"${(sub.firstName || "").replace(/"/g, '""')}"`,
      `"${(sub.lastName || "").replace(/"/g, '""')}"`,
      `"${(sub.email || "").replace(/"/g, '""')}"`,
      `"${(sub.phone || "").replace(/"/g, '""')}"`,
      `"${(sub.company || "").replace(/"/g, '""')}"`,
      `"${(sub.service || "").replace(/"/g, '""')}"`,
      `"${(sub.department || "").replace(/"/g, '""')}"`,
      `"${(sub.status || "New").replace(/"/g, '""')}"`,
      `"${(sub.message || "").replace(/"/g, '""')}"`
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `contact_submissions_${format(new Date(), "yyyy-MM-dd")}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Clear all filters helper
  const isFiltered = filterStatus !== "All" || filterService !== "All" || dateFilter !== "all" || searchQuery !== "";
  const clearFilters = () => {
    setFilterStatus("All");
    setFilterService("All");
    setDateFilter("all");
    setSearchQuery("");
  };

  // Summary counts
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

  // Helper for pagination numbers array
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Contact Submissions
            </h1>
            <span className="bg-[#00B8FF]/10 text-[#0088cc] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#00B8FF]/20">
              Admin
            </span>
          </div>
          <p className="text-slate-500 mt-1 text-xs sm:text-sm font-medium">
            Manage, filter, search, and respond to incoming customer quote and contact inquiries.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={exportToCSV}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs hover:shadow-md"
            title="Download current filter as CSV spreadsheet"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all"
            title="Refresh submissions from server"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          {/* View Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setViewMode("table")}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "table" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
              title="Table View"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Table</span>
            </button>
            <button
              onClick={() => setViewMode("card")}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "card" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
              title="Cards Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Cards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Submissions</span>
            <div className="p-2 bg-slate-100 rounded-xl text-slate-600">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{submissions.length}</div>
        </div>

        <div className="bg-blue-50/50 p-4 sm:p-5 rounded-2xl border border-blue-100/80 shadow-xs hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">New Inquiries</span>
            <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-blue-700 mt-2">{newCount}</div>
        </div>

        <div className="bg-amber-50/50 p-4 sm:p-5 rounded-2xl border border-amber-100/80 shadow-xs hover:border-amber-200 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">In Progress</span>
            <div className="p-2 bg-amber-100 text-amber-700 rounded-xl">
              <Phone className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-700 mt-2">{contactedCount}</div>
        </div>

        <div className="bg-emerald-50/50 p-4 sm:p-5 rounded-2xl border border-emerald-100/80 shadow-xs hover:border-emerald-200 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Resolved</span>
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-700 mt-2">{resolvedCount}</div>
        </div>
      </div>

      {/* Filter, Search & Controls Container */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-full lg:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, phone, company, message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B8FF] text-slate-900 placeholder:text-slate-400 transition-all"
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

          {/* Filters & Actions Group */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Status Filter */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="hidden sm:inline">Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
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

            {/* Service Filter */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <Tag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="hidden sm:inline">Service:</span>
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer max-w-[140px] truncate"
              >
                <option value="All">All Services</option>
                {uniqueServices.map((service) => (
                  <option key={service} value={service}>
                    {service.replace("-", " ")}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Range Filter */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="hidden sm:inline">Date:</span>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="thisMonth">This Month</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="nameAsc">Name (A-Z)</option>
                <option value="nameDesc">Name (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters & Reset Indicator */}
        {isFiltered && (
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 flex-wrap text-slate-500">
              <span className="font-semibold text-slate-700">Active Filters:</span>
              {filterStatus !== "All" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                  Status: {filterStatus}
                  <button onClick={() => setFilterStatus("All")} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
                </span>
              )}
              {filterService !== "All" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-100">
                  Service: {filterService}
                  <button onClick={() => setFilterService("All")} className="hover:text-purple-900"><X className="w-3 h-3" /></button>
                </span>
              )}
              {dateFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 font-semibold border border-amber-100">
                  Date: {dateFilter}
                  <button onClick={() => setDateFilter("all")} className="hover:text-amber-900"><X className="w-3 h-3" /></button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-slate-900"><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>

            <button
              onClick={clearFilters}
              className="text-xs font-bold text-red-600 hover:text-red-700 underline"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Bulk Action Bar (Visible when items selected) */}
      {selectedIds.length > 0 && (
        <div className="bg-[#002244] text-white p-3 sm:p-4 rounded-2xl shadow-lg flex flex-wrap items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3">
            <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full border border-white/20">
              {selectedIds.length} Selected
            </span>
            <span className="text-xs text-slate-300 hidden sm:inline">Apply bulk operation:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleBulkStatusChange("Contacted")}
              disabled={isBulkLoading}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50"
            >
              Mark Contacted
            </button>
            <button
              onClick={() => handleBulkStatusChange("Resolved")}
              disabled={isBulkLoading}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50"
            >
              Mark Resolved
            </button>
            <button
              onClick={() => handleBulkStatusChange("Archived")}
              disabled={isBulkLoading}
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50"
            >
              Archive
            </button>
            <button
              onClick={handleBulkDelete}
              disabled={isBulkLoading}
              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50 flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete Selected
            </button>
            <button
              onClick={() => setSelectedIds([])}
              className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 text-slate-200 rounded-lg text-xs font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area: Responsive Table OR Cards */}
      {viewMode === "table" ? (
        /* TABLE VIEW (with horizontal scroll container and sticky headers) */
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-sm text-left border-collapse min-w-[950px]">
              <thead className="bg-slate-50/90 border-b border-slate-200/80 text-slate-500 font-bold text-[11px] uppercase tracking-wider sticky top-0 z-10 backdrop-blur-xs">
                <tr>
                  <th className="p-4 w-[50px] text-center">
                    <button
                      onClick={toggleSelectAllCurrentPage}
                      className="text-slate-400 hover:text-slate-700 transition-colors"
                      title={allCurrentPageSelected ? "Deselect page" : "Select page"}
                    >
                      {allCurrentPageSelected ? (
                        <CheckSquare className="w-4 h-4 text-[#00B8FF]" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  <th className="px-4 py-3.5 w-[140px]">Date Submitted</th>
                  <th className="px-4 py-3.5 w-[200px]">Client / Company</th>
                  <th className="px-4 py-3.5 w-[220px]">Contact Info</th>
                  <th className="px-4 py-3.5 w-[170px]">Service Requested</th>
                  <th className="px-4 py-3.5">Message Preview</th>
                  <th className="px-4 py-3.5 w-[130px]">Status</th>
                  <th className="px-4 py-3.5 w-[100px] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {paginatedSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-16 text-center">
                      <div className="max-w-sm mx-auto space-y-2">
                        <MessageSquare className="w-8 h-8 text-slate-300 mx-auto" />
                        <div className="text-slate-800 font-extrabold text-base">No submissions found</div>
                        <p className="text-xs text-slate-500 font-medium">
                          {isFiltered
                            ? "No contact form inquiries match your search filters."
                            : "No customer contact submissions have been received yet."}
                        </p>
                        {isFiltered && (
                          <button
                            onClick={clearFilters}
                            className="mt-3 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all"
                          >
                            Reset Filters
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedSubmissions.map((sub) => {
                    const formattedDate = format(new Date(sub.createdAt), "MMM d, yyyy");
                    const formattedTime = format(new Date(sub.createdAt), "h:mm a");
                    const isSelected = selectedIds.includes(sub._id);

                    return (
                      <tr
                        key={sub._id}
                        onClick={() => setSelectedSub(sub)}
                        className={`hover:bg-slate-50/80 transition-colors cursor-pointer group ${
                          isSelected ? "bg-blue-50/40" : ""
                        }`}
                      >
                        {/* Checkbox */}
                        <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => toggleSelectOne(sub._id)}
                            className="text-slate-400 hover:text-slate-700 transition-colors"
                          >
                            {isSelected ? (
                              <CheckSquare className="w-4 h-4 text-[#00B8FF]" />
                            ) : (
                              <Square className="w-4 h-4" />
                            )}
                          </button>
                        </td>

                        {/* Date */}
                        <td className="px-4 py-3.5 text-xs whitespace-nowrap">
                          <div className="font-bold text-slate-900">{formattedDate}</div>
                          <div className="text-slate-400 font-normal mt-0.5 text-[11px]">{formattedTime}</div>
                        </td>

                        {/* Client / Company */}
                        <td className="px-4 py-3.5">
                          <div className="font-extrabold text-slate-900 group-hover:text-[#00B8FF] transition-colors leading-snug">
                            {sub.firstName} {sub.lastName}
                          </div>
                          {sub.company ? (
                            <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                              <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                              <span className="truncate max-w-[160px]">{sub.company}</span>
                            </div>
                          ) : (
                            <div className="text-[11px] text-slate-400 italic mt-0.5">Individual</div>
                          )}
                        </td>

                        {/* Contact Info */}
                        <td className="px-4 py-3.5 text-xs" onClick={(e) => e.stopPropagation()}>
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
                        <td className="px-4 py-3.5">
                          <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 max-w-[150px] truncate border border-slate-200/60">
                            {sub.service ? sub.service.replace("-", " ") : "General Inquiry"}
                          </span>
                          {sub.department && (
                            <div className="text-[11px] text-slate-400 mt-1 font-medium">
                              Dept: {sub.department}
                            </div>
                          )}
                        </td>

                        {/* Message Preview */}
                        <td className="px-4 py-3.5">
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed max-w-xs md:max-w-md">
                            {sub.message}
                          </p>
                        </td>

                        {/* Status Dropdown */}
                        <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
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
                        <td className="px-4 py-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => setSelectedSub(sub)}
                              className="p-2 text-slate-400 hover:text-[#00B8FF] hover:bg-blue-50 rounded-xl transition-all"
                              title="View Full Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteSubmission(sub._id)}
                              disabled={loadingId === sub._id}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
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
      ) : (
        /* CARD GRID VIEW (Fully mobile-responsive grid layout) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedSubmissions.length === 0 ? (
            <div className="col-span-full bg-white rounded-2xl p-12 text-center border border-slate-200/80">
              <MessageSquare className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <div className="text-slate-800 font-extrabold text-base">No submissions found</div>
              <p className="text-xs text-slate-500 font-medium">Try clearing your filters or search terms.</p>
            </div>
          ) : (
            paginatedSubmissions.map((sub) => {
              const formattedDate = format(new Date(sub.createdAt), "MMM d, yyyy");
              const isSelected = selectedIds.includes(sub._id);

              return (
                <div
                  key={sub._id}
                  onClick={() => setSelectedSub(sub)}
                  className={`bg-white rounded-2xl p-5 border shadow-xs hover:shadow-md transition-all cursor-pointer space-y-4 relative flex flex-col justify-between ${
                    isSelected ? "border-[#00B8FF] ring-2 ring-[#00B8FF]/20 bg-blue-50/20" : "border-slate-200/80"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSelectOne(sub._id);
                            }}
                            className="text-slate-400 hover:text-slate-700"
                          >
                            {isSelected ? <CheckSquare className="w-4 h-4 text-[#00B8FF]" /> : <Square className="w-4 h-4" />}
                          </button>
                          <h3 className="font-extrabold text-slate-900 text-base">
                            {sub.firstName} {sub.lastName}
                          </h3>
                        </div>
                        {sub.company && (
                          <div className="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-1 ml-6">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{sub.company}</span>
                          </div>
                        )}
                      </div>

                      <select
                        onClick={(e) => e.stopPropagation()}
                        value={sub.status || "New"}
                        onChange={(e) => updateStatus(sub._id, e.target.value)}
                        disabled={loadingId === sub._id}
                        className={`text-xs font-bold px-2.5 py-1 rounded-full border cursor-pointer outline-none ${getStatusBadge(
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
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/60">
                        {sub.service ? sub.service.replace("-", " ") : "General Inquiry"}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1 ml-auto">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {formattedDate}
                      </span>
                    </div>

                    {/* Contact Quick Buttons */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-semibold bg-slate-50 p-2.5 rounded-xl border border-slate-100" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={`mailto:${sub.email}`}
                        className="flex items-center gap-1.5 text-slate-700 hover:text-[#00B8FF] truncate"
                        title={sub.email}
                      >
                        <Mail className="w-3.5 h-3.5 text-[#00B8FF] shrink-0" />
                        <span className="truncate">{sub.email}</span>
                      </a>
                      <a
                        href={`tel:${sub.phone}`}
                        className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#00B8FF] shrink-0" />
                        <span>{sub.phone}</span>
                      </a>
                    </div>

                    {/* Snippet Preview */}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                      "{sub.message}"
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs mt-3" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setSelectedSub(sub)}
                      className="text-[#00B8FF] font-bold hover:underline flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Details
                    </button>
                    <button
                      onClick={() => deleteSubmission(sub._id)}
                      className="text-slate-400 hover:text-red-600 p-1 rounded-lg"
                      title="Delete Submission"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Pagination Controls Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Info & Items per page */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
          <div>
            Showing <span className="font-bold text-slate-900">{filteredSubmissions.length === 0 ? 0 : startIndex + 1}</span> to{" "}
            <span className="font-bold text-slate-900">{endIndex}</span> of{" "}
            <span className="font-bold text-slate-900">{filteredSubmissions.length}</span> submissions
          </div>

          <div className="flex items-center gap-1.5 border-l border-slate-200 pl-4">
            <span>Per page:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>

        {/* Right Page Navigation */}
        <div className="flex items-center gap-1.5">
          {/* First Page */}
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="First Page"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>

          {/* Previous Page */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 text-xs font-semibold px-3"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={`ellipsis-${index}`} className="px-2 text-xs text-slate-400">
                  ...
                </span>
              ) : (
                <button
                  key={`page-${page}`}
                  onClick={() => setCurrentPage(Number(page))}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === page
                      ? "bg-[#003B7A] text-white shadow-xs"
                      : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          {/* Next Page */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 text-xs font-semibold px-3"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Last Page */}
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="Last Page"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full Detail Modal */}
      {selectedSub && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10">
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

              {/* Full Message Content */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#00B8FF]" />
                    Full Inquiry Message
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

            {/* Modal Footer */}
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
                  className="px-4 py-2 bg-[#003B7A] hover:bg-[#002855] text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Client
                </a>
                <button
                  onClick={() => setSelectedSub(null)}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors shadow-xs"
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
