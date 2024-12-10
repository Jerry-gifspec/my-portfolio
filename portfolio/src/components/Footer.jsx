import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaFilePdf } from "react-icons/fa"; // Import icons
import "./Footer.css"; // Assuming you want a separate CSS file

const Footer = () => (
  <footer>
    <p>CONNECT WITH ME !</p>
    <div className="social-links">
      <a
        href="https://github.com/Jerry-gifspec/Jerry-gifspec.git"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
      <a
        href="https://twitter.com/@bekombe39268"
        target="_blank"
        rel="noopener noreferrer">
        <FaTwitter /> Twitter
      </a>
      <a
        href="https://linkedin.com/in/sakwe-j-bekombe-4b63b9259"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
      <a
        href="https://flowcv.com/resume/0pvv3sphf1"
        target="_blank"
        rel="noopener noreferrer">
        <FaFilePdf /> Resume
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()} @S.J bekombe. All rights reserved.</p>
  </footer>
);

export default Footer;
