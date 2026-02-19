import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Sales Representative",
    company: "Royal Prestige",
    period: "Jan – May 2022",
    description: "Developed communication and follow-up skills through product demos, client relationship management, and disciplined sales processes.",
  },
  {
    role: "Hospitality & Construction",
    company: "International Work Experience — Australia",
    period: "Dec 2023 – Mar 2024",
    description: "Built adaptability, reliability, and cross-cultural problem-solving while working in fast-paced environments abroad.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12">
          Experience<span className="text-gold">.</span>
        </h2>
        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border">
          {experiences.map((exp) => (
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
