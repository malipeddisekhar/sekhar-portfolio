import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const BRAND_NAME = 'Malipeddi Sekhar';

function Navbar({ darkMode, toggleTheme }) {
  const safeBrandName = BRAND_NAME || '';
  const [isOpen, setIsOpen] = useState(false);
  const [typedBrand, setTypedBrand] = useState(safeBrandName.slice(0, 1));
  const [isDeletingBrand, setIsDeletingBrand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!safeBrandName) return undefined;

    const timer = window.setTimeout(() => {
      if (!isDeletingBrand && typedBrand === safeBrandName) {
        setIsDeletingBrand(true);
        return;
      }

      if (isDeletingBrand && typedBrand.length === 0) {
        setIsDeletingBrand(false);
        return;
      }

      const nextText = isDeletingBrand
        ? safeBrandName.slice(0, typedBrand.length - 1)
        : safeBrandName.slice(0, typedBrand.length + 1);

      setTypedBrand(nextText);
    }, !isDeletingBrand && typedBrand === safeBrandName ? 1700 : isDeletingBrand ? 55 : 95);

    return () => window.clearTimeout(timer);
  }, [typedBrand, isDeletingBrand, safeBrandName]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-text brand-text-animated" aria-label={safeBrandName}>
            {typedBrand}
            <span className="brand-name-caret" aria-hidden="true">|</span>
          </span>
        </Link>

        <div id="primary-navigation" className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
