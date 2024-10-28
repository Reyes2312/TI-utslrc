import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Tecnologías</h1>
        <h1>de la</h1>
        <h1>Información</h1>
        <p>Tu algoritmo hacia el éxito</p>
        <p>Descubre una formación de calidad que te preparará para enfrentar los retos del mañana.</p>
      </div>
      <div className="logos">
        <img src="/logout.png" alt="Logo 1" className="hero-logo" />
        <img src="/logo2.png" alt="Logo 2" className="hero-logo" />
      </div>
    </section>
  );
};

export default Hero;
