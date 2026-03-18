import type { Metadata } from 'next';
import SubPageHero from '@/components/sections/SubPageHero';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `홍보영상 | ${SITE_NAME}`,
  description: `${SITE_NAME} 홍보영상`,
};

export default function VideosPage() {
  return (
    <>
      <SubPageHero
        title="홍보영상"
        backgroundImage="/images/subscription/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: '홍보센터', href: '/media/news' },
          { label: '홍보영상', href: '/media/videos' },
        ]}
      />

      <div className="max-w-[1000px] mx-auto px-[20px] py-[60px]">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/ZjXNsFlcb88"
            title="포레나더샵 인천시청역 홍보영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
