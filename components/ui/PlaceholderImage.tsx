interface PlaceholderImageProps {
  aspectRatio?: string;
  label?: string;
  variant?: 'navy' | 'green' | 'light' | 'gradient';
  icon?: 'building' | 'map' | 'floor-plan' | 'photo' | 'video';
  className?: string;
}

function IconSvg({ icon }: { icon: PlaceholderImageProps['icon'] }) {
  const cls = 'w-10 h-10 md:w-12 md:h-12';

  switch (icon) {
    case 'building':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      );
    case 'map':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M9 6.75V15m0-8.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM3.75 20.25l4.5-2.25 4.5 2.25 4.5-2.25 3 1.5V3.75l-3 1.5-4.5-2.25L8.25 5.25l-4.5-2.25v17.25z" />
        </svg>
      );
    case 'floor-plan':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M3.75 3.75v16.5h16.5V3.75H3.75zM3.75 12h7.5V3.75M11.25 12v8.25M11.25 16.5h9" />
        </svg>
      );
    case 'photo':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zm14.25-12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      );
    case 'video':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
      );
  }
}

const variantStyles: Record<string, { bg: string; text: string; iconBg: string }> = {
  navy: {
    bg: 'bg-gradient-to-br from-[#003057] to-[#001a30]',
    text: 'text-white/50',
    iconBg: 'bg-white/10',
  },
  green: {
    bg: 'bg-gradient-to-br from-[#7da832] to-[#9cbc41]',
    text: 'text-white/60',
    iconBg: 'bg-white/15',
  },
  light: {
    bg: 'bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]',
    text: 'text-text-light',
    iconBg: 'bg-white',
  },
  gradient: {
    bg: 'bg-gradient-to-br from-[#003057] via-[#1a4a6e] to-[#9cbc41]/40',
    text: 'text-white/50',
    iconBg: 'bg-white/10',
  },
};

export default function PlaceholderImage({
  aspectRatio = '16/9',
  label,
  variant = 'light',
  icon = 'photo',
  className = '',
}: PlaceholderImageProps) {
  const style = variantStyles[variant] || variantStyles.light;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg flex items-center justify-center ${style.bg} ${className}`}
      style={{ aspectRatio }}
    >
      {/* Decorative geometric pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-[10%] left-[10%] w-32 h-32 border border-current rounded-full" />
        <div className="absolute bottom-[15%] right-[15%] w-24 h-24 border border-current rotate-45" />
        <div className="absolute top-[50%] left-[60%] w-16 h-16 border border-current rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${style.iconBg} flex items-center justify-center ${style.text}`}>
          <IconSvg icon={icon} />
        </div>
        {label && (
          <p className={`text-sm md:text-base font-medium ${style.text}`}>{label}</p>
        )}
      </div>
    </div>
  );
}
