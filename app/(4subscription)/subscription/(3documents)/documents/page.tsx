'use client';

import { useState } from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';

const TABS = [
  { label: '신혼부부', image: '/images/subscription/documents-01.jpg' },
  { label: '기관추천', image: '/images/subscription/documents-02.jpg' },
  { label: '다자녀가구', image: '/images/subscription/documents-03.jpg' },
  { label: '노부모부양', image: '/images/subscription/documents-04.jpg' },
  { label: '생애최초', image: '/images/subscription/documents-05.jpg' },
  { label: '일반공급', image: '/images/subscription/documents-06.jpg' },
  { label: '소명안내', image: '/images/subscription/documents-07.jpg' },
];

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SubPageHero
        title="구비서류안내"
        backgroundImage="/images/subscription/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '청약안내', href: '/subscription/guide' },
          { label: '구비서류안내', href: '/subscription/documents' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        {/* Tabs */}
        <div className="flex flex-wrap">
          {TABS.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`flex-1 min-w-[100px] py-3 text-center text-[13px] font-medium border transition-colors ${
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
            height={1400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  );
}
