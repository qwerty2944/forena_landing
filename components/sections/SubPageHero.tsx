import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface SubPageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function SubPageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumb,
}: SubPageHeroProps) {
  return (
    <>
      <section
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      >
        {/* Multi-layer gradient background (when no image) */}
        {!backgroundImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a30] via-[#003057] to-[#1a4a6e]">
            {/* Geometric overlay pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-[10%] right-[15%] w-48 h-48 border border-white/[0.04] rounded-full" />
              <div className="absolute bottom-[15%] left-[10%] w-64 h-64 border border-white/[0.03] rounded-full" />
              <div className="absolute top-[40%] left-[50%] w-12 h-12 border border-white/[0.05] rotate-45" />
              <div className="absolute top-[20%] left-0 w-[100px] h-px bg-gradient-to-r from-transparent to-white/[0.06]" />
              <div className="absolute bottom-[30%] right-0 w-[80px] h-px bg-gradient-to-l from-transparent to-white/[0.06]" />
            </div>
          </div>
        )}

        {/* Gradient overlay for background images */}
        {backgroundImage && (
          <div className="sub-hero-overlay absolute inset-0 z-[1]" />
        )}

        {/* Content */}
        <div className="relative z-[2] text-center px-5 pt-[60px] md:pt-[80px]">
          {subtitle && (
            <p
              className="text-white/60 text-[13px] md:text-[14px] tracking-[0.3em] uppercase mb-[10px]"
              style={{ fontFamily: "'Nanum Myeongjo', serif" }}
            >
              {subtitle}
            </p>
          )}
          <h1
            className="text-white text-[28px] md:text-[42px] font-medium tracking-[-1px] font-sans"
            style={{
              textShadow: '1px 2px 2px rgba(0,0,0,.1)',
            }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Breadcrumb - below hero, white bg, left-aligned */}
      {breadcrumb && breadcrumb.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="bg-white border-b border-[#e4e4e4]"
        >
          <div className="max-w-[1000px] mx-auto px-[20px] py-[14px]">
            <ol className="flex items-center gap-[6px] text-[13px] text-[#999]">
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <li key={`${index}-${item.label}`} className="flex items-center gap-[6px]">
                    {index === 0 && (
                      <svg className="w-[14px] h-[14px] text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    )}
                    {index > 0 && (
                      <span className="text-[#ccc]" aria-hidden="true">&gt;</span>
                    )}
                    {isLast ? (
                      <span className="text-[#333] font-medium" aria-current="page">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-[#333] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>
      )}
    </>
  );
}
