"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Leaf, Workflow } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import "./About.css";

export default function AboutMe() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const [activeTab, setActiveTab] = useState("tech");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="about">
      <div className="about-background">
        <div className="about-blur-circle circle-1"></div>
        <div className="about-blur-circle circle-2"></div>
        <div className="about-blur-circle circle-3"></div>
      </div>

      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        {t.title}
      </motion.h2>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="profile-photo-container neomorphic-photo"
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3 },
          }}>
          <div className="photo-inner-shadow">
            <img src="/profile-photo.jpg" alt="Profile" />
          </div>
        </motion.div>

        <div className="about-tabs-container glass-card">
          {/* Tab Navigation */}
          <div className="tabs-navigation neomorphic-tabs">
            <button
              onClick={() => setActiveTab("tech")}
              className={`tab-button ${activeTab === "tech" ? "active" : ""}`}>
              <div className="tab-icon-container">
                <Code2 className="tab-icon" />
              </div>
              <span>{t.techJourney}</span>
            </button>
            <button
              onClick={() => setActiveTab("agriculture")}
              className={`tab-button ${
                activeTab === "agriculture" ? "active" : ""
              }`}>
              <div className="tab-icon-container">
                <Leaf className="tab-icon" />
              </div>
              <span>{t.agriculturalRoots}</span>
            </button>
            <button
              onClick={() => setActiveTab("crossover")}
              className={`tab-button ${
                activeTab === "crossover" ? "active" : ""
              }`}>
              <div className="tab-icon-container">
                <Workflow className="tab-icon" />
              </div>
              <span>{t.uniquePerspective}</span>
            </button>
          </div>

          {/* Tab Content */}
          <motion.div
            className="tab-content-box glass-content"
            variants={container}
            initial="hidden"
            animate="show"
            layout>
            {activeTab === "tech" && (
              <motion.div
                variants={item}
                className="about-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>
                {t.techContent.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="content-paragraph">
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            )}

            {activeTab === "agriculture" && (
              <motion.div
                variants={item}
                className="about-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>
                {t.agricultureContent.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="content-paragraph">
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            )}

            {activeTab === "crossover" && (
              <motion.div
                variants={item}
                className="about-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>
                {t.crossoverContent.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="content-paragraph">
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
