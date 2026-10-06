import type { LucideIcon } from "lucide-react";

export interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineProps {
  items: TimelineEntry[];
  icon: LucideIcon;
  iconClassName: string;
  isVisible: boolean;
}

// Vertical timeline shared by Experience and Education.
const Timeline = ({ items, icon: Icon, iconClassName, isVisible }: TimelineProps) => (
  <ol className="relative space-y-6 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[3px] before:bg-foreground">
    {items.map((item, i) => (
      <li
        key={item.title}
        className={`relative flex gap-4 md:gap-6 reveal-left stagger-${i + 1} ${isVisible ? "visible" : ""}`}
      >
        <div
          className={`relative z-10 mt-1 flex size-10 shrink-0 items-center justify-center rounded-full neo-border ${iconClassName}`}
        >
          <Icon className="text-black" size={16} strokeWidth={2.5} />
        </div>
        <div className="neo-card neo-card-hover bg-background p-5 md:p-6 flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-neo-purple">{item.period}</p>
          <h3 className="mt-1.5 text-lg font-bold text-primary tracking-tight">{item.title}</h3>
          <p className="text-sm font-medium text-muted-foreground">{item.subtitle}</p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;
