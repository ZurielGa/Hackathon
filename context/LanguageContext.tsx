import { createContext, useState, ReactNode, useMemo } from 'react';
import i18n from '../constants/i18n';

type LanguageContextType = {
  lang: string;
  changeLanguage: (l: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: i18n.locale,
  changeLanguage: () => {}
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState(i18n.locale);

  const changeLanguage = (l: string) => {
    // 1. Cambiamos el motor primero
    i18n.locale = l;
    // 2. Cambiamos el estado después para forzar el render
    setLang(l);
  };

  const value = useMemo(() => ({
    lang,
    changeLanguage
  }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};