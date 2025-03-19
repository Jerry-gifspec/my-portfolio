"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import About from "./page/About";
import Education from "./page/Education";
import Projects from "./page/Projects";
import Skills from "./components/Skills";
import Contact from "./page/Contact";
import Footer from "./page/Footer";
import "./App.css";
import { Download } from "lucide-react";
import translations from "./components/translations";

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
  </>
);

// Resume Download button component
const ResumeDownloadButton = () => {
  const { language } = useLanguage();
  const t = translations[language].common || {};

  const handleDownload = () => {
    // Logic to download your resume file
    const resumeUrl = "/Sakwe-J.-BekomeFlowCV-Resume-20250306.pdf"; // Update with actual path

    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sakwe-J.-BekomeFlowCV-Resume-20250306.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-download-container">
      <button
        onClick={handleDownload}
        className="resume-download-button flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        <Download size={18} />
        {t.downloadResume || "Download Resume"}
      </button>
    </div>
  );
};

// Resume page component
const ResumePage = () => {
  const { language } = useLanguage();
  const t = translations[language].common || {};

  return (
    <div className="resume-page">
      <a
        href="/Sakwe-J.-BekomeFlowCV-Resume-20250306.pdf"
        download
        className="download-button">
        {t.downloadButton || "Download PDF Version"}
      </a>
    </div>
  );
};

// App component with routes
const AppContent = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <ResumeDownloadButton />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
};

export default App;
