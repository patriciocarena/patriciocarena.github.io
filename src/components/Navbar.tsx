import { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "next-themes";

const navKeys = ["about", "projects", "skills", "experience", "education", "awards", "leadership", "contact"] as const;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // The last section is too short to ever reach the top, so the bottom of
      // the page counts as being on it.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveSection(navKeys[navKeys.length - 1]);
        return;
      }
      for (let i = navKeys.length - 1; i >= 0; i--) {
        const el = document.getElementById(navKeys[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(navKeys[i]);
          return;
        }
      }
      setActiveSection("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const toggleLang = () => setLang(lang === "en" ? "es" : "en");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const solid = scrolled || mobileOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b-[3px] transition-[background-color,border-color] duration-200 ${
        solid ? "bg-background/90 backdrop-blur-md border-foreground" : "bg-transparent border-transparent"
      }`}
    >
      <div className="nav-color-bar" />
      <div className="px-6 md:px-8">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight text-primary" aria-label="Patricio Carena">
            PC<span className="text-neo-pink">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navKeys.map((key) => {
                const active = activeSection === key;
                return (
                  <li key={key}>
                    <a
                      href={`#${key}`}
                      aria-current={active ? "location" : undefined}
                      className={`relative py-1 text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-[3px] after:bg-neo-pink after:transition-[width] after:duration-200 ${
                        active ? "text-primary after:w-full" : "text-muted-foreground after:w-0 hover:after:w-full"
                      }`}
                    >
                      {t.nav[key]}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="neo-border flex h-9 items-center gap-1.5 px-2.5 text-xs font-bold text-foreground transition-colors hover:bg-neo-yellow hover:text-black"
                aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
              >
                <Globe size={14} />
                {lang === "en" ? "ES" : "EN"}
              </button>
              <button
                onClick={toggleTheme}
                className="neo-border flex size-9 items-center justify-center text-foreground transition-colors hover:bg-neo-purple hover:text-white"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden neo-border flex size-10 items-center justify-center text-primary"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden border-t-[3px] border-foreground bg-background px-6 md:px-8 pb-6">
          <ul className="section-shell flex flex-col">
            {navKeys.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between border-b-2 border-border py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:text-neo-pink ${
                    activeSection === key ? "text-neo-pink" : "text-primary"
                  }`}
                >
                  {t.nav[key]}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="section-shell flex gap-3 pt-5">
            <button
              onClick={() => { toggleLang(); setMobileOpen(false); }}
              className="neo-btn flex flex-1 items-center justify-center gap-2 bg-neo-yellow py-2.5 text-xs text-black"
            >
              <Globe size={14} />
              {lang === "en" ? "Español" : "English"}
            </button>
            <button
              onClick={() => { toggleTheme(); setMobileOpen(false); }}
              className="neo-btn flex flex-1 items-center justify-center gap-2 bg-background py-2.5 text-xs text-foreground"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
