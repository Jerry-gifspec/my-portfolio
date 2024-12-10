import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();

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
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
    formRef.current.reset();
  };

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <h2>TALK TO ME!</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Message:</label>
        <textarea name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </motion.section>
  );
};

export default Contact;
