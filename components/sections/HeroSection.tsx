'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { CONTACT } from '@/lib/constants';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  { id: 1, src: '/images/main/main1.webp' },
  { id: 2, src: '/images/main/main2.webp' },
  { id: 3, src: '/images/main/main3.webp' },
  { id: 4, src: '/images/main/main4.webp' },
];

export default function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="relative w-full h-[360px] md:h-[700px]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={slide.src}
                  alt={`메인 슬라이드 ${slide.id}`}
                  fill
                  className={`object-cover transition-transform duration-[5500ms] ease-out ${
                    activeIndex === index ? 'scale-100' : 'scale-[1.15]'
                  }`}
                  priority={slide.id === 1}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom-left overlay box — 네이비 박스 */}
        <div className="absolute bottom-[-30px] left-[16px] md:bottom-[-50px] md:left-[80px] z-10">
          <div className="relative bg-[#003057] px-[20px] py-[20px] pb-[20px] md:px-[70px] md:py-[55px] md:pb-[100px] overflow-hidden">
            {/* Animated dot pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                animation: 'patternMove 12s linear infinite',
              }}
            />
            <div className="relative z-[1]">
              <h2 className="text-white text-[20px] md:text-[48px] font-bold tracking-[-0.5px] leading-tight">
                포레나더샵 인천시청역
              </h2>
              <p
                className="text-white/50 text-[16px] md:text-[30px] mt-[6px] md:mt-[14px] font-light"
                style={{ fontFamily: 'arial, sans-serif' }}
              >
                {CONTACT.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination indicators — 우하단 네모 인디케이터 */}
        <div className="absolute bottom-[16px] right-[16px] z-10 flex gap-[4px] md:hidden">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] border-2 transition-colors ${
                i === activeIndex
                  ? 'bg-primary-navy border-primary-navy'
                  : 'bg-transparent border-white/60'
              }`}
            />
          ))}
        </div>

        {/* Keyframes for pattern animation */}
        <style jsx>{`
          @keyframes patternMove {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
          }
        `}</style>
      </section>

      {/* 2월 6일 GRAND OPEN 배너 */}
      <div className="md:hidden mx-[16px] mt-[45px] mb-[20px]">
        <div className="bg-[#a0764a] text-white text-center py-[22px] rounded-[4px]">
          <p className="text-[16px] font-medium">2월 6일</p>
          <p className="text-[18px] font-bold tracking-[0.1em] mt-[2px]">GRAND OPEN</p>
        </div>
      </div>
    </>
  );
}
