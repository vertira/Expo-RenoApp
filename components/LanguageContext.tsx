import { i18n } from '@/constants/Lang';
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface LanguageContextProps {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(i18n.locale); // Użyj domyślnego języka z i18n

  const changeLanguage = (newLanguage: string) => {
    i18n.locale = newLanguage; // Zaktualizuj i18n.locale
    setLanguage(newLanguage); // Zaktualizuj stan kontekstu
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easier context usage
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;