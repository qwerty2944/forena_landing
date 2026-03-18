interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className = '',
  children,
}: ContainerProps) {
  return (
    <div
      className={`max-w-[1440px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[20px] ${className}`}
    >
      {children}
    </div>
  );
}
