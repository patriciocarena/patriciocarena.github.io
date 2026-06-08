import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EducationSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-padding bg-cream">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-8 reveal ${isVisible ? "visible" : ""}`}>
          {t.education.title}<span className="text-neo-purple">.</span>
        </h2>
        <div className="space-y-8 relative before:absolute before:left-[16px] before:top-2 before:bottom-2 before:w-[3px] before:bg-foreground">
          {t.education.items.map((edu, i) => (
            <div key={edu.degree} className={`flex gap-6 reveal-left stagger-${i + 1} ${isVisible ? "visible" : ""}`}>
              <div className="shrink-0 mt-1 relative z-10">
                <div className="w-8 h-8 rounded-full neo-border bg-neo-yellow flex items-center justify-center">
                  <GraduationCap className="text-black" size={14} />
                </div>
              </div>
              <div className="neo-card bg-background p-4 flex-1 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150">
                <p className="text-xs font-bold text-neo-purple uppercase tracking-wider">{edu.period}</p>
                <h3 className="font-bold text-primary mt-0.5">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
