import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// In-memory fallback for serverless environments
const memoryEnquiries: any[] = [];

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

    const fallbackEnquiry = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name,
      whatsapp,
      email: email || null,
      destination: destination || null,
      journey: journey || null,
      travellers: travellers || null,
      travelDate: travelDate || null,
      duration: duration || null,
      budget: budget || null,
      experience: experience || null,
      specialRequirements: specialRequirements || null,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    try {
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
      memoryEnquiries.unshift(enquiry);
      return NextResponse.json(enquiry, { status: 201 });
    } catch (prismaErr) {
      console.warn('Prisma create failed, using memory fallback:', prismaErr);
      memoryEnquiries.unshift(fallbackEnquiry);
      return NextResponse.json(fallbackEnquiry, { status: 201 });
    }
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
    console.warn('Prisma fetch failed, returning memory fallback enquiries:', error);
    return NextResponse.json(memoryEnquiries);
  }
}
