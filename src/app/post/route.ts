import { redirect } from 'next/navigation';

import { AnnouncementPageURL } from '@/constant';

export async function GET() {
  redirect(AnnouncementPageURL);
}
