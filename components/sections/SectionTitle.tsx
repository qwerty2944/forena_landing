interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} mb-[25px]`}>
      {subtitle && (
        <p
          className="text-accent-blue text-[14px] tracking-[0.2em] uppercase mb-[10px]"
          style={{ fontFamily: "'Nanum Myeongjo', serif" }}
        >
          {subtitle}
        </p>
      )}
      <h2 className="text-text-dark text-[30px] font-bold tracking-[-2px]">
        {title}
      </h2>
      {description && (
        <p className="text-[#888] text-[15px] leading-[1.6] mt-[12px] max-w-[600px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
