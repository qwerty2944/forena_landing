'use client';

import { useRef } from 'react';
import { PREMIUM_FEATURES } from '@/lib/constants';
import Image from 'next/image';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const ICON_MAP: Record<string, string> = {
  transit: '/images/main/premium_ico_1.png',
  school: '/images/main/premium_ico_2.png',
  park: '/images/main/premium_ico_3.png',
  shopping: '/images/main/premium_ico_4.png',
  design: '/images/main/premium_ico_5.png',
  value: '/images/main/premium_ico_6.png',
};

export default function PremiumSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-[70px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[20px]">
        {/* Title - left aligned */}
        <FadeInOnScroll>
          <h2 className="text-[28px] font-bold text-text-dark tracking-[-2px] mb-[30px]">프리미엄</h2>
        </FadeInOnScroll>

        {/* Carousel with left/right arrows */}
        <FadeInOnScroll>
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-[-55px] top-1/2 -translate-y-1/2 z-10 w-[44px] h-[80px] flex items-center justify-center text-[#bbb] hover:text-primary-navy transition-colors max-lg:hidden"
            >
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4L4 20L16 36" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-[-55px] top-1/2 -translate-y-1/2 z-10 w-[44px] h-[80px] flex items-center justify-center text-[#bbb] hover:text-primary-navy transition-colors max-lg:hidden"
            >
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4L16 20L4 36" />
              </svg>
            </button>

            <Swiper
              modules={[Autoplay, Navigation]}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              slidesPerView={3}
              spaceBetween={30}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {PREMIUM_FEATURES.map((feature) => (
                <SwiperSlide key={feature.id}>
                  <div className="text-center py-[10px]">
                    <div className="h-[100px] flex items-center justify-center mb-[15px]">
                      <Image
                        src={ICON_MAP[feature.icon]}
                        alt={feature.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[18px] font-bold text-text-dark tracking-[-1px] mb-[8px]">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] text-[#888] leading-[1.6]">
                      {feature.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
