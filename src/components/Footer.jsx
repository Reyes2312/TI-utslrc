import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Universidad Tecnológica de San Luis Río Colorado</p>
      <p>Todos los derechos reservados.</p>
      <div className="footer-social-links">
          <a href="https://www.facebook.com/TI.UTSLRC" aria-label="Facebook">
            <FaFacebookF /> 
          </a>
          <a href="https://www.instagram.com/ti_utslrc/" aria-label="Instagram">
            <FaInstagram /> 
          </a>
        </div>
    </footer>
  );
}

export default Footer;
