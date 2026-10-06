import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/patricio-carena" },
  { icon: Github, label: "GitHub", href: "https://github.com/patriciocarena" },
  { icon: Mail, label: "Email", href: "mailto:patriciocarena.fin@gmail.com" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 bg-primary text-primary-foreground">
      <div className="nav-color-bar" />
      <div className="px-6 md:px-8 py-14">
        <div className="section-shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#" className="text-6xl md:text-7xl font-bold tracking-tight" aria-label="Back to top">
              PC<span className="text-neo-pink">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm opacity-70 text-pretty">{t.hero.headlineSub}</p>
          </div>
          <ul className="flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex size-12 items-center justify-center border-[3px] border-primary-foreground transition-colors hover:bg-neo-yellow hover:text-black hover:border-neo-yellow"
                >
                  <Icon size={20} strokeWidth={2.25} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="section-shell mt-12 flex flex-col gap-4 border-t border-primary-foreground/20 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <p className="font-medium opacity-70">{t.footer.copy}</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {(["about", "projects", "experience", "contact"] as const).map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="font-bold uppercase tracking-wider opacity-70 transition-opacity hover:opacity-100">
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
