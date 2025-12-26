import { createContext, FC, ReactNode, useContext, useState } from "react";

type Language = "ja" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({
  children,
  initialLanguage = "ja",
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export { LanguageContext };
