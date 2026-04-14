import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AwardsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="awards" className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
          {t.awards.title}<span className="text-gold">.</span>
        </h2>
        <div className="space-y-6">
          {t.awards.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-background rounded-lg border border-border p-5"
            >
              <Award className="text-gold shrink-0 mt-0.5" size={20} />
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-primary text-sm">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gold font-medium bg-gold/10 px-2 py-0.5 rounded-full">
                    {item.placement}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{item.event}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.team && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">{t.awards.teamLabel}:</span>{" "}
                    {item.team}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold hover:underline mt-1"
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
