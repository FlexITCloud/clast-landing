import Image from 'next/image';
import Link from 'next/link';

import NotfoundBackground from '@/assets/image/404-background.webp';

export default function NotFound() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="relative isolate min-h-full">
        <Image
          alt=""
          src={NotfoundBackground}
          className="absolute inset-0 -z-10 size-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-48 text-center sm:py-64 lg:px-8">
          <p className="text-base/8 font-semibold text-white">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-white/70 sm:text-xl/8">
            요청하신 페이지를 찾을 수 없습니다.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-sm/7 font-semibold text-white">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
