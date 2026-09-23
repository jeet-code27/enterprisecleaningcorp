import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import ContactSubmission from "@/models/ContactSubmission";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";

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

    // Clean up uploaded documents (Local Files in project + Images from Cloudinary)
    if (submission.uploadedDocuments && typeof submission.uploadedDocuments === "object") {
      const files = Object.values(submission.uploadedDocuments) as any[];
      for (const fileObj of files) {
        if (!fileObj) continue;
        try {
          const publicId = fileObj.public_id || "";
          const url = fileObj.url || "";

          // 1. If it's a locally stored document in the project (public/uploads/documents)
          if (publicId.startsWith("local:") || url.startsWith("/uploads/") || url.includes("/uploads/documents/")) {
            const fileName = publicId.startsWith("local:")
              ? publicId.replace("local:", "")
              : path.basename(url.split("?")[0]);
            
            const localFilePath = path.join(process.cwd(), "public", "uploads", "documents", fileName);
            if (fs.existsSync(localFilePath)) {
              await fs.promises.unlink(localFilePath).catch(() => null);
            }
          } else {
            // 2. Otherwise delete from Cloudinary
            let cldPublicId = publicId;
            if (!cldPublicId && url) {
              const match = url.match(/\/upload\/(?:v\d+\/)?(.+)$/);
              if (match && match[1]) {
                cldPublicId = decodeURIComponent(match[1]);
              }
            }

            if (cldPublicId) {
              const cleanImagePublicId = cldPublicId.replace(/\.[^/.]+$/, "");
              // Delete image resource
              await cloudinary.uploader.destroy(cleanImagePublicId, { resource_type: "image" }).catch(() => null);
              // Delete raw resource (if any)
              await cloudinary.uploader.destroy(cldPublicId, { resource_type: "raw" }).catch(() => null);
              await cloudinary.uploader.destroy(cleanImagePublicId, { resource_type: "raw" }).catch(() => null);
            }
          }
        } catch (fileErr) {
          console.error("Failed to delete file for bid:", fileErr);
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

