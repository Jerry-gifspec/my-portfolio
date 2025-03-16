"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Education.css";

const Education = () => {
  const { language } = useLanguage();
  const t = translations[language].education;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple timeout to simulate entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const educationItems = [
    {
      logo: import.meta.env.VITE_WCODING_LOGO,
      logoAlt: t.wcodingLogoAlt,
      location: t.wcodingLocation,
      degree: t.wcodingDegree,
      year: t.wcodingYear,
    },
    {
      logo: "/HYU_symbol_basic_png.png",
      logoAlt: t.hanyangLogoAlt,
      name: t.hanyangName,
      degree: t.hanyangDegree,
      years: t.hanyangYears,
    },
    {
      logo: "/download.jpeg",
      logoAlt: t.doualaLogoAlt,
      name: t.doualaName,
      degree: t.doualaDegree,
      years: t.doualaYears,
    },
  ];

  return (
    <div id="education" className="education-section">
      <div className="cosmic-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="planets">
          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
          <div className="planet planet-3"></div>
        </div>
      </div>

      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        {t.title}
      </motion.h2>

      <div className="education-content">
        {/* Desktop view - Motion animations */}
        <motion.div
          className="education-desktop"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}>
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                rotate: [0, 1, -1, 1, 0],
              }}
              transition={{ duration: 0.3 }}>
              <div className="education-card-inner">
                <div className="education-logo-container">
                  <img
                    src={item.logo || "/placeholder.svg"}
                    alt={item.logoAlt}
                    className="education-logo"
                  />
                </div>
                <div className="education-details">
                  <h3>{item.name || item.location}</h3>
                  <p className="education-degree">{item.degree}</p>
                  <p className="education-year">{item.years || item.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view - Swiper */}
        <div className="education-mobile">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="education-swiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}>
            {educationItems.map((item, index) => (
              <SwiperSlide key={index} className="education-slide">
                <div className="education-card-inner">
                  <div className="education-logo-container">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={item.logoAlt}
                      className="education-logo"
                    />
                  </div>
                  <div className="education-details">
                    <h3>{item.name || item.location}</h3>
                    <p className="education-degree">{item.degree}</p>
                    <p className="education-year">{item.years || item.year}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Education;
