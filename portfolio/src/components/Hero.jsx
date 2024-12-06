import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const texts = ["I'm S.J Bekombe,", "From Dreams to Cod"];
const theme = {
  primaryColor: "1e90ff", // Blue color
};

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setDisplayedText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Pause and reset after a phrase completes
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length); // Cycle through phrases
        }, 1500); // Pause for 1.5 seconds after full text
      }
    }, 100); // Adjust typing speed here

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <div className="hero-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ color: theme.primaryColor }}
        className="hero-text">
        {displayedText}
      </motion.h1>

      <h3 style={{ color: theme.primaryColor }}>Welcome to my portfolio</h3>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: theme.primaryColor }}
        style={{
          backgroundColor: "#fff",
          color: theme.primaryColor,
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}>
        <a
          href="#contact"
          style={{
            textDecoration: "none",
            color: theme.primaryColor,
            fontWeight: "bold",
          }}>
          Get in Touch
        </a>
      </motion.button>
      {/* Email Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          You can also email me at{" "}
          <a
            href="mailto:youremail@example.com"
            style={{
              color: theme.primaryColor,
              textDecoration: "underline",
              fontWeight: "bold",
            }}>
            Enter Your Email
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
