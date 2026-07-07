import { PostEditor } from "@/components/blog/PostEditor";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreatePostPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog/posts" className="text-muted-foreground hover:text-brand-blue transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-brand-navy">Create New Post</h1>
      </div>
      <PostEditor />
    </div>
  );
}
