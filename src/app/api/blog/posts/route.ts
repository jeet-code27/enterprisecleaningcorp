import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import Category from "@/models/Category";
import Tag from "@/models/Tag";
import Author from "@/models/Author";
import slugify from "slugify";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    if (Category) {}
    if (Tag) {}
    if (Author) {}
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const isFeatured = searchParams.get('isFeatured');

    let query: any = {};
    if (status) query.status = status;
    if (isFeatured === 'true') query.isFeatured = true;

    const posts = await Post.find(query)
      .populate('category', 'name slug')
      .populate('tags', 'name slug')
      .populate('author', 'name avatar bio')
      .sort({ createdAt: -1 });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    
    let { title, slug } = body;
    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    if (!slug) {
      slug = slugify(title, { lower: true, strict: true });
    } else {
      slug = slugify(slug, { lower: true, strict: true });
    }

    // Check if slug exists
    const existing = await Post.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: "Post with this slug already exists" }, { status: 400 });
    }

    const post = await Post.create({ ...body, slug });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
