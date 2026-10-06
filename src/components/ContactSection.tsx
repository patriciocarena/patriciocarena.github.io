import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Phone, Send, CheckCircle2, Github, Loader2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const WEB3FORMS_KEY = "a7ea29d4-0ecb-4626-9a8b-a9df3d055204"; // patriciocarena.fin@gmail.com

const fieldClass =
  "w-full neo-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70";
const labelClass = "mb-1.5 block text-[0.7rem] font-bold uppercase tracking-wider text-primary";

const ContactSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const shown = isVisible ? "visible" : "";

  const channels = [
    { icon: Mail, tile: "bg-neo-blue", label: "Email", value: "patriciocarena.fin@gmail.com", href: "mailto:patriciocarena.fin@gmail.com" },
    { icon: Linkedin, tile: "bg-neo-purple", label: "LinkedIn", value: "in/patricio-carena", href: "https://www.linkedin.com/in/patricio-carena" },
    { icon: Github, tile: "bg-neo-orange", label: "GitHub", value: "patriciocarena", href: "https://github.com/patriciocarena" },
    { icon: Phone, tile: "bg-neo-green", label: t.contact.phoneLabel, value: "+1 (415) 341-3531", href: "tel:+14153413531" },
  ];

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
      formData.append("access_key", WEB3FORMS_KEY);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrors({ submit: t.contact.errSubmit });
      }
    } catch {
      setErrors({ submit: t.contact.errNetwork });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="section-shell lg:grid lg:grid-cols-12 lg:gap-12">
        <SectionHeading
          index="08"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          accent="pink"
          isVisible={isVisible}
          className="mb-10 lg:col-span-4 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:col-span-8">
          <ul className={`space-y-4 reveal stagger-1 ${shown}`}>
            {channels.map(({ icon: Icon, tile, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group neo-card neo-card-hover flex items-center gap-4 bg-background p-3.5"
                >
                  <span className={`flex size-11 shrink-0 items-center justify-center neo-border ${tile}`}>
                    <Icon className="text-black" size={18} strokeWidth={2.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm font-medium text-primary">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className={`reveal stagger-2 ${shown}`}>
            {submitted ? (
              <div className="neo-card flex h-full flex-col items-center justify-center bg-neo-green/10 p-8 text-center" role="status">
                <CheckCircle2 className="mb-3 text-neo-green" size={40} />
                <p className="font-bold text-primary">{t.contact.sent}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.contact.sentSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-name" className={labelClass}>{t.contact.nameLabel}</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t.contact.namePlaceholder}
                    maxLength={100}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.name && <p id="contact-name-error" className="mt-1.5 text-xs font-bold text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>{t.contact.emailLabel}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t.contact.emailPlaceholder}
                    maxLength={255}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.email && <p id="contact-email-error" className="mt-1.5 text-xs font-bold text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClass}>{t.contact.messageLabel}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder={t.contact.messagePlaceholder}
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`${fieldClass} resize-none`}
                  />
                  {errors.message && <p id="contact-message-error" className="mt-1.5 text-xs font-bold text-destructive">{errors.message}</p>}
                </div>
                {errors.submit && (
                  <p className="text-xs font-bold text-destructive" role="alert">{errors.submit}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="neo-btn flex w-full items-center justify-center gap-2 bg-neo-pink px-6 py-3.5 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} strokeWidth={2.5} />}
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
