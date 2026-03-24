import React, { useEffect, useState } from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiSpringboot, SiMysql, SiPython, SiTailwindcss, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Home.css';

const ROTATING_TITLES = [
  'Full Stack Java Developer',
  'Spring Boot Backend Developer',
  'React.js Frontend Developer',
  'MySQL and REST API Developer',
  'AIML and Neural Network Enthusiast',
  'Deep Learning Focused Developer',
  'SDLC and System Design Learner',
  'Research Paper Contributor'
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState(ROTATING_TITLES[0]?.slice(0, 1) || '');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!ROTATING_TITLES.length) return undefined;

    const safeIndex = roleIndex % ROTATING_TITLES.length;
    const currentRole = ROTATING_TITLES[safeIndex] || '';

    if (!currentRole) {
      setTypedRole('');
      return undefined;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedRole === currentRole) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        return;
      }

      const nextText = isDeleting
        ? currentRole.slice(0, typedRole.length - 1)
        : currentRole.slice(0, typedRole.length + 1);

      setTypedRole(nextText);
    }, typedRole === currentRole && !isDeleting ? 1300 : isDeleting ? 40 : 85);

    return () => window.clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

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
            <p className="home-subtitle home-core-stack">
              <span className="core-stack-label">Core Stack:</span>
              <span className="core-stack-value">Java | Spring Boot | React.js | MySQL | REST APIs | AIML</span>
            </p>
            <div className="home-typing-role" aria-live="polite">
              <span className="typing-prefix">I build as a </span>
              <span className="typing-text">{typedRole}</span>
              <span className="typing-caret" aria-hidden="true">|</span>
            </div>
            <blockquote className="home-quote" aria-label="Technical Quote">
              <span className="quote-mark">"</span>
              Great software is built when clean code meets real user needs.
              <footer className="quote-author">- Malipeddi Sekhar<span className="quote-mark">"</span></footer>
              
            </blockquote>
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
