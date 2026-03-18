import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `분양일정 | ${SITE_NAME}`,
  description: `${SITE_NAME} 분양일정`,
};

export default function CalendarPage() {
  return (
    <>
      <SubPageHero
        title="분양일정"
        backgroundImage="/images/sale/hero.webp"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: '분양안내', href: '/sale/calendar' },
          { label: '분양일정', href: '/sale/calendar' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/sale/schedule.webp"
          alt="분양일정"
          width={1000}
          height={700}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
