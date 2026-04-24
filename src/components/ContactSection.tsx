import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Phone, Send, CheckCircle2, Github, Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FORMSPREE_ID = "xwpbknqv"; // patriciocarena.fin@gmail.com

const ContactSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const message = (form.get("message") as string)?.trim();
    if (!name || name.length > 100) errs.name = t.contact.errName;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.contact.errEmail;
    if (!message || message.length > 1000) errs.message = t.contact.errMessage;
    return { errs, isValid: Object.keys(errs).length === 0 };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { errs, isValid } = validate(formData);
    setErrors(errs);
    if (!isValid) return;

    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrors({ submit: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ submit: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-2 reveal ${isVisible ? "visible" : ""}`}>
          {t.contact.title}<span className="text-neo-pink">.</span>
        </h2>
        <p className={`text-muted-foreground text-lg mb-10 reveal stagger-1 ${isVisible ? "visible" : ""}`}>{t.contact.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className={`neo-card bg-background p-5 space-y-5 reveal stagger-2 ${isVisible ? "visible" : ""}`}>
            <a
              href="mailto:patriciocarena.fin@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-neo-blue" />
              patriciocarena.fin@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/patricio-carena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} className="text-neo-purple" />
              linkedin.com/in/patricio-carena
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={16} className="text-neo-green" />
              +1 (415) 341-3531
            </div>
            <a
              href="https://github.com/patriciocarena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} className="text-neo-orange" />
              github.com/patriciocarena
            </a>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center p-8 neo-card bg-neo-green/10">
              <CheckCircle2 className="text-neo-green mb-3" size={40} />
              <p className="font-bold text-primary">{t.contact.sent}</p>
              <p className="text-sm text-muted-foreground mt-1">{t.contact.sentSub}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  maxLength={100}
                  className="w-full px-4 py-3 neo-input bg-background text-sm text-foreground placeholder:text-muted-foreground"
                />
                {errors.name && <p className="text-xs text-destructive mt-1 font-bold">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  maxLength={255}
                  className="w-full px-4 py-3 neo-input bg-background text-sm text-foreground placeholder:text-muted-foreground"
                />
                {errors.email && <p className="text-xs text-destructive mt-1 font-bold">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  maxLength={1000}
                  className="w-full px-4 py-3 neo-input bg-background text-sm text-foreground placeholder:text-muted-foreground resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1 font-bold">{errors.message}</p>}
              </div>
              {errors.submit && (
                <p className="text-xs text-destructive font-bold">{errors.submit}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="neo-btn inline-flex items-center gap-2 bg-neo-pink text-white px-6 py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                {sending ? "Sending..." : t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
