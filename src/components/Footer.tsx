import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>{t.footer.copy}</p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
