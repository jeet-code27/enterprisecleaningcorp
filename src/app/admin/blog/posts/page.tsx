"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Search } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blog/posts");
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      }
    } catch (error) {
      console.error("Failed to fetch posts", error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    try {
      await fetch(`/api/blog/posts/${id}`, {
        method: "DELETE",
      });
      fetchPosts();
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-brand-navy">Posts</h1>
        <Link href="/admin/blog/posts/create">
          <Button className="bg-brand-blue hover:bg-brand-navy text-white gap-2">
            <Plus className="w-4 h-4" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden flex flex-col">
        <div className="p-4 border-b border-border bg-muted/30">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search posts by title..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
            />
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center text-muted-foreground">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No posts found. Create your first post!
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="p-4 font-medium text-muted-foreground">Title</th>
                <th className="p-4 font-medium text-muted-foreground">Status</th>
                <th className="p-4 font-medium text-muted-foreground">Date</th>
                <th className="p-4 font-medium text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post._id} className="border-b border-border hover:bg-muted/30">
                  <td className="p-4 font-medium text-foreground">{post.title}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'Published' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground text-sm">
                    {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US') : new Date().toLocaleDateString('en-US')}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/blog/${post.slug}`} target="_blank">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-brand-blue" title="View Post">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </Button>
                      </Link>
                      <Link href={`/admin/blog/posts/${post._id}/edit`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-brand-blue" title="Edit Post">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => deletePost(post._id)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
