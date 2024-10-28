import React from 'react';
import { Link } from 'react-router-dom';
import './NivelTsu.css';

const NivelTsu = () => {
  return (
    <div className="nivel-tsu-container">
      <div className="nivel-tsu-content">
        <h1 className="nivel-title">Técnico Superior Universitario</h1>
        <div className="descripcion-iconos">
          <div className="text-container">
            <p className="nivel-description">
              Es una opción educativa de nivel superior cuyo antecedente obligatorio es el bachillerato o equivalente,
              con una duración de dos a tres años, con un enfoque práctico y específico a una o varias ocupaciones.
            </p>
            <p className="nivel-description">
              El nivel competitivo de un país está determinado de manera directa por su fuerza de trabajo y el papel clave
              que recae sobre los Técnicos Superiores, que figuran como un eje central de la productividad dentro de las empresas.
            </p>
            <p className="nivel-description">
              Para que nuestro país se convierta en uno altamente competitivo y ocupe un lugar preponderante en la economía mundial,
              deberá contar con un mayor número de Técnicos Superiores.
            </p>
          </div>
          <div className="iconos-container">
            <img src="/implementacion.gif" alt="Implementación animada" className="icono-implementacion" />
          </div>
        </div>

        <div className="oferta-educativa-container">
          <div className="iconos-container">
            <img src="/flecha.gif" alt="Flecha animada" className="icono-flecha" />
          </div>
          <h2 className="oferta-title">Oferta Educativa</h2>
          <ul className="oferta-list">
            <li className="oferta-item">
              <span className="oferta-icon">▶</span>
              <Link to="/tecnologias-informacion">Tecnologías de la Información <span className="oferta-tag">(Carrera normal)</span></Link>
            </li>
            <li className="oferta-item">
              <span className="oferta-icon">▶</span>
              <Link to="/desarrollo-software">Desarrollo de Software Multiplataforma <span className="oferta-tag">(Nuevo modelo educativo)</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NivelTsu;
