import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiSpringboot, SiMysql, SiPython, SiTailwindcss, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Home.css';

function Home() {
  const techStack = [
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiSpringboot />, name: 'Spring Boot' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiGit />, name: 'Git' }
  ];

  return (
    <section className="home section">
      <div className="container">
        <div className="home-content">
          <div className="home-info">
            <span className="status-badge">🟢 Open to Work</span>
            <h1 className="home-title">
              Hi, I'm <span className="highlight gradient-text">Malipeddi Sekhar</span>
            </h1>
            <p className="home-subtitle">
              <span className="highlight">Full Stack Developer</span> | MERN Stack | Spring Boot | React.js
            </p>
            <p className="home-description">
              Building scalable web applications with passion for clean code and innovative solutions.
            </p>
            <div className="home-buttons">
              <a href="/resume.pdf" download="Malipeddi_Sekhar_Resume.pdf" className="btn btn-primary btn-resume">
                <FaDownload /> Download Resume
              </a>
              <a href="https://github.com/malipeddisekhar" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub /> GitHub
              </a>
              <a href="mailto:malipeddisekhar63@gmail.com" className="btn btn-outline">
                <FaEnvelope /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/malipeddi-sekhar-08650630b/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper">
              <img src="/profile.jpg" alt="Malipeddi Sekhar" className="profile-img" />
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <h3 className="tech-title">Tech Stack</h3>
          <div className="tech-icons">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item" title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
