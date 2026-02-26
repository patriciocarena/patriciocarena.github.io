import { Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
          {t.about.title}<span className="text-gold">.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t.about.bio}
        </p>
        <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
          <Target className="text-gold mt-0.5 shrink-0" size={22} />
          <div>
            <h3 className="font-semibold text-primary text-sm uppercase tracking-wider mb-1">
              {t.about.lookingTitle}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.about.lookingText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
