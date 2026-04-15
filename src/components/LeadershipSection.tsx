import { Trophy, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LeadershipSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-cream">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-8 reveal ${isVisible ? "visible" : ""}`}>
          {t.leadership.title}<span className="text-neo-orange">.</span>
        </h2>
        <div className="space-y-4">
          <div className={`neo-card bg-background p-4 flex items-start gap-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 reveal stagger-1 ${isVisible ? "visible" : ""}`}>
            <Trophy className="text-neo-orange shrink-0 mt-0.5" size={18} />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-bold text-primary">{t.leadership.rugbyBold}</span>{" "}
              {t.leadership.rugby.replace(t.leadership.rugbyBold, "").trim().replace(/^—\s*/, "— ")}
            </p>
          </div>
          <div className={`neo-card bg-background p-4 flex items-start gap-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 reveal stagger-2 ${isVisible ? "visible" : ""}`}>
            <Heart className="text-neo-pink shrink-0 mt-0.5" size={18} />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-bold text-primary">{t.leadership.volunteeringBold}</span>{" "}
              {t.leadership.volunteering}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
