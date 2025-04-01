"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].hero;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Ref for the scroll down button animation
  const scrollButtonRef = useRef(null);

  const navigateTo = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // Reset typing animation when language changes
    setDisplayedText("");
    setCharIndex(0);
    setIndex(0);
  }, [language]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < t.typingPhrases[index].length) {
        setDisplayedText((prev) => prev + t.typingPhrases[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Pause and reset after a phrase completes
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % t.typingPhrases.length); // Cycle through phrases
        }, 1500); // Pause for 1.5 seconds after full text
      }
    }, 100); // Adjust typing speed here

    return () => clearTimeout(timeout);
  }, [charIndex, index, t.typingPhrases]);

  // Handle scroll down button click
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Handle button clicks with section IDs
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section" id="home">
      <LanguageSwitcher />

      <div className="hero-background">
        <div className="hero-shapes">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0.7, 0.4, 0.7],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="typing-container">
            <motion.h1
              className="hero-title typing-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              {displayedText}
              <span className="cursor"></span>
            </motion.h1>
          </div>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            {t.welcome}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            {t.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
            <button
              onClick={() => navigateTo("projects")}
              className="primary-button">
              {t.viewWork}
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="secondary-button">
              {t.getInTouch}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        ref={scrollButtonRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        }}
        onClick={handleScrollDown}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">{t.scrollDown}</div>
      </motion.div>
    </div>
  );
};

export default Hero;
