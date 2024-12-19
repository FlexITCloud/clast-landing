// /post로 진입시 /post/announcement로 리다이렉트
import { redirect } from 'next/navigation';

import { AnnouncementPageURL } from '@/constant';

export default function RedirectPage() {
  redirect(AnnouncementPageURL); // 리다이렉트할 페이지 경로
}
