import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import Category from "@/models/Category";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog | Enterprise Cleaning",
  description: "Read the latest news, tips, and updates from Enterprise Cleaning.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string; page?: string }> }) {
  await dbConnect();

  const { category: categoryParam, page: pageParam } = await searchParams;
  
  const page = parseInt(pageParam || "1", 10);
  const limit = 9;
  const skip = (page - 1) * limit;

  let query: any = { status: "Published" };
  
  if (categoryParam) {
    const category = await Category.findOne({ slug: categoryParam });
    if (category) {
      query.category = category._id;
    }
  }

  const totalPosts = await Post.countDocuments(query);
  const totalPages = Math.ceil(totalPosts / limit);

  const posts = await Post.find(query)
    .populate("category", "name slug")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const categories = await Category.find({}).sort({ name: 1 }).lean();

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy">
            Our <span className="text-brand-blue">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, guides, and news about commercial cleaning and facility management.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !categoryParam
                ? "bg-brand-blue text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All Posts
          </Link>
          {categories.map((cat: any) => (
            <Link
              key={cat._id.toString()}
              href={`/blog?category=${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryParam === cat.slug
                  ? "bg-brand-blue text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              No posts found.
            </div>
          ) : (
            posts.map((post: any, i: number) => (
              <div 
                key={post._id.toString()} 
                className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  {post.featuredImage?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={post.featuredImage.url} 
                      alt={post.featuredImage.alt || post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-blue/10 flex items-center justify-center">
                      <span className="text-brand-blue font-medium">Enterprise Cleaning</span>
                    </div>
                  )}
                  {post.category?.[0] && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-brand-navy rounded-full">
                      {post.category[0].name}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString()}>
                      {new Date(post.createdAt || Date.now()).toLocaleDateString('en-GB')}
                    </time>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="group-hover:text-brand-blue transition-colors">
                    <h2 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                    {post.excerpt || post.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..."}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors mt-auto"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            {page > 1 && (
              <Link
                href={`/blog?page=${page - 1}${categoryParam ? `&category=${categoryParam}` : ''}`}
                className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors text-sm font-medium"
              >
                Previous
              </Link>
            )}
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const p = idx + 1;
                return (
                  <Link
                    key={p}
                    href={`/blog?page=${p}${categoryParam ? `&category=${categoryParam}` : ''}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                      p === page 
                        ? 'bg-brand-blue text-white' 
                        : 'border border-border hover:bg-muted'
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}
            </div>

            {page < totalPages && (
              <Link
                href={`/blog?page=${page + 1}${categoryParam ? `&category=${categoryParam}` : ''}`}
                className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors text-sm font-medium"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
