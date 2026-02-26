import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { errs, isValid } = validate(formData);
    setErrors(errs);
    if (isValid) setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
          {t.contact.title}<span className="text-gold">.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">{t.contact.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <a
              href="mailto:patriciocarena.fin@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-gold" />
              patriciocarena.fin@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/patricio-carena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} className="text-gold" />
              linkedin.com/in/patricio-carena
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={16} className="text-gold" />
              +1 (415) 341-3531
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-muted">
              <CheckCircle2 className="text-gold mb-3" size={40} />
              <p className="font-semibold text-primary">{t.contact.sent}</p>
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Send size={14} />
                {t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
