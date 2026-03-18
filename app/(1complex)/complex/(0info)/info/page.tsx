'use client';

import { useState } from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';

const TABS = [
  { label: '조감도', image: '/images/complex/complex01.webp' },
  { label: '투시도', image: '/images/complex/complex02.webp' },
  { label: '단지배치도', image: '/images/complex/complex03.webp' },
  { label: '동·호수배치도', image: '/images/complex/complex04.webp' },
];

export default function ComplexInfoPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SubPageHero
        title="단지정보"
        backgroundImage="/images/complex/hero.webp"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '단지안내', href: '/complex/info' },
          { label: '단지정보', href: '/complex/info' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        {/* Tabs */}
        <div className="flex">
          {TABS.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-3.5 text-center text-[15px] font-medium border transition-colors ${
                activeTab === index
                  ? 'bg-primary-navy text-white border-primary-navy'
                  : 'bg-white text-[#888] border-[#ddd] hover:text-[#333]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image */}
        <div className="mt-8">
          <Image
            src={TABS[activeTab].image}
            alt={TABS[activeTab].label}
            width={1000}
            height={700}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  );
}
