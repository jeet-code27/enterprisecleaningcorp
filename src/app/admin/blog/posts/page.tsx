"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock,
  ArrowUpDown,
  X,
  RefreshCw,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  _id: string;
  title: string;
  slug: string;
  status: string;
  createdAt: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "Published" | "Draft">("ALL");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title-asc" | "title-desc">("newest");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setRefreshing(true);
      const res = await fetch("/api/blog/posts");
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      }
    } catch (error) {
      console.error("Failed to fetch posts", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const deletePost = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/blog/posts/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert("Failed to delete post. Please try again.");
      }
    } catch (error) {
      console.error("Failed to delete post", error);
      alert("An error occurred while deleting the post.");
    }
  };

  // Reset to first page when search, status, or sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, sortBy, pageSize]);

  // Statistics
  const stats = useMemo(() => {
    const total = posts.length;
    const published = posts.filter((p) => p.status === "Published").length;
    const draft = posts.filter((p) => p.status === "Draft").length;
    return { total, published, draft };
  }, [posts]);

  // Filtering & Sorting
  const filteredPosts = useMemo(() => {
    let result = posts.filter((post) => {
      // Search filter
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.slug && post.slug.toLowerCase().includes(searchQuery.toLowerCase()));

      // Status filter
      const matchesStatus =
        statusFilter === "ALL" || post.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      }
      if (sortBy === "oldest") {
        return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
      }
      if (sortBy === "title-asc") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    return result;
  }, [posts, searchQuery, statusFilter, sortBy]);

  // Pagination Math
  const totalPages = Math.ceil(filteredPosts.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Smart Pagination Numbers Generator (with ellipsis)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of table on page change
    const tableElement = document.getElementById("posts-table-top");
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-6 w-full max-w-full pb-12">
      {/* ─── HEADER & ACTIONS ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Blog Posts
            </h1>
            <span className="bg-[#0090c8]/10 text-[#0090c8] text-xs font-black px-2.5 py-0.5 rounded-full border border-[#0090c8]/20">
              {posts.length} {posts.length === 1 ? "Article" : "Articles"}
            </span>
          </div>
          <p className="text-slate-500 mt-1 text-xs sm:text-sm font-medium">
            Manage, publish, search, and edit content for Enterprise Cleaning Corp.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchPosts}
            disabled={refreshing}
            className="border-slate-200 text-slate-700 hover:bg-slate-50 gap-2 h-10 px-3.5 rounded-xl font-bold"
            title="Refresh Posts"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </Button>

          <Link href="/admin/blog/posts/create">
            <Button className="bg-[#0090c8] hover:bg-[#007ba8] text-white gap-2 font-bold h-10 px-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </Link>
        </div>
      </div>

      {/* ─── QUICK METRICS CHIPS ─── */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <button
          onClick={() => setStatusFilter("ALL")}
          className={`p-4 rounded-2xl border transition-all text-left ${
            statusFilter === "ALL"
              ? "bg-blue-50/80 border-blue-300 ring-2 ring-blue-500/20 shadow-xs"
              : "bg-white border-slate-200/80 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Posts
            </span>
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            {stats.total}
          </div>
        </button>

        <button
          onClick={() => setStatusFilter("Published")}
          className={`p-4 rounded-2xl border transition-all text-left ${
            statusFilter === "Published"
              ? "bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-500/20 shadow-xs"
              : "bg-white border-slate-200/80 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Published
            </span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-800 mt-1">
            {stats.published}
          </div>
        </button>

        <button
          onClick={() => setStatusFilter("Draft")}
          className={`p-4 rounded-2xl border transition-all text-left ${
            statusFilter === "Draft"
              ? "bg-amber-50/80 border-amber-300 ring-2 ring-amber-500/20 shadow-xs"
              : "bg-white border-slate-200/80 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Drafts
            </span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-amber-800 mt-1">
            {stats.draft}
          </div>
        </button>
      </div>

      {/* ─── SEARCH & FILTER CONTROLS BAR ─── */}
      <div id="posts-table-top" className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0090c8]/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Filters: Status Tabs + Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Status Tabs */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200/70 text-xs font-bold">
              <button
                onClick={() => setStatusFilter("ALL")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  statusFilter === "ALL"
                    ? "bg-white text-slate-900 shadow-xs font-black"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All ({posts.length})
              </button>
              <button
                onClick={() => setStatusFilter("Published")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  statusFilter === "Published"
                    ? "bg-white text-emerald-800 shadow-xs font-black"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                Published ({stats.published})
              </button>
              <button
                onClick={() => setStatusFilter("Draft")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  statusFilter === "Draft"
                    ? "bg-white text-amber-800 shadow-xs font-black"
                    : "text-slate-600 hover:text-amber-700"
                }`}
              >
                Drafts ({stats.draft})
              </button>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-transparent focus:outline-none cursor-pointer text-slate-800 font-semibold"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title-asc">Title: A to Z</option>
                <option value="title-desc">Title: Z to A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Indicators */}
        {(searchQuery || statusFilter !== "ALL") && (
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500 font-medium">
            <span>Filtering active:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                "{searchQuery}"
                <X
                  className="w-3 h-3 cursor-pointer hover:text-blue-900"
                  onClick={() => setSearchQuery("")}
                />
              </span>
            )}
            {statusFilter !== "ALL" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 font-bold">
                Status: {statusFilter}
                <X
                  className="w-3 h-3 cursor-pointer hover:text-slate-950"
                  onClick={() => setStatusFilter("ALL")}
                />
              </span>
            )}
            <button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("ALL");
              }}
              className="text-xs text-[#0090c8] hover:underline font-bold ml-1"
            >
              Reset all
            </button>
          </div>
        )}
      </div>

      {/* ─── POSTS TABLE / LIST ─── */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col">
        {loading ? (
          <div className="p-16 text-center">
            <RefreshCw className="w-8 h-8 text-[#0090c8] animate-spin mx-auto mb-3" />
            <p className="text-sm font-bold text-slate-700">Loading blog posts...</p>
            <p className="text-xs text-slate-400 mt-1">Fetching latest published and draft articles</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="p-16 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No blog posts found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
              {searchQuery || statusFilter !== "ALL"
                ? "No articles matched your active search and filter criteria. Try clearing filters."
                : "No posts found in the database. Create your first article to get started!"}
            </p>
            {(searchQuery || statusFilter !== "ALL") && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("ALL");
                }}
                className="mt-2 text-xs font-bold"
              >
                Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <th className="py-3.5 px-5">Article &amp; URL Slug</th>
                  <th className="py-3.5 px-5 w-32">Status</th>
                  <th className="py-3.5 px-5 w-40">Created Date</th>
                  <th className="py-3.5 px-5 w-36 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {paginatedPosts.map((post) => {
                  const isPublished = post.status === "Published";
                  const formattedDate = post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "—";

                  return (
                    <tr
                      key={post._id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      {/* Title & Slug */}
                      <td className="py-4 px-5">
                        <div className="flex flex-col space-y-1">
                          <Link
                            href={`/admin/blog/posts/${post._id}/edit`}
                            className="font-bold text-slate-900 group-hover:text-[#0090c8] transition-colors line-clamp-1 max-w-xl"
                            title={post.title}
                          >
                            {post.title}
                          </Link>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                            <span className="text-slate-300 font-sans">/blog/</span>
                            <span className="text-slate-500 truncate max-w-md">
                              {post.slug || "no-slug"}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="py-4 px-5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full border ${
                            isPublished
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {isPublished ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : (
                            <Clock className="w-3.5 h-3.5" />
                          )}
                          {post.status || "Draft"}
                        </span>
                      </td>

                      {/* Created Date */}
                      <td className="py-4 px-5 text-xs font-semibold text-slate-500">
                        {formattedDate}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-5 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {/* Live preview */}
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-500 hover:text-[#0090c8] hover:bg-blue-50 rounded-lg transition-colors"
                              title="View on Live Website"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </Link>

                          {/* Edit */}
                          <Link href={`/admin/blog/posts/${post._id}/edit`}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                              title="Edit Article"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>

                          {/* Delete */}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deletePost(post._id, post.title)}
                            className="h-8 w-8 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Delete Article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* ─── PAGINATION CONTROLS BAR ─── */}
        {!loading && filteredPosts.length > 0 && (
          <div className="p-4 bg-slate-50/60 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Range Info & Items Per Page Selector */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <div>
                Showing{" "}
                <span className="font-black text-slate-900">
                  {filteredPosts.length === 0 ? 0 : startIndex + 1}
                </span>{" "}
                to{" "}
                <span className="font-black text-slate-900">{endIndex}</span> of{" "}
                <span className="font-black text-slate-900">
                  {filteredPosts.length}
                </span>{" "}
                {filteredPosts.length === 1 ? "post" : "posts"}
              </div>

              <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                <span className="text-slate-500 font-medium">Rows per page:</span>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-black text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0090c8] cursor-pointer shadow-2xs"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>

            {/* Right: Page Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              {/* First Page */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs"
                title="First Page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* Prev Page */}
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 text-xs font-bold shadow-2xs"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 text-xs font-bold text-slate-400 select-none"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={`page-${page}`}
                      onClick={() => handlePageChange(Number(page))}
                      className={`min-w-8 h-8 px-2.5 rounded-lg text-xs font-black transition-all ${
                        currentPage === page
                          ? "bg-[#0090c8] text-white shadow-xs"
                          : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-2xs"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Next Page */}
              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 text-xs font-bold shadow-2xs"
                title="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Last Page */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs"
                title="Last Page"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
