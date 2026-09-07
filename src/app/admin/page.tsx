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

  const blogs = getAllBlogs();
  const siteConfig = getSiteConfig();

  // Ensure dates are serialized strings for client component
  const serializedEnquiries = enquiries.map(e => ({
    ...e,
    createdAt: e.createdAt ? new Date(e.createdAt).toISOString() : new Date().toISOString()
  }));

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0b0f19', color: '#ffffff', paddingTop: '0px' }}>
      <AdminClientDashboard 
        initialEnquiries={serializedEnquiries} 
        initialBlogs={blogs}
        initialConfig={siteConfig}
      />
    </main>
  );
}
