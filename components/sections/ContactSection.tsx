'use client';

import { CONTACT, MAP_LINKS } from '@/lib/constants';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';

function MapPlaceholder({ label, address }: { label: string; address: string }) {
  return (
    <div className="w-full h-[300px] bg-gradient-to-br from-[#001a30] to-[#003057] border border-[#e4e4e4] flex items-center justify-center relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        {[...Array(6)].map((_, i) => (
          <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${(i + 1) * 14.28}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * 11.11}%` }} />
        ))}
      </div>
      <div className="relative z-10 text-center">
        <svg className="w-[36px] h-[36px] text-accent-green mx-auto mb-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <p className="text-white/70 text-[14px] font-medium">{label}</p>
        <p className="text-white/40 text-[12px] mt-[4px]">{address}</p>
      </div>
      {/* kakaomap label */}
      <span className="absolute bottom-[8px] left-[8px] text-[11px] text-white/30">kakaomap</span>
      <span className="absolute bottom-[8px] right-[8px] text-[11px] text-white/30">길찾기</span>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="py-[70px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[20px]">
        {/* Title - left aligned */}
        <FadeInOnScroll>
          <h2 className="text-[28px] font-bold text-text-dark tracking-[-2px] mb-[30px]">찾아오시는길</h2>
        </FadeInOnScroll>

        {/* Two maps side by side */}
        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {/* 견본주택 */}
            <div>
              <MapPlaceholder label="견본주택" address={CONTACT.modelHouse.address} />
              <div className="mt-[15px]">
                <h3 className="text-[18px] font-bold text-primary-navy mb-[6px]">견본주택</h3>
                <p className="text-[14px] text-[#666] mb-[15px]">{CONTACT.modelHouse.address}</p>
                <a
                  href={MAP_LINKS.modelHouse.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] bg-primary-navy text-white px-[24px] py-[10px] text-[14px] font-medium hover:bg-primary-navy/90 transition-colors"
                >
                  자세히 보기
                  <span className="text-[16px]">→</span>
                </a>
              </div>
            </div>

            {/* 현장 */}
            <div>
              <MapPlaceholder label="현장" address={CONTACT.site.address} />
              <div className="mt-[15px]">
                <h3 className="text-[18px] font-bold text-primary-navy mb-[6px]">현장</h3>
                <p className="text-[14px] text-[#666] mb-[15px]">{CONTACT.site.address}</p>
                <a
                  href={MAP_LINKS.site.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] bg-primary-navy text-white px-[24px] py-[10px] text-[14px] font-medium hover:bg-primary-navy/90 transition-colors"
                >
                  자세히 보기
                  <span className="text-[16px]">→</span>
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
