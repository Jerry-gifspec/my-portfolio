"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import "./AIChatBox.css";

const AIChatBox = () => {
  const { language } = useLanguage();
  const t = translations[language].chatbot;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: t.greeting, sender: "ai" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Predefined responses based on keywords
  const responses = {
    hello: t.responses.hello,
    hi: t.responses.hello,
    hey: t.responses.hello,
    skills: t.responses.skills,
    experience: t.responses.experience,
    project: t.responses.projects,
    projects: t.responses.projects,
    education: t.responses.education,
    contact: t.responses.contact,
    email: t.responses.contact,
    about: t.responses.about,
    who: t.responses.about,
    help: t.responses.help,
    language: t.responses.language,
    languages: t.responses.language,
    framework: t.responses.framework,
    frameworks: t.responses.framework,
    tool: t.responses.tools,
    tools: t.responses.tools,
    thanks: t.responses.thanks,
    thank: t.responses.thanks,
  };

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI thinking
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = generateResponse(inputValue.toLowerCase());
      const aiMessage = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const generateResponse = (input) => {
    // Check for keyword matches
    for (const [keyword, response] of Object.entries(responses)) {
      if (input.includes(keyword)) {
        return response;
      }
    }

    // Default responses if no keyword matches
    const defaultResponses = [
      t.defaultResponses[0],
      t.defaultResponses[1],
      t.defaultResponses[2],
    ];
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="chat-toggle-btn"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? t.closeChat : t.openChat}>
        <div className="chat-icon">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </div>
        {!isOpen && <span className="chat-label">{t.chatWithMe}</span>}
      </motion.button>

      {/* Chat box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-container"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}>
            <div className="chat-header">
              <div className="chat-title">
                <div className="ai-avatar">
                  <div className="ai-avatar-inner"></div>
                </div>
                <div>
                  <h3>{t.aiAssistant}</h3>
                  <span className="status-indicator">{t.online}</span>
                </div>
              </div>
            </div>

            <div className="messages-container">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`message ${message.sender}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    {message.sender === "ai" && (
                      <div className="ai-avatar-small">
                        <div className="ai-avatar-inner-small"></div>
                      </div>
                    )}
                    <div className="message-bubble">
                      <p>{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    className="message ai typing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    <div className="ai-avatar-small">
                      <div className="ai-avatar-inner-small"></div>
                    </div>
                    <div className="message-bubble">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-container" onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={t.typeSomething}
                ref={inputRef}
                aria-label={t.messageInput}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={inputValue.trim() === ""}
                aria-label={t.sendMessage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </motion.button>
            </form>

            <div className="chat-footer">
              <p>{t.poweredBy}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBox;
