import type { Metadata } from 'next';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `커뮤니티 | ${SITE_NAME}`,
  description: `${SITE_NAME} 커뮤니티 시설 안내`,
};

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: '단지안내', href: '/complex/info' },
  { label: '커뮤니티', href: '/complex/community' },
];

export default function CommunityPage() {
  return (
    <>
      <SubPageHero
        title="커뮤니티"
        backgroundImage="/images/complex/hero.webp"
        breadcrumb={BREADCRUMB}
      />
      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <Image
          src="/images/complex/community.webp"
          alt="커뮤니티 시설"
          width={1000}
          height={700}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
