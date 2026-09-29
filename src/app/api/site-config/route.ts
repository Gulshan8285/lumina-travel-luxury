import { NextResponse } from 'next/server';
import { getSiteConfig, saveSiteConfig, syncCloudSiteConfig } from '@/lib/siteConfig';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    await syncCloudSiteConfig();
    const config = getSiteConfig();
    return NextResponse.json({ success: true, config }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch site config' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updated = await saveSiteConfig(body);
    return NextResponse.json({ success: true, config: updated }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  } catch (error) {
    console.error('Failed to update site config:', error);
    return NextResponse.json({ success: false, error: 'Failed to update site config' }, { status: 500 });
  }
}
