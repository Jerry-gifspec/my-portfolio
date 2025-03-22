"use client";

"use client";

import { motion } from "framer-motion";
import Resume from "./Resume.jsx"; // Add the .jsx extension
// Option 1: If Resume.jsx is in a parent directory
// import Resume from "../Resume.jsx";

// Option 2: If Resume.jsx is in a subdirectory
// import Resume from "./components/Resume.jsx";

// Option 3: If using absolute imports
// import Resume from "@/components/Resume.jsx";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import "./ResumePage.css";

const ResumePageComponent = () => {
  const { language } = useLanguage();
  const t = translations[language].resumePage || {
    title: "Resume",
    subtitle: "My Professional Background",
  };

  return (
    <div className="resume-page">
      <div className="cosmic-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <LanguageSwitcher />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <Resume />
      </motion.div>

      <motion.div
        className="download-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        <a
          href="/Sakwe-J.-Bekombe-FlowCV-Resume-20250306.pdf"
          download
          className="download-button">
          {t.downloadButton || "Download PDF Version"}
        </a>
      </motion.div>
    </div>
  );
};

export default ResumePageComponent;
