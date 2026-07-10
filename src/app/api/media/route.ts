import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // Note: To use the admin API, CLOUDINARY_URL or api_secret is required.
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'enterprise_blog/', // Folder where images are uploaded
      max_results: 50,
      direction: -1, // Descending order (newest first)
    });

    const images = result.resources.map((res: any) => ({
      public_id: res.public_id,
      url: res.secure_url,
      created_at: res.created_at,
      format: res.format,
      width: res.width,
      height: res.height,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch media" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { public_id } = body;

    if (!public_id) {
      return NextResponse.json({ error: "public_id is required" }, { status: 400 });
    }

    const result = await cloudinary.uploader.destroy(public_id);
    
    if (result.result !== "ok") {
      console.error("Cloudinary destroy failed:", result);
      return NextResponse.json({ error: "Failed to delete from Cloudinary" }, { status: 500 });
    }

    return NextResponse.json({ message: "Media deleted successfully", result });
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return NextResponse.json({ error: "Failed to delete media" }, { status: 500 });
  }
}
