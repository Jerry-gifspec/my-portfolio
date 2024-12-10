import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => (
  <motion.section
    id="about"
    className="about"
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.8 }}>
    <h2>ABOUT ME</h2>
    <div className="about-content">
      {/* Profile photo */}
      <div className="profile-photo-container">
        <img src="/profile-photo.jpg" alt="Profile" />
      </div>

      {/* About Me text */}
      <div className="about-text">
        <p>
          I am a passionate Software Engineer with a diverse background that
          blends technology with an in-depth understanding of public law,
          economics, and the geopolitics of the Korean Peninsula. My expertise
          in international relations allows me to approach problem-solving from
          a global perspective, while my technical skills drive innovative
          solutions in software development. I thrive at the intersection of
          technology and strategy, delivering impactful results in complex
          environments.
        </p>
      </div>
    </div>
  </motion.section>
);

export default About;
