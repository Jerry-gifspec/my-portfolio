"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../components/LanguageContext";
import translations from "../components/translations";
import "./Projects.css";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [selectedId, setSelectedId] = useState(null);
  const [stackedCards, setStackedCards] = useState([]);

  // Initialize stacked cards on component mount
  useEffect(() => {
    // Shuffle the projects slightly for a more random stack appearance
    const shuffled = [...t.items].sort(() => Math.random() - 0.5);
    setStackedCards(shuffled);
  }, [t.items]);

  // Card variants for animations
  const cardVariants = {
    hidden: (index) => ({
      x: -1000,
      y: -100,
      rotate: -90,
      opacity: 0,
      zIndex: 1,
    }),
    visible: (index) => ({
      x: index % 2 === 0 ? -10 : 10, // Alternate slight offset
      y: index * 5, // Stack effect
      rotate: (index % 2 === 0 ? -1 : 1) * Math.min(index * 0.5, 3), // Slight rotation
      opacity: 1,
      zIndex: t.items.length - index,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    }),
    hover: {
      y: -20,
      rotate: 0,
      scale: 1.02,
      zIndex: 100,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    },
    exit: (index) => ({
      x: 1000,
      y: -100,
      rotate: 90,
      opacity: 0,
      zIndex: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: (t.items.length - index) * 0.05,
      },
    }),
    expanded: {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      zIndex: 100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  // Handle card click
  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  // Shuffle cards animation
  const shuffleCards = () => {
    // Animate cards out
    setStackedCards([]);

    // After a short delay, shuffle and animate back in
    setTimeout(() => {
      const shuffled = [...t.items].sort(() => Math.random() - 0.5);
      setStackedCards(shuffled);
    }, 500);
  };

  return (
    <div className="projects-container" id="projects">
      <div className="cosmic-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        {t.title}
      </motion.h2>

      <motion.button
        className="shuffle-button"
        onClick={shuffleCards}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}>
        {t.shuffleButton}
      </motion.button>

      <div className="projects-stack">
        <AnimatePresence mode="wait">
          {stackedCards.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${
                selectedId === project.id ? "expanded" : ""
              }`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={selectedId === project.id ? "expanded" : "visible"}
              exit="exit"
              whileHover={selectedId === null ? "hover" : {}}
              whileTap={selectedId === null ? "tap" : {}}
              onClick={() => handleCardClick(project.id)}
              layoutId={`project-card-${project.id}`}
              style={{
                backgroundColor: `hsl(${(index * 30) % 360}, 70%, 20%)`,
                backgroundImage: `linear-gradient(135deg, 
                  hsl(${(index * 30) % 360}, 70%, 25%) 0%, 
                  hsl(${(index * 30 + 20) % 360}, 70%, 15%) 100%)`,
              }}>
              <motion.div className="card-content">
                <motion.h3 layoutId={`project-title-${project.id}`}>
                  {project.title}
                </motion.h3>

                {selectedId === project.id ? (
                  <motion.div
                    className="project-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}>
                    <motion.p className="project-description">
                      {project.description}
                    </motion.p>

                    <motion.div className="technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="tech-badge"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + techIndex * 0.05 }}>
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(null);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}>
                      {t.closeButton}
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div className="card-preview">
                    <motion.p>{project.shortDescription}</motion.p>
                    <motion.div className="card-indicator">
                      {t.clickToExpand}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
