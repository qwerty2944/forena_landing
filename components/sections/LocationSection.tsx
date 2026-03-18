'use client';

import { LOCATION_CARDS } from '@/lib/constants';
import Image from 'next/image';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';

const LOCATION_IMAGES = [
  '/images/main/location_thum_1.webp',
  '/images/main/location_thum_2.webp',
  '/images/main/location_thum_3.webp',
  '/images/main/location_thum_4.webp',
];

const LOCATION_DETAILS = [
  {
    title: 'GTX역세권(예정)으로\n더 빨라질 교통',
    desc: 'GTX-B노선(예정)과 인천시청역, 간석오거리역으로 수도권 어디든 쾌속 이동',
  },
  {
    title: '원도심 인프라로\n더 편리한 생활',
    desc: '롯데백화점, 홈플러스, 구월이마트 트레이더스, 모래내시장 등의 풍부한 인프라와 신주거타운의 눈부신 비전',
  },
  {
    title: '초품아 단지로\n더 우수한 학군',
    desc: '상인천초 바로 앞의 초품아로 인체고, 인천예고, 학원가 등이 모인 안심 도보학세권',
  },
  {
    title: '인천중앙공원으로\n더 쾌적한 환경',
    desc: '가까운 인천중앙공원에서 안월산, 인천대까지 다양한 녹지를 품은 자연 친화적 일상',
  },
];

export default function LocationSection() {
  return (
    <section className="py-[70px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[20px]">
        {/* Title - left aligned */}
        <FadeInOnScroll>
          <h2 className="text-[28px] font-bold text-text-dark tracking-[-2px] mb-[30px]">입지환경</h2>
        </FadeInOnScroll>

        {/* Desktop: 사진 4개 한줄 + 텍스트 4개 한줄 */}
        <FadeInOnScroll>
          <div className="hidden md:grid grid-cols-4 gap-[10px]">
            {LOCATION_CARDS.map((card, index) => (
              <div key={card.id} className="group relative overflow-hidden cursor-pointer">
                <Image
                  src={LOCATION_IMAGES[index]}
                  alt={card.title}
                  width={300}
                  height={200}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span className="absolute bottom-[8px] right-[8px] bg-black/60 text-white text-[11px] px-[8px] py-[2px]">이미지컷</span>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="hidden md:grid grid-cols-4 gap-[10px] mt-[25px]">
            {LOCATION_DETAILS.map((item, index) => (
              <div key={index} className="pr-[10px]">
                <h3 className="text-[16px] font-bold text-primary-navy tracking-[-0.5px] leading-[1.5] whitespace-pre-line mb-[8px]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#888] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Mobile: 사진 바로 아래에 텍스트 */}
        <FadeInOnScroll>
          <div className="grid grid-cols-2 gap-[10px] md:hidden">
            {LOCATION_CARDS.map((card, index) => (
              <div key={card.id}>
                <div className="group relative overflow-hidden cursor-pointer">
                  <Image
                    src={LOCATION_IMAGES[index]}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute bottom-[8px] right-[8px] bg-black/60 text-white text-[11px] px-[8px] py-[2px]">이미지컷</span>
                </div>
                <div className="mt-[10px]">
                  <h3 className="text-[14px] font-bold text-primary-navy tracking-[-0.5px] leading-[1.4] whitespace-pre-line mb-[4px]">
                    {LOCATION_DETAILS[index].title}
                  </h3>
                  <p className="text-[12px] text-[#888] leading-[1.5]">
                    {LOCATION_DETAILS[index].desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
