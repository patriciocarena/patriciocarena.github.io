import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type DeepWritable<T> = { -readonly [K in keyof T]: DeepWritable<T[K]> };
type TranslationType = DeepWritable<typeof translations.en>;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang] as unknown as TranslationType;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
