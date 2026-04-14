import { useLanguage } from "@/i18n/LanguageContext";

const contextColors = [
  "text-neo-pink",
  "text-neo-blue",
  "text-neo-green",
  "text-neo-orange",
  "text-neo-purple",
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          {t.projects.title}<span className="text-neo-blue">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {t.projects.items.map((project, i) => (
            <div
              key={project.title}
              className="neo-card bg-background p-6 flex flex-col hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
            >
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${contextColors[i % contextColors.length]}`}>
                {project.context}
              </p>
              <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              {project.outcomes.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {project.outcomes.map((o) => (
                    <li key={o} className="text-sm text-primary flex items-start gap-2">
                      <span className="text-neo-green mt-1 font-bold">▸</span>
                      {o}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t-[3px] border-foreground">
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
