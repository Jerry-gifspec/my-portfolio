"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useLanguage } from "../components/LanguageContext";
import translations from "../components/translations";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  // Default fallback language
  const defaultLanguage = "en";

  // State to hold the language data
  const [languageData, setLanguageData] = useState({
    language: defaultLanguage,
  });
  const languageContext = useLanguage();

  useEffect(() => {
    if (languageContext) {
      setLanguageData(languageContext);
    } else {
      setLanguageData({ language: defaultLanguage });
    }
  }, [languageContext]);

  let t;

  try {
    // Verify the language exists in translations
    if (!translations[languageData.language]) {
      console.warn(
        `Language ${languageData.language} not found in translations, falling back to English`
      );
      languageData.language = defaultLanguage;
    }

    // Verify the contact section exists for this language
    if (!translations[languageData.language].contact) {
      console.warn(
        `Contact translations not found for ${languageData.language}, falling back to English`
      );
      t = translations[defaultLanguage].contact;
    } else {
      t = translations[languageData.language].contact;
    }
  } catch (error) {
    console.error("Error accessing language context or translations:", error);
    // Ultimate fallback - hardcoded English strings
    t = {
      title: "TALK TO ME!",
      nameLabel: "Name:",
      namePlaceholder: "Enter your name",
      emailLabel: "Email:",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message:",
      messagePlaceholder: "Write your message here...",
      submitButton: "Send",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message. Please try again.",
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_om82ysm",
        "template_0jx0kqf",
        formRef.current,
        "20A-fF7SlXcGJN-t3"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert(t.successMessage || "Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert(t.errorMessage || "Failed to send message. Please try again.");
        }
      );
    formRef.current.reset();
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <h2>{t.title || "TALK TO ME!"}</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>{t.nameLabel || "Name:"}</label>
        <input
          type="text"
          name="name"
          required
          placeholder={t.namePlaceholder || "Enter your name"}
        />

        <label>{t.emailLabel || "Email:"}</label>
        <input
          type="email"
          name="email"
          required
          placeholder={t.emailPlaceholder || "Enter your email"}
        />

        <label>{t.messageLabel || "Message:"}</label>
        <textarea
          name="message"
          required
          placeholder={
            t.messagePlaceholder || "Write your message here..."
          }></textarea>

        <button type="submit">{t.submitButton || "Send"}</button>
      </form>
    </motion.section>
  );
};

export default Contact;
