import React from 'react';
import { FaLinkedin, FaCode, FaGithub, FaEnvelope, FaTrophy } from 'react-icons/fa';
import './About.css';

function About() {
  const skills = {
    'Programming Languages': ['Python', 'Java', 'JavaScript', 'SQL'],
    'Frontend': ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Spring Boot', 'REST APIs'],
    'Databases': ['MySQL', 'MongoDB', 'Database Design'],
    'Developer Tools': ['Git', 'GitHub', 'VS Code', 'Postman'],
    'Core Concepts': ['DSA', 'OOP', 'System Design', 'Machine Learning']
  };

  const education = [
    {
      degree: 'B.Tech in CSE (AI & ML)',
      institution: 'GMR Institute of Technology',
      location: 'Rajam, Andhra Pradesh',
      period: '2024 - 2027 (Expected)',
      grade: 'CGPA: 8.4/10'
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Diviseema Polytechnic College',
      location: 'Andhra Pradesh',
      period: '2021 - 2024',
      grade: 'CGPA: 8.7/10'
    },
    {
      degree: 'SSC',
      institution: 'Z.P. High School, Muddada',
      location: 'Andhra Pradesh',
      period: '2020 - 2021',
      grade: 'Percentage: 98%'
    }
  ];

  const internshipCertifications = [
    { name: 'Java Full Stack Web Developer', issuer: 'ByteXL', year: '2024' },
    { name: 'Artificial Intelligence & Machine Learning', issuer: 'Aenexz', year: '2024' },
    { name: 'Software Engineering Job Simulation', issuer: 'Forage', year: '2024' }
  ];

  const courseCertifications = [
    { name: 'Java Programming', issuer: 'GeeksforGeeks', year: '2024' },
    { name: 'Python Programming', issuer: 'Cisco', year: '2024' },
    { name: 'AI & Machine Learning', issuer: 'Forage & Kaggle', year: '2024' },
    { name: 'Programming in Java', issuer: 'NPTEL', year: 'April 2024' },
    { name: 'Python Programming Fundamentals', issuer: 'Infosys Springboard', year: 'Feb 2025' },
    { name: 'Google Analytics Certification', issuer: 'Google', year: '2025' }
  ];

  const connections = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/malipeddi-sekhar-08650630b/', color: '#0077b5' },
    { icon: <FaCode />, name: 'LeetCode', url: 'https://leetcode.com/u/MALIPEDD_SEKHAR/', color: '#FFA116' },
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/malipeddisekhar', color: '#333' },
    { icon: <FaEnvelope />, name: 'Email', url: 'mailto:malipeddisekhar63@gmail.com', color: '#ea4335' }
  ];

  return (
    <section className="about section">
      <div className="container">
        {/* About Me */}
        <div className="about-intro">
          <h2 className="section-title">About Me</h2>
          <div className="about-spotlight card">
            <div className="about-spotlight-header">
              <div className="about-logo-wrap" aria-hidden="true">
                <FaCode className="about-animated-logo" />
              </div>
              <div>
                <h3 className="about-spotlight-title">Full Stack Developer</h3>
                <p className="about-spotlight-subtitle">CSE (AI & ML) student building clean, scalable, and user-friendly digital products.</p>
              </div>
            </div>

            <p className="about-spotlight-text">
              I am <span className="highlight">Malipeddi Sekhar</span>, a passionate full stack developer who loves building clean, scalable, and user-friendly web applications from scratch.
            </p>
            <p className="about-spotlight-text">
              I work with <span className="highlight">Java</span>, <span className="highlight">Spring Boot</span>, and <span className="highlight">React</span> to create complete end-to-end solutions, from backend logic to modern, interactive UI.
            </p>
            <p className="about-spotlight-text">
              As an <span className="highlight">AI & ML branch</span> student, I also work with machine learning concepts such as data preprocessing, model building, and evaluation to solve practical problems.
            </p>
            <p className="about-spotlight-text">
              I enjoy turning ideas into real-world applications that are both functional and visually engaging. My focus is always on writing clean code, creating smooth user experiences, and building systems that scale.
            </p>
            <p className="about-spotlight-text">
              I have worked on projects like Student Management Systems, Task Managers, and dashboard-based applications, where I handled both frontend and backend development. These experiences helped me understand how real-world applications work end-to-end.
            </p>

            <div className="about-focus-block">
              <h4>What I Focus On</h4>
              <ul className="list-disc about-focus-list">
                <li>Writing clean and efficient code</li>
                <li>Building real-world, practical projects</li>
                <li>Creating smooth and responsive user experiences</li>
                <li>Applying AI/ML techniques to meaningful use cases</li>
              </ul>
            </div>

            <div className="about-approach-block">
              <h4>My Approach</h4>
              <p>
                I do not just learn concepts - I build, experiment, and improve every day.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-card card">
                <h3 className="skill-category">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card card">
                <span className="edu-period">{edu.period}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-location">{edu.location}</p>
                <p className="edu-grade">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="about-achievements-section">
          <h2 className="section-title">Achievements</h2>
          <div className="about-achievements-grid">
            <div className="about-achievement-card card">
              <div className="about-achievement-header">
                <div className="about-achievement-icon">
                  <FaTrophy />
                </div>
                <div>
                  <h3>ByteXL Hackathon Winner</h3>
                  <p>Java Full Stack Development Hackathon</p>
                </div>
                <span className="about-achievement-year">2025</span>
              </div>
              <ul className="list-disc about-achievement-list">
                <li>Secured first place among 100+ participants with a complete full-stack solution.</li>
                <li>Demonstrated strong implementation skills in Spring Boot, React.js, and MySQL.</li>
                <li>Delivered a production-ready project under strict hackathon timelines.</li>
              </ul>
            </div>

            <div className="about-achievement-card card">
              <div className="about-achievement-header">
                <div className="about-achievement-icon">
                  <FaCode />
                </div>
                <div>
                  <h3>Web Development Lead</h3>
                  <p>Google Developer Student Club - GMRIT</p>
                </div>
                <span className="about-achievement-year">2025 - 2026</span>
              </div>
              <ul className="list-disc about-achievement-list">
                <li>Led web development workshops and mentored peers in modern frontend and backend tools.</li>
                <li>Contributed to collaborative projects focused on practical community use-cases.</li>
                <li>Helped foster a high-impact learning culture through team-driven technical sessions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="cert-section">
          <h2 className="section-title">Certifications</h2>
          
          {/* Internship Completion Certificates */}
          <div className="cert-subsection">
            <h3 className="cert-subtitle">Internship Completion Certificates</h3>
            <div className="cert-grid">
              {internshipCertifications.map((cert, index) => (
                <div key={index} className="cert-card card internship-cert">
                  <div className="cert-icon">🎯</div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Certifications */}
          <div className="cert-subsection">
            <h3 className="cert-subtitle">Course Certifications</h3>
            <div className="cert-grid">
              {courseCertifications.map((cert, index) => (
                <div key={index} className="cert-card card course-cert">
                  <div className="cert-icon">📜</div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connect with Me */}
        <div className="connect-section">
          <h2 className="section-title">Connect with Me</h2>
          <p className="connect-text">Feel free to reach out for collaborations, opportunities, or just a friendly chat!</p>
          <div className="connect-grid">
            {connections.map((conn, index) => (
              <a 
                key={index} 
                href={conn.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="connect-card card"
              >
                <div className="connect-icon" style={{ color: conn.color }}>
                  {conn.icon}
                </div>
                <span className="connect-name">{conn.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
