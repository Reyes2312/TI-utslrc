import React from 'react';
import './EnlacesInteres.css'; 

const EnlacesInteres = () => {
  return (
    <section className="enlaces-interes">
      <h2>Enlaces de Interés</h2>
      <div className="enlaces-grid">
        <a href="https://www.utslrc.edu.mx/" target="_blank" rel="noopener noreferrer" className="enlace-item">
          <img src="/utslrc.png" alt="UTSLRC" className="logo" />
        </a>
        <a href="https://informe.becalos.mx/" target="_blank" rel="noopener noreferrer" className="enlace-item">
          <img src="/becalos.png" alt="Bécalos" className="logo" />
        </a>
        <a href="https://universitarias.becasycredito.gob.mx/" target="_blank" rel="noopener noreferrer" className="enlace-item">
          <img src="/becas_universitarias.png" alt="Becas Universitarias" className="logo" />
        </a>
        <a href="https://www.santanderopenacademy.com/es/index.html" target="_blank" rel="noopener noreferrer" className="enlace-item">
          <img src="/santander.png" alt="Santander Open Academy" className="logo" />
        </a>
        <a href="https://subes.becasbenitojuarez.gob.mx/" target="_blank" rel="noopener noreferrer" className="enlace-item">
          <img src="/benito.png" alt="Becas Benito Juárez" className="logo" />
        </a>
        <a href="https://www.sescolar.com/sescolar_utslrc/" target="_blank" rel="noopener noreferrer" className="enlace-item">
          <img src="/sescolar.png" alt="Sistema Escolar UTSLRC" className="logo" />
        </a>
      </div>
    </section>
  );
};

export default EnlacesInteres;
