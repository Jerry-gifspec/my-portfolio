"use client";

import { useState } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFilePdf,
  FaTimes,
} from "react-icons/fa";
import { useLanguage } from "../components/LanguageContext.jsx";
import translations from "../components/translations.js";
import Resume from "../components/Resume.jsx";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Map language codes to different resume versions
  const resumeLinks = {};

  const toggleResumeModal = () => {
    setShowResumeModal(!showResumeModal);
    // Prevent scrolling when modal is open
    if (!showResumeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <footer>
      <p>{t.connectWithMe}</p>
      <div className="social-links">
        <a
          href="https://github.com/Jerry-gifspec/Jerry-gifspec.git"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub /> {t.github}
        </a>
        <a
          href="https://twitter.com/@bekombe39268"
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter /> {t.twitter}
        </a>
        <a
          href="https://linkedin.com/in/sakwe-j-bekombe-4b63b9259"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin /> {t.linkedin}
        </a>
        <button onClick={toggleResumeModal} className="view-resume-btn">
          <FaFilePdf /> {t.viewResume || "View Resume"}
        </button>
      </div>
      <p>
        &copy; {new Date().getFullYear()} {t.copyright}
      </p>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="resume-modal-overlay">
          <div className="resume-modal">
            <button className="close-modal-btn" onClick={toggleResumeModal}>
              <FaTimes />
            </button>
            <div className="resume-modal-content">
              <Resume />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
