import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";

const EducationSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-padding bg-cream">
      <div ref={ref} className="section-shell lg:grid lg:grid-cols-12 lg:gap-12">
        <SectionHeading
          index="05"
          title={t.education.title}
          accent="pink"
          isVisible={isVisible}
          className="mb-10 lg:col-span-4 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
        />
        <div className="lg:col-span-8">
          <Timeline
            items={t.education.items.map((edu) => ({
              period: edu.period,
              title: edu.degree,
              subtitle: edu.institution,
              description: edu.description,
            }))}
            icon={GraduationCap}
            iconClassName="bg-neo-yellow"
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
