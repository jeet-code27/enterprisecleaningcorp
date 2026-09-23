import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case ".pdf":
      return "application/pdf";
    case ".docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case ".doc":
      return "application/msword";
    case ".xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case ".xls":
      return "application/vnd.ms-excel";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".svg":
      return "image/svg+xml";
    case ".zip":
      return "application/zip";
    case ".dwg":
      return "application/acad";
    case ".txt":
      return "text/plain";
    default:
      return "application/octet-stream";
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const fileUrl = searchParams.get("url");
    const rawFilename = searchParams.get("filename") || "document";
    const isInline = searchParams.get("inline") === "true";

    if (!fileUrl) {
      return NextResponse.json({ error: "Missing file URL" }, { status: 400 });
    }

    const cleanFilename = rawFilename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const dispositionType = isInline ? "inline" : "attachment";

    // 1. Check if it's a local document stored in the project (e.g. /uploads/documents/...)
    const isLocalUpload = fileUrl.startsWith("/uploads/") || fileUrl.includes("/uploads/documents/");
    if (isLocalUpload) {
      let relativePath = fileUrl;
      if (fileUrl.startsWith("http")) {
        const u = new URL(fileUrl);
        relativePath = u.pathname;
      }
      
      const cleanRel = relativePath.replace(/^\/+/, "");
      const fullPath = path.join(process.cwd(), "public", cleanRel);
      const publicDir = path.join(process.cwd(), "public", "uploads");

      // Prevent directory traversal
      if (!fullPath.startsWith(publicDir)) {
        return NextResponse.json({ error: "Unauthorized file access" }, { status: 403 });
      }

      if (!fs.existsSync(fullPath)) {
        return NextResponse.json({ error: "File not found on server" }, { status: 404 });
      }

      const fileBuffer = await fs.promises.readFile(fullPath);
      const contentType = getMimeType(rawFilename || fullPath);

      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `${dispositionType}; filename="${cleanFilename}"`,
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    // 2. Otherwise it's an external URL (Cloudinary)
    const parsedUrl = new URL(fileUrl);
    const allowedHosts = [
      "res.cloudinary.com",
      "cloudinary.com",
      "enterprisecleaningcorp.com",
      "www.enterprisecleaningcorp.com",
      "localhost"
    ];

    const isAllowedHost = allowedHosts.some(host => parsedUrl.hostname.endsWith(host));
    if (!isAllowedHost) {
      return NextResponse.json({ error: "Unauthorized file host" }, { status: 403 });
    }

    // Fetch the file from storage
    const response = await fetch(fileUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch file from storage: ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || getMimeType(rawFilename);
    const arrayBuffer = await response.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `${dispositionType}; filename="${cleanFilename}"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error: any) {
    console.error("Download proxy error:", error);
    return NextResponse.json(
      { error: "Error downloading file: " + (error?.message || "Internal error") },
      { status: 500 }
    );
  }
}

