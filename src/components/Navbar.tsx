import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const navKeys = ["about", "projects", "skills", "experience", "contact"] as const;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = navKeys.length - 1; i >= 0; i--) {
        const el = document.getElementById(navKeys[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(navKeys[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = navKeys.map((key) => ({
    label: t.nav[key],
    href: `#${key}`,
    key,
  }));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold text-primary">
          PC<span className="text-gold">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                activeSection === link.key ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-gold transition-colors ml-2"
            aria-label="Switch language"
          >
            <Globe size={15} />
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    activeSection === link.key ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setLang(lang === "en" ? "es" : "en"); setMobileOpen(false); }}
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
              >
                <Globe size={15} />
                {lang === "en" ? "Español" : "English"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
