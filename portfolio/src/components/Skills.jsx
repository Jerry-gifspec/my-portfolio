"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaSass,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlask,
  SiMysql,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import "./Skills.css";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect values
  const starfieldY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const planetOneY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const planetTwoY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const skillsY = useTransform(scrollYProgress, [0.2, 0.8], [100, 0]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, rotateY: 90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Define skills with their icons and translation keys
  const skillsList = [
    { icon: <FaReact size={40} />, name: "react", color: "#61DAFB" },
    { icon: <FaNodeJs size={40} />, name: "nodejs", color: "#68A063" },
    { icon: <SiJavascript size={40} />, name: "javascript", color: "#F7DF1E" },
    { icon: <SiHtml5 size={40} />, name: "html5", color: "#E34F26" },
    { icon: <SiCss3 size={40} />, name: "css3", color: "#1572B6" },
    { icon: <FaSass size={40} />, name: "sass", color: "#CC6699" },
    { icon: <SiPython size={40} />, name: "python", color: "#3776AB" },
    { icon: <SiFlask size={40} />, name: "flask", color: "#000000" },
    { icon: <FaGitAlt size={40} />, name: "git", color: "#F05032" },
    { icon: <FaDatabase size={40} />, name: "database", color: "#4479A1" },
    { icon: <SiMysql size={40} />, name: "sql", color: "#4479A1" },
    { icon: <SiPostgresql size={40} />, name: "postgresql", color: "#336791" },
  ];

  return (
    <div className="space-skills-section" ref={sectionRef} id="skills">
      {/* Starfield Background */}
      <motion.div className="starfield-container" style={{ y: starfieldY }}>
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </motion.div>

      {/* Floating Planets */}
      <motion.div
        className="planet planet-one"
        style={{
          y: planetOneY,
          x: mousePosition.x * -30,
        }}></motion.div>

      <motion.div
        className="planet planet-two"
        style={{
          y: planetTwoY,
          x: mousePosition.x * 40,
        }}></motion.div>

      <div className="cosmic-dust"></div>

      {/* Content */}
      <div className="space-content">
        <motion.h2
          className="space-skills-title"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <span className="title-glow">{t.title}</span>
        </motion.h2>

        <motion.div
          className="space-skills-container"
          style={{ y: skillsY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}>
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              className="space-skill-item"
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
              style={{
                boxShadow: `0 0 15px ${skill.color}40, 0 0 30px ${skill.color}20`,
              }}>
              <div className="portal-effect">
                <div
                  className="portal-ring"
                  style={{ borderColor: skill.color }}></div>
                <div
                  className="portal-ring"
                  style={{
                    borderColor: skill.color,
                    animationDelay: "0.5s",
                  }}></div>
              </div>
              <div className="space-skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className="space-skill-name">
                {t[skill.name] || skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
