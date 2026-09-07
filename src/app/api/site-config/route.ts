import { NextResponse } from 'next/server';
import { getSiteConfig, saveSiteConfig } from '@/lib/siteConfig';

export async function GET() {
  try {
    const config = getSiteConfig();
    return NextResponse.json({ success: true, config });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch site config' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updated = saveSiteConfig(body);
    return NextResponse.json({ success: true, config: updated });
  } catch (error) {
    console.error('Failed to update site config:', error);
    return NextResponse.json({ success: false, error: 'Failed to update site config' }, { status: 500 });
  }
}
