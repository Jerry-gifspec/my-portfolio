import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css"; // Make sure you have the styles in this file

const Navbar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="navbar">
    <div className="navbar-left">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to About Section */}
        </li>
        <li>
          <Link to="/education">Education</Link> {/* New Link to Education */}
        </li>
      </ul>
    </div>
  </motion.nav>
);

export default Navbar;
