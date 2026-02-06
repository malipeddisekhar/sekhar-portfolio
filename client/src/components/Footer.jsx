import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/malipeddisekhar', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/malipeddi-sekhar-08650630b/', label: 'LinkedIn' },
    { icon: <FaCode />, href: 'https://leetcode.com/u/malipeddisekhar/', label: 'LeetCode' },
    { icon: <FaEnvelope />, href: 'mailto:malipeddisekhar63@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="footer-text">
          © {currentYear} Malipeddi Sekhar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
