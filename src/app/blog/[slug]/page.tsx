import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import Category from "@/models/Category";
import Tag from "@/models/Tag";
import Author from "@/models/Author";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, TagIcon, ArrowLeft, User } from "lucide-react";
import { Metadata } from "next";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export const revalidate = 60; // Revalidate every 60 seconds

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  await dbConnect();
  // Prevent tree-shaking of Mongoose models
  if (Author) {}
  if (Category) {}
  if (Tag) {}

  const { slug } = await params;
  const post = await Post.findOne({ slug }).populate("author").populate("tags").lean();

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.focusKeyword || (post.tags ? post.tags.map((t: any) => t.name).join(', ') : ""),
    authors: [{ name: post.author?.name || "Enterprise Cleaning Team" }],
    alternates: {
      canonical: post.seo?.canonicalUrl,
    },
    openGraph: {
      title: post.seo?.ogTitle || post.seo?.metaTitle || post.title,
      description: post.seo?.ogDescription || post.seo?.metaDescription || post.excerpt,
      images: post.seo?.ogImage || post.featuredImage?.url ? [{ url: post.seo?.ogImage || post.featuredImage?.url }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.twitterCard?.title || post.seo?.metaTitle || post.title,
      description: post.seo?.twitterCard?.description || post.seo?.metaDescription || post.excerpt,
      images: post.seo?.twitterCard?.image || post.featuredImage?.url ? [post.seo?.twitterCard?.image || post.featuredImage?.url] : [],
    },
    robots: {
      index: !post.seo?.noIndex,
      follow: !post.seo?.noIndex,
    }
  };
}

