import { Download, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const chips = ["ISO 9001 fundamentals", "KPI dashboards", "Process improvement (PDCA, RCA)"];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 md:pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Industrial Engineering.{" "}
            <span className="text-gradient-gold">Operations, Quality & Data-driven improvement.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Industrial Engineering student at Universidad Católica de Córdoba | USF academic exchange
            (San Francisco) | Building KPI dashboards, quality systems, and process improvements.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={16} />
              Let's Connect
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-gold-muted text-accent-foreground border border-gold-subtle"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-gold/20 shadow-lg">
            <img src={headshot} alt="Professional headshot" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
