import { Briefcase } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12">
          {t.experience.title}<span className="text-gold">.</span>
        </h2>
        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border">
          {t.experience.items.map((exp) => (
            <div key={exp.role} className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <Briefcase className="text-gold" size={12} />
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-gold uppercase tracking-wider">{exp.period}</p>
                <h3 className="font-semibold text-primary mt-0.5">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
