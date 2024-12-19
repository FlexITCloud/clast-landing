import calculateReadingTime from './readingTime';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import matter from 'gray-matter';

import markdownToHtml from '@/lib/mdToHtml';

type File = {
  Key: string;
  LastModified: string;
};

export type DocumentMetadata = {
  name: string;
  lastModified: Date;
  key: string;
};

export type Document = {
  meta: DocumentMetadata;
  slug: string;
  content: string;
  readingMinutes: string;
};

export type PostPageProps = {
  key: string;
};

const getDocumentList = async (
  bucketName: string,
): Promise<DocumentMetadata[]> => {
  const resp = await axios.get(
    process.env.NEXT_PUBLIC_MINIO_ENDPOINT + '/' + bucketName,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
  const xmlData = resp.data;
  const parser = new XMLParser();
  const parsedData = await parser.parse(xmlData);
  console.log(parsedData);

  const documentList: DocumentMetadata[] = [];

  parsedData.ListBucketResult.Contents.forEach((item: File) => {
    const name = item.Key.split('.')[0];
    documentList.push({
      name: name,
      lastModified: new Date(item.LastModified),
      key: item.Key,
    });
  });

  // sort by LastModified
  documentList.sort((a, b) => {
    return b.lastModified.getTime() - a.lastModified.getTime();
  });
  console.log(documentList);
  return documentList;
};

const getDocument = async (
  bucketName: string,
  key: string,
): Promise<Document> => {
  const resp = await axios.get(
    process.env.NEXT_PUBLIC_MINIO_ENDPOINT + '/' + bucketName + '/' + key,
  );
  const lastModified = new Date(resp.headers['last-modified']);
  const data = resp.data;
  const name = key.split('.')[0];

  const { data: header, content: content } = matter(data);
  const htmlContent = await markdownToHtml(content);
  const readingMinutes = calculateReadingTime(content);
  return {
    meta: {
      name: name,
      lastModified: lastModified,
      key: key,
    },
    readingMinutes: readingMinutes,
    slug: header.slug,
    content: htmlContent,
  };
};

export { getDocumentList, getDocument };
