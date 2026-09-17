import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

// In-memory fallback for serverless environments
const memoryEnquiries: any[] = [];

// Helper to back up leads locally as a safety net
function appendLeadBackup(enquiry: any) {
  try {
    const backupDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const backupFile = path.join(backupDir, 'enquiries_backup.json');
    let existing: any[] = [];
    if (fs.existsSync(backupFile)) {
      try {
        existing = JSON.parse(fs.readFileSync(backupFile, 'utf-8'));
      } catch {
        existing = [];
      }
    }
    existing.unshift(enquiry);
    fs.writeFileSync(backupFile, JSON.stringify(existing.slice(0, 500), null, 2));
  } catch (err) {
    console.warn('Could not write local backup:', err);
  }
}

// Production fallback URL in case env variable is missing on Vercel deployment
const DEFAULT_GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbyIZRjBnqLVIGgasimAHKwdfS7z8CHUbqgP0Onn-HCOcLDbLiMDunpoPDH9ivDv8TSt/exec";

// Helper to push to Google Sheet via Google Apps Script Web App
async function syncToGoogleSheet(payload: any) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || 
                     process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || 
                     DEFAULT_GOOGLE_SHEET_WEBHOOK;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500); // 4.5s safe timeout

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeout);
    console.log('[GoogleSheetSync] Successfully synced enquiry to Google Sheet');
  } catch (error) {
    console.error('[GoogleSheetSync] Error dispatching to Google Sheet webhook:', error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      whatsapp,
      phone,
      email,
      service,
      destination,
      journey,
      travellers,
      travelDate,
      travelDates,
      duration,
      budget,
      experience,
      notes,
      specialRequirements,
      referralSource,
      referrerName,
      referrerPhone
    } = body;

    const contactPhone = (phone || whatsapp || '').trim();
    const clientName = (name || '').trim();
    const clientEmail = (email || '').trim();

    // 1. Mandatory Name Validation
    if (!clientName) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // 2. Mandatory Phone/WhatsApp Validation
    if (!contactPhone) {
      return NextResponse.json({ error: 'Mobile / WhatsApp number is required' }, { status: 400 });
    }

    // 3. Mandatory Email Validation (Requested by user)
    if (!clientEmail) {
      return NextResponse.json({ error: 'Email ID is mandatory' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    const serviceType = service || journey || experience || 'General Enquiry';
    const dest = (destination || '').trim() || null;
    const dates = (travelDates || travelDate || '').trim() || null;
    const numTravellers = (travellers || '').trim() || null;
    const approxBudget = (budget || '').trim() || null;
    const clientNotes = (notes || specialRequirements || '').trim() || null;
    const istTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Format referral attribution
    const referralInfo: string[] = [];
    if (referralSource && referralSource !== 'Not specified') {
      referralInfo.push(`Found via: ${referralSource}`);
    }
    if (referrerName || referrerPhone) {
      referralInfo.push(`Referrer: ${referrerName || 'N/A'}${referrerPhone ? ` (${referrerPhone})` : ''}`);
    }
    const referralStr = referralInfo.join(' | ');

    let combinedNotes = clientNotes || '';
    if (duration && duration.trim() && duration.trim() !== 'Not specified') {
      combinedNotes = combinedNotes ? `[Duration: ${duration.trim()}]\n${combinedNotes}` : `[Duration: ${duration.trim()}]`;
    }
    if (referralStr) {
      combinedNotes = combinedNotes ? `${combinedNotes}\n[${referralStr}]` : `[${referralStr}]`;
    }

    const enquiryRecord = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: clientName,
      whatsapp: contactPhone,
      email: clientEmail,
      destination: dest,
      journey: serviceType,
      travellers: numTravellers,
      travelDate: dates,
      duration: duration?.trim() || null,
      budget: approxBudget,
      experience: serviceType,
      specialRequirements: combinedNotes || null,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    // Save to local backup file
    appendLeadBackup(enquiryRecord);

    // Sync to Google Sheet (awaited with 4.5s safe timeout for serverless reliability)
    await syncToGoogleSheet({
      timestamp: istTimestamp,
      name: clientName,
      phone: contactPhone,
      whatsapp: contactPhone,
      email: clientEmail,
      service: serviceType,
      destination: dest || 'Not specified',
      duration: duration?.trim() || 'Not specified',
      travelDates: dates || 'Flexible',
      travellers: numTravellers || 'Not specified',
      budget: approxBudget || 'Not specified',
      referralSource: referralSource || 'Not specified',
      referrerName: referrerName || '',
      referrerPhone: referrerPhone || '',
      notes: combinedNotes || 'None'
    });

    // Save to Prisma SQLite DB
    try {
      const dbRecord = await prisma.enquiry.create({
        data: {
          name: clientName,
          whatsapp: contactPhone,
          email: clientEmail,
          destination: dest,
          journey: serviceType,
          travellers: numTravellers,
          travelDate: dates,
          duration: duration?.trim() || null,
          budget: approxBudget,
          experience: serviceType,
          specialRequirements: combinedNotes,
          status: 'New'
        }
      });
      memoryEnquiries.unshift(dbRecord);
      return NextResponse.json(dbRecord, { status: 201 });
    } catch (prismaErr) {
      console.warn('Prisma create failed, using memory fallback:', prismaErr);
      memoryEnquiries.unshift(enquiryRecord);
      return NextResponse.json(enquiryRecord, { status: 201 });
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
