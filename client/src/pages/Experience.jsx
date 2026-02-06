import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'React JS Developer Intern',
      company: 'UpToSkills',
      period: 'Jan 2026 - July 2026',
      current: true,
      description: [
        'Gained hands-on experience in developing modern web applications using React.js with industry best practices',
        'Built and deployed the UpToSkills platform application with responsive UI and seamless user experience',
        'Developed AI Resume Builder application using React.js, integrating AI-powered features for smart resume generation',
        'Collaborated with cross-functional teams in agile sprints, participating in code reviews and daily standups',
        'Implemented state management using Redux/Context API and optimized application performance'
      ],
      projects: [
        {
          name: 'AI Resume Builder',
          github: 'https://github.com/malipeddisekhar/AI-Resume-Builder'
        }
      ]
    },
    {
      role: 'Java Full Stack Developer Intern',
      company: 'Bytexl',
      period: '2024 - 2025',
      current: false,
      description: [
        'Developed and deployed scalable full-stack web applications using Spring Boot backend and React.js frontend with MySQL database integration',
        'Built Campus Connect - a comprehensive college management platform serving students and faculty with role-based access control',
        'Designed and implemented RESTful APIs following industry best practices, focusing on performance optimization and secure authentication',
        'Collaborated in agile development environment using Git/GitHub for version control and code reviews',
        'Applied software engineering principles including clean code practices, debugging, testing, and comprehensive documentation'
      ],
      projects: [
        {
          name: 'Campus Connect',
          github: 'https://github.com/malipeddisekhar/CampusConnect'
        }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Bytexl Hackathon Winner',
      event: 'Java Full Stack Development Hackathon',
      description: [
        'Won first place in the Bytexl Hackathon competition among 100+ participants',
        'Demonstrated expertise in Java Full Stack Web Development including Spring Boot, React.js, and MySQL',
        'Built a complete web application within the hackathon timeline showcasing end-to-end development skills',
        'Gained hands-on experience in rapid prototyping, problem-solving, and delivering production-ready code under pressure'
      ],
      year: '2025'
    }
  ];

  const projects = [
    {
      name: 'Campus Connect – College Management System',
      tech: 'Spring Boot | React.js | MySQL',
      highlights: [
        'Built comprehensive academic management platform serving 1000+ students and faculty with role-based access control',
        'Architected backend with Spring Boot implementing 15+ REST API endpoints with JWT authentication',
        'Designed normalized MySQL database schema ensuring data integrity and ACID compliance',
        'Developed features: student registration, automated attendance tracking, dynamic timetable management, result publishing',
        'Created responsive React frontend with modular component architecture and Redux state management'
      ]
    },
    {
      name: 'Student Performance Prediction System',
      tech: 'Python | Scikit-learn | Pandas | Matplotlib',
      highlights: [
        'Developed ML solution achieving 85% accuracy in predicting student academic performance',
        'Implemented data preprocessing pipeline handling 500+ student records with feature engineering',
        'Trained and evaluated multiple regression models (Linear Regression, Random Forest, Gradient Boosting)',
        'Built interactive visualization dashboard using Matplotlib and Seaborn for academic analytics'
      ]
    }
  ];

  return (
    <section className="experience section">
      <div className="container">
        {/* Professional Experience */}
        <h2 className="section-title">Professional Experience</h2>
        <div className="exp-cards">
          {experiences.map((exp, index) => (
            <div key={index} className={`exp-card card ${exp.current ? 'current-exp' : ''}`}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-period-wrapper">
                  {exp.current && <span className="current-badge">Current</span>}
                  <span className="exp-period">{exp.period}</span>
                </div>
              </div>
              <ul className="exp-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {exp.projects && exp.projects.length > 0 && (
                <div className="exp-projects">
                  <h4>Key Projects:</h4>
                  <div className="exp-project-links">
                    {exp.projects.map((proj, i) => (
                      <a 
                        key={i} 
                        href={proj.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="exp-project-link"
                      >
                        <FaGithub /> {proj.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card card">
                <div className="achievement-header">
                  <div className="achievement-icon">
                    <FaTrophy />
                  </div>
                  <div>
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-event">{achievement.event}</p>
                  </div>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <ul className="achievement-list">
                  {achievement.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card card">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-tech">{project.tech}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
