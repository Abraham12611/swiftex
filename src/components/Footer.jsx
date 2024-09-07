import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-media-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>

        {/* Privacy Policy & Terms of Service */}
        <div className="footer-column">
          <h4>Legal</h4>
          <div className="footer-links">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="/terms-of-service" className="footer-link">Terms of Service</a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@swiftex.com" className="contact-link">support@swiftex.com</a></p>
          <p>Phone: <a href="tel:+18001234567" className="contact-link">+1 (800) 123-4567</a></p>
          <p>Address: 123 SwiftEx Way, San Francisco, CA 94107</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
