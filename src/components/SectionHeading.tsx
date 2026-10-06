// Shared section header: numbered eyebrow + title with the brand's colored dot.
// Accent classes are spelled out in full so Tailwind can see them.
const accents = {
  pink: { bar: "bg-neo-pink", dot: "text-neo-pink" },
  blue: { bar: "bg-neo-blue", dot: "text-neo-blue" },
  green: { bar: "bg-neo-green", dot: "text-neo-green" },
  yellow: { bar: "bg-neo-yellow", dot: "text-neo-yellow" },
  orange: { bar: "bg-neo-orange", dot: "text-neo-orange" },
  purple: { bar: "bg-neo-purple", dot: "text-neo-purple" },
} as const;

interface SectionHeadingProps {
  index: string;
  title: string;
  accent: keyof typeof accents;
  isVisible: boolean;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ index, title, accent, isVisible, subtitle, className = "" }: SectionHeadingProps) => {
  const { bar, dot } = accents[accent];

  return (
    <div className={`reveal ${isVisible ? "visible" : ""} ${className}`}>
      <div className="flex items-center gap-3 mb-4" aria-hidden="true">
        <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground tabular-nums">{index}</span>
        <span className={`h-[3px] w-10 ${bar}`} />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight text-balance">
        {title}
        <span className={dot}>.</span>
      </h2>
      {subtitle && <p className="mt-4 max-w-sm text-lg text-muted-foreground text-pretty">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
