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

      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <iframe
          src="https://sws360.com/2026/jpl/forena-incheon_emodel/index.htm"
          title="E모델하우스"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
          allowFullScreen
        />
      </div>
    </>
  );
}
