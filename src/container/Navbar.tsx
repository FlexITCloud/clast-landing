'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import ClastCloudWhiteLogo from '@/assets/image/clast-cloud-logo-white.svg';
import {
  ContactPageURL,
  DDosDetailPageURL,
  DashboardURL,
  DedicatedDetailpageURL,
  VPSDetailPageURL,
} from '@/constant';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';

const navigation = [
  {
    name: '클라우드 VPS',
    href: VPSDetailPageURL,
    subMenu: [
      { name: 'Gold Tier', href: '/gold' },
      { name: 'Silver Tier', href: '/silver' },
      { name: 'Bronze  Tier', href: '/silver' },
    ],
  },
  { name: '단독서버', href: DedicatedDetailpageURL },
  { name: 'DDos 방어', href: DDosDetailPageURL },
  { name: '구매 문의', href: ContactPageURL },
  {
    name: '공지사항',
    href: '/post',
    subMenu: [
      { name: '공지사항', href: '/announcement' },
      { name: '이벤트', href: '/event' },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => setHoveredMenu(name);
  const handleMouseLeave = () => setHoveredMenu(null);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={ClastCloudWhiteLogo}
              alt="clast logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="flex items-center text-sm/6 font-semibold text-white"
              >
                {item.name}
                {item.subMenu ? (
                  <ChevronDownIcon aria-hidden="true" className="ml-1 w-5" />
                ) : (
                  <p className="pl-2"></p>
                )}
              </Link>
              {item.subMenu && hoveredMenu === item.name && (
                <div
                  className="absolute left-0 w-32 rounded-lg py-4 shadow-lg"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-2">
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={item.href + subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-400"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href={DashboardURL} className="text-sm/6 font-semibold text-white">
            Go to Dashboard <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="clast logo"
                src={ClastCloudWhiteLogo}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href={DashboardURL}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                >
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
