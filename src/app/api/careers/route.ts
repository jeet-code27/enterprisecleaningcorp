import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import CareerSubmission from "@/models/CareerSubmission";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    // Required fields check
    if (!data.fullName || !data.email || !data.phone || !data.cityStateZip || !data.position) {
      return NextResponse.json({ error: "Missing required application fields" }, { status: 400 });
    }

    const newApplication = new CareerSubmission(data);
    await newApplication.save();

    return NextResponse.json(
      { success: true, message: "Application submitted successfully", id: newApplication._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting career application:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const applications = await CareerSubmission.find().sort({ createdAt: -1 });
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("Error fetching career applications:", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
