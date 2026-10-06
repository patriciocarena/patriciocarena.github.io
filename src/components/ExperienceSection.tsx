import { Briefcase } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding">
      <div ref={ref} className="section-shell lg:grid lg:grid-cols-12 lg:gap-12">
        <SectionHeading
          index="04"
          title={t.experience.title}
          accent="purple"
          isVisible={isVisible}
          className="mb-10 lg:col-span-4 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
        />
        <div className="lg:col-span-8">
          <Timeline
            items={t.experience.items.map((exp) => ({
              period: exp.period,
              title: exp.role,
              subtitle: exp.company,
              description: exp.description,
            }))}
            icon={Briefcase}
            iconClassName="bg-neo-orange"
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
