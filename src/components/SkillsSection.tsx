import { BarChart3, Wrench, Globe } from "lucide-react";

const columns = [
  {
    icon: BarChart3,
    title: "Analytics & Ops",
    items: [
      "Advanced Excel (Power Query, PivotTables, Dashboards)",
      "KPI design & data reporting",
      "PDCA, process mapping",
      "Root cause analysis (Ishikawa)",
      "5W2H, GUT/REI prioritization",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Microsoft Excel (advanced)", "AutoCAD (basic–intermediate)", "C++ (intermediate)"],
  },
  {
    icon: Globe,
    title: "Languages",
    items: ["Spanish — Native", "English — C1 (Advanced)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12">
          Skills<span className="text-gold">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <div className="flex items-center gap-3">
                <col.icon className="text-gold" size={20} />
                <h3 className="font-semibold text-primary">{col.title}</h3>
              </div>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
