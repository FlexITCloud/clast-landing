'use client';

import formatDateToYYYYMMDD from '@/lib/format';
import { Document } from '@/lib/post';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/20/solid';

const howLongAgo = (postDate: Date) => {
  // dateString: 2024년 02월 26일 parse
  // 년, 개월 ,일 전 단위로 재구성
  const now = new Date();
  const diff = (now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24);

  if (diff < 1) {
    return '오늘';
  }
  const month = diff / 30;
  if (month < 1) {
    return `${Math.floor(diff)}일 전`;
  }
  const year = month / 12;
  if (year < 1) {
    return `${Math.floor(month)}개월 전`;
  }
  return `${Math.floor(year)}년 전`;
};

export default function PostHeader(props: { document: Document }) {
  const currentUrl = encodeURIComponent(window.location.href);

  return (
    <header className="my-14 text-center">
      <h1 className="mb-7 text-4xl font-bold">{props.document.meta.name}</h1>
      <div className="mb-7 text-base">
        <h3 className="font-semibold text-pink-600">{props.document.slug}</h3>
      </div>
      <div className="flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${currentUrl}&count_bg=%237A42F1&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false`}
            alt=""
            width={70}
            height={10}
          />
        </div>
        <div className="flex items-center gap-1">
          <CalendarDaysIcon className="w-3.5" />
          <span>
            {formatDateToYYYYMMDD(props.document.meta.lastModified)} (
            {howLongAgo(props.document.meta.lastModified)})
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-3.5" />
          <span>{props.document.readingMinutes} 소요</span>
        </div>
      </div>
      <hr className="my-24" />
    </header>
  );
}
