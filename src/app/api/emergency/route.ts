import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import EmergencySubmission from '@/models/EmergencySubmission';
import { sendEmail } from '@/lib/nodemailer';
import { getEmergencyAdminEmailHtml, getEmergencyUserAutoReplyHtml } from '@/lib/emailTemplates';

const ALEX_EMAIL = process.env.ADMIN_EMAIL || "alex@enterprisecleaningcorp.com";
const JULIO_EMAIL = "jbiage@enterprisecleaningcorp.com";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    // Required fields per user & client requirements:
    // Name, Callback Phone Number, Property Address, Town, Type of Emergency, Brief Description
    if (
      !data.name ||
      !data.phone ||
      !data.propertyAddress ||
      !data.town ||
      !data.emergencyType ||
      !data.description
    ) {
      return NextResponse.json(
        { error: 'Missing required emergency fields (Name, Phone, Property Address, Town, Emergency Type, Description).' },
        { status: 400 }
      );
    }

    // 1. Create and save emergency record in MongoDB
    const newSubmission = new EmergencySubmission({
      name: data.name.trim(),
      phone: data.phone.trim(),
      propertyAddress: data.propertyAddress.trim(),
      town: data.town.trim(),
      emergencyType: data.emergencyType.trim(),
      description: data.description.trim(),
      email: data.email ? data.email.trim() : undefined,
      companyName: data.companyName ? data.companyName.trim() : undefined,
      photos: Array.isArray(data.photos) ? data.photos : [],
      status: 'New',
      priority: 'URGENT',
    });

    await newSubmission.save();

    // 2. High-Priority Alert to both Alex and Julio
    try {
      const adminAlertPromise = sendEmail({
        to: `${ALEX_EMAIL}, ${JULIO_EMAIL}`,
        subject: `🚨 [URGENT EMERGENCY] ${data.emergencyType} in ${data.town} - ${data.name} (${data.phone})`,
        html: getEmergencyAdminEmailHtml({
          name: data.name,
          phone: data.phone,
          propertyAddress: data.propertyAddress,
          town: data.town,
          emergencyType: data.emergencyType,
          description: data.description,
          email: data.email,
          companyName: data.companyName,
          photos: data.photos,
        }),
        replyTo: data.email || undefined,
      });

      // Optional user auto-reply if email was provided
      let userAutoReplyPromise: Promise<any> | null = null;
      if (data.email && data.email.includes('@')) {
        userAutoReplyPromise = sendEmail({
          to: data.email,
          subject: `Emergency Request Received: ${data.emergencyType} - Enterprise Cleaning Corp`,
          html: getEmergencyUserAutoReplyHtml({
            name: data.name,
            phone: data.phone,
            propertyAddress: data.propertyAddress,
            town: data.town,
            emergencyType: data.emergencyType,
            description: data.description,
            email: data.email,
            companyName: data.companyName,
            photos: data.photos,
          }),
        });
      }

      await Promise.all([adminAlertPromise, userAutoReplyPromise].filter(Boolean));
    } catch (emailErr) {
      console.error('Failed to send emergency notification emails:', emailErr);
      // DB save succeeded, so we continue and return success
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Emergency request received. On-call dispatcher notified immediately.',
        id: newSubmission._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting emergency request:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit emergency request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const submissions = await EmergencySubmission.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error fetching emergency submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch emergency submissions' }, { status: 500 });
  }
}
