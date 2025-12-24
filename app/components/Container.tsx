type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto max-w-7xl px-6 ${className}`}>
      {children}
    </div>
  );
}
