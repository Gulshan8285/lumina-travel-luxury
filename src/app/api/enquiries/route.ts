import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      whatsapp,
      email,
      destination,
      journey,
      travellers,
      travelDate,
      duration,
      budget,
      experience,
      specialRequirements
    } = body;

    if (!whatsapp || !name) {
      return NextResponse.json({ error: 'Name and WhatsApp number are required' }, { status: 400 });
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        whatsapp,
        email,
        destination,
        journey,
        travellers,
        travelDate,
        duration,
        budget,
        experience,
        specialRequirements,
        status: 'New'
      }
    });

    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(enquiries);
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}
