import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t-[3px] border-foreground py-8 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-bold">{t.footer.copy}</p>
        <div className="flex gap-6">
          <a href="#about" className="font-bold uppercase text-xs tracking-wider hover:text-neo-pink transition-colors">{t.nav.about}</a>
          <a href="#projects" className="font-bold uppercase text-xs tracking-wider hover:text-neo-blue transition-colors">{t.nav.projects}</a>
          <a href="#contact" className="font-bold uppercase text-xs tracking-wider hover:text-neo-green transition-colors">{t.nav.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
