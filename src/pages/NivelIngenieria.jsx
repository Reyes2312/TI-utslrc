import React from 'react';
import { Link } from 'react-router-dom';
import './NivelIngenieria.css';

const NivelIngenieria = () => {
  return (
    <div className="nivel-container">
      <div className="nivel-content fade-in-animation"> 
        <h1 className="nivel-title">INGENIERÍAS</h1>
        <p className="nivel-description">
          Es el grado académico en el cual el individuo que la obtiene queda habilitado para ejercer una cierta profesión, 
          certificando sus capacidades e idoneidad para la actividad en la cual se ha formado.
        </p>
        <p className="nivel-description">
          Cabe resaltar que las ingenierías o licenciatura pueden presentarse como unidades académicas independientes o estar 
          incluidas dentro de una carrera segmentada. Tal es el caso de las Universidades Tecnológicas en las cuales se obtienen 
          dos grados: el TSU e Ingeniería o Licenciatura.
        </p>

        <div className="iconos-container">
            <img src="/tecnologia.gif" alt="Implementación animada" className="icono-tecnologia2" />
          </div>
          
          <div className="oferta-educativa-container">
        <div className="iconos-container">
            <img src="/descifrador.gif" alt="Implementación animada" className="icono-descifrador" />
          </div>

        <div className="oferta-educativa-container">
          <h2 className="oferta-title">Ingeniería en</h2>
          <ul className="oferta-list">
            <li className="oferta-item">
              <span className="oferta-icon">▶</span>
              <Link to="/desarrollo-gestion-software">Desarrollo y Gestión de Software <span className="oferta-tag">(Carrera normal)</span></Link>
            </li>
            <li className="oferta-item">
              <span className="oferta-icon">▶</span>
              <Link to="/licenciatura-ingenieria-tecnologias-innovacion">Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital <span className="oferta-tag">(Nuevo modelo educativo)</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default NivelIngenieria;

