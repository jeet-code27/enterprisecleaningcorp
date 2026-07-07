import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import Category from "@/models/Category";
import Tag from "@/models/Tag";
import Author from "@/models/Author";
import slugify from "slugify";

type Params = Promise<{ id: string }>;

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    await dbConnect();
    if (Category) {}
    if (Tag) {}
    if (Author) {}
    const { id } = await params;
    const post = await Post.findById(id)
      .populate('category')
      .populate('tags')
      .populate('relatedPosts', 'title slug featuredImage');

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await req.json();
    
    if (body.title && !body.slug) {
      body.slug = slugify(body.title, { lower: true, strict: true });
    } else if (body.slug) {
      body.slug = slugify(body.slug, { lower: true, strict: true });
    }

    if (body.slug) {
      const existing = await Post.findOne({ slug: body.slug, _id: { $ne: id } });
      if (existing) {
        return NextResponse.json({ error: "Post with this slug already exists" }, { status: 400 });
      }
    }

    const post = await Post.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("Update post error:", error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const post = await Post.findByIdAndDelete(id);
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
