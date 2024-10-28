import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Programas_estudio.css'; 

const ProgramasEstudio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="programas-container">
      <h1>Programas de Estudio</h1>
      <p>Detalles completos sobre el plan de estudios, requisitos y más.</p>

      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleMenu}>
          Selecciona Nivel de Estudio
        </button>
        {menuOpen && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/nivel-tsu" onClick={() => setMenuOpen(false)}>
                Nivel Técnico Superior Universitario
              </Link>
            </li>
            <li>
              <Link to="/nivel-ingenieria" onClick={() => setMenuOpen(false)}>
                Nivel Ingeniería
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProgramasEstudio;
