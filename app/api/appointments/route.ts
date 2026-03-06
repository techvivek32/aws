import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Appointment from '@/models/Appointment';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();
    const appointment = await Appointment.create({
      name,
      phone,
      email,
      service,
      message,
    });

    return NextResponse.json({ message: 'Appointment booked successfully', appointment }, { status: 201 });
  } catch (error) {
    console.error('Appointment booking error:', error);
    return NextResponse.json({ error: 'Failed to book appointment' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}
