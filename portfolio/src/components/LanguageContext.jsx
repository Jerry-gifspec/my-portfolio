"use client";

import { createContext, useState, useContext, useEffect } from "react";

// Create the language context
const LanguageContext = createContext();

// Available languages
export const languages = {
  ENGLISH: "en",
  FRENCH: "fr",
  KOREAN: "ko",
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || languages.ENGLISH;
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
    // You could also update the html lang attribute here
    document.documentElement.lang = language;
  }, [language]);

  // Function to change the language
  const changeLanguage = (lang) => {
    if (Object.values(languages).includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
