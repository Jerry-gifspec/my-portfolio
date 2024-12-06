// import React from "react";
// import { motion } from "framer-motion";
// import "./Projects.css";

// const projects = [
//   {
//     id: 1,
//     title: "Career-Connect",
//     description: `
//       A platform designed to connect employers with job seekers.
//       My contributions include:
//       - Developed real-time notifications using Socket.IO-client.
//       - Enhanced the Employer's Dashboard by ensuring consistent card sizes.
//       - Improved job seeker skills display with better formatting.
//     `,
//     technologies: [
//       "React",
//       "Socket.IO-client",
//       "Node.js",
//       "Flask",
//       "SQL",
//       "CSS",
//       "HTML",
//     ],
//   },

//   {
//     id: 2,
//     title: "Student Data Management and Analytics",
//     description: `
//       A web-based application designed to streamline student data handling and provide insightful analytics.
//       Key features include:
//       - Interactive dashboards for student performance tracking.
//       - Real-time data updates and visualizations.
//       - Intuitive user interface for data entry and management.
//       - Analytics-driven insights to enhance decision-making.
//     `,
//     technologies: ["HTML", "CSS", "JavaScript"],
//   },

//   {
//     id: 3,
//     title: "Sorting Algorithms Visualizer",
//     description: `
//       An interactive tool that demonstrates sorting algorithms such as Bubble Sort, Quick Sort, and Merge Sort.
//       The project allows users to step through each algorithm visually, providing insights into how each sorting method works.
//     `,
//     technologies: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 4,
//     title: "Catch the Ball Game",
//     description: `
//       A fun and engaging web-based game designed to challenge players' reflexes and logic.
//       The objective is to catch falling balls using a movable paddle while avoiding obstacles.
//       The game increases in difficulty as the player progresses.
//     `,
//     technologies: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 5,
//     title: "Mobile Legal E-learning App",
//     description: `
//       A full-stack mobile application aimed at educating the public about legal principles, rights, and procedures.
//       The app connects users with legal professionals for assistance, enabling swift justice and informed decision-making.
//       It provides comprehensive legal resources and tools to empower users in navigating legal challenges.
//     `,
//     features: [
//       "Legal education modules and resources",
//       "Real-time connection with legal experts",
//       "Case management and progress tracking",
//       "User-friendly interface with intuitive navigation",
//     ],
//     technologies: [
//       "React Native",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Firebase Authentication",
//       "Redux Toolkit",
//       "Socket.IO",
//       "Tailwind CSS",
//     ],
//   },
// ];

// const Projects = () => (
//   <motion.div
//     className="projects"
//     initial={{ scale: 0.8 }}
//     animate={{ scale: 1 }}
//     transition={{ duration: 0.5 }}>
//     <h2>Projects</h2>
//     {projects.map((project) => (
//       <motion.div key={project.id} whileHover={{ scale: 1.05 }}>
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//       </motion.div>
//     ))}
//   </motion.div>
// );

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import "./Projects.css"; // Ensure this is correctly imported

const projects = [
  {
    id: 1,
    title: "Career-Connect",
    description: `
      A platform designed to connect employers with job seekers. 
      My contributions include:
      - Developed real-time notifications using Socket.IO-client.
      - Enhanced the Employer's Dashboard by ensuring consistent card sizes.
      - Improved job seeker skills display with better formatting.
    `,
    technologies: [
      "React",
      "Socket.IO-client",
      "Node.js",
      "Flask",
      "SQL",
      "SaaS",
      "HTML",
    ],
  },
  {
    id: 2,
    title: "Student Data Management and Analytics",
    description: `
      A web-based application designed to streamline student data handling and provide insightful analytics.
      Key features include interactive dashboards and real-time data updates.
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Sorting Algorithms Visualizer",
    description: `
      An interactive tool that demonstrates sorting algorithms such as Bubble Sort, Quick Sort, and Merge Sort.
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Catch the Ball Game",
    description: `
      A fun web-based game designed to challenge players' reflexes. The objective is to catch falling balls.
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Mobile Legal E-learning App",
    description: `
      A full-stack mobile app aimed at educating the public about legal principles and connecting them with legal professionals.
    `,
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Redux Toolkit",
      "Socket.IO",
    ],
  },
];

const Projects = () => (
  <motion.div
    className="projects"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}>
    <h2>Projects</h2>
    {projects.map((project) => (
      <motion.div
        key={project.id}
        className="project-card"
        whileHover={{ scale: 1.02 }}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Make sure technologies are displayed correctly */}
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default Projects;
