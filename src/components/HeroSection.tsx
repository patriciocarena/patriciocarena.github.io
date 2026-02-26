import { Download, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex items-center section-padding pt-24 md:pt-16">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div className="space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            {t.hero.headline}{" "}
            <span className="text-gradient-gold">{t.hero.headlineSub}</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              {t.hero.downloadCV}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={16} />
              {t.hero.connect}
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {t.hero.chips.map((chip) => (
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
            <img src={headshot} alt="Patricio Carena" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
