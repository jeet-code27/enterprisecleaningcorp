import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Category from "@/models/Category";
import Post from "@/models/Post";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
    }

    // Check if category is used in any posts
    const usedInPosts = await Post.findOne({ category: id });
    if (usedInPosts) {
      return NextResponse.json(
        { error: "Cannot delete category because it is currently used by one or more posts." },
        { status: 400 }
      );
    }

    // Check if it's a parent to other categories
    const hasChildren = await Category.findOne({ parent: id });
    if (hasChildren) {
      return NextResponse.json(
        { error: "Cannot delete category because it has subcategories." },
        { status: 400 }
      );
    }

    const deleted = await Category.findByIdAndDelete(id);
    
    if (!deleted) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Delete category error:", error);
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}
