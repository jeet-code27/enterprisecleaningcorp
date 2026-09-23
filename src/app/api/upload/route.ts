import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Enforce 25MB file limit
    const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File exceeds 25MB limit. Please upload files under 25MB." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const folder = (formData.get("folder") as string) || "enterprise_bids";

    // Detect file type: Only actual images go to Cloudinary
    const isImage = file.type.startsWith("image/") && !file.name.toLowerCase().endsWith(".pdf");

    if (isImage) {
      // Upload Images to Cloudinary
      const result = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder,
            resource_type: "image",
            use_filename: true,
            unique_filename: true,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(buffer);
      });

      return NextResponse.json({
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        resource_type: "image",
      });
    } else {
      // Store Documents (PDF, DOCX, CAD, ZIP, etc.) directly in the project directory
      const ext = path.extname(file.name) || "";
      const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
      const uniqueName = `${Date.now()}_${baseName}${ext}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads", "documents");

      await fs.promises.mkdir(uploadDir, { recursive: true });
      const targetFilePath = path.join(uploadDir, uniqueName);
      await fs.promises.writeFile(targetFilePath, buffer);

      return NextResponse.json({
        url: `/uploads/documents/${uniqueName}`,
        public_id: `local:${uniqueName}`,
        format: ext.replace(/^\./, ""),
        resource_type: "raw",
      });
    }
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

