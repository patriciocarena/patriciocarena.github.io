import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const accentColors = ["bg-neo-pink", "bg-neo-blue", "bg-neo-green", "bg-neo-orange", "bg-neo-purple"];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="section-shell">
        <SectionHeading index="02" title={t.projects.title} accent="blue" isVisible={isVisible} className="mb-12" />
        <div className="grid gap-8 md:grid-cols-2">
          {t.projects.items.map((project, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <article
                key={project.title}
                className={`neo-card neo-card-hover flex flex-col overflow-hidden bg-background reveal stagger-${i + 1} ${isVisible ? "visible" : ""}`}
              >
                <div className={`h-3 ${accent} border-b-[3px] border-foreground`} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{project.context}</p>
                    <span className="text-xs font-bold tabular-nums text-muted-foreground" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl md:text-2xl font-bold tracking-tight text-primary text-balance">{project.title}</h3>
                  <p className="mb-5 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
                  {project.outcomes.length > 0 && (
                    <ul className="mb-6 space-y-2">
                      {project.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm font-medium text-primary">
                          <span className={`mt-1.5 size-2 shrink-0 border border-foreground ${accent}`} aria-hidden="true" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 border-t-[3px] border-foreground pt-5">
                    {project.skills.map((skill) => (
                      <span key={skill} className="neo-tag bg-muted text-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
