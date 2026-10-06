import { Download, Mail } from "lucide-react";
// 720x960 WebP derived from FotoLinkedin.png (2x the largest display size).
import headshot from "@/assets/headshot-hero.webp";
import { useLanguage } from "@/i18n/LanguageContext";
import Marquee from "@/components/Marquee";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col lg:min-h-[100svh]">
      <div className="flex flex-1 items-center px-6 md:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="section-shell w-full grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-2 lg:order-1 space-y-7">
            <p className="hero-animate inline-flex items-center gap-2.5 neo-border neo-shadow-sm bg-background px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-primary">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-neo-green opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-neo-green" />
              </span>
              {t.hero.status}
            </p>

            <h1 className="hero-animate-delay-1 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.4rem] font-bold text-primary tracking-tight text-balance">
              {t.hero.headline}{" "}
              <span className="text-gradient-gold">{t.hero.headlineSub}</span>
            </h1>

            <p className="hero-animate-delay-2 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty">
              {t.hero.subheadline}
            </p>

            <div className="hero-animate-delay-3 flex flex-wrap gap-4 pt-1">
              <a
                href="/CV.pdf"
                download
                className="neo-btn inline-flex items-center gap-2 bg-neo-pink text-white px-6 py-3.5 text-sm"
              >
                <Download size={16} strokeWidth={2.5} />
                {t.hero.downloadCV}
              </a>
              <a
                href="#contact"
                className="neo-btn inline-flex items-center gap-2 bg-neo-yellow text-black px-6 py-3.5 text-sm"
              >
                <Mail size={16} strokeWidth={2.5} />
                {t.hero.connect}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 hero-photo-animate justify-self-start lg:justify-self-end">
            <div className="group relative w-40 h-48 sm:w-48 sm:h-60 lg:w-72 lg:h-[22rem]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 neo-border bg-neo-yellow" aria-hidden="true" />
              <div className="relative size-full overflow-hidden neo-border bg-cream transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                <img
                  src={headshot}
                  alt="Patricio Carena"
                  width={720}
                  height={960}
                  // React 18 only forwards the lowercase attribute.
                  {...{ fetchpriority: "high" }}
                  className="size-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-4 -left-4 lg:-left-6 -rotate-[4deg] neo-border neo-shadow-sm bg-neo-pink px-3 py-1.5 text-[0.7rem] lg:text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap">
                {t.hero.greeting}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Marquee items={t.hero.marquee} />
    </section>
  );
};

export default HeroSection;
