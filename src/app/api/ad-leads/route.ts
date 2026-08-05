import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import AdLead from '@/models/AdLead';
import ContactSubmission from '@/models/ContactSubmission';
import { sendEmail } from '@/lib/nodemailer';

const ALEX_EMAIL = "alex@enterprisecleaningcorp.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      fullName,
      email,
      phone,
      companyName,
      serviceType,
      facilitySize,
      message,
      source = "Commercial Cleaning Ad LP"
    } = data;

    if (!fullName || !email || !phone || !serviceType) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Full Name, Email, Phone, and Service Needed)." },
        { status: 400 }
      );
    }

    // 1. Save to Database asynchronously (Non-blocking for instant lead response)
    let savedToDb = false;
    try {
      await dbConnect();
      
      const newAdLead = new AdLead({
        fullName,
        email,
        phone,
        companyName: companyName || "N/A",
        serviceType,
        facilitySize: facilitySize || "Not Specified",
        message: message || "Requested a commercial cleaning quote via ad landing page.",
        source,
        status: "New",
        createdAt: new Date(),
      });

      await newAdLead.save();
      savedToDb = true;

      // Also save backup to ContactSubmissions
      try {
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0] || "Ad";
        const lastName = nameParts.slice(1).join(" ") || "Lead";

        const contactBackup = new ContactSubmission({
          firstName,
          lastName,
          email,
          phone,
          company: companyName || "N/A",
          service: `[Ad Campaign Lead] ${serviceType}`,
          department: "Sales / Ad Leads",
          message: `[AD LEAD - ${facilitySize || 'Standard'}] ${message || 'Quote requested from ad landing page.'}`,
          status: "New",
          createdAt: new Date(),
        });
        await contactBackup.save();
      } catch (dbBackupErr) {
        console.error("Backup ContactSubmission error:", dbBackupErr);
      }
    } catch (dbError) {
      console.warn("MongoDB connection warning (Lead will still process via Email notification):", dbError);
    }

    // 2. Send instant Email Notification to Alex
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
          <div style="background-color: #003057; padding: 16px 24px; border-radius: 8px; color: #ffffff; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 20px;">🚨 New Ad Campaign Lead Received!</h2>
            <p style="margin: 4px 0 0 0; color: #00B8FF; font-size: 13px; font-weight: bold;">Commercial Cleaning Ad Landing Page</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Full Name:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00B8FF; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #003057; font-weight: bold; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company Name:</td>
              <td style="padding: 8px 0;">${companyName || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service Needed:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #E31837;">${serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Facility Size:</td>
              <td style="padding: 8px 0;">${facilitySize || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Traffic Source:</td>
              <td style="padding: 8px 0;">${source}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #00B8FF; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 13px; font-weight: bold; color: #475569;">Additional Notes / Message:</p>
            <p style="margin: 6px 0 0 0; font-size: 14px; color: #1e293b;">${message || "No additional notes provided."}</p>
          </div>

          <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <a href="tel:${phone}" style="display: inline-block; background-color: #E31837; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-right: 8px;">Call Lead Now (${phone})</a>
            <a href="mailto:${email}" style="display: inline-block; background-color: #003057; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Reply via Email</a>
          </div>
        </div>
      `;

      await sendEmail({
        to: ALEX_EMAIL,
        subject: `🚨 AD LEAD: ${fullName} - ${companyName || serviceType}`,
        html: emailHtml,
        replyTo: email,
      });
    } catch (emailErr) {
      console.error("Failed to send email to Alex:", emailErr);
    }

    // Always return success & redirect URL for high-converting user experience
    return NextResponse.json(
      {
        success: true,
        message: "Lead processed successfully",
        savedToDb,
        redirectUrl: "/commercial-cleaning-quote/thank-you"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing ad lead submission:", error);
    return NextResponse.json({ error: "Failed to process lead submission" }, { status: 500 });
  }
}
