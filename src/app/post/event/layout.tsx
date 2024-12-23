export default function AnnouncementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative isolate">
      {/* Header section */}
      <div className="bg-gray-900 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 text-center sm:pt-40">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            이벤트
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            진행 중인 이벤트를 확인하세요.
          </p>
        </div>
      </div>
      {children}
    </main>
  );
}
