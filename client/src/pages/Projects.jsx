import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaRocket, FaCode } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Real projects from GitHub - https://github.com/malipeddisekhar
  const staticProjects = [
    {
      _id: '1',
      title: 'AI Resume Builder',
      description: 'Intelligent resume builder powered by AI that helps users create professional resumes with smart suggestions and modern templates.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'AI/ML', 'CSS3'],
      category: 'fullstack',
      featured: true,
      highlights: [
        'AI-powered content suggestions for better resumes',
        'Multiple professional templates to choose from',
        'Export to PDF with one click'
      ],
      github: 'https://github.com/malipeddisekhar/AI-Resume-Builder',
      live: ''
    },
    {
      _id: '2',
      title: 'Story Connect',
      description: 'A social storytelling platform where users can share, read, and connect through stories. Features real-time interactions and community engagement.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      featured: true,
      highlights: [
        'Real-time story sharing and reading',
        'User engagement with likes and comments',
        'Community-driven content platform'
      ],
      github: 'https://github.com/malipeddisekhar/Story-Connect',
      live: ''
    },
    {
      _id: '3',
      title: 'Campus Connect',
      description: 'Comprehensive college management system to streamline student, faculty, and administrative workflows with modern UI.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      featured: true,
      highlights: [
        'Role-based access for students, faculty & admin',
        'Attendance, timetable & results management',
        'Real-time notifications and updates'
      ],
      github: 'https://github.com/malipeddisekhar/CampusConnect',
      live: ''
    },
    {
      _id: '4',
      title: 'Performance Checker',
      description: 'A powerful tool to analyze and track performance metrics. Helps users monitor and improve their performance with detailed insights.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Charts.js'],
      category: 'frontend',
      featured: false,
      highlights: [
        'Interactive performance dashboards',
        'Visual analytics with charts',
        'MIT Licensed - Open Source'
      ],
      github: 'https://github.com/malipeddisekhar/Performance_Checker',
      live: ''
    },
    {
      _id: '5',
      title: 'SkillTest Quiz App',
      description: 'Interactive quiz application to test and improve technical skills with various categories and difficulty levels.',
      tech: ['JavaScript', 'React.js', 'CSS3', 'REST API'],
      category: 'frontend',
      featured: false,
      highlights: [
        'Multiple skill categories and topics',
        'Real-time score tracking',
        'Progress analytics and history'
      ],
      github: 'https://github.com/malipeddisekhar/SkillTest-QuizApp',
      live: ''
    },
    {
      _id: '6',
      title: 'Spring Boot CRUD',
      description: 'A robust Java-based web application implementing Create, Read, Update, Delete operations with Spring Framework.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'CSS'],
      category: 'backend',
      featured: false,
      highlights: [
        'Full CRUD operations with Spring Boot',
        'RESTful API architecture',
        'Database connectivity with MySQL'
      ],
      github: 'https://github.com/malipeddisekhar/Spring-CRUD',
      live: ''
    },
    {
      _id: '7',
      title: 'Admin Management System',
      description: 'Complete admin dashboard for managing users, content, and system settings with role-based permissions.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      category: 'backend',
      featured: false,
      highlights: [
        'User management with roles',
        'Dashboard analytics',
        'Secure authentication system'
      ],
      github: 'https://github.com/malipeddisekhar/AdminManagement',
      live: ''
    },
    {
      _id: '8',
      title: 'To-Do App',
      description: 'A clean and intuitive task management application to organize daily tasks with priority levels.',
      tech: ['JavaScript', 'React.js', 'CSS3', 'LocalStorage'],
      category: 'frontend',
      featured: false,
      highlights: [
        'Add, edit, delete tasks easily',
        'Mark tasks as complete',
        'Persistent storage with LocalStorage'
      ],
      github: 'https://github.com/malipeddisekhar/ToDoApp',
      live: ''
    },
    {
      _id: '9',
      title: 'Supermarket Billing System',
      description: 'Python-based billing system to simulate supermarket operations with cart management and bill generation.',
      tech: ['Python', 'Jupyter Notebook', 'Data Structures'],
      category: 'python',
      featured: false,
      highlights: [
        'Product catalog management',
        'Cart operations and billing',
        'Receipt generation system'
      ],
      github: 'https://github.com/malipeddisekhar/SUPER_MARKET_BILLING_SYSTEM',
      live: ''
    },
    {
      _id: '10',
      title: 'Smart Student Hub (SIH)',
      description: 'Smart India Hackathon project - A comprehensive student portal for resources, collaboration, and academic support.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      featured: true,
      highlights: [
        'Collaborative learning platform',
        'Resource sharing and management',
        'Student community features'
      ],
      github: 'https://github.com/malipeddisekhar/sih-smart-student-hub',
      live: ''
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: <FaCode /> },
    { key: 'featured', label: 'Featured', icon: <FaStar /> },
    { key: 'fullstack', label: 'Full Stack', icon: <FaRocket /> },
    { key: 'frontend', label: 'Frontend', icon: <FaCode /> },
    { key: 'backend', label: 'Backend', icon: <FaCode /> },
    { key: 'python', label: 'Python', icon: <FaCode /> }
  ];

  const filteredProjects = filter === 'all' 
    ? staticProjects 
    : filter === 'featured'
    ? staticProjects.filter(p => p.featured)
    : staticProjects.filter(p => p.category === filter);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjects(staticProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="projects section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="loading-spinner">Loading amazing projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="projects-subtitle">
            Passionate about building solutions that make a difference. Here are some of my favorite projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-count">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project._id} 
              className={`project-card card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && <span className="featured-badge"><FaStar /> Featured</span>}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <p>Want to see more? Check out my GitHub for all projects!</p>
          <a href="https://github.com/malipeddisekhar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
