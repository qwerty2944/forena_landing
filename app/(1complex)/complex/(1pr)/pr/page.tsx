'use client';

import { useState } from 'react';
import SubPageHero from '@/components/sections/SubPageHero';

const TABS = [
  { label: '입지안내', videoId: 'aZTDrUeW65Q' },
  { label: '59A Type', videoId: 'weg3sI_IZbQ' },
  { label: '59B Type', videoId: 'jtOCijTB2s0' },
];

export default function PrVideoPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SubPageHero
        title="단지홍보영상"
        backgroundImage="/images/complex/hero.webp"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '단지안내', href: '/complex/info' },
          { label: '단지홍보영상', href: '/complex/pr' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        {/* Tabs */}
        <div className="flex border border-[#e4e4e4] mb-[40px]">
          {TABS.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-[14px] text-[15px] font-medium transition-colors ${
                activeTab === index
                  ? 'bg-primary-navy text-white'
                  : 'bg-white text-[#888] hover:text-text-dark'
              } ${index > 0 ? 'border-l border-[#e4e4e4]' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* YouTube embed - no autoplay */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            key={TABS[activeTab].videoId}
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${TABS[activeTab].videoId}?rel=0&modestbranding=1`}
            title={TABS[activeTab].label}
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </>
  );
}
