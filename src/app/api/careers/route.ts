import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import CareerSubmission from "@/models/CareerSubmission";
import { sendEmail } from "@/lib/nodemailer";
import { getCareerAdminEmailHtml, getCareerUserAutoReplyHtml } from "@/lib/emailTemplates";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "alex@enterprisecleaningcorp.com";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    // Required fields check
    if (!data.fullName || !data.email || !data.phone || !data.cityStateZip || !data.position) {
      return NextResponse.json({ error: "Missing required application fields" }, { status: 400 });
    }

    // 1. Save to MongoDB (Admin Panel)
    const newApplication = new CareerSubmission(data);
    await newApplication.save();

    // 2. Send Nodemailer emails asynchronously
    try {
      // Admin Notification Email
      const adminEmailPromise = sendEmail({
        to: ADMIN_EMAIL,
        subject: `New Job Application: ${data.fullName} - ${data.position}`,
        html: getCareerAdminEmailHtml(data),
        replyTo: data.email,
      });

      // Candidate Auto-Reply Email
      const userAutoReplyPromise = sendEmail({
        to: data.email,
        subject: `Thank you for applying to Enterprise Cleaning Corporation`,
        html: getCareerUserAutoReplyHtml(data),
      });

      await Promise.all([adminEmailPromise, userAutoReplyPromise]);
    } catch (emailError) {
      console.error("Failed to send career emails via Nodemailer:", emailError);
      // DB save succeeded, log email error but return success to user
    }

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
