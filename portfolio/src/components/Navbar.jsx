"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Layers,
  Code,
  Mail,
  User,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import Logo from "./Logo"; // You'll need to create this component
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [collapsedSections, setCollapsedSections] = useState({
    projects: true,
    skills: true,
    contact: true,
    about: true,
    education: true,
    resume: true,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].navbar;

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Multilingual navigation structure
  const getNavLinks = () => {
    return {
      left: [
        {
          title: t.projects.title,
          path: "/projects",
          icon: <Layers size={18} />,
          section: "projects",
          dropdown: [
            { name: t.projects.web, path: "/projects/web" },
            { name: t.projects.mobile, path: "/projects/mobile" },
            { name: t.projects.design, path: "/projects/design" },
          ],
        },
        {
          title: t.skills.title,
          path: "/skills",
          icon: <Code size={18} />,
          section: "skills",
          dropdown: [
            { name: t.skills.programming, path: "/skills/programming" },
            { name: t.skills.design, path: "/skills/design" },
            { name: t.skills.soft, path: "/skills/soft" },
          ],
        },
        {
          title: t.contact.title,
          path: "/contact",
          icon: <Mail size={18} />,
          section: "contact",
          dropdown: [
            { name: t.contact.email, path: "/contact/email" },
            { name: t.contact.social, path: "/contact/social" },
            { name: t.contact.form, path: "/contact/form" },
          ],
        },
      ],
      right: [
        {
          title: t.home,
          path: "/",
          dropdown: null,
        },
        {
          title: t.about.title,
          path: "/about",
          icon: <User size={18} />,
          section: "about",
          dropdown: [
            { name: t.about.bio, path: "/about/bio" },
            { name: t.about.experience, path: "/about/experience" },
            { name: t.about.values, path: "/about/values" },
          ],
        },
        {
          title: t.education.title,
          path: "/education",
          icon: <GraduationCap size={18} />,
          section: "education",
          dropdown: [
            { name: t.education.degrees, path: "/education/degrees" },
            {
              name: t.education.certifications,
              path: "/education/certifications",
            },
            { name: t.education.courses, path: "/education/courses" },
          ],
        },
        {
          title: t.resume,
          path: "/resume",
          dropdown: null,
        },
      ],
    };
  };

  const navLinks = getNavLinks();

  // Get all sections that have dropdowns
  const allSections = [
    ...navLinks.left
      .filter((item) => item.dropdown)
      .map((item) => item.section),
    ...navLinks.right
      .filter((item) => item.dropdown)
      .map((item) => item.section),
  ];

  // Toggle all sections at once
  const toggleAllSections = () => {
    const areAllCollapsed = allSections.every(
      (section) => collapsedSections[section]
    );

    const newState = {};
    allSections.forEach((section) => {
      newState[section] = !areAllCollapsed;
    });

    setCollapsedSections((prev) => ({
      ...prev,
      ...newState,
    }));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar motion-navbar">
      {/* Mobile menu toggle */}
      <div className="mobile-menu-toggle">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="navbar-logo">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className={`navbar-content ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="navbar-left">
          <ul>
            {navLinks.left.map((item, index) => (
              <li
                key={index}
                className={
                  item.dropdown && !collapsedSections[item.section]
                    ? "expanded"
                    : ""
                }>
                {item.dropdown ? (
                  <>
                    <Link to={item.path} className="nav-link">
                      <span>{item.title}</span>
                    </Link>
                    <AnimatePresence>
                      {!collapsedSections[item.section] && (
                        <motion.ul
                          className="dropdown-menu"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}>
                          {item.dropdown.map((dropItem, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}>
                              <Link to={dropItem.path}>{dropItem.name}</Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={item.path} className="nav-link">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Toggle Buttons */}
        <div className="navbar-center">
          <div className="toggle-buttons-container">
            <button
              className="toggle-all-button"
              onClick={toggleAllSections}
              aria-label="Toggle all sections">
              <ChevronDown
                size={20}
                className={`toggle-icon ${
                  allSections.every((section) => collapsedSections[section])
                    ? ""
                    : "open"
                }`}
              />
            </button>

            <div className="section-toggles">
              {navLinks.left
                .filter((item) => item.dropdown)
                .map((item, index) => (
                  <button
                    key={`left-${index}`}
                    className={`section-toggle-button ${
                      !collapsedSections[item.section] ? "active" : ""
                    }`}
                    onClick={() => toggleSection(item.section)}
                    aria-label={`Toggle ${item.title}`}
                    title={item.title}>
                    {item.icon}
                  </button>
                ))}

              {navLinks.right
                .filter((item) => item.dropdown)
                .map((item, index) => (
                  <button
                    key={`right-${index}`}
                    className={`section-toggle-button ${
                      !collapsedSections[item.section] ? "active" : ""
                    }`}
                    onClick={() => toggleSection(item.section)}
                    aria-label={`Toggle ${item.title}`}
                    title={item.title}>
                    {item.icon}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <ul>
            {navLinks.right.map((item, index) => (
              <li
                key={index}
                className={
                  item.dropdown && !collapsedSections[item.section]
                    ? "expanded"
                    : ""
                }>
                {item.dropdown && item.title !== t.home ? (
                  <>
                    <Link to={item.path} className="nav-link">
                      <span>{item.title}</span>
                    </Link>
                    <AnimatePresence>
                      {!collapsedSections[item.section] && (
                        <motion.ul
                          className="dropdown-menu"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}>
                          {item.dropdown.map((dropItem, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}>
                              <Link to={dropItem.path}>{dropItem.name}</Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={item.path} className="nav-link">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
