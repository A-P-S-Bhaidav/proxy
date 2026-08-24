import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col footer-brand">
          <div className="logo">PROXY</div>
          <p>Driving organic brand growth through consistent, authentic social media presence.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">x</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#process">Our Process</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#testimonials">Testimonials</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><span>Instagram Growth</span></li>
            <li><span>YouTube Shorts</span></li>
            <li><span>X/Twitter Campaigns</span></li>
            <li><span>Multi-Platform Strategy</span></li>
            <li><span>Content Planning</span></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="mailto:hello@proxy.agency">hello@proxy.agency</a></li>
            <li><a href="tel:+919968359499">+91 9968359499</a></li>
            <li><span>New Delhi, India</span></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 PROXY. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
