import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `인지세안내문 | ${SITE_NAME}`,
  description: `${SITE_NAME} 인지세안내문`,
};

export default function TaxPage() {
  return (
    <>
      <SubPageHero
        title="인지세안내문"
        backgroundImage="/images/subscription/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '청약안내', href: '/subscription/guide' },
          { label: '인지세안내문', href: '/subscription/tax' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/subscription/stamp-tax.jpg"
          alt="인지세안내문"
          width={1000}
          height={1400}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
