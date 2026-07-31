import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import ContactSubmission from '@/models/ContactSubmission';
import { sendEmail } from '@/lib/nodemailer';
import { getContactAdminEmailHtml, getContactUserAutoReplyHtml } from '@/lib/emailTemplates';

const DEFAULT_ADMIN = process.env.ADMIN_EMAIL || "alex@enterprisecleaningcorp.com";

function getDepartmentRecipients(department?: string): { to: string; cc?: string } {
  if (!department) return { to: DEFAULT_ADMIN };

  const dept = department.toLowerCase();
  if (dept.includes("operations")) {
    return { to: "jbiage@enterprisecleaningcorp.com", cc: DEFAULT_ADMIN };
  }
  if (dept.includes("customer service") || dept.includes("support")) {
    return { to: "customerservice@enterprisecleaningcorp.com", cc: DEFAULT_ADMIN };
  }
  if (dept.includes("sales")) {
    return { to: "alex@enterprisecleaningcorp.com" };
  }
  return { to: DEFAULT_ADMIN };
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    
    // Basic validation (allow single name field if passed as fullName or firstName)
    if (!data.firstName && data.fullName) {
      const parts = data.fullName.trim().split(" ");
      data.firstName = parts[0] || "Valued";
      data.lastName = parts.slice(1).join(" ") || "Client";
    }
    
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!data.service) {
      data.service = data.department ? `Quick Support - ${data.department}` : "General Commercial Cleaning";
    }

    // 1. Save to MongoDB (Admin Panel)
    const newSubmission = new ContactSubmission(data);
    await newSubmission.save();

    // 2. Determine department email recipient
    const recipientInfo = getDepartmentRecipients(data.department);

    // 3. Send Nodemailer emails asynchronously
    try {
      // Department Notification Email
      const adminEmailPromise = sendEmail({
        to: recipientInfo.to,
        subject: `New Contact Inquiry (${data.department || 'General'}): ${data.firstName} ${data.lastName}`,
        html: getContactAdminEmailHtml(data),
        replyTo: data.email,
      });

      // User Auto-Reply Email
      const userAutoReplyPromise = sendEmail({
        to: data.email,
        subject: `Thank you for contacting Enterprise Cleaning Corporation`,
        html: getContactUserAutoReplyHtml(data),
      });

      await Promise.all([adminEmailPromise, userAutoReplyPromise]);
    } catch (emailError) {
      console.error('Failed to send contact emails via Nodemailer:', emailError);
      // DB save succeeded, so we log email error but return success to user
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    // Return newest submissions first
    const submissions = await ContactSubmission.find().sort({ createdAt: -1 });
    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}
