'use client';

import { useState } from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';

const FLOOR_PLAN_DATA = [
  {
    id: 1,
    label: '49㎡',
    image: '/images/unit/unit01.jpg',
    exclusiveArea: '49.9664',
    commonArea: '24.0882',
    supplyArea: '74.0546',
    etcArea: '42.7552',
    contractArea: '116.8098',
    units: 46,
  },
  {
    id: 2,
    label: '59㎡A',
    image: '/images/unit/unit02.jpg',
    exclusiveArea: '59.9855',
    commonArea: '24.9529',
    supplyArea: '84.9384',
    etcArea: '42.7552',
    contractArea: '127.6936',
    units: 383,
  },
  {
    id: 3,
    label: '59㎡B',
    image: '/images/unit/unit03.jpg',
    exclusiveArea: '59.9405',
    commonArea: '24.9343',
    supplyArea: '84.8748',
    etcArea: '42.7552',
    contractArea: '127.6300',
    units: 306,
  },
];

export default function FloorPlanPage() {
  const [activeTab, setActiveTab] = useState(0);
  const current = FLOOR_PLAN_DATA[activeTab];

  return (
    <>
      <SubPageHero
        title="평면정보"
        backgroundImage="/images/unit/hero.jpg"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: '세대안내', href: '/unit/floor-plan' },
          { label: '평면정보', href: '/unit/floor-plan' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-5 py-16">
        {/* Tab Navigation */}
        <div className="flex">
          {FLOOR_PLAN_DATA.map((plan, index) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-3.5 text-center text-[15px] font-medium border transition-colors ${
                activeTab === index
                  ? 'bg-primary-navy text-white border-primary-navy'
                  : 'bg-white text-[#888] border-[#ddd] hover:text-text-dark'
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* 마감재리스트 Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => window.open('https://incheon.forena.co.kr/magam.php', '_blank', 'width=800,height=900,scrollbars=yes,resizable=yes')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#555] text-white text-[13px] font-medium hover:bg-[#333] transition-colors cursor-pointer"
          >
            마감재리스트
          </button>
        </div>

        {/* Unit Image */}
        <div className="mt-5">
          <Image
            src={current.image}
            alt={`${current.label} 평면도`}
            width={1000}
            height={1400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Area Specs Table */}
        <div className="mt-10">
          <table className="w-full border-collapse">
            <tbody>
              {[
                { label: '전 용 면 적', value: current.exclusiveArea },
                { label: '주거공용면적', value: current.commonArea },
                { label: '공 급 면 적', value: current.supplyArea },
                { label: '기타공용면적', value: current.etcArea },
                { label: '계 약 면 적', value: current.contractArea },
              ].map((row) => (
                <tr key={row.label} className="border-b border-[#e4e4e4]">
                  <td className="py-3 px-4 text-[13px] text-[#555] font-medium w-[140px] bg-[#f8f8f8] border-r border-[#e4e4e4] text-center tracking-[0.1em]">
                    {row.label}
                  </td>
                  <td className="py-3 px-4 text-[13px] text-[#333]">
                    {row.value}㎡
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
