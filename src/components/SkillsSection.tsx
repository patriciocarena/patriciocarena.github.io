import { BarChart3, Wrench, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [BarChart3, Wrench, Globe];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
          {t.skills.title}<span className="text-gold">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.skills.columns.map((col, i) => {
            const Icon = icons[i];
            return (
              <div key={col.title} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon className="text-gold" size={20} />
                  <h3 className="font-semibold text-primary">{col.title}</h3>
                </div>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-relaxed">
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
