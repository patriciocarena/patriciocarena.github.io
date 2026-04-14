import { BarChart3, Wrench, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [BarChart3, Wrench, Globe];
const headerColors = ["bg-neo-pink", "bg-neo-yellow", "bg-neo-blue"];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          {t.skills.title}<span className="text-neo-green">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.skills.columns.map((col, i) => {
            const Icon = icons[i];
            return (
              <div key={col.title} className="neo-card bg-background overflow-hidden">
                <div className={`px-4 py-3 ${headerColors[i]} border-b-[3px] border-foreground`}>
                  <div className="flex items-center gap-3">
                    <Icon className="text-black" size={20} />
                    <h3 className="font-bold text-black uppercase tracking-wider text-sm">{col.title}</h3>
                  </div>
                </div>
                <ul className="p-4 space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-foreground font-medium leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
