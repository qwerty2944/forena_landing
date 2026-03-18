'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UNIT_TYPES } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';

const TYPE_IMAGES = [
  '/images/main/type_thumb_1.jpg',
  '/images/main/type_thumb_2.jpg',
  '/images/main/type_thumb_3.jpg',
];

export default function UnitTypeSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeUnit = UNIT_TYPES[activeTab];

  const handleTabChange = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveTab((prev) => (prev - 1 + UNIT_TYPES.length) % UNIT_TYPES.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveTab((prev) => (prev + 1) % UNIT_TYPES.length);
  };

  return (
    <section className="py-[70px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[20px]">
        {/* Title row */}
        <FadeInOnScroll>
          <div className="flex items-center justify-between mb-[30px]">
            <h2 className="text-[28px] font-bold text-text-dark tracking-[-2px]">주택형안내</h2>
            <Link
              href="/unit/floor-plan"
              className="text-[13px] text-[#888] tracking-[0.1em] hover:text-primary-navy transition-colors"
            >
              VIEW MORE
            </Link>
          </div>
        </FadeInOnScroll>

        {/* Tabs: 49m² / 59m²A / 59m²B */}
        <FadeInOnScroll>
          <div className="flex gap-[20px] mb-[30px] justify-center">
            {UNIT_TYPES.map((unit, index) => {
              const label = unit.type === '-' ? unit.size : `${unit.size}${unit.type}`;
              return (
                <button
                  key={unit.id}
                  onClick={() => handleTabChange(index)}
                  className={`text-[16px] font-medium pb-[4px] transition-colors ${
                    activeTab === index
                      ? 'text-[#c87533] border-b-2 border-[#c87533]'
                      : 'text-[#999] hover:text-[#666]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </FadeInOnScroll>

        {/* Floor plan image with arrows + animation */}
        <FadeInOnScroll>
          <div className="relative flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 w-[44px] h-[80px] flex items-center justify-center text-[#bbb] hover:text-primary-navy transition-colors"
            >
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4L4 20L16 36" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 w-[44px] h-[80px] flex items-center justify-center text-[#bbb] hover:text-primary-navy transition-colors"
            >
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4L16 20L4 36" />
              </svg>
            </button>

            {/* Image with slide animation */}
            <div className="w-[400px] max-w-full overflow-hidden relative" style={{ minHeight: '400px' }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeTab}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%' }),
                    center: { x: 0 },
                    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%' }),
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 w-full"
                >
                  <Image
                    src={TYPE_IMAGES[activeTab]}
                    alt={`${activeUnit.size} ${activeUnit.type} 평면도`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Area info below */}
        <FadeInOnScroll>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-[20px] mt-[30px]"
            >
              <div className="flex items-baseline">
                <span
                  className="text-[48px] font-semibold text-text-dark leading-none"
                  style={{ fontFamily: 'arial, sans-serif' }}
                >
                  {activeUnit.size.replace('㎡', '')}
                </span>
                <span className="text-[16px] text-text-dark ml-[2px]">㎡</span>
                {activeUnit.type !== '-' && (
                  <span className="text-[36px] font-semibold text-text-dark ml-[4px] leading-none">{activeUnit.type}</span>
                )}
              </div>
              <div className="w-[40px] h-px bg-[#ccc]" />
              <span className="text-[18px] text-[#888]">
                총 {activeUnit.units}세대
              </span>
            </motion.div>
          </AnimatePresence>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
