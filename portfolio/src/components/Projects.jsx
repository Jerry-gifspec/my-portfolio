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
      
      This project involves developing a comprehensive Student Management System using Python, aimed at streamlining 
      the management of student data and facilitating analysis for academic performance. The application provides an 
      intuitive interface for educators and administrators to input, manage, and analyze student information efficiently. 
      
      This project enhances my programming skills in Python and provides practical experience in data management and analysis. 
      The Student Management and Analysis System serves as a valuable tool for educational institutions, enabling them to 
      track student progress and make data-driven decisions to improve academic outcomes.
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
      This project demonstrates a strong understanding of:
      
      - Frontend Development: Proficiency in HTML, CSS, and JavaScript to create interactive and visually appealing web applications.
      - Game Development: Experience in game engine design, object-oriented programming, and game mechanics.
      - Problem-Solving: Ability to break down complex problems into smaller, manageable tasks and implement effective solutions.
      - Attention to Detail: Meticulous attention to detail in creating a polished and enjoyable gaming experience.
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Mobile Legal E-learning App",
    description: `
      Empowering Access to Justice.
      
      I'm excited to introduce a cutting-edge legal e-learning app designed to bridge the gap between legal knowledge and accessible justice. 
      This innovative platform leverages the power of technology to provide users with a comprehensive and user-friendly learning experience.

      **Technical Skills Demonstrated:**
      - Frontend Development: React, JavaScript, HTML, CSS
      - Backend Development: Flask, Python, MySQL
      - Real-time Communication: Node.js, WebSockets
      - Database Management: MySQL
      - Cloud Infrastructure: AWS, GCP (Optional)
      - Security Best Practices: Encryption, Authentication, Authorization

      **Impact and Benefits:**
      - Empowering Individuals: By providing accessible legal education, we empower individuals to make informed decisions and navigate legal challenges.
      - Promoting Legal Literacy: Our platform fosters a culture of legal awareness and understanding.
      - Facilitating Legal Access: By connecting users with legal experts, we facilitate access to justice for all.
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
    <h2>PROJECTS</h2>
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
