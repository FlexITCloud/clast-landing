'use client';

import { EventPageURL } from '@/constant';
import PostlistContainer from '@/container/PostList';

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl pb-16">
        <h2 className="mx-auto max-w-7xl px-6 text-4xl font-semibold text-gray-700 lg:px-8">
          이벤트 목록
        </h2>
        <p className="mx-auto mt-4 max-w-7xl px-6 text-lg font-medium text-gray-400 lg:px-8">
          최신 이벤트를 확인하세요.
        </p>
      </div>
      <PostlistContainer bucket="clast-event" routeTo={EventPageURL} />
    </div>
  );
}
