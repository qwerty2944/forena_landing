'use client';

import { useState } from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';

export default function BrandPage() {
  const [activeTab, setActiveTab] = useState<'forena' | 'thesharp'>('forena');

  return (
    <>
      <SubPageHero
        title="브랜드 소개"
        backgroundImage="/images/business/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '사업안내', href: '/business/planning' },
          { label: '브랜드 소개', href: '/business/brand' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab('forena')}
            className={`flex-1 py-3.5 text-center text-[15px] font-medium border transition-colors ${
              activeTab === 'forena'
                ? 'bg-primary-navy text-white border-primary-navy'
                : 'bg-white text-[#888] border-[#ddd] hover:text-[#333]'
            }`}
          >
            FORENA
          </button>
          <button
            onClick={() => setActiveTab('thesharp')}
            className={`flex-1 py-3.5 text-center text-[15px] font-medium border transition-colors ${
              activeTab === 'thesharp'
                ? 'bg-primary-navy text-white border-primary-navy'
                : 'bg-white text-[#888] border-[#ddd] hover:text-[#333]'
            }`}
          >
            THE SHARP
          </button>
        </div>

        {/* FORENA Tab */}
        {activeTab === 'forena' && (
          <div className="mt-10">
            <Image
              src="/images/business/brand.jpg"
              alt="FORENA 브랜드"
              width={1000}
              height={1400}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {/* THE SHARP Tab */}
        {activeTab === 'thesharp' && (
          <div className="mt-10">
            {/* Award Title */}
            <Image
              src="/images/business/brand_award_tit.jpg"
              alt="소비자가 인정한 No.1 브랜드"
              width={1000}
              height={120}
              className="w-full h-auto"
            />

            {/* Award Images - 데스크탑: 가로 5개 */}
            <div className="hidden md:flex gap-[10px] mt-6 justify-center">
              {[1, 2, 3, 4, 5].map((n) => (
                <Image
                  key={n}
                  src={`/images/business/brand_award_img${n}.jpg`}
                  alt={`수상 ${n}`}
                  width={170}
                  height={200}
                  className="w-[18%] h-auto object-contain"
                />
              ))}
            </div>
            {/* Award Images - 모바일: 2-2-1 (3행) */}
            <div className="md:hidden mt-6">
              <div className="grid grid-cols-2 gap-[10px]">
                {[1, 2, 3, 4].map((n) => (
                  <Image
                    key={n}
                    src={`/images/business/brand_award_img${n}.jpg`}
                    alt={`수상 ${n}`}
                    width={170}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                ))}
              </div>
              <div className="flex justify-center mt-[10px]">
                <Image
                  src="/images/business/brand_award_img5.jpg"
                  alt="수상 5"
                  width={170}
                  height={200}
                  className="w-[calc(50%-5px)] h-auto object-contain"
                />
              </div>
            </div>

            {/* 더샵 브랜드 아이덴티티 시스템 */}
            <div className="mt-16 text-center">
              <h3 className="text-[22px] font-bold text-[#333]">더샵 브랜드 아이덴티티 시스템</h3>
              <p className="text-[13px] text-[#999] tracking-[0.15em] mt-2">THE SHARP BRAND IDENTITY SYSTEM</p>
            </div>

            <div className="mt-8 text-center text-[14px] text-[#666] leading-[1.9] max-w-[700px] mx-auto">
              <p>보이는 것을 잘 하는 브랜드는 많습니다. 보이지 않는 것에 최선을 다하는 브랜드는 멀지 않습니다.</p>
              <p>특특한 것을 자랑하는 집은 많습니다. 본질적인 것을 자랑하는 집은 찾기 어렵습니다.</p>
              <p>다삶은 보이지 않는 것에서부터 앞서가는 것을 선택했습니다.</p>
              <p className="text-[18px] font-bold text-[#333] mt-6 mb-6">집이란, 당신과 가족의 삶을 담는 그릇.</p>
              <p>당신의 행복을 담을 집은, 시간이 흐름에도 변함없이 견고하게 빛나야 하기 때문입니다.</p>
              <p>집이 가져야 할 본질적 가치와 그 안에 담길 라이프스타일을 깊이 고민하는 더삶</p>
              <p>삶수록 커지는 만족, 삶수록 느끼는 가치, 더삶다움이란, 이런것입니다.</p>
            </div>

            {/* Brand Identity Image */}
            <div className="mt-12">
              <Image
                src="/images/business/brand_img1.jpg"
                alt="더샵 브랜드 아이덴티티"
                width={1000}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Brand Identity Diagram */}
            <div className="mt-16 flex items-center justify-center">
              <div className="relative w-[500px] max-w-full aspect-square">
                {/* Center circle */}
                <div className="absolute inset-[25%] rounded-full border-2 border-primary-navy/20 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-[11px] text-[#999] tracking-[0.1em]">BRAND IDENTITY</p>
                    <p className="text-[14px] font-bold text-primary-navy mt-1">ADVANCE IN CORE</p>
                    <p className="text-[12px] text-[#666] mt-1">&lsquo;핵심에 앞서가는&rsquo;</p>
                    <p className="text-[11px] text-[#888] mt-3 leading-[1.6]">
                      견고함과 튼튼함을 기반으로<br />
                      주거의 본질에 집중하여<br />
                      고객의 생활에 든든한 안심을 제공하고<br />
                      프리미엄 주거문화를 선도합니다.
                    </p>
                  </div>
                </div>
                {/* Top-left: 신뢰할 수 있는 안전 */}
                <div className="absolute top-0 left-0 w-[45%] text-center">
                  <p className="text-[14px] font-bold text-[#333]">신뢰할 수 있는 안전</p>
                  <p className="text-[11px] text-[#999]">(Reliable Safety)</p>
                  <div className="w-[60%] mx-auto h-px bg-[#ddd] my-2" />
                  <p className="text-[11px] text-[#888] leading-[1.6]">마음 놓고 지낼 수 있는<br />안전한 주거 환경을 만들어냅니다</p>
                </div>
                {/* Top-right: 강화된 편의 */}
                <div className="absolute top-0 right-0 w-[45%] text-center">
                  <p className="text-[14px] font-bold text-[#333]">강화된 편의</p>
                  <p className="text-[11px] text-[#999]">(Enhanced Convenience)</p>
                  <div className="w-[60%] mx-auto h-px bg-[#ddd] my-2" />
                  <p className="text-[11px] text-[#888] leading-[1.6]">교통을 시설과 서비스를 제공하며<br />편리하고, 편안한 생활을 가능케합니다</p>
                </div>
                {/* Bottom-left: 안락한 휴식 */}
                <div className="absolute bottom-0 left-0 w-[45%] text-center">
                  <p className="text-[14px] font-bold text-[#333]">안락한 휴식</p>
                  <p className="text-[11px] text-[#999]">(Comfortable Rest)</p>
                  <div className="w-[60%] mx-auto h-px bg-[#ddd] my-2" />
                  <p className="text-[11px] text-[#888] leading-[1.6]">안락한 환경에서 쉬를 편히 쉴<br />수 있는, 그래서 행복이 생기는</p>
                </div>
                {/* Bottom-right: 세련된 디자인 */}
                <div className="absolute bottom-0 right-0 w-[45%] text-center">
                  <p className="text-[14px] font-bold text-[#333]">세련된 디자인</p>
                  <p className="text-[11px] text-[#999]">(Refined Design)</p>
                  <div className="w-[60%] mx-auto h-px bg-[#ddd] my-2" />
                  <p className="text-[11px] text-[#888] leading-[1.6]">세련된 디자인으로 주거 환경의<br />프리미엄을 완성하는</p>
                </div>
              </div>
            </div>

            {/* Brand Logo */}
            <div className="mt-16 flex flex-col md:flex-row border border-[#ddd]">
              {/* Left: Logo */}
              <div className="md:w-1/2 relative p-10 flex items-center justify-center">
                <span className="absolute top-0 left-0 text-[11px] text-white bg-primary-navy px-3 py-1.5">더샵 시그니처</span>
                <Image
                  src="/images/business/brand_logo.jpg"
                  alt="더샵 브랜드 로고"
                  width={400}
                  height={400}
                  className="w-[70%] h-auto"
                />
              </div>
              {/* Right: Description */}
              <div className="md:w-1/2 bg-primary-navy p-8 md:p-10 flex flex-col justify-center">
                <h4 className="text-[20px] font-bold text-white mb-5">더샵 브랜드 로고</h4>
                <p className="text-[13px] text-white/80 leading-[1.9]">
                  새로운 로고 디자인은 견고함과 튼튼함을 기반으로 주거공간의 본질에 집중하는
                  더삶의 브랜드 아이덴티티 &lsquo;Advanced in Core&rsquo;를 담았습니다.
                  높은 건축물의 강인함을 모티브로 가로와 세로 축이 교차하는 구조적인 형태의
                  심볼은 시각적인 안정감과 균형감을 느낄 수 있으며 본질에 집중하는 더삶
                  앞선 주거문화를 상징합니다.
                </p>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="mt-16">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/vcazdao58as?rel=0&modestbranding=1"
                  title="더샵 브랜드 영상"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 space-y-1">
              <p className="text-[12px] text-[#999]">※ 본 홈페이지는 제작 과정상 오·탈자가 있을 수 있습니다.</p>
              <p className="text-[12px] text-[#999]">※ 본 홈페이지에 사용된 CG, 사진, 이미지는 고객의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
