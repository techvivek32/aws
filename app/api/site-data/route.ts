import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import SiteSettings from '@/models/SiteSettings';
import SiteStats from '@/models/SiteStats';

export async function GET() {
  try {
    await connectDB();
    const settings = await SiteSettings.findOne();
    const stats = await SiteStats.findOne();
    
    return NextResponse.json({ settings, stats });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch site data' }, { status: 500 });
  }
}
