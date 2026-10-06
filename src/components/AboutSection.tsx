import { Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const statColors = ["text-neo-pink", "text-gradient-gold", "text-neo-blue"];

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [lead, ...rest] = t.about.bio;
  const shown = isVisible ? "visible" : "";

  return (
    <section id="about" className="section-padding bg-cream">
      <div ref={ref} className="section-shell lg:grid lg:grid-cols-12 lg:gap-12">
        <SectionHeading
          index="01"
          title={t.about.title}
          accent="orange"
          isVisible={isVisible}
          className="mb-10 lg:col-span-4 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
        />

        <div className="space-y-10 lg:col-span-8">
          <div className={`space-y-5 reveal stagger-1 ${shown}`}>
            <p className="text-xl md:text-2xl font-medium leading-snug text-primary text-pretty">{lead}</p>
            {rest.map((para) => (
              <p key={para} className="text-lg leading-relaxed text-muted-foreground text-pretty">
                {para}
              </p>
            ))}
          </div>

          <dl className={`grid gap-4 sm:grid-cols-3 reveal stagger-2 ${shown}`}>
            {t.about.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="neo-card neo-card-hover flex flex-row-reverse items-center justify-end gap-4 bg-background px-5 py-4 sm:flex-col-reverse sm:items-stretch sm:gap-0 sm:p-5"
              >
                <dt className="text-sm leading-snug text-muted-foreground sm:mt-2">{stat.label}</dt>
                <dd className={`min-w-[3.5rem] text-4xl font-bold tracking-tight ${statColors[i % statColors.length]}`}>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className={`neo-card neo-card-hover flex items-start gap-4 bg-background p-5 md:p-6 reveal stagger-3 ${shown}`}>
            <div className="flex size-10 shrink-0 items-center justify-center neo-border bg-neo-orange">
              <Target className="text-black" size={18} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">{t.about.lookingTitle}</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">{t.about.lookingText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
