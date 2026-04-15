import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AwardsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="awards" className="section-padding bg-cream">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-8 reveal ${isVisible ? "visible" : ""}`}>
          {t.awards.title}<span className="text-neo-yellow">.</span>
        </h2>
        <div className="space-y-6">
          {t.awards.items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 bg-background neo-card p-5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 reveal stagger-1 ${isVisible ? "visible" : ""}`}
            >
              <Award className="text-neo-yellow shrink-0 mt-0.5" size={20} />
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-primary text-sm">
                    {item.title}
                  </h3>
                  <span className="neo-tag bg-neo-green text-white">
                    {item.placement}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{item.event}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.team && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-bold text-primary">{t.awards.teamLabel}:</span>{" "}
                    {item.team}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-neo-blue font-bold hover:underline mt-1"
                  >
                    LinkedIn <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
