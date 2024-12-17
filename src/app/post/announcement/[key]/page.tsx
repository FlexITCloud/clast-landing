'use client';

import { useParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import PostBody from '@/container/PostBody';
import formatDateToYYYYMMDD from '@/lib/format';
import { Document, PostPageProps, getDocument } from '@/lib/minio';

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
    <main className="relative isolate">
      {/* Header section */}
      <div className="bg-gray-900 px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 text-center sm:pt-40">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {doc?.meta.name}
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            {doc != undefined &&
              doc?.slug + ' | ' + formatDateToYYYYMMDD(doc?.meta.lastModified)}
          </p>
        </div>
      </div>

      {/* Article Table */}
      <div className="min-h-screen py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl pb-16">
          {doc != undefined && <PostBody content={doc.content} />}
        </div>
      </div>
    </main>
  );
}
