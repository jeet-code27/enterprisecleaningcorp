import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import ContactSubmission from "@/models/ContactSubmission";
import { FileText, MessageSquare, CheckCircle, Edit3, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  await dbConnect();
  
  // Fetch stats concurrently for performance
  const [
    totalPosts,
    publishedPosts,
    draftPosts,
    totalSubmissions,
    recentSubmissions
  ] = await Promise.all([
    Post.countDocuments(),
    Post.countDocuments({ status: "Published" }),
    Post.countDocuments({ status: "Draft" }),
    ContactSubmission.countDocuments(),
    ContactSubmission.find().sort({ createdAt: -1 }).limit(5).lean()
  ]);

  const stats = [
    {
      title: "Total Blog Posts",
      value: totalPosts,
      icon: FileText,
      color: "bg-blue-500",
      link: "/admin/blog/posts"
    },
    {
      title: "Published Posts",
      value: publishedPosts,
      icon: CheckCircle,
      color: "bg-green-500",
      link: "/admin/blog/posts?status=Published"
    },
    {
      title: "Draft Posts",
      value: draftPosts,
      icon: Edit3,
      color: "bg-orange-500",
      link: "/admin/blog/posts?status=Draft"
    },
    {
      title: "Contact Submissions",
      value: totalSubmissions,
      icon: MessageSquare,
      color: "bg-purple-500",
      link: "/admin/blog/submissions"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">Welcome back! Here is a high-level overview of your website activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Link key={index} href={stat.link} className="block group">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-[#00B8FF]/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 lg:col-span-1">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#00B8FF]" />
            Quick Actions
          </h2>
          <div className="space-y-3">
            <Link 
              href="/admin/blog/posts/new" 
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#00B8FF]/10 hover:text-[#00B8FF] border border-slate-100 transition-colors group"
            >
              <span className="font-medium text-slate-700 group-hover:text-[#00B8FF]">Write a New Blog</span>
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-[#00B8FF]" />
            </Link>
            <Link 
              href="/admin/blog/media" 
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#00B8FF]/10 hover:text-[#00B8FF] border border-slate-100 transition-colors group"
            >
              <span className="font-medium text-slate-700 group-hover:text-[#00B8FF]">Manage Media Library</span>
              <Users className="w-5 h-5 text-slate-400 group-hover:text-[#00B8FF]" />
            </Link>
            <Link 
              href="/admin/blog/categories" 
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#00B8FF]/10 hover:text-[#00B8FF] border border-slate-100 transition-colors group"
            >
              <span className="font-medium text-slate-700 group-hover:text-[#00B8FF]">Manage Categories</span>
              <Edit3 className="w-5 h-5 text-slate-400 group-hover:text-[#00B8FF]" />
            </Link>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#00B8FF]" />
              Recent Contact Submissions
            </h2>
            <Link href="/admin/blog/submissions" className="text-sm text-[#00B8FF] font-medium hover:underline">
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentSubmissions.length === 0 ? (
              <p className="text-slate-500 text-center py-4 bg-slate-50 rounded-xl border border-slate-100">
                No recent submissions.
              </p>
            ) : (
              recentSubmissions.map((sub: any) => (
                <div key={sub._id.toString()} className="flex items-start justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                  <div>
                    <h3 className="font-bold text-slate-900">{sub.firstName} {sub.lastName}</h3>
                    <p className="text-sm text-slate-500 mt-1">{sub.email} • {sub.service}</p>
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
