"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CategoriesAndTagsPage() {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [catRes, tagRes] = await Promise.all([
      fetch("/api/blog/categories"),
      fetch("/api/blog/tags")
    ]);
    setCategories(await catRes.json());
    setTags(await tagRes.json());
  };

  const [parentCategory, setParentCategory] = useState("");

  const createCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/blog/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory, parent: parentCategory || null })
    });
    setNewCategory("");
    setParentCategory("");
    await fetchData();
    setLoading(false);
  };

  const createTag = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/blog/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTag })
    });
    setNewTag("");
    await fetchData();
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand-navy">Categories & Tags</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Categories */}
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <form onSubmit={createCategory} className="flex flex-col gap-2 mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="New Category Name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
                required
              />
            </div>
            <div className="flex gap-2">
              <select
                value={parentCategory}
                onChange={(e) => setParentCategory(e.target.value)}
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm text-muted-foreground"
              >
                <option value="">No Parent (Root Category)</option>
                {categories.map((c: any) => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>
              <Button type="submit" disabled={loading} className="bg-brand-blue hover:bg-brand-navy text-white">Add</Button>
            </div>
          </form>
          <ul className="space-y-2">
            {categories.map((c: any) => (
              <li key={c._id} className={`p-3 bg-muted rounded-md border border-border flex flex-col ${c.parent ? 'ml-6 border-l-4 border-l-brand-blue' : ''}`}>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-brand-navy">{c.name}</span>
                  <span className="text-xs text-muted-foreground">/{c.slug}</span>
                </div>
                {c.parent && <span className="text-xs text-muted-foreground mt-1">Parent: {c.parent.name}</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Tags</h2>
          <form onSubmit={createTag} className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="New Tag Name"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
              required
            />
            <Button type="submit" disabled={loading} className="bg-brand-blue hover:bg-brand-navy text-white">Add</Button>
          </form>
          <ul className="space-y-2">
            {tags.map((t: any) => (
              <li key={t._id} className="p-3 bg-muted rounded-md border border-border flex justify-between">
                <span>{t.name}</span>
                <span className="text-sm text-muted-foreground">#{t.slug}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
