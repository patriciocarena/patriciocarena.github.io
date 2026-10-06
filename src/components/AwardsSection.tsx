import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const AwardsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="awards" className="section-padding">
      <div ref={ref} className="section-shell lg:grid lg:grid-cols-12 lg:gap-12">
        <SectionHeading
          index="06"
          title={t.awards.title}
          accent="yellow"
          isVisible={isVisible}
          className="mb-10 lg:col-span-4 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
        />
        <div className="space-y-6 lg:col-span-8">
          {t.awards.items.map((item, i) => (
            <article
              key={item.title}
              className={`neo-card neo-card-hover bg-background p-6 md:p-7 reveal stagger-${i + 1} ${isVisible ? "visible" : ""}`}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex size-12 shrink-0 items-center justify-center neo-border bg-neo-yellow">
                  <Award className="text-black" size={22} strokeWidth={2.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="neo-tag inline-block bg-neo-green text-black">{item.placement}</span>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">{item.event}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t-2 border-border pt-5">
                    {item.team && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-bold text-primary">{t.awards.teamLabel}:</span> {item.team}
                      </p>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn inline-flex items-center gap-1.5 bg-background px-3.5 py-2 text-xs text-primary"
                      >
                        LinkedIn <ExternalLink size={12} strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
