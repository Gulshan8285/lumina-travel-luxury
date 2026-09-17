import prisma from '@/lib/prisma';
import { getAllBlogs } from '@/lib/blogs';
import { getSiteConfig } from '@/lib/siteConfig';
import AdminClientDashboard from './AdminClientDashboard';

export const revalidate = 0; // Always fresh

export default async function AdminPage() {
  let enquiries: any[] = [];
  try {
    enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    console.error('Failed to load enquiries from prisma:', error);
  }

  // If Prisma returned 0 records or had an issue on serverless, load from backup
  if (!enquiries || enquiries.length === 0) {
    try {
      const fs = await import('fs');
      const path = await import('path');
      const backupFile = path.join(process.cwd(), 'data', 'enquiries_backup.json');
      if (fs.existsSync(backupFile)) {
        enquiries = JSON.parse(fs.readFileSync(backupFile, 'utf-8'));
      }
    } catch (e) {
      console.warn('Backup file read error in admin:', e);
    }
  }

  const blogs = getAllBlogs();
  const siteConfig = getSiteConfig();

  // Ensure dates are serialized strings for client component
  const serializedEnquiries = (enquiries || []).map(e => ({
    ...e,
    createdAt: e.createdAt ? new Date(e.createdAt).toISOString() : new Date().toISOString()
  }));

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff', paddingTop: '0px' }}>
      <AdminClientDashboard 
        initialEnquiries={serializedEnquiries} 
        initialBlogs={blogs}
        initialConfig={siteConfig}
      />
    </main>
  );
}
