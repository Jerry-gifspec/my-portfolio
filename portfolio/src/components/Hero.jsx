import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const texts = ["I'm S.J Bekombe,", "From Dreams to Code"];
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

      {/* Paragraphs for Name and Phrase */}
      <h2
        style={{
          color: "blueviolet",
          fontSize: "24px",
          margin: "10px 0",
        }}>
        I'm Sakwe.J Bekombe,
      </h2>
      <p
        style={{
          color: "orchid",
          fontSize: "24px",
          margin: "10px 0",
        }}>
        From Dreams to Code
      </p>

      <h1 style={{ color: theme.primaryColor }}>Welcome to my portfolio</h1>
    </div>
  );
};

// Button Styles
const buttonStyle = {
  backgroundColor: "#fff",
  color: "1e90ff",
  padding: "10px 20px",
  border: "1px solid #1e90ff",
  borderRadius: "5px",
  margin: "10px",
  cursor: "pointer",
  textTransform: "uppercase",
};

const linkStyle = {
  textDecoration: "none",
  color: "#1e90ff",
  fontWeight: "bold",
};

export default Hero;
