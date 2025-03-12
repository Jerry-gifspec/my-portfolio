// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   const navLinks = {
//     left: [
//       {
//         title: "Projects",
//         path: "/projects",
//         dropdown: [
//           { name: "Web Development", path: "/projects/web" },
//           { name: "Mobile Apps", path: "/projects/mobile" },
//           { name: "Design Work", path: "/projects/design" },
//         ],
//       },
//       {
//         title: "Skills",
//         path: "/skills",
//         dropdown: [
//           { name: "Programming", path: "/skills/programming" },
//           { name: "Design", path: "/skills/design" },
//           { name: "Soft Skills", path: "/skills/soft" },
//         ],
//       },
//       {
//         title: "Contact",
//         path: "/contact",
//         dropdown: [
//           { name: "Email", path: "/contact/email" },
//           { name: "Social Media", path: "/contact/social" },
//           { name: "Form", path: "/contact/form" },
//         ],
//       },
//     ],
//     right: [
//       {
//         title: "Home",
//         path: "/",
//         dropdown: null,
//       },
//       {
//         title: "About",
//         path: "/about",
//         dropdown: [
//           { name: "Bio", path: "/about/bio" },
//           { name: "Experience", path: "/about/experience" },
//           { name: "Values", path: "/about/values" },
//         ],
//       },
//       {
//         title: "Education",
//         path: "/education",
//         dropdown: [
//           { name: "Degrees", path: "/education/degrees" },
//           { name: "Certifications", path: "/education/certifications" },
//           { name: "Courses", path: "/education/courses" },
//         ],
//       },
//     ],
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 bg-gray-900 text-white z-50">
//       <div className="navbar-left">
//         <ul className="flex space-x-6">
//           {navLinks.left.map((item, index) => (
//             <li key={index} className="relative">
//               <div className="flex items-center cursor-pointer">
//                 <Link
//                   to={item.path}
//                   className="text-white hover:text-blue-300 transition-colors duration-300">
//                   {item.title}
//                 </Link>
//                 {item.dropdown && (
//                   <ChevronDown
//                     size={16}
//                     className={`ml-1 transition-transform duration-300 ${
//                       activeDropdown === item.title ? "rotate-180" : ""
//                     }`}
//                     onClick={() => toggleDropdown(item.title)}
//                   />
//                 )}
//               </div>

//               {item.dropdown && activeDropdown === item.title && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-8 left-0 bg-gray-800 rounded shadow-lg py-2 min-w-max">
//                   <ul>
//                     {item.dropdown.map((dropItem, idx) => (
//                       <li key={idx}>
//                         <Link
//                           to={dropItem.path}
//                           className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
//                           {dropItem.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="navbar-right">
//         <ul className="flex space-x-6">
//           {navLinks.right.map((item, index) => (
//             <li key={index} className="relative">
//               <div className="flex items-center cursor-pointer">
//                 <Link
//                   to={item.path}
//                   className="text-white hover:text-blue-300 transition-colors duration-300">
//                   {item.title}
//                 </Link>
//                 {item.dropdown && (
//                   <ChevronDown
//                     size={16}
//                     className={`ml-1 transition-transform duration-300 ${
//                       activeDropdown === item.title ? "rotate-180" : ""
//                     }`}
//                     onClick={() => toggleDropdown(item.title)}
//                   />
//                 )}
//               </div>

