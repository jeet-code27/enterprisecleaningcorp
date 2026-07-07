import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Author from "@/models/Author";

export async function GET() {
  try {
    await dbConnect();
    const authors = await Author.find({}).sort({ name: 1 });
    return NextResponse.json(authors);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch authors" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name } = body;
    if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });
    
    const author = await Author.create({ name });
    return NextResponse.json(author, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create author" }, { status: 500 });
  }
}
