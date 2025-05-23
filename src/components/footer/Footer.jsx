import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-about">
          <h3>Sasen Product Solutions</h3>
          <p>Your one-stop shop for all tile and stone fixing requirements.</p>
          <ul>
            <li>Adhesive</li>
            <li>Tile Grout</li>
            <li>Wall Putty</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Map */}
        <div className="footer-contact">
          <h4>Visit Us</h4>
          <p>Plot No B30, SIPCOT Industrial Growth Centre,<br /> Perundurai, Erode</p>
          <iframe
            src="https://www.google.com/maps?q=Plot+No+B30,+SIPCOT+Industrial+Growth+Centre,+Perundurai,+Erode&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sasen Location"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sasen Product Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
