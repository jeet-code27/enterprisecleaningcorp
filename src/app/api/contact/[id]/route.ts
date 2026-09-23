import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import ContactSubmission from "@/models/ContactSubmission";
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

    const submission = await ContactSubmission.findById(id).lean();
    if (!submission) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json(submission, { status: 200 });
  } catch (error) {
    console.error("Error fetching contact submission:", error);
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

    const updated = await ContactSubmission.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Error updating contact submission status:", error);
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

    const submission = await ContactSubmission.findById(id);

    if (!submission) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    // Clean up uploaded documents (PDF, DOCX, ZIP, Images) from Cloudinary
    if (submission.uploadedDocuments && typeof submission.uploadedDocuments === "object") {
      const files = Object.values(submission.uploadedDocuments) as any[];
      for (const fileObj of files) {
        if (!fileObj) continue;
        try {
          let publicId = fileObj.public_id;
          const url = fileObj.url;

          if (!publicId && url) {
            // Extract public_id from Cloudinary URL (e.g., enterprise_bids/filename)
            const match = url.match(/\/upload\/(?:v\d+\/)?(.+)$/);
            if (match && match[1]) {
              publicId = decodeURIComponent(match[1]);
            }
          }

          if (publicId) {
            const cleanImagePublicId = publicId.replace(/\.[^/.]+$/, "");
            // Delete image resource
            await cloudinary.uploader.destroy(cleanImagePublicId, { resource_type: "image" }).catch(() => null);
            // Delete raw resource (PDFs, CAD, DOCX, ZIP)
            await cloudinary.uploader.destroy(publicId, { resource_type: "raw" }).catch(() => null);
            await cloudinary.uploader.destroy(cleanImagePublicId, { resource_type: "raw" }).catch(() => null);
          }
        } catch (fileErr) {
          console.error("Failed to delete Cloudinary file for bid:", fileErr);
        }
      }
    }

    await ContactSubmission.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Submission and all associated files deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting contact submission:", error);
    return NextResponse.json({ error: "Failed to delete submission" }, { status: 500 });
  }
}

