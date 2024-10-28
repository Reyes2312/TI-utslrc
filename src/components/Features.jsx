import React from 'react';
import { FaLaptopCode, FaBrain, FaUsers, FaGlobe } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <FaLaptopCode className="feature-icon" />
        <h3>Innovación y Tecnología</h3>
        <p>Estarás a la vanguardia con las tecnologías más innovadoras.</p>
      </div>
      <div className="feature">
        <FaBrain className="feature-icon" />
        <h3>Habilidades Críticas</h3>
        <p>Desarrollarás un pensamiento analítico y crítico.</p>
      </div>
      <div className="feature">
        <FaUsers className="feature-icon" />
        <h3>Trabajo en Equipo</h3>
        <p>Aprenderás a colaborar en equipos multidisciplinarios.</p>
      </div>
      <div className="feature">
        <FaGlobe className="feature-icon" />
        <h3>Empleabilidad Global</h3>
        <p>Tendrás oportunidades en un mercado laboral internacional.</p>
      </div>
    </section>
  );
};

export default Features;
