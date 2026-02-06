import React from 'react';
import { FaLinkedin, FaCode, FaGithub, FaEnvelope, FaGoogle } from 'react-icons/fa';
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
    { icon: <FaCode />, name: 'LeetCode', url: 'https://leetcode.com/u/malipeddisekhar/', color: '#FFA116' },
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/malipeddisekhar', color: '#333' },
    { icon: <FaEnvelope />, name: 'Email', url: 'mailto:malipeddisekhar63@gmail.com', color: '#ea4335' }
  ];

  return (
    <section className="about section">
      <div className="container">
        {/* About Me */}
        <div className="about-intro">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am <span className="highlight">Malipeddi Sekhar</span>, a passionate 
            <span className="highlight"> Full Stack Developer</span> from 
            <span className="highlight"> Andhra Pradesh, India</span>.
          </p>
          
          {/* Current Status */}
          <div className="status-card">
            <h3>Current Status</h3>
            <p>6th Semester B.Tech student in CSE (AI & ML) at GMR Institute of Technology, actively seeking internship opportunities to apply my full-stack development skills.</p>
          </div>

          <div className="about-details">
            <div className="about-card">
              <h3>Career Objective</h3>
              <p>Aspiring Full Stack Developer with hands-on experience in deploying web applications using React and Spring Boot, along with MySQL & MongoDB for database connectivity. Eager to build scalable, user-focused solutions.</p>
            </div>
            <div className="about-card">
              <h3>What I Do</h3>
              <ul className="list-disc">
                <li>Build full-stack web applications with <strong>MERN Stack</strong> & <strong>Spring Boot</strong></li>
                <li>Design and implement <strong>RESTful APIs</strong> with secure authentication</li>
                <li>Create responsive interfaces with <strong>React.js</strong></li>
                <li>Work with databases: <strong>MySQL</strong> & <strong>MongoDB</strong></li>
              </ul>
            </div>
            <div className="about-card">
              <h3>Currently Learning</h3>
              <ul className="list-disc">
                <li>Advanced <strong>Machine Learning</strong> & AI concepts</li>
                <li>Cloud deployment with <strong>AWS</strong> & <strong>Docker</strong></li>
                <li>Advanced <strong>Data Structures & Algorithms</strong></li>
                <li>System Design patterns</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>Strengths</h3>
              <ul className="list-disc">
                <li>Strong analytical and problem-solving abilities</li>
                <li>Quick learner with research-oriented mindset</li>
                <li>Effective communicator and team collaborator</li>
                <li>Passionate about continuous learning</li>
              </ul>
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

        {/* Other Activities */}
        <div className="activities-section">
          <h2 className="section-title">Other Activities</h2>
          <div className="activities-grid">
            {/* GDSC Role */}
            <div className="gdsc-card card">
              <div className="gdsc-header">
                <div className="gdsc-logo">
                  <FaGoogle />
                </div>
                <div>
                  <h3>Web Development Lead</h3>
                  <p className="gdsc-org">Google Developer Student Club - GMRIT</p>
                </div>
              </div>
              <p className="gdsc-description">
                As the <strong>Web Development Lead</strong> at GDSC GMRIT, I lead workshops, mentor students in web technologies, and help build solutions for local businesses and the community. GDSC GMRIT was established in July 2021 and has proudly stood <strong>1st among 275 campuses across India</strong>, featured in the Official Android Developers Blog.
              </p>
              <div className="gdsc-highlights">
                <span className="gdsc-tag">🚀 Leading web dev workshops & sessions</span>
                <span className="gdsc-tag">👥 Peer-to-peer learning environment</span>
                <span className="gdsc-tag">💡 Building community solutions</span>
                <span className="gdsc-tag">🏆 Top 1 GDSC Campus in India</span>
              </div>
              <p className="gdsc-period">2025 - 2026</p>
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
