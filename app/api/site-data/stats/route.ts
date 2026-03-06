import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import SiteStats from '@/models/SiteStats';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    await connectDB();
    
    let stats = await SiteStats.findOne();
    if (!stats) {
      stats = await SiteStats.create(body);
    } else {
      stats = await SiteStats.findOneAndUpdate({}, body, { new: true });
    }
    
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update stats' }, { status: 500 });
  }
}
