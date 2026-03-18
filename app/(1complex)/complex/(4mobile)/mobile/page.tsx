import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `이동통신 협의 결과서 | ${SITE_NAME}`,
  description: `${SITE_NAME} 이동통신 협의 결과서`,
};

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: '단지안내', href: '/complex/info' },
  { label: '이동통신 협의 결과서', href: '/complex/mobile' },
];

export default function MobileCommunicationPage() {
  return (
    <>
      <SubPageHero
        title="이동통신 협의 결과서"
        backgroundImage="/images/complex/hero.webp"
        breadcrumb={BREADCRUMB}
      />
      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/complex/mobile.webp"
          alt="이동통신 협의 결과서"
          width={1000}
          height={700}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
