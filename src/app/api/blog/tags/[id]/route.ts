import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Tag from "@/models/Tag";
import Post from "@/models/Post";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Tag ID is required" }, { status: 400 });
    }

    // Check if tag is used in any posts
    const usedInPosts = await Post.findOne({ tags: id });
    if (usedInPosts) {
      return NextResponse.json(
        { error: "Cannot delete tag because it is currently used by one or more posts." },
        { status: 400 }
      );
    }

    const deleted = await Tag.findByIdAndDelete(id);
    
    if (!deleted) {
      return NextResponse.json({ error: "Tag not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Tag deleted successfully" });
  } catch (error) {
    console.error("Delete tag error:", error);
    return NextResponse.json({ error: "Failed to delete tag" }, { status: 500 });
  }
}