function extractHeadings(html: string) {
  const regex = /<(h[23])>(.*?)<\/\1>/gi;
  const headings = [];
  let match;
  let modifiedHtml = html;

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1].replace('h', ''), 10);
    const text = match[2].replace(/<[^>]*>?/gm, ''); // remove inner tags
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    headings.push({ id, text, level });
    // Add id to the heading in HTML
    const replaceStr = `<${match[1]} id="${id}">${match[2]}</${match[1]}>`;
    modifiedHtml = modifiedHtml.replace(match[0], replaceStr);
  }
  return { headings, html: modifiedHtml };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  await dbConnect();
  // Prevent tree-shaking
  if (Author) {}
  if (Category) {}
  if (Tag) {}

  const { slug } = await params;
  const post = await Post.findOne({ slug })
    .populate("category", "name slug")
    .populate("tags", "name slug")
    .populate("author", "name avatar bio")
    .lean();

  if (!post || post.status !== "Published") {
    notFound();
  }

  // Parse Table of Contents and FAQ Schema
  const { headings, html: processedHtml } = extractHeadings(post.content);
  
  // Explicit FAQs from the database (from the new Post Editor builder)
  const explicitFaqs = (post.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: faq.answer
  }));

  // Fetch smart related posts (matching category or tags)
  const relatedQuery: any = { status: "Published", _id: { $ne: post._id }, $or: [] };
  if (post.category && post.category.length > 0) relatedQuery.$or.push({ category: { $in: post.category.map((c: any) => c._id) } });
  if (post.tags && post.tags.length > 0) relatedQuery.$or.push({ tags: { $in: post.tags.map((t: any) => t._id) } });
  
  let recentPosts: any[] = [];
  if (relatedQuery.$or.length > 0) {
    recentPosts = await Post.find(relatedQuery).sort({ createdAt: -1 }).limit(4).lean();
  }
  
  // Fallback if not enough related posts
  if (recentPosts.length < 4) {
    const excludeIds = [post._id, ...recentPosts.map((p: any) => p._id)];
    const fallbackPosts = await Post.find({ status: "Published", _id: { $nin: excludeIds } })
      .sort({ createdAt: -1 })
      .limit(4 - recentPosts.length)
      .lean();
    recentPosts = [...recentPosts, ...fallbackPosts];
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://enterprisecleaning.com';
  
  // Advanced AI & Geo SEO Schema Graph
  const jsonLdGraph: any[] = [
    {
      "@type": "BlogPosting",
      "@id": `${baseUrl}/blog/${post.slug}#blogposting`,
      "headline": post.title,
      "image": post.featuredImage?.url ? [post.featuredImage.url] : [],
      "datePublished": post.createdAt,
      "dateModified": post.updatedAt,
      "author": {
        "@type": "Person",
        "name": post.author?.name || "Enterprise Cleaning Team"
      },
      "publisher": { "@id": `${baseUrl}/#organization` },
      "about": post.seo?.targetLocations?.length > 0 ? {
        "@type": "Place",
        "name": post.seo.targetLocations.join(", ")
      } : undefined
    },
    {
      "@type": "CleaningService",
      "@id": `${baseUrl}/#organization`,
      "name": "Enterprise Cleaning Corporation",
      "areaServed": post.seo?.targetLocations?.length > 0 ? post.seo.targetLocations : ["Central Massachusetts", "Worcester, MA"],
      "url": baseUrl,
      "telephone": "+15089269411", // Add your actual phone number
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Worcester",
        "addressRegion": "MA",
        "addressCountry": "US"
      }
    }
  ];

  if (explicitFaqs.length > 0) {
    jsonLdGraph.push({
      "@type": "FAQPage",
      "@id": `${baseUrl}/blog/${post.slug}#faq`,
      "mainEntity": explicitFaqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph.filter(item => Object.keys(item).length > 0) // Remove undefined objects
  };

  const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://enterprisecleaning.com'}/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="bg-background pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <article className="flex-1 lg:max-w-[800px]">
              <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-brand-blue mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
              </Link>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 flex-wrap">
                  {post.category?.map((cat: any) => (
                    <span key={cat._id.toString()} className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-semibold">
                      {cat.name}
                    </span>
                  ))}
                  <div className="flex items-center text-sm text-muted-foreground gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString()}>
                      {new Date(post.createdAt || Date.now()).toLocaleDateString('en-GB')}
                    </time>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                  {post.title}
                </h1>
                
                {post.excerpt && (
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                
                {/* Author & Share */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-navy">{post.author?.name || "Enterprise Cleaning Team"}</div>
                      <div className="text-xs text-muted-foreground">Author</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">Share:</span>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-[#1DA1F2] hover:text-white transition-colors text-muted-foreground">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-[#0A66C2] hover:text-white transition-colors text-muted-foreground">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-[#1877F2] hover:text-white transition-colors text-muted-foreground">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {post.featuredImage?.url && (
                <div className="rounded-2xl overflow-hidden mb-12 shadow-lg border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.featuredImage.url} 
                    alt={post.featuredImage.alt || post.title}
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                  {post.featuredImage.caption && (
                    <div className="p-3 bg-muted text-center text-sm text-muted-foreground border-t border-border">
                      {post.featuredImage.caption}
                    </div>
                  )}
                </div>
              )}

              {/* Mobile ToC */}
              {headings.length > 0 && (
                <div className="lg:hidden bg-muted/50 p-6 rounded-xl border border-border mb-8">
                  <h3 className="font-bold text-brand-navy mb-4">Table of Contents</h3>
                  <ul className="space-y-2 text-sm">
                    {headings.map((h) => (
                      <li key={h.id} className={`flex gap-2 items-start ${h.level === 3 ? "ml-4" : ""}`}>
                        <span className="text-brand-blue mt-[2px]">{h.level === 2 ? '•' : '-'}</span>
                        <a href={`#${h.id}`} className="text-muted-foreground hover:text-brand-blue transition-colors">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Prose Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#0B1E36] prose-a:!text-[#00B8FF] hover:prose-a:!text-[#0B1E36] prose-img:rounded-xl prose-headings:scroll-mt-24 prose-a:!underline prose-a:!font-bold"
                dangerouslySetInnerHTML={{ __html: processedHtml }}
              />

              {/* Explicit FAQs */}
              <BlogFAQ faqs={explicitFaqs} />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border flex items-center gap-3 flex-wrap">
                  <TagIcon className="w-5 h-5 text-muted-foreground" />
                  {post.tags.map((tag: any) => (
                    <span key={tag._id.toString()} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      #{tag.name}
                    </span>
                  ))}
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-[350px] space-y-8 lg:sticky lg:top-32 h-fit">
              {/* Desktop ToC */}
              {headings.length > 0 && (
                <div className="hidden lg:block bg-card rounded-2xl p-6 border border-border shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-brand-navy mb-4 pb-4 border-b border-border">
                    Table of Contents
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {headings.map((h) => (
                      <li key={h.id} className={`flex gap-2 items-start ${h.level === 3 ? "ml-4" : ""}`}>
                        <span className="text-brand-blue mt-[2px]">{h.level === 2 ? '•' : '-'}</span>
                        <a href={`#${h.id}`} className="text-muted-foreground hover:text-brand-blue transition-colors line-clamp-2">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-6 pb-4 border-b border-border">
                  You Might Also Like
                </h3>
                <div className="space-y-6">
                  {recentPosts.map((rp: any) => (
                    <div key={rp._id.toString()} className="group">
                      <Link href={`/blog/${rp.slug}`} className="flex gap-4">
                        {rp.featuredImage?.url ? (
                          <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={rp.featuredImage.url} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                        ) : null}
                        <div>
                          <h4 className="font-bold text-brand-navy text-sm line-clamp-2 group-hover:text-brand-blue transition-colors mb-1">
                            {rp.title}
                          </h4>
                          <div className="text-xs text-muted-foreground">
                            {new Date(rp.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
