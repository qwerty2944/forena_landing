'use client';

import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';

export default function LocationPage() {
  return (
    <>
      <SubPageHero
        title="입지환경"
        backgroundImage="/images/business/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '사업안내', href: '/business/planning' },
          { label: '입지환경', href: '/business/location' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        {/* Title Image */}
        <Image
          src="/images/business/location_tit.jpg"
          alt="입지환경"
          width={1000}
          height={200}
          className="w-full h-auto"
          priority
        />

        {/* 크게보기 Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.open('/images/business/location_tit.jpg', '_blank', 'width=1200,height=900,scrollbars=yes,resizable=yes')}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#bbb] rounded-full text-[#555] text-[14px] font-medium hover:border-[#333] hover:text-[#333] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            크게보기
          </button>
        </div>

        {/* Map Image */}
        <div className="mt-8">
          <Image
            src="/images/business/location_txt.jpg"
            alt="입지안내도"
            width={1000}
            height={700}
            className="w-full h-auto"
          />
        </div>

        {/* Disclaimer */}
        <div className="mt-[50px] space-y-1">
          <p className="text-[12px] text-[#999] leading-relaxed">
            ※ 상기 지역도는 고객의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.
          </p>
          <p className="text-[12px] text-[#999] leading-relaxed">
            ※ 상기 기재된 각종 개발계획 및 내용은 각 기관 및 기업의 사정에 따라 변경 혹은 취소될 수 있으며 당사와는 무관합니다.
          </p>
        </div>
      </div>
    </>
  );
}
