'use client';

import { DashboardURL, VPSDetailPageURL } from '../constant';

import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import CloudflareWhiteLogo from '@/assets/image/cloudflare-logo-white.svg';
import {
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  FunnelIcon,
  GlobeAltIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Push to deploy.',
    description:
      '24시간 365일, 생성 요청 후 바로 서버를 생성하고 서비스를 시작할 수 있습니다.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'DDos Mitigation.',
    description:
      'DDos 공격으로 인한 피해를 예방하고 서비스를 안정적으로 운영할 수 있습니다.',
    icon: FunnelIcon,
  },
  {
    name: 'Easy to use.',
    description:
      '누구나 간편하게 직관적인 UI로 클라우드 서버를 구축하고, 운영할 수 있습니다.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Stable network.',
    description:
      '자체 서울 IDC와 기업용 회선을 통해 안정적으로 서버를 운영하고, 다운타임을 최소화할 수 있습니다.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Payment methods.',
    description:
      '카드, 간편결제, 계좌이체, 문화상품권, 휴대폰 결제까지, 다양한 결제수단을 지원합니다.',
    icon: CreditCardIcon,
  },
  {
    name: 'Snapshot backups.',
    description:
      '대시보드에서 서버의 상태를 스냅샷으로 저장하고, 언제든지 복구할 수 있습니다.',
    icon: ServerIcon,
  },
];
const tiers = [
  {
    name: 'Cloud VPS',
    id: 'tier-cloud-vps',
    href: VPSDetailPageURL,
    priceMonthly: '5,000원',
    description:
      '소규모에서 중규모까지, 다양한 사이즈의 클라우드 서버를 구축하고 운영할 수 있습니다.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
    ],
    featured: false,
  },
  {
    name: 'Deicated Server',
    id: 'tier-dedicated-server',
    href: '#',
    priceMonthly: '50,000원',
    description:
      '대규모 서비스를 위한 전용 서버를 구축하고 운영할 수 있습니다.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const LandingPage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [, setLoopCount] = useState(0);

  const typingDelay = 100;
  const deletingDelay = 80;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const words = ['Custom', 'Clast'];
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setLoopCount((prev) => prev + 1);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingDelay : typingDelay,
    );

    return () => clearTimeout(timeout);
  }, [currentWordIndex, displayText, isDeleting]);

  return (
    <main>
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                진행중인 이벤트 보러가기.{' '}
                <a href="#" className="font-semibold text-white">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Event <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance break-keep text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-7xl sm:leading-[1.1]">
                내 마음대로 요금제를 만드는
              </h1>
              <h1 className="text-balance break-keep text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-7xl sm:leading-[1.1]">
                <span>{displayText}</span> Cloud
              </h1>
              <p className="mt-8 text-pretty break-keep text-lg font-medium text-gray-400 sm:text-xl/8">
                누구나 간편하게 직관적인 UI로 클라우드 서버를 구축하고, 운영할
                수 있습니다.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={DashboardURL}
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  클라우드 대시보드 접속
                </a>
                <Link
                  href={VPSDetailPageURL}
                  className="text-sm/6 font-semibold text-white"
                >
                  자세히 알아보기 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              alt="Transistor"
              src={CloudflareWhiteLogo}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Feature section */}
      <div className="mt-32 sm:mt-56">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              당신이 원하는 모든 것, Clast Cloud VPS
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
              No server? <br className="sm:hidden" />
              No problem.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              365일 24시간 언제나, 원하는 대로 클라우드 서버를 구축하고 사용할
              수 있습니다.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
              width={2432}
              height={1442}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="mr-1 inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 size-5 text-indigo-600"
                  />
                  {feature.name}
                </dt>{' '}
                <dd className="inline break-keep">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
                <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
              </svg>
              <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                <p>
                  Gravida quam mi erat tortor neque molestie. Auctor aliquet at
                  porttitor a enim nunc suscipit tincidunt nunc. Et non lorem
                  tortor posuere. Nunc eu scelerisque interdum eget tellus non
                  nibh scelerisque bibendum.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Judith Black</div>
                <div className="mt-1 text-gray-400">CEO of Tuple</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="relative isolate mt-32 bg-white px-6 sm:mt-56 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            당신에게 적합한 솔루션을 선택하세요.
          </p>
        </div>
        <div className="mx-auto mb-64 mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((type, typeIdx) => (
            <div
              key={type.id}
              className={classNames(
                type.featured
                  ? 'relative bg-gray-900 shadow-2xl'
                  : 'bg-white/60 sm:mx-8 lg:mx-0',
                type.featured
                  ? ''
                  : typeIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                    : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
              )}
            >
              <h3
                id={type.id}
                className={classNames(
                  type.featured ? 'text-indigo-400' : 'text-indigo-600',
                  'text-base/7 font-semibold',
                )}
              >
                {type.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    type.featured ? 'text-white' : 'text-gray-900',
                    'text-5xl font-semibold tracking-tight',
                  )}
                >
                  {type.priceMonthly}
                </span>
                <span
                  className={classNames(
                    type.featured ? 'text-gray-400' : 'text-gray-500',
                    'text-base',
                  )}
                >
                  부터
                </span>
              </p>
              <p
                className={classNames(
                  type.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-6 break-keep text-base/7',
                )}
              >
                {type.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  type.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm/6 sm:mt-10',
                )}
              >
                {type.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        type.featured ? 'text-indigo-400' : 'text-indigo-600',
                        'h-6 w-5 flex-none',
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={type.href}
                aria-describedby={type.id}
                className={classNames(
                  type.featured
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                )}
              >
                더 알아보기
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
