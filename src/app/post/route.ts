import { redirect } from 'next/navigation';

import { AnnouncementPageURL } from '@/constant';

export const runtime = 'edge';

export async function GET() {
  redirect(AnnouncementPageURL);
}
