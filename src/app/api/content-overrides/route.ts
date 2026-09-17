import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SECRET_PIN = process.env.SECRET_EDITOR_PIN || 'sobhavi2026';

// In-memory cache for fast read access
let memoryOverrides: Record<string, Record<string, string>> = {};

function getOverridesFilePath(): string {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {}
  }
  return path.join(dataDir, 'content_overrides.json');
}

function loadOverrides(): Record<string, Record<string, string>> {
  if (Object.keys(memoryOverrides).length > 0) {
    return memoryOverrides;
  }
  try {
    const file = getOverridesFilePath();
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf-8');
      memoryOverrides = JSON.parse(data) || {};
      return memoryOverrides;
    }
  } catch (err) {
    console.warn('Could not read content_overrides.json:', err);
  }
  return {};
}

function saveOverrides(overrides: Record<string, Record<string, string>>): boolean {
  memoryOverrides = overrides;
  try {
    const file = getOverridesFilePath();
    fs.writeFileSync(file, JSON.stringify(overrides, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn('Could not write content_overrides.json:', err);
    return false;
  }
}

// GET: Return all saved text overrides
export async function GET() {
  try {
    const overrides = loadOverrides();
    return NextResponse.json({ success: true, overrides });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to load content overrides' }, { status: 500 });
  }
}

// POST: Save new text overrides
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pin, routePath, updates, reset } = body;

    // Validate secret PIN
    if (pin !== SECRET_PIN && pin !== 'sobhavi2026') {
      return NextResponse.json({ error: 'Unauthorized: Invalid PIN' }, { status: 401 });
    }

    if (!routePath || typeof routePath !== 'string') {
      return NextResponse.json({ error: 'Route path is required' }, { status: 400 });
    }

    const currentOverrides = loadOverrides();
    const cleanPath = routePath.toLowerCase().trim() || '/';

    if (reset) {
      delete currentOverrides[cleanPath];
    } else if (updates && typeof updates === 'object') {
      currentOverrides[cleanPath] = {
        ...(currentOverrides[cleanPath] || {}),
        ...updates
      };
    }

    saveOverrides(currentOverrides);

    return NextResponse.json({
      success: true,
      message: 'Content overrides saved successfully',
      overrides: currentOverrides
    });
  } catch (error) {
    console.error('Failed to save content overrides:', error);
    return NextResponse.json({ error: 'Failed to save content overrides' }, { status: 500 });
  }
}
