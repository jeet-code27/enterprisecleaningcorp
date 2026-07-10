"use client";

import { useState, useEffect } from "react";
import { UploadCloud, Copy, CheckCircle2, Loader2, Image as ImageIcon, Trash2 } from "lucide-react";

interface MediaItem {
  public_id: string;
  url: string;
  created_at: string;
}

export default function MediaLibraryPage() {
  const [images, setImages] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const res = await fetch("/api/media");
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    
    setUploading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      await fetchMedia();
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const deleteImage = async (public_id: string) => {
    if (!confirm("Are you sure you want to delete this image from Cloudinary?")) return;
    
    setDeletingId(public_id);
    try {
      const res = await fetch("/api/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_id })
      });
      if (res.ok) {
        await fetchMedia();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete image");
      }
    } catch (err) {
      console.error("Delete failed", err);
      alert("An error occurred while deleting the image.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-brand-navy">Media Library</h1>
        <label className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-md cursor-pointer hover:bg-brand-navy transition-colors">
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
          {uploading ? "Uploading..." : "Upload Image"}
          <input type="file" className="hidden" accept="image/*" onChange={uploadImage} disabled={uploading} />
        </label>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 text-brand-blue animate-spin" />
        </div>
      ) : images.length === 0 ? (
        <div className="bg-card rounded-xl border border-border p-12 text-center flex flex-col items-center justify-center">
          <ImageIcon className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
          <h2 className="text-xl font-medium text-brand-navy mb-2">No Media Found</h2>
          <p className="text-muted-foreground max-w-md">
            Upload your first image to the media library.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.public_id} className="group relative bg-card border border-border rounded-xl overflow-hidden aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.public_id} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <div className="flex gap-2 mb-2">
                  <button 
                    onClick={() => copyUrl(img.public_id, img.url)}
                    className="bg-white text-brand-navy p-2 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                    title="Copy URL"
                  >
                    {copiedId === img.public_id ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={() => deleteImage(img.public_id)}
                    disabled={deletingId === img.public_id}
                    className="bg-white text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors disabled:opacity-50"
                    title="Delete Image"
                  >
                    {deletingId === img.public_id ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-xs text-white text-center break-all line-clamp-2">
                  {img.url}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
