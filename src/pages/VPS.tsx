import React from 'react';

import { CheckIcon } from '@heroicons/react/20/solid';

import Navbar from '../components/Navbar';

const tiers: {
  name: 'Bronze' | 'Silver' | 'Gold';
  id: string;
  href: string;
  price: string;
  description: string;
  features: string[];
  mostPopular: boolean;
}[] = [
  {
    name: 'Bronze',
    id: 'tier-freelancer',
    href: '#',
    price: 'KRW 5000',
    description: 'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
  {
    name: 'Silver',
    id: 'tier-startup',
    href: '#',
    price: 'KRW 9000',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
  {
    name: 'Gold',
    id: 'tier-enterprise',
    href: '',
    price: 'KRW 12000',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const VPSDetailPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-gray-900 py-32 sm:py-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              Cloud VPS
            </h2>
            <p className="mt-2 text-balance break-keep text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              클라우드 VPS로 실현하는 나만의 비즈니스.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-white/5 ring-2 ring-indigo-500'
                    : 'ring-1 ring-white/10',
                  'rounded-3xl p-8 xl:p-10',
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className="text-lg/8 font-semibold text-white"
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-center justify-between gap-x-2">
                    {tier.mostPopular ? (
                      <p className="place-self-end rounded-full bg-indigo-500 px-2.5 py-1 text-xs/5 font-semibold text-white">
                        Most popular
                      </p>
                    ) : null}
                    <TierBadge tier={tier.name} />
                  </div>
                </div>
                <p className="mt-4 text-sm/6 text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-300">
                    부터 시작
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                      : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  )}
                >
                  Buy plan
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type TierBadgeProps = {
  tier: 'Bronze' | 'Silver' | 'Gold';
};

const TierBadge: React.FC<TierBadgeProps> = ({ tier }) => {
  const badgeStyles = {
    Bronze: 'bg-amber-500 text-amber-900',
    Silver: 'bg-gray-300 text-gray-800',
    Gold: 'bg-yellow-400 text-yellow-900',
  };

  return (
    <span
      className={`rounded-full px-4 py-1 text-sm font-medium ${badgeStyles[tier]}`}
    >
      {tier}
    </span>
  );
};
export default VPSDetailPage;
