import { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "next-themes";

const navKeys = ["about", "projects", "skills", "experience", "contact"] as const;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled
          ? "bg-background border-b-[3px] border-foreground"
          : "bg-transparent"
      }`}
    >
      <div className="nav-color-bar" />
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-primary tracking-tight">
          PC<span className="text-neo-pink">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-neo-pink ${
                activeSection === link.key ? "text-neo-pink" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="neo-border px-2 py-1 flex items-center gap-1.5 text-xs font-bold text-foreground hover:bg-neo-yellow transition-colors"
            aria-label="Switch language"
          >
            <Globe size={14} />
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="neo-border px-2 py-1 text-foreground hover:bg-neo-purple hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-2 neo-border"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b-[3px] border-foreground px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-neo-pink ${
                    activeSection === link.key ? "text-neo-pink" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setLang(lang === "en" ? "es" : "en"); setMobileOpen(false); }}
                className="neo-border px-2 py-1 flex items-center gap-1.5 text-xs font-bold text-foreground hover:bg-neo-yellow transition-colors"
              >
                <Globe size={14} />
                {lang === "en" ? "Español" : "English"}
              </button>
            </li>
            <li>
              <button
                onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); setMobileOpen(false); }}
                className="neo-border px-2 py-1 flex items-center gap-1.5 text-xs font-bold text-foreground hover:bg-neo-purple hover:text-white transition-colors"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
