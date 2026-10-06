import { BarChart3, Wrench, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const icons = [BarChart3, Wrench, Globe];
const headerColors = ["bg-neo-pink", "bg-neo-yellow", "bg-neo-blue"];

const SkillsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-padding bg-cream">
      <div ref={ref} className="section-shell">
        <SectionHeading index="03" title={t.skills.title} accent="green" isVisible={isVisible} className="mb-12" />
        <div className="grid gap-8 md:grid-cols-3">
          {t.skills.columns.map((col, i) => {
            const Icon = icons[i];
            return (
              <div
                key={col.title}
                className={`neo-card neo-card-hover overflow-hidden bg-background reveal stagger-${i + 1} ${isVisible ? "visible" : ""}`}
              >
                <div className={`flex items-center gap-3 border-b-[3px] border-foreground px-5 py-3.5 ${headerColors[i]}`}>
                  <Icon className="text-black" size={20} strokeWidth={2.5} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-black">{col.title}</h3>
                </div>
                <ul className="space-y-3 p-5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.95rem] font-medium leading-snug text-foreground">
                      <span className={`mt-1.5 size-2 shrink-0 border border-foreground ${headerColors[i]}`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
