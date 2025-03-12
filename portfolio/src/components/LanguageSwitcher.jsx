"use client";
import { useLanguage, languages } from "./LanguageContext";
import translations from "./translations";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language].languageSwitcher;

  return (
    <div className="language-switcher">
      <div className="language-switcher-container">
        <button
          className={`language-button ${
            language === languages.ENGLISH ? "active" : ""
          }`}
          onClick={() => changeLanguage(languages.ENGLISH)}>
          <span className="language-icon">🇺🇸</span>
          <span className="language-name">{t.english}</span>
        </button>

        <button
          className={`language-button ${
            language === languages.FRENCH ? "active" : ""
          }`}
          onClick={() => changeLanguage(languages.FRENCH)}>
          <span className="language-icon">🇫🇷</span>
          <span className="language-name">{t.french}</span>
        </button>

        <button
          className={`language-button ${
            language === languages.KOREAN ? "active" : ""
          }`}
          onClick={() => changeLanguage(languages.KOREAN)}>
          <span className="language-icon">🇰🇷</span>
          <span className="language-name">{t.korean}</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
