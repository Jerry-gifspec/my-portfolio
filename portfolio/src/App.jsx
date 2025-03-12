// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { LanguageProvider } from "./components/LanguageContext";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Education from "./components/Education";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import "./App.css";
// // import "./index.css";

// const App = () => (
//   <Router>
//     <LanguageProvider>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Skills />
//             </>
//           }
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/education" element={<Education />} />{" "}
//         {/* Education Route */}
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </LanguageProvider>
//   </Router>
// );

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo"; // You'll need to create this component
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
  </>
);

const App = () => {
  return (
    <Router>
      <LanguageProvider>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;
