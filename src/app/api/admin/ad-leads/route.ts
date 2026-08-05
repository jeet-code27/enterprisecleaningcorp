import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import AdLead from '@/models/AdLead';
import { getServerSession } from 'next-auth';

export async function GET(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');

    const query: any = {};
    if (status && status !== 'All') {
      query.status = status;
    }

    const leads = await AdLead.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Failed to fetch ad leads:', error);
    return NextResponse.json({ error: 'Failed to fetch ad leads' }, { status: 500 });
  }
}
