import { Trophy, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

// "Rugby team captain (multiple seasons) at …" → "Multiple seasons at …", since
// the bold lead-in now renders as the card title.
const stripLeadIn = (full: string, leadIn: string) => {
  const rest = full.replace(leadIn, "").trim().replace(/^\(([^)]+)\)/, "$1").replace(/^—\s*/, "");
  return rest.charAt(0).toUpperCase() + rest.slice(1);
};

const LeadershipSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const items = [
    {
      icon: Trophy,
      tile: "bg-neo-orange",
      title: t.leadership.rugbyBold,
      text: stripLeadIn(t.leadership.rugby, t.leadership.rugbyBold),
    },
    {
      icon: Heart,
      tile: "bg-neo-pink",
      title: t.leadership.volunteeringBold.replace(/:$/, ""),
      text: t.leadership.volunteering,
    },
  ];

  return (
    <section id="leadership" className="section-padding bg-cream">
      <div ref={ref} className="section-shell lg:grid lg:grid-cols-12 lg:gap-12">
        <SectionHeading
          index="07"
          title={t.leadership.title}
          accent="orange"
          isVisible={isVisible}
          className="mb-10 lg:col-span-4 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {items.map(({ icon: Icon, tile, title, text }, i) => (
            <div
              key={title}
              className={`neo-card neo-card-hover bg-background p-6 reveal stagger-${i + 1} ${isVisible ? "visible" : ""}`}
            >
              <div className={`mb-5 flex size-11 items-center justify-center neo-border ${tile}`}>
                <Icon className="text-black" size={20} strokeWidth={2.5} />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-primary">{title}</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
