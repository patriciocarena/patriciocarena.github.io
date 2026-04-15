import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contextColors = [
  "text-neo-pink",
  "text-neo-blue",
  "text-neo-green",
  "text-neo-orange",
  "text-neo-purple",
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-10 reveal ${isVisible ? "visible" : ""}`}>
          {t.projects.title}<span className="text-neo-blue">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-7">
          {t.projects.items.map((project, i) => (
            <div
              key={project.title}
              className={`neo-card bg-background p-6 flex flex-col hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 reveal stagger-${i + 1} ${isVisible ? "visible" : ""}`}
            >
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${contextColors[i % contextColors.length]}`}>
                {project.context}
              </p>
              <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              {project.outcomes.length > 0 && (
                <ul className="space-y-1.5 mb-auto">
                  {project.outcomes.map((o) => (
                    <li key={o} className="text-sm text-primary flex items-start gap-2">
                      <span className="text-neo-green mt-1 font-bold">▸</span>
                      {o}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 pt-4 border-t-[3px] border-foreground mt-auto">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="neo-tag bg-muted text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
