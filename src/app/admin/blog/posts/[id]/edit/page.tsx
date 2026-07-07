"use client";

import { useEffect, useState } from "react";
import { PostEditor } from "@/components/blog/PostEditor";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

export default function EditPostPage() {
  const params = useParams();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/posts/${params.id}`);
        const data = await res.json();
        setInitialData(data);
      } catch (error) {
        console.error("Failed to fetch post", error);
      } finally {
        setLoading(false);
      }
    };
    if (params.id) fetchPost();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-brand-blue animate-spin" />
      </div>
    );
  }

  if (!initialData) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog/posts" className="text-muted-foreground hover:text-brand-blue transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-brand-navy">Edit Post</h1>
      </div>
      <PostEditor initialData={initialData} isEdit={true} />
    </div>
  );
}
