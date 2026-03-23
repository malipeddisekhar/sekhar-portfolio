import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CodeCursor from './components/CodeCursor';

const SEO_BY_PATH = {
  '/': {
    title: 'Malipeddi Sekhar | Full Stack Developer Portfolio',
    description: 'Portfolio of Malipeddi Sekhar - Full Stack Developer specializing in MERN Stack, Spring Boot, React.js, and scalable web applications.'
  },
  '/about': {
    title: 'About | Malipeddi Sekhar',
    description: 'Learn about Malipeddi Sekhar, a full stack developer focused on modern web technologies and clean, scalable architecture.'
  },
  '/experience': {
    title: 'Experience | Malipeddi Sekhar',
    description: 'Explore professional experience, technical skills, and development journey of Malipeddi Sekhar.'
  },
  '/projects': {
    title: 'Projects | Malipeddi Sekhar',
    description: 'Browse featured full stack projects by Malipeddi Sekhar, including MERN and Spring Boot applications.'
  },
  '/contact': {
    title: 'Contact | Malipeddi Sekhar',
    description: 'Get in touch with Malipeddi Sekhar for opportunities, collaborations, and freelance work.'
  }
};

function setMetaContent(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('content', value);
  }
}

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[location.pathname] || SEO_BY_PATH['/'];
    const canonicalUrl = `https://malipeddisekhar.me${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = seo.title;
    setMetaContent('meta[name="description"]', seo.description);
    setMetaContent('meta[property="og:title"]', seo.title);
    setMetaContent('meta[property="og:description"]', seo.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', seo.title);
    setMetaContent('meta[name="twitter:description"]', seo.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
}

function UIMotionManager() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add('js-enhanced');

    const targets = Array.from(document.querySelectorAll('.section, .section-title, .card, .journey-node'));

    targets.forEach((element, index) => {
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${(index % 8) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <SeoManager />
      <UIMotionManager />
      <div className={`${darkMode ? 'dark' : 'light'} app-shell`}>
        <CodeCursor />
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
