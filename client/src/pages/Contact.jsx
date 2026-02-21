import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaCode, FaPaperPlane } from 'react-icons/fa';
import config from '../config';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`${config.API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Clear status after 4 seconds
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
        // Clear status after 4 seconds
        setTimeout(() => setStatus(''), 4000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      // Clear status after 4 seconds
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'malipeddisekhar63@gmail.com', href: 'mailto:malipeddisekhar63@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 9110573442', href: 'tel:+919110573442' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Andhra Pradesh, India', href: null }
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/malipeddisekhar', color: 'linear-gradient(135deg, #333, #24292e)' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/malipeddi-sekhar-08650630b/', color: 'linear-gradient(135deg, #0077b5, #005582)' },
    { icon: <FaCode />, label: 'LeetCode', href: 'https://leetcode.com/u/MALIPEDD_SEKHAR/', color: 'linear-gradient(135deg, #ffa116, #ff6b00)' }
  ];

  return (
    <section className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm actively looking for new opportunities. Feel free to reach out!
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info card">
            <h3>Contact Information</h3>
            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <span className="info-icon">{info.icon}</span>
                  <div>
                    <p className="info-label">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="info-value">{info.value}</a>
                    ) : (
                      <p className="info-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    style={{ background: link.color }}
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <a href="/resume.pdf" download className="btn btn-primary download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                <FaPaperPlane /> {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="form-status success">Message sent successfully!</p>}
              {status === 'error' && <p className="form-status error">Failed to send. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
