import { Download, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const tagColors = [
  "bg-neo-blue text-white",
  "bg-neo-pink text-white",
  "bg-neo-green text-white",
  "bg-neo-orange text-white",
  "bg-neo-purple text-white",
  "bg-neo-yellow text-black",
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex items-center section-padding pt-24 md:pt-16">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
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
              className="neo-btn inline-flex items-center gap-2 bg-neo-pink text-white px-6 py-3 text-sm"
            >
              <Download size={16} />
              {t.hero.downloadCV}
            </a>
            <a
              href="#contact"
              className="neo-btn inline-flex items-center gap-2 bg-neo-yellow text-black px-6 py-3 text-sm"
            >
              <Mail size={16} />
              {t.hero.connect}
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {t.hero.chips.map((chip, i) => (
              <span
                key={chip}
                className={`neo-tag ${tagColors[i % tagColors.length]}`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-64 h-80 overflow-hidden neo-card">
            <img src={headshot} alt="Patricio Carena" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
