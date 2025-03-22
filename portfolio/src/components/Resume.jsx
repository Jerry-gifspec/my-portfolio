"use client";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import {
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import "./Resume.css";

const Resume = () => {
  const { language } = useLanguage();
  const t = translations[language].resume;

  return (
    <div className="resume-container">
      {/* Left Column: Profile, Education, Skills, Soft Skills */}
      <div className="left-column">
        <div className="header">
          <div className="profile-photo-container">
            <img
              src="/20240907_174348.jpg"
              alt={t.photoAlt}
              className="profile-photo"
            />
          </div>
          <div className="name">{t.name}</div>
          <div className="title">{t.title}</div>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <a href="mailto:sakwe.bekombe@gmail.com">
                sakwe.bekombe@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+82-10-8097-2355</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>{t.location}</span>
            </div>
            <div className="contact-item">
              <Globe size={16} />
              <span>{t.country}</span>
            </div>
            <div className="contact-item">
              <GitHub size={16} />
              <a
                href="https://github.com/Jerry-gifspec"
                target="_blank"
                rel="noopener noreferrer">
                github.com/Jerry-gifspec
              </a>
            </div>
            <div className="contact-item">
              <Linkedin size={16} />
              <a
                href="https://linkedin.com/in/sakwe-j-bekombe4b63b9259"
                target="_blank"
                rel="noopener noreferrer">
                linkedin.com/in/sakwe-j-bekombe4b63b9259
              </a>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">{t.profileTitle}</div>
          <div className="content">{t.profileContent}</div>
        </div>

        <div className="section">
          <div className="section-title">{t.educationTitle}</div>
          {t.education.map((edu, index) => (
            <div className="item" key={index}>
              <div className="item-title">{edu.title}</div>
              <div className="item-subtitle">{edu.institution}</div>
              <div className="item-date">{edu.date}</div>
              {edu.description && (
                <div className="item-description">{edu.description}</div>
              )}
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-title">{t.skillsTitle}</div>
          <div className="skill-category">{t.skillsConfident}</div>
          <ul className="skills-list">
            {t.confidentSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <div className="skill-category">{t.skillsBasic}</div>
          <div className="content">{t.frameworksTitle}:</div>
          <ul className="skills-list">
            {t.basicSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <div className="skill-category">{t.softSkillsTitle}:</div>
          <ul className="skills-list">
            {t.softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <div className="section-title">{t.referencesTitle}</div>
          <div className="content">
            {t.references.map((ref, index) => (
              <div key={index} className="reference-item">
                <div>{ref.name}</div>
                <a href={`mailto:${ref.email}`}>{ref.email}</a>
                {ref.title && <div>{ref.title}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Projects, Experience, Languages, Interests */}
      <div className="right-column">
        <div className="section">
          <div className="section-title">{t.projectsTitle}</div>
          {t.projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-title">{project.title}</div>
              {project.date && <div className="item-date">{project.date}</div>}
              <div className="item-description">{project.description}</div>
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-title">{t.experienceTitle}</div>
          {t.experience.map((exp, index) => (
            <div className="item" key={index}>
              <div className="item-title">{exp.company}</div>
              {exp.position && (
                <div className="item-subtitle">{exp.position}</div>
              )}
              {exp.date && <div className="item-date">{exp.date}</div>}
              {exp.description && (
                <div className="item-description">{exp.description}</div>
              )}
              {exp.responsibilities && (
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-title">{t.languagesTitle}</div>
          <ul className="skills-list">
            {t.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <div className="section-title">{t.interestsTitle}</div>
          <div className="content">{t.interestsContent}</div>

          {t.interests.map((interest, index) => (
            <div className="item" key={index}>
              <div className="item-title">{interest.title}</div>
              <div className="item-description">{interest.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