//               {item.dropdown && activeDropdown === item.title && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-8 right-0 bg-gray-800 rounded shadow-lg py-2 min-w-max">
//                   <ul>
//                     {item.dropdown.map((dropItem, idx) => (
//                       <li key={idx}>
//                         <Link
//                           to={dropItem.path}
//                           className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
//                           {dropItem.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// // Make sure to import the CSS: import "./Navbar.css";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   // Sample dropdown structure - customize as needed
//   const navLinks = {
//     left: [
//       {
//         title: "Projects",
//         path: "/projects",
//         dropdown: [
//           { name: "Web Development", path: "/projects/web" },
//           { name: "Mobile Apps", path: "/projects/mobile" },
//           { name: "Design Work", path: "/projects/design" },
//         ],
//       },
//       {
//         title: "Skills",
//         path: "/skills",
//         dropdown: [
//           { name: "Programming", path: "/skills/programming" },
//           { name: "Design", path: "/skills/design" },
//           { name: "Soft Skills", path: "/skills/soft" },
//         ],
//       },
//       {
//         title: "Contact",
//         path: "/contact",
//         dropdown: [
//           { name: "Email", path: "/contact/email" },
//           { name: "Social Media", path: "/contact/social" },
//           { name: "Form", path: "/contact/form" },
//         ],
//       },
//     ],
//     right: [
//       {
//         title: "Home",
//         path: "/",
//         dropdown: null,
//       },
//       {
//         title: "About",
//         path: "/about",
//         dropdown: [
//           { name: "Bio", path: "/about/bio" },
//           { name: "Experience", path: "/about/experience" },
//           { name: "Values", path: "/about/values" },
//         ],
//       },
//       {
//         title: "Education",
//         path: "/education",
//         dropdown: [
//           { name: "Degrees", path: "/education/degrees" },
//           { name: "Certifications", path: "/education/certifications" },
//           { name: "Courses", path: "/education/courses" },
//         ],
//       },
//     ],
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="navbar motion-navbar">
//       <div className="navbar-left">
//         <ul>
//           {navLinks.left.map((item, index) => (
//             <li key={index}>
//               {item.dropdown ? (
//                 <>
//                   <div
//                     className="dropdown-button"
//                     onClick={() => toggleDropdown(item.title)}>
//                     <Link to={item.path}>{item.title}</Link>
//                     <ChevronDown
//                       size={16}
//                       className={`dropdown-icon ${
//                         activeDropdown === item.title ? "open" : ""
//                       }`}
//                     />
//                   </div>
//                   <ul
//                     className={`dropdown-menu ${
//                       activeDropdown === item.title ? "open" : ""
//                     }`}>
//                     {item.dropdown.map((dropItem, idx) => (
//                       <li key={idx}>
//                         <Link to={dropItem.path}>{dropItem.name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : (
//                 <Link to={item.path}>{item.title}</Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="navbar-right">
//         <ul>
//           {navLinks.right.map((item, index) => (
//             <li key={index}>
//               {item.dropdown ? (
//                 <>
//                   <div
//                     className="dropdown-button"
//                     onClick={() => toggleDropdown(item.title)}>
//                     <Link to={item.path}>{item.title}</Link>
//                     <ChevronDown
//                       size={16}
//                       className={`dropdown-icon ${
//                         activeDropdown === item.title ? "open" : ""
//                       }`}
//                     />
//                   </div>
//                   <ul
//                     className={`dropdown-menu ${
//                       activeDropdown === item.title ? "open" : ""
//                     }`}>
//                     {item.dropdown.map((dropItem, idx) => (
//                       <li key={idx}>
//                         <Link to={dropItem.path}>{dropItem.name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : (
//                 <Link to={item.path}>{item.title}</Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import Logo from "./Logo"; // You'll need to create this component
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { language } = useLanguage();
  const t = translations[language].navbar;

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Multilingual navigation structure
  const getNavLinks = () => {
    return {
      left: [
        {
          title: t.projects.title,
          path: "/projects",
          dropdown: [
            { name: t.projects.web, path: "/projects/web" },
            { name: t.projects.mobile, path: "/projects/mobile" },
            { name: t.projects.design, path: "/projects/design" },
          ],
        },
        {
          title: t.skills.title,
          path: "/skills",
          dropdown: [
            { name: t.skills.programming, path: "/skills/programming" },
            { name: t.skills.design, path: "/skills/design" },
            { name: t.skills.soft, path: "/skills/soft" },
          ],
        },
        {
          title: t.contact.title,
          path: "/contact",
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
          dropdown: [
            { name: t.about.bio, path: "/about/bio" },
            { name: t.about.experience, path: "/about/experience" },
            { name: t.about.values, path: "/about/values" },
          ],
        },
        {
          title: t.education.title,
          path: "/education",
          dropdown: [
            { name: t.education.degrees, path: "/education/degrees" },
            {
              name: t.education.certifications,
              path: "/education/certifications",
            },
            { name: t.education.courses, path: "/education/courses" },
          ],
        },
      ],
    };
  };

  const navLinks = getNavLinks();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar motion-navbar">
      <div className="navbar-logo">
        <Logo />
      </div>

      <div className="navbar-left">
        <ul>
          {navLinks.left.map((item, index) => (
            <li key={index}>
              {item.dropdown ? (
                <>
                  <div
                    className="dropdown-button"
                    onClick={() => toggleDropdown(item.title)}>
                    <span>{item.title}</span>
                    <ChevronDown
                      size={16}
                      className={`dropdown-icon ${
                        activeDropdown === item.title ? "open" : ""
                      }`}
                    />
                  </div>
                  {activeDropdown === item.title && (
                    <ul className="dropdown-menu open">
                      {item.dropdown.map((dropItem, idx) => (
                        <li key={idx}>
                          <Link to={dropItem.path}>{dropItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          {navLinks.right.map((item, index) => (
            <li key={index}>
              {item.dropdown && item.title !== t.home ? (
                <>
                  <div
                    className="dropdown-button"
                    onClick={() => toggleDropdown(item.title)}>
                    <span>{item.title}</span>
                    <ChevronDown
                      size={16}
                      className={`dropdown-icon ${
                        activeDropdown === item.title ? "open" : ""
                      }`}
                    />
                  </div>
                  {activeDropdown === item.title && (
                    <ul className="dropdown-menu open">
                      {item.dropdown.map((dropItem, idx) => (
                        <li key={idx}>
                          <Link to={dropItem.path}>{dropItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
