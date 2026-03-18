import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME, CONTACT, MAP_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `찾아오시는길 | ${SITE_NAME}`,
  description: `${SITE_NAME} 찾아오시는길`,
};

export default function ContactPage() {
  return (
    <>
      <SubPageHero
        title="찾아오시는길"
        backgroundImage="/images/business/hero.webp"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '사업안내', href: '/business/planning' },
          { label: '찾아오시는길', href: '/business/contact' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map Image */}
          <div className="md:flex-1">
            <Image
              src="/images/business/contact.webp"
              alt="찾아오시는길"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Address + Map Buttons */}
          <div className="md:w-[300px] shrink-0 flex flex-col justify-end">
            {/* 현장 */}
            <div className="pb-5 border-b border-[#ddd]">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#333]">현장</h3>
                  <p className="text-[13px] text-[#666] mt-1.5 leading-relaxed">{CONTACT.site.address}</p>
                </div>
                <div className="flex gap-1.5 shrink-0 ml-4">
                  <a href={MAP_LINKS.site.naver} target="_blank" rel="noopener noreferrer"
                    className="w-[30px] h-[30px] rounded-full bg-[#03c75a] flex items-center justify-center text-white text-[13px] font-bold hover:brightness-110 transition">
                    N
                  </a>
                  <a href={MAP_LINKS.site.kakao} target="_blank" rel="noopener noreferrer"
                    className="w-[30px] h-[30px] rounded-full bg-[#555] flex items-center justify-center hover:brightness-110 transition">
                    <svg className="w-[14px] h-[14px] text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.95 1.93 5.54 4.83 7.03l-1.2 4.47 5.15-3.39c.4.04.81.06 1.22.06 5.52 0 10-3.82 10-8.5S17.52 2 12 2z"/>
                    </svg>
                  </a>
                  <a href={MAP_LINKS.site.tmap} target="_blank" rel="noopener noreferrer"
                    className="w-[30px] h-[30px] rounded-full bg-[#e4002b] flex items-center justify-center text-white text-[12px] font-bold hover:brightness-110 transition">
                    T
                  </a>
                </div>
              </div>
            </div>

            {/* 견본주택 */}
            <div className="pt-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#333]">견본주택</h3>
                  <p className="text-[13px] text-[#666] mt-1.5 leading-relaxed">{CONTACT.modelHouse.address}</p>
                </div>
                <div className="flex gap-1.5 shrink-0 ml-4">
                  <a href={MAP_LINKS.modelHouse.naver} target="_blank" rel="noopener noreferrer"
                    className="w-[30px] h-[30px] rounded-full bg-[#03c75a] flex items-center justify-center text-white text-[13px] font-bold hover:brightness-110 transition">
                    N
                  </a>
                  <a href={MAP_LINKS.modelHouse.kakao} target="_blank" rel="noopener noreferrer"
                    className="w-[30px] h-[30px] rounded-full bg-[#555] flex items-center justify-center hover:brightness-110 transition">
                    <svg className="w-[14px] h-[14px] text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.95 1.93 5.54 4.83 7.03l-1.2 4.47 5.15-3.39c.4.04.81.06 1.22.06 5.52 0 10-3.82 10-8.5S17.52 2 12 2z"/>
                    </svg>
                  </a>
                  <a href={MAP_LINKS.modelHouse.tmap} target="_blank" rel="noopener noreferrer"
                    className="w-[30px] h-[30px] rounded-full bg-[#e4002b] flex items-center justify-center text-white text-[12px] font-bold hover:brightness-110 transition">
                    T
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
