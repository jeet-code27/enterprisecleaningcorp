import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const fileUrl = searchParams.get("url");
    const rawFilename = searchParams.get("filename") || "document";
    const isInline = searchParams.get("inline") === "true";

    if (!fileUrl) {
      return NextResponse.json({ error: "Missing file URL" }, { status: 400 });
    }

    // Only allow fetching from trusted domains (Cloudinary or local)
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

    // Fetch the file from Cloudinary / storage
    const response = await fetch(fileUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch file from storage: ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const arrayBuffer = await response.arrayBuffer();

    // Sanitize filename for Content-Disposition header
    const cleanFilename = rawFilename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const dispositionType = isInline ? "inline" : "attachment";

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
