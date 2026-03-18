import SubPageHero from '@/components/sections/SubPageHero';

export default function VRPage() {
  return (
    <>
      <SubPageHero
        title="E모델하우스"
        backgroundImage="/images/unit/hero.webp"
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: '세대안내', href: '/unit/floor-plan' },
          { label: 'E모델하우스', href: '/unit/vr' },
        ]}
      />

      {/* 모바일: 반응형 / md 이상: 1200x800 고정 */}
      <div className="py-10 md:overflow-x-auto">
        <iframe
          src="https://sws360.com/2026/jpl/forena-incheon_emodel/index.htm"
          title="E모델하우스"
          className="mx-auto border-0 w-full aspect-[3/2] md:w-[1200px] md:h-[800px] md:aspect-auto"
          allowFullScreen
        />
      </div>
    </>
  );
}
