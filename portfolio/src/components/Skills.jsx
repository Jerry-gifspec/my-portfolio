import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiFlask } from "react-icons/si";
import "./Skills.css";
const Skills = () => (
  <div className="skills">
    <h2>SKILLS</h2>
    <div className="skills-icons">
      <div className="icon">
        <FaReact size={40} />
        <span>React</span>
      </div>
      <div className="icon">
        <FaNodeJs size={40} />
        <span>Node.js</span>
      </div>
      <div className="icon">
        <FaGitAlt size={40} />
        <span>Git</span>
      </div>
      <div className="icon">
        <FaDatabase size={40} />
        <span>Database</span>
      </div>
      <div className="icon">
        <SiHtml5 size={40} />
        <span>HTML5</span>
      </div>
      <div className="icon">
        <SiCss3 size={40} />
        <span>CSS3</span>
      </div>
      <div className="icon">
        <SiJavascript size={40} />
        <span>JavaScript</span>
      </div>
      <div className="icon">
        <SiFlask size={40} />
        <span>Flask</span>
      </div>
    </div>
  </div>
);

export default Skills;
