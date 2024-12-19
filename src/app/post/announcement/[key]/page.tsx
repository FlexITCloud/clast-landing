'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import { AnnouncementPageURL } from '@/constant';
import PostBody from '@/container/PostBody';
import PostHeader from '@/container/PostHeader';
import { Document, PostPageProps, getDocument } from '@/lib/post';

export const runtime = 'edge';

export default function Post() {
  const params = useParams<PostPageProps>();

  const [doc, setDoc] = useState<Document>();
  useEffect(() => {
    async function fetchData() {
      // decode url encoded key
      const decodedKey = decodeURIComponent(params.key);
      const data = await getDocument('clast-announcement', decodedKey);
      setDoc(data);
    }
    fetchData();
  }, [params.key]);
  return (
    <div className="min-h-screen py-8 sm:py-16 lg:py-24">
      {/* 이전으로 돌아가기 */}
      <div className="mx-auto max-w-7xl pb-8">
        <Link
          href={AnnouncementPageURL}
          className="text-lg font-medium text-gray-500 hover:underline"
        >
          ← 목록으로 돌아가기
        </Link>
      </div>
      {doc != undefined && (
        <div className="mx-auto max-w-7xl pb-16">
          <PostHeader document={doc} />
          <PostBody content={doc.content} />
        </div>
      )}
    </div>
  );
}
