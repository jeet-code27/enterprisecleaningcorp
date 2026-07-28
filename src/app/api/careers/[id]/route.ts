import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import CareerSubmission from "@/models/CareerSubmission";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await req.json();

    const updated = await CareerSubmission.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Error updating career application status:", error);
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    const deleted = await CareerSubmission.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Application deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting career application:", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
