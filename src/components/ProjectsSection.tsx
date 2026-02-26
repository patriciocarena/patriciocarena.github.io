import { useLanguage } from "@/i18n/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12">
          {t.projects.title}<span className="text-gold">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-background p-6 hover:shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              <p className="text-xs font-medium text-gold uppercase tracking-wider mb-1">
                {project.context}
              </p>
              <h3 className="font-display text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              {project.outcomes.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {project.outcomes.map((o) => (
                    <li key={o} className="text-sm text-primary flex items-start gap-2">
                      <span className="text-gold mt-1">▸</span>
                      {o}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium"
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
