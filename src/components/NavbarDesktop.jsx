import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarDesktop.css';

const NavbarDesktop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation(); // Detecta el cambio de ruta

  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setSubmenuOpen(false);
    }
  };

  const handleMouseEnter = () => {
    setSubmenuOpen(true); // Abre el menú al pasar el cursor
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false); // Cierra el menú al quitar el cursor
  };

  return (
    <nav className="navbar-desktop">
      <div className="logo-desktop">
        <Link to="/">
          <img src="/Logo-Blanco.png" alt="Logo de la carrera" className="logo-image-desktop" />
        </Link>
      </div>
      <ul className={`nav-links-desktop ${menuOpen ? 'open-desktop' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
        <li><Link to="/nosotros" onClick={toggleMenu}>Nosotros</Link></li>
        <li
          className="dropdown-desktop"
          onMouseEnter={handleMouseEnter}  // Abre el menú
          onMouseLeave={handleMouseLeave}  // Cierra el menú
        >
          <span>Programas de Estudio</span>
          {submenuOpen && (
            <ul className="dropdown-menu-desktop">
              <li><Link to="/nivel-tsu">Nivel Técnico Superior Universitario</Link></li>
              <li><Link to="/nivel-ingenieria">Nivel Ingeniería</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/vida-estudiantil" onClick={toggleMenu}>Vida Estudiantil</Link></li>
        <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
