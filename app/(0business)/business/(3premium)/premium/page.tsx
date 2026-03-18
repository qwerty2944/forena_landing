import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `프리미엄 | ${SITE_NAME}`,
  description: `${SITE_NAME} 프리미엄`,
};

export default function PremiumPage() {
  return (
    <>
      <SubPageHero
        title="프리미엄"
        backgroundImage="/images/business/hero.webp"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '사업안내', href: '/business/planning' },
          { label: '프리미엄', href: '/business/premium' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/business/premium.webp"
          alt="프리미엄"
          width={1000}
          height={1400}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
