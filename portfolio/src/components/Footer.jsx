// import React from "react";
// import { FaGithub, FaTwitter, FaLinkedin, FaFilePdf } from "react-icons/fa"; // Import icons
// import "./Footer.css"; // Assuming you want a separate CSS file

// const Footer = () => (
//   <footer>
//     <p>CONNECT WITH ME !</p>
//     <div className="social-links">
//       <a
//         href="https://github.com/Jerry-gifspec/Jerry-gifspec.git"
//         target="_blank"
//         rel="noopener noreferrer">
//         <FaGithub /> GitHub
//       </a>
//       <a
//         href="https://twitter.com/@bekombe39268"
//         target="_blank"
//         rel="noopener noreferrer">
//         <FaTwitter /> Twitter
//       </a>
//       <a
//         href="https://linkedin.com/in/sakwe-j-bekombe-4b63b9259"
//         target="_blank"
//         rel="noopener noreferrer">
//         <FaLinkedin /> LinkedIn
//       </a>
//       <a
//         href="https://flowcv.com/resume/0pvv3sphf1"
//         target="_blank"
//         rel="noopener noreferrer">
//         <FaFilePdf /> Resume
//       </a>
//     </div>
//     <p>&copy; {new Date().getFullYear()} @S.J bekombe. All rights reserved.</p>
//   </footer>
// );

// export default Footer;

// "use client";
// import { FaGithub, FaTwitter, FaLinkedin, FaFilePdf } from "react-icons/fa";
// import { useLanguage } from "./LanguageContext";
// import translations from "./translations";
// import "./Footer.css";

// const Footer = () => {
//   const { language } = useLanguage();
//   const t = translations[language].footer;

//   return (
//     <footer>
//       <p>{t.connectWithMe}</p>
//       <div className="social-links">
//         <a
//           href="https://github.com/Jerry-gifspec/Jerry-gifspec.git"
//           target="_blank"
//           rel="noopener noreferrer">
//           <FaGithub /> {t.github}
//         </a>
//         <a
//           href="https://twitter.com/@bekombe39268"
//           target="_blank"
//           rel="noopener noreferrer">
//           <FaTwitter /> {t.twitter}
//         </a>
//         <a
//           href="https://linkedin.com/in/sakwe-j-bekombe-4b63b9259"
//           target="_blank"
//           rel="noopener noreferrer">
//           <FaLinkedin /> {t.linkedin}
//         </a>
//         <a
//           href="https://flowcv.com/resume/0pvv3sphf1"
//           target="_blank"
//           rel="noopener noreferrer">
//           <FaFilePdf /> {t.resume}
//         </a>
//       </div>
//       <p>
//         &copy; {new Date().getFullYear()} {t.copyright}
//       </p>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import { FaGithub, FaTwitter, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  // Map language codes to different resume versions
  const resumeLinks = {
    en: "https://flowcv.com/resume/0pvv3sphf1",
    fr: "https://flowcv.com/resume/0pvv3sphf1?lang=fr", // Replace with actual French resume URL
    ko: "https://flowcv.com/resume/0pvv3sphf1?lang=ko", // Replace with actual Korean resume URL
  };

  return (
    <footer>
      <p>{t.connectWithMe}</p>
      <div className="social-links">
        <a
          href="https://github.com/Jerry-gifspec/Jerry-gifspec.git"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub /> {t.github}
        </a>
        <a
          href="https://twitter.com/@bekombe39268"
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter /> {t.twitter}
        </a>
        <a
          href="https://linkedin.com/in/sakwe-j-bekombe-4b63b9259"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin /> {t.linkedin}
        </a>
        <a
          href={resumeLinks[language]}
          target="_blank"
          rel="noopener noreferrer">
          <FaFilePdf /> {t.resume}
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} {t.copyright}
      </p>
    </footer>
  );
};

export default Footer;
