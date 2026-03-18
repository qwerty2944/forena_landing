interface PremiumIconProps {
  type: 'transit' | 'school' | 'park' | 'shopping' | 'design' | 'value';
  size?: number;
  className?: string;
}

export default function PremiumIcon({ type, size = 40, className = '' }: PremiumIconProps) {
  const svgProps = {
    width: size,
    height: size,
    viewBox: '0 0 40 40',
    fill: 'none',
    className,
  };

  switch (type) {
    case 'transit':
      return (
        <svg {...svgProps}>
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 28V14a2 2 0 012-2h12a2 2 0 012 2v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 24h16M16 28v2M24 28v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="15" y="15" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="21" y="15" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="26" r="1" fill="currentColor" />
          <circle cx="24" cy="26" r="1" fill="currentColor" />
        </svg>
      );
    case 'school':
      return (
        <svg {...svgProps}>
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 11l-10 5.5 10 5.5 10-5.5L20 11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M13 18.5v6c0 1 3.1 3.5 7 3.5s7-2.5 7-3.5v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 16.5v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'park':
      return (
        <svg {...svgProps}>
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 30v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 22c-4 0-7-3-7-5.5S16 10 20 10s7 3.5 7 6.5-3 5.5-7 5.5z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 25c-2 0-4-1.5-4-3s2-3 4-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M25 25c2 0 4-1.5 4-3s-2-3-4-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'shopping':
      return (
        <svg {...svgProps}>
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 15h12l-1.5 10a2 2 0 01-2 1.5h-5a2 2 0 01-2-1.5L14 15z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 15v-2a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'design':
      return (
        <svg {...svgProps}>
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="11" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 17h18M17 11v18" stroke="currentColor" strokeWidth="1.2" />
          <path d="M17 23h6v6" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'value':
      return (
        <svg {...svgProps}>
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 10v4m0 12v4M10 20h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14.5 14.5l2 2m7 7l2 2m0-11l-2 2m-7 7l-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
  }
}
