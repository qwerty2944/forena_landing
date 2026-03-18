import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `시스템 | ${SITE_NAME}`,
  description: `${SITE_NAME} 시스템 안내`,
};

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: '단지안내', href: '/complex/info' },
  { label: '시스템', href: '/complex/system' },
];

export default function SystemPage() {
  return (
    <>
      <SubPageHero
        title="시스템"
        backgroundImage="/images/complex/hero.jpg"
        breadcrumb={BREADCRUMB}
      />
      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/complex/system.jpg"
          alt="시스템"
          width={1000}
          height={700}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
