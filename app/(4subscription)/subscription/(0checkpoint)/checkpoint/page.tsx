import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `청약체크포인트 | ${SITE_NAME}`,
  description: `${SITE_NAME} 청약체크포인트`,
};

export default function CheckpointPage() {
  return (
    <>
      <SubPageHero
        title="청약체크포인트"
        backgroundImage="/images/subscription/hero.webp"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '청약안내', href: '/subscription/guide' },
          { label: '청약체크포인트', href: '/subscription/checkpoint' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/subscription/checkpoint.webp"
          alt="청약체크포인트"
          width={1000}
          height={1400}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
