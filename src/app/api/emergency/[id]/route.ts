import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import EmergencySubmission from "@/models/EmergencySubmission";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    const submission = await EmergencySubmission.findById(id).lean();
    if (!submission) {
      return NextResponse.json({ error: "Emergency submission not found" }, { status: 404 });
    }

    return NextResponse.json(submission, { status: 200 });
  } catch (error) {
    console.error("Error fetching emergency submission:", error);
    return NextResponse.json({ error: "Failed to fetch submission" }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await req.json();

    const updated = await EmergencySubmission.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Emergency submission not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Error updating emergency submission:", error);
    return NextResponse.json({ error: "Failed to update submission" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    const submission = await EmergencySubmission.findById(id);
    if (!submission) {
      return NextResponse.json({ error: "Emergency submission not found" }, { status: 404 });
    }

    // Clean up any uploaded photos from Cloudinary
    if (submission.photos && Array.isArray(submission.photos)) {
      for (const photoUrl of submission.photos) {
        try {
          if (photoUrl && photoUrl.includes("res.cloudinary.com")) {
            const matches = photoUrl.match(/\/upload\/(?:v\d+\/)?([^\.]+)/);
            if (matches && matches[1]) {
              await cloudinary.uploader.destroy(matches[1]);
            }
          }
        } catch (cleanupErr) {
          console.warn("Failed to delete Cloudinary photo:", cleanupErr);
        }
      }
    }

    await EmergencySubmission.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Emergency submission deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting emergency submission:", error);
    return NextResponse.json({ error: "Failed to delete submission" }, { status: 500 });
  }
}
