'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import formatDateToYYYYMMDD from '@/lib/format';
import { DocumentMetadata, getDocumentList } from '@/lib/post';

export default function PostlistContainer(props: {
  bucket: string;
  routeTo: string;
}) {
  const [docList, setDocList] = useState<DocumentMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const data = await getDocumentList(props.bucket);
      setDocList(data);
      setLoading(false);
    }
    fetchData();
  }, [props.bucket]);
  return (
    <table className="mx-auto mt-4 w-full max-w-7xl border-collapse">
      <thead className="text-left">
        <tr className="border-b border-gray-200">
          <th className="w-1/6 px-6 py-4 text-sm/6 font-semibold text-gray-500">
            작성일
          </th>
          <th className="px-6 py-4 text-sm/6 font-semibold text-gray-500">
            제목
          </th>
        </tr>
      </thead>
      {loading ? (
        <tbody>
          {/* ghost row with animation */}
          <tr className="animate-pulse border-b border-gray-200 bg-gray-100">
            <td className="bg-gray-100 px-6 py-4 text-sm/6 font-semibold text-gray-500"></td>
            <td className="px-6 py-4 text-lg font-medium text-gray-500">
              Loading...
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {docList.map((doc) => (
            <tr key={doc.key} className="border-b border-gray-200">
              <td className="text-md w-1/6 px-6 py-4 font-medium text-indigo-500">
                <p>{formatDateToYYYYMMDD(doc.lastModified)}</p>
              </td>
              <td className="w-5/6 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap px-6 py-4 text-lg font-medium text-gray-700">
                <Link href={props.routeTo + `/${doc.key}`}>{doc.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
