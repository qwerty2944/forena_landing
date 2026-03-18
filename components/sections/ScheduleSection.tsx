'use client';

import { SCHEDULE_STEPS } from '@/lib/constants';
import Link from 'next/link';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';

export default function ScheduleSection() {
  return (
    <section className="py-[70px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[20px]">
        {/* Title row - left aligned, VIEW MORE right */}
        <FadeInOnScroll>
          <div className="flex items-center justify-between mb-[30px]">
            <h2 className="text-[28px] font-bold text-text-dark tracking-[-2px]">분양일정</h2>
            <Link
              href="/sale/calendar"
              className="text-[13px] text-[#888] tracking-[0.1em] hover:text-primary-navy transition-colors"
            >
              VIEW MORE
            </Link>
          </div>
        </FadeInOnScroll>

        {/* 5 cards in a row - last one highlighted */}
        <FadeInOnScroll>
          <div className="hidden md:flex">
            {SCHEDULE_STEPS.map((step, index) => {
              const isLast = index === SCHEDULE_STEPS.length - 1;
              return (
                <div
                  key={step.step}
                  className={`flex-1 border border-[#e4e4e4] p-[25px] ${
                    isLast
                      ? 'bg-primary-navy text-white border-primary-navy'
                      : 'bg-white'
                  } ${index > 0 ? 'border-l-0' : ''}`}
                >
                  <p
                    className={`text-[12px] tracking-[0.05em] mb-[12px] ${
                      isLast ? 'text-white/60' : 'text-[#888]'
                    }`}
                  >
                    STEP {step.step}
                  </p>
                  <p
                    className={`text-[16px] font-bold mb-[20px] ${
                      isLast ? 'text-white' : 'text-text-dark'
                    }`}
                  >
                    {step.label}
                  </p>
                  <p
                    className={`text-[13px] ${
                      isLast ? 'text-white/60' : 'text-[#999]'
                    }`}
                  >
                    {step.date}
                  </p>
                </div>
              );
            })}
          </div>
          {/* 모바일: 2열 그리드 */}
          <div className="grid grid-cols-2 gap-0 md:hidden">
            {SCHEDULE_STEPS.map((step, index) => {
              const isLast = index === SCHEDULE_STEPS.length - 1;
              return (
                <div
                  key={step.step}
                  className={`border border-[#e4e4e4] p-[16px] ${
                    isLast
                      ? 'bg-primary-navy text-white border-primary-navy'
                      : 'bg-white'
                  } ${index % 2 !== 0 ? 'border-l-0' : ''} ${index >= 2 ? 'border-t-0' : ''}`}
                >
                  <p
                    className={`text-[11px] tracking-[0.05em] mb-[8px] ${
                      isLast ? 'text-white/60' : 'text-[#888]'
                    }`}
                  >
                    STEP {step.step}
                  </p>
                  <p
                    className={`text-[14px] font-bold mb-[12px] ${
                      isLast ? 'text-white' : 'text-text-dark'
                    }`}
                  >
                    {step.label}
                  </p>
                  <p
                    className={`text-[12px] ${
                      isLast ? 'text-white/60' : 'text-[#999]'
                    }`}
                  >
                    {step.date}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
