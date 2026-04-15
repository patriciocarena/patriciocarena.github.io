import { Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-cream">
      <div ref={ref} className={`max-w-3xl mx-auto space-y-5 reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {t.about.title}<span className="text-neo-orange">.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t.about.bio}
        </p>
        <div className="flex items-start gap-4 p-5 neo-card bg-background hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150">
          <Target className="text-neo-orange mt-0.5 shrink-0" size={22} />
          <div>
            <h3 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">
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
