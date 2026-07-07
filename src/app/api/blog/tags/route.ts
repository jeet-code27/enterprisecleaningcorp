import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Tag from "@/models/Tag";
import slugify from "slugify";

export async function GET() {
  try {
    await dbConnect();
    const tags = await Tag.find({}).sort({ name: 1 });
    return NextResponse.json(tags);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tags" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const slug = slugify(name, { lower: true, strict: true });
    
    // Check if slug exists
    const existing = await Tag.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: "Tag already exists" }, { status: 400 });
    }

    const tag = await Tag.create({ name, slug });
    return NextResponse.json(tag, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create tag" }, { status: 500 });
  }
}
