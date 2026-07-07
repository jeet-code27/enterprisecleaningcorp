"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Loader2, Image as ImageIcon, Link as LinkIcon, Bold, Italic, List, ListOrdered, Quote, Heading2, Heading3, Star, X } from "lucide-react";

interface Category { _id: string; name: string; }
interface Tag { _id: string; name: string; }
interface Author { _id: string; name: string; }
interface Post { _id: string; title: string; slug: string; category: string[]; tags: string[]; }
interface MediaItem { public_id: string; url: string; }

interface PostEditorProps {
  initialData?: any;
  isEdit?: boolean;
}

export function PostEditor({ initialData, isEdit = false }: PostEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  
  // Media Modal
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [mediaTarget, setMediaTarget] = useState<'featured' | 'editor'>('featured');

  // Form State
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [authorId, setAuthorId] = useState(initialData?.author?._id || initialData?.author || "");
  const [isFeatured, setIsFeatured] = useState(initialData?.isFeatured || false);
  const [featuredImage, setFeaturedImage] = useState({
    url: initialData?.featuredImage?.url || "",
    alt: initialData?.featuredImage?.alt || "",
    caption: initialData?.featuredImage?.caption || ""
  });
  const [status, setStatus] = useState(initialData?.status || "Draft");
  const [selectedCategory, setSelectedCategory] = useState(initialData?.category?.[0]?._id || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(initialData?.tags?.map((t: any) => t._id) || []);
  const [newTag, setNewTag] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [seo, setSeo] = useState({
    metaTitle: initialData?.seo?.metaTitle || "",
    metaDescription: initialData?.seo?.metaDescription || "",
    focusKeyword: initialData?.seo?.focusKeyword || "",
    canonicalUrl: initialData?.seo?.canonicalUrl || "",
    ogTitle: initialData?.seo?.ogTitle || "",
    ogDescription: initialData?.seo?.ogDescription || "",
    ogImage: initialData?.seo?.ogImage || "",
    twitterCard: {
      title: initialData?.seo?.twitterCard?.title || "",
      description: initialData?.seo?.twitterCard?.description || "",
      image: initialData?.seo?.twitterCard?.image || ""
    }
  });

  useEffect(() => {
    fetchData();
    fetchMedia();
  }, []);

  const fetchData = async () => {
    try {
      const [catRes, tagRes, postRes, authRes] = await Promise.all([
        fetch("/api/blog/categories"),
        fetch("/api/blog/tags"),
        fetch("/api/blog/posts"),
        fetch("/api/blog/authors")
      ]);
      setCategories(await catRes.json());
      setTags(await tagRes.json());
      setAllPosts(await postRes.json());
      setAuthors(await authRes.json());
    } catch (e) {
      console.error(e);
    }
  };

  const fetchMedia = async () => {
    const res = await fetch("/api/media");
    const data = await res.json();
    if(Array.isArray(data)) setMediaItems(data);
  }

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const data = await res.json();
    return data.url;
  };

  const editor = useEditor({
    extensions: [StarterKit, Image, Link.configure({ openOnClick: false })],
    content: initialData?.content || "",
    immediatelyRender: false,
    editorProps: {
      attributes: { class: "prose max-w-none focus:outline-none min-h-[400px] p-4 prose-a:!text-[#00B8FF] hover:prose-a:!text-[#0B1E36] prose-a:!underline prose-a:!font-bold" },
      handleDrop: function(view, event, slice, moved) {
        if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
          const file = event.dataTransfer.files[0];
          if (file.type.startsWith('image/')) {
            uploadImage(file).then(url => {
              const { schema } = view.state;
              const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
              const node = schema.nodes.image.create({ src: url });
              if (coordinates) {
                const transaction = view.state.tr.insert(coordinates.pos, node);
                view.dispatch(transaction);
              }
            });
            return true;
          }
        }
        return false;
      }
    },
  });

  const insertInternalLink = (url: string, defaultTitle: string) => {
    if (!editor) return;
    const { from, to, empty } = editor.state.selection;
    if (empty) {
      // If nothing is selected, insert the title as a linked text
      editor.chain().focus().insertContent(`<a href="${url}">${defaultTitle}</a>`).run();
    } else {
      // If text is selected, just apply the link to the selected text
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const setCustomLink = () => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl || '');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  // Static core website pages for quick linking
  const servicePages = [
    { title: "Nightly Janitorial", path: "/nightly-janitorial-cleaning-central-ma" },
    { title: "Day Porter", path: "/day-porter-services-central-ma" },
    { title: "Floor Care", path: "/floor-care-services-central-ma" },
    { title: "Property Management", path: "/property-management-cleaning-central-ma" },
    { title: "Manufacturing & Industrial", path: "/manufacturing-industrial-cleaning-central-ma" },
    { title: "Medical & Healthcare", path: "/medical-healthcare-cleaning-central-ma" },
    { title: "Offices & Financial", path: "/office-financial-cleaning-central-ma" },
    { title: "Schools & Municipal", path: "/school-municipal-cleaning-central-ma" },
    { title: "Warehouses & Distribution", path: "/warehouse-distribution-cleaning-central-ma" },
    { title: "Emergency & Restoration", path: "/emergency-restoration-services-central-ma" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const handleCreateTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!newTag) return;
    const res = await fetch("/api/blog/tags", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: newTag }) });
    const data = await res.json();
    if(res.ok) {
      setTags([...tags, data]);
      setSelectedTags([...selectedTags, data._id]);
      setNewTag("");
    }
  }

  const handleCreateAuthor = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!newAuthor) return;
    const res = await fetch("/api/blog/authors", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: newAuthor }) });
    const data = await res.json();
    if(res.ok) {
      setAuthors([...authors, data]);
      setAuthorId(data._id);
      setNewAuthor("");
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const postData = {
      title, slug, content: editor?.getHTML(), excerpt, author: authorId || null,
      featuredImage, status, isFeatured,
      category: selectedCategory ? [selectedCategory] : [],
      tags: selectedTags,
      seo
    };

    try {
      const url = isEdit ? `/api/blog/posts/${initialData._id}` : `/api/blog/posts`;
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        router.push("/admin/blog/posts");
        router.refresh();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save post");
      }
    } catch (error) {
      alert("Error saving post");
    } finally {
      setLoading(false);
    }
  };

  // Smart internal linking: only show posts matching category or tags
  const suggestedPosts = allPosts.filter(p => {
    if (p._id === initialData?._id) return false;
    const matchesCategory = p.category?.some((c: any) => c._id === selectedCategory);
    const matchesTags = p.tags?.some((t: any) => selectedTags.includes(t._id));
    return matchesCategory || matchesTags;
  }).slice(0, 5);

  // Suggest Keyword Logic
  const suggestKeyword = () => {
    const text = (title + " " + excerpt).toLowerCase().replace(/[^a-z\s]/g, "");
    const words = text.split(/\s+/).filter(w => w.length > 4); // basic stop-word filter by length
    if (words.length > 0) {
      const counts: Record<string, number> = {};
      words.forEach(w => counts[w] = (counts[w] || 0) + 1);
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const topKeywords = sorted.slice(0, 4).map(item => item[0]).join(", ");
      setSeo({ ...seo, focusKeyword: topKeywords });
    }
  };

  const getSeoColor = (length: number, max: number) => {
    if (length === 0) return "text-muted-foreground";
    if (length > max) return "text-red-500";
    if (length > max * 0.8) return "text-green-500";
    return "text-yellow-500";
  };

  return (
    <>
      <form onSubmit={handleSave} className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="bg-card p-5 rounded-xl border border-border space-y-4">
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 text-4xl font-bold bg-transparent border-none focus:outline-none text-brand-navy placeholder:text-muted-foreground"
                required
              />
              <button 
                type="button" 
                onClick={() => setIsFeatured(!isFeatured)}
                className={`p-2 rounded-full border transition-colors ${isFeatured ? 'bg-yellow-100 border-yellow-400 text-yellow-600' : 'bg-muted border-border text-muted-foreground'}`}
                title="Mark as Featured"
              >
                <Star className="w-5 h-5" fill={isFeatured ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="Slug (auto-generated if empty)" value={slug} onChange={(e) => setSlug(e.target.value)} className="flex-1 p-2 text-sm border border-input rounded-md bg-background" />
            </div>
          </div>
          
          <div className="border border-border rounded-md bg-card relative">
            <div className="flex flex-wrap gap-2 p-2 bg-muted border-b border-border items-center justify-between sticky top-0 z-20 shadow-sm rounded-t-md">
              <div className="flex gap-1">
                <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleBold().run()} className={editor?.isActive('bold') ? 'bg-background' : ''}><Bold className="w-4 h-4" /></Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleItalic().run()} className={editor?.isActive('italic') ? 'bg-background' : ''}><Italic className="w-4 h-4" /></Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className={editor?.isActive('heading', { level: 2 }) ? 'bg-background' : ''}><Heading2 className="w-4 h-4" /></Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} className={editor?.isActive('heading', { level: 3 }) ? 'bg-background' : ''}><Heading3 className="w-4 h-4" /></Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleBulletList().run()} className={editor?.isActive('bulletList') ? 'bg-background' : ''}><List className="w-4 h-4" /></Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleOrderedList().run()} className={editor?.isActive('orderedList') ? 'bg-background' : ''}><ListOrdered className="w-4 h-4" /></Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleBlockquote().run()} className={editor?.isActive('blockquote') ? 'bg-background' : ''}><Quote className="w-4 h-4" /></Button>
                <Button type="button" variant="ghost" size="icon" onClick={setCustomLink} className={editor?.isActive('link') ? 'bg-background text-brand-blue' : ''} title="Insert Custom Link"><LinkIcon className="w-4 h-4" /></Button>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={() => { setMediaTarget('editor'); setIsMediaModalOpen(true); }} className="gap-2 text-xs">
                <ImageIcon className="w-4 h-4" /> Insert Media
              </Button>
            </div>
            <EditorContent editor={editor} />
          </div>

          <div className="bg-card p-4 rounded-xl border border-border space-y-4">
            <div>
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><LinkIcon className="w-4 h-4"/> Quick Service Links (Core Website)</h3>
              <div className="flex flex-wrap gap-2">
                {servicePages.map(page => (
                  <button
                    key={page.path} type="button" onClick={() => insertInternalLink(page.path, page.title)}
                    className="text-xs px-3 py-1 bg-brand-navy/5 hover:bg-brand-navy/10 text-brand-navy rounded-full border border-brand-navy/20 transition-colors text-left font-medium"
                  >
                    + {page.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><LinkIcon className="w-4 h-4"/> Related Blog Posts (Based on Tags)</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedPosts.length > 0 ? suggestedPosts.map(post => (
                  <button
                    key={post._id} type="button" onClick={() => insertInternalLink(`/blog/${post.slug}`, post.title)}
                    className="text-xs px-3 py-1 bg-muted hover:bg-brand-blue/10 hover:text-brand-blue rounded-full border border-border transition-colors text-left"
                  >
                    + {post.title}
                  </button>
                )) : (
                  <span className="text-xs text-muted-foreground">Select a category or tag to see blog suggestions.</span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Excerpt</label>
            <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full p-3 rounded-md border border-input bg-background min-h-[100px]" />
          </div>

          <div className="bg-card p-5 rounded-xl border border-border space-y-4">
            <h3 className="font-bold text-lg text-brand-navy border-b border-border pb-2">Advanced SEO Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-muted-foreground">Meta Title</label>
                  <span className={`text-xs font-semibold ${getSeoColor(seo.metaTitle.length, 60)}`}>
                    {seo.metaTitle.length}/60
                  </span>
                </div>
                <input type="text" value={seo.metaTitle} onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })} className="w-full p-2 mt-1 border border-input rounded-md bg-background" />
                {seo.metaTitle.length > 60 && <p className="text-xs text-red-500 mt-1">Title is too long. Keep it under 60 characters for best results.</p>}
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-muted-foreground">Focus Keyword</label>
                  <button type="button" onClick={suggestKeyword} className="text-xs text-brand-blue hover:underline font-medium">Auto-Suggest</button>
                </div>
                <input type="text" value={seo.focusKeyword} onChange={(e) => setSeo({ ...seo, focusKeyword: e.target.value })} className="w-full p-2 mt-1 border border-input rounded-md bg-background" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-muted-foreground">Meta Description</label>
                <span className={`text-xs font-semibold ${getSeoColor(seo.metaDescription.length, 160)}`}>
                  {seo.metaDescription.length}/160
                </span>
              </div>
              <textarea value={seo.metaDescription} onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })} className="w-full p-2 mt-1 border border-input rounded-md bg-background h-20" />
              {seo.metaDescription.length > 160 && <p className="text-xs text-red-500 mt-1">Description is too long. Keep it under 160 characters for best results.</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Canonical URL</label>
              <input type="text" value={seo.canonicalUrl} onChange={(e) => setSeo({ ...seo, canonicalUrl: e.target.value })} className="w-full p-2 mt-1 border border-input rounded-md bg-background" />
            </div>
            <div className="pt-4 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-sm">Open Graph</h4>
                <div><label className="text-xs text-muted-foreground">OG Title</label><input type="text" value={seo.ogTitle} onChange={(e) => setSeo({ ...seo, ogTitle: e.target.value })} className="w-full p-2 mt-1 border border-input rounded-md bg-background" /></div>
                <div><label className="text-xs text-muted-foreground">OG Description</label><textarea value={seo.ogDescription} onChange={(e) => setSeo({ ...seo, ogDescription: e.target.value })} className="w-full p-2 mt-1 border border-input rounded-md bg-background h-16" /></div>
                <div><label className="text-xs text-muted-foreground">OG Image URL</label><input type="text" value={seo.ogImage} onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })} className="w-full p-2 mt-1 border border-input rounded-md bg-background" /></div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-sm">Twitter Card</h4>
                <div><label className="text-xs text-muted-foreground">Twitter Title</label><input type="text" value={seo.twitterCard.title} onChange={(e) => setSeo({ ...seo, twitterCard: { ...seo.twitterCard, title: e.target.value } })} className="w-full p-2 mt-1 border border-input rounded-md bg-background" /></div>
                <div><label className="text-xs text-muted-foreground">Twitter Description</label><textarea value={seo.twitterCard.description} onChange={(e) => setSeo({ ...seo, twitterCard: { ...seo.twitterCard, description: e.target.value } })} className="w-full p-2 mt-1 border border-input rounded-md bg-background h-16" /></div>
                <div><label className="text-xs text-muted-foreground">Twitter Image URL</label><input type="text" value={seo.twitterCard.image} onChange={(e) => setSeo({ ...seo, twitterCard: { ...seo.twitterCard, image: e.target.value } })} className="w-full p-2 mt-1 border border-input rounded-md bg-background" /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-80 space-y-6 lg:sticky lg:top-8 h-fit">
          <div className="bg-card p-5 rounded-xl border border-border space-y-4">
            <h3 className="font-semibold text-brand-navy">Publish</h3>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border border-input rounded-md bg-background">
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
            <Button type="submit" disabled={loading} className="w-full bg-brand-blue hover:bg-brand-navy text-white">
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {isEdit ? "Update Post" : "Publish Post"}
            </Button>
          </div>
          
          <div className="bg-card p-5 rounded-xl border border-border space-y-4">
            <h3 className="font-semibold text-brand-navy">Author</h3>
            <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} className="w-full p-2 border border-input rounded-md bg-background text-sm">
              <option value="">Select Author</option>
              {authors.map(a => <option key={a._id} value={a._id}>{a.name}</option>)}
            </select>
            <div className="flex gap-2">
              <input type="text" placeholder="New Author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} className="flex-1 p-2 border border-input rounded-md bg-background text-sm" />
              <Button type="button" onClick={handleCreateAuthor} className="bg-muted text-foreground hover:bg-border px-3">Add</Button>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border space-y-4">
            <h3 className="font-semibold text-brand-navy">Taxonomy</h3>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Category</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-input rounded-md bg-background text-sm">
                <option value="">Select Category</option>
                {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Tags</label>
              <div className="flex flex-wrap gap-2 mb-2 max-h-32 overflow-y-auto">
                {tags.map(t => (
                  <label key={t._id} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                    <input type="checkbox" checked={selectedTags.includes(t._id)} onChange={(e) => {
                      if (e.target.checked) setSelectedTags([...selectedTags, t._id]);
                      else setSelectedTags(selectedTags.filter(id => id !== t._id));
                    }} />
                    {t.name}
                  </label>
                ))}
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="New tag" value={newTag} onChange={(e) => setNewTag(e.target.value)} className="flex-1 p-1.5 border border-input rounded-md bg-background text-xs" />
                <Button type="button" size="sm" onClick={handleCreateTag} className="bg-muted text-foreground hover:bg-border text-xs px-2 h-auto">Add</Button>
              </div>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-brand-navy">Featured Image</h3>
              <Button type="button" variant="ghost" size="sm" onClick={() => { setMediaTarget('featured'); setIsMediaModalOpen(true); }} className="text-xs h-6 px-2 text-brand-blue">
                Library
              </Button>
            </div>
            {featuredImage.url ? (
              <div className="space-y-3">
                <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featuredImage.url} alt="Featured" className="w-full h-full object-cover" />
                  <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2 h-6 px-2 text-xs" onClick={() => setFeaturedImage({ url: "", alt: "", caption: "" })}>Remove</Button>
                </div>
                <input type="text" placeholder="Alt text" value={featuredImage.alt} onChange={(e) => setFeaturedImage({ ...featuredImage, alt: e.target.value })} className="w-full p-2 text-sm border border-input rounded-md bg-background" />
                <input type="text" placeholder="Caption (optional)" value={featuredImage.caption} onChange={(e) => setFeaturedImage({ ...featuredImage, caption: e.target.value })} className="w-full p-2 text-sm border border-input rounded-md bg-background" />
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-input rounded-md cursor-pointer hover:bg-muted/50 transition-colors">
                <ImageIcon className="w-8 h-8 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">Upload Image</span>
                <input type="file" className="hidden" accept="image/*" onChange={async (e) => {
                  if (e.target.files?.[0]) {
                    const url = await uploadImage(e.target.files[0]);
                    setFeaturedImage({ ...featuredImage, url });
                  }
                }}/>
              </label>
            )}
          </div>
        </div>
      </form>

      {/* Media Library Modal */}
      {isMediaModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card w-full max-w-3xl rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-4 border-b border-border flex justify-between items-center bg-muted/50">
              <h2 className="text-lg font-bold">Select Media</h2>
              <button onClick={() => setIsMediaModalOpen(false)} className="text-muted-foreground hover:text-foreground"><X className="w-5 h-5"/></button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {mediaItems.map(item => (
                  <div key={item.public_id} className="relative aspect-square border border-border rounded-md overflow-hidden cursor-pointer group hover:ring-2 hover:ring-brand-blue"
                       onClick={() => {
                         if (mediaTarget === 'featured') {
                           setFeaturedImage({ ...featuredImage, url: item.url });
                         } else if (editor) {
                           editor.chain().focus().setImage({ src: item.url }).run();
                         }
                         setIsMediaModalOpen(false);
                       }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.url} alt="media" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
