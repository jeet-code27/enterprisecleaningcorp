import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import ContactSubmission from '@/models/ContactSubmission';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.service || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newSubmission = new ContactSubmission(data);
    await newSubmission.save();

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
