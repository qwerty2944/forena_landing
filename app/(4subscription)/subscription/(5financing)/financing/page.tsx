import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `자금조달계획서 | ${SITE_NAME}`,
  description: `${SITE_NAME} 자금조달계획서`,
};

export default function FinancingPage() {
  return (
    <>
      <SubPageHero
        title="자금조달계획서"
        backgroundImage="/images/subscription/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '청약안내', href: '/subscription/guide' },
          { label: '자금조달계획서', href: '/subscription/financing' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/subscription/financing-plan.jpg"
          alt="자금조달계획서"
          width={1000}
          height={1400}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
