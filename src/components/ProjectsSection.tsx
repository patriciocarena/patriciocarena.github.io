const projects = [
  {
    title: "Quality Management System Design",
    context: "Sanatorio Allende Women's Center",
    description:
      "Designed a JCI-aligned QMS using SIPOC, defined quality indicators, and built a continuous improvement roadmap.",
    outcomes: [
      "Patient satisfaction: 94%",
      "Service time: 46 min (target <60)",
      "Compliance audit passed",
    ],
    skills: ["QMS design", "SIPOC", "Continuous improvement", "JCI standards"],
  },
  {
    title: "Balanced Scorecard & KPI Dashboard",
    context: "Prodeman S.A. (ManiKing brand)",
    description:
      "Conducted SWOT/PESTEL analysis. Designed KPIs with owners, formulas, and frequency. Built BI dashboards for performance tracking.",
    outcomes: [
      "Lead time reduction targeted",
      "Training compliance ≥90%",
      "COPQ -30% in 12 months",
      "Repeat purchase ≥80%",
    ],
    skills: ["KPI design", "Balanced Scorecard", "SWOT/PESTEL", "BI dashboards"],
  },
  {
    title: "Warehouse & Fulfillment Improvement",
    context: "Wonder Hamburguesería",
    description:
      "Collected operational data, applied GUT matrix prioritization, mapped processes with flowcharts and 5W2H, and used Ishikawa for root cause analysis.",
    outcomes: ["Prioritized action plan via REI matrix", "Process bottlenecks identified & addressed"],
    skills: ["Process mapping", "Root cause analysis", "GUT/REI matrix", "5W2H"],
  },
  {
    title: "Solar PV System Sizing",
    context: "On-grid & Off-grid configurations",
    description:
      "Performed energy balance calculations and concept sizing for solar photovoltaic systems, including storage considerations for off-grid setups.",
    outcomes: ["Energy balance completed", "Storage sizing defined"],
    skills: ["Energy systems", "Technical sizing", "Sustainability"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12">
          Featured Projects<span className="text-gold">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
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
