import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarMobile.css';

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSubmenuOpen(false); 
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <nav className="navbar-mobile">
      <div className="logo-mobile">
        <Link to="/">
          <img src="/Logo-Blanco.png" alt="Logo de la carrera" className="logo-image-mobile" />
        </Link>
      </div>
      <div className="menu-icon-mobile" onClick={toggleMenu}>
        <div className={`menu-bar-mobile ${menuOpen ? 'open-mobile' : ''}`}>
          <div className="line-mobile"></div>
          <div className="line-mobile"></div>
          <div className="line-mobile"></div>
        </div>
      </div>
      <ul className={`nav-links-mobile ${menuOpen ? 'open-mobile' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
        <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
        <li
          className="dropdown-mobile"
          onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          <span>Programas de Estudio</span>
          {submenuOpen && (
            <ul className="dropdown-menu-mobile">
              <li><Link to="/nivel-tsu" onClick={closeMenu}>Nivel Técnico Superior Universitario</Link></li>
              <li><Link to="/nivel-ingenieria" onClick={closeMenu}>Nivel Ingeniería</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/vida-estudiantil" onClick={closeMenu}>Vida Estudiantil</Link></li>
        <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        {menuOpen && (
          <div className="logos-container-mobile">
            <img src="/Logo-Blanco.png" alt="Logo 1" className="logo-footer1-mobile" />
            <img src="/logout.png" alt="Logo 2" className="logo-footer2-mobile" />
          </div>
        )}
        {menuOpen && <span className="close-menu-mobile" onClick={closeMenu}>&times;</span>}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
