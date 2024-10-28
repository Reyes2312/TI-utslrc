import React from 'react';
import './ProyectosDestacados.css'; 

const ProyectosDestacados = () => {
  return (
    <section className="proyectos-section">
      <h2 className="proyectos-title">Proyectos Destacados</h2>
      <div className="proyectos-grid">
        <div className="proyecto">
          <video controls playsInline muted className="proyecto-video">
            <source src="/practica3.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <h3>Creación de una Calculadora en Vite+React</h3>
          <p>Un proyecto donde los estudiantes desarrollaron una calculadora funcional utilizando Vite y React.</p>
        </div>

        <div className="proyecto">
          <video controls playsInline muted className="proyecto-video">
            <source src="/practica4.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <h3>Agenda Médica para Veterinaria</h3>
          <p>Una página web de agenda médica desarrollada como proyecto integrador, utilizando PHP y MySQL.</p>
        </div>

        <div className="proyecto">
          <img src="/practica1.jpg" alt="Proyecto 1" className="proyecto-img" />
          <h3>Maqueta (con aplicación móvil y web)</h3>
          <p>Maqueta hecha por estudiantes del 5.º cuatrimestre en su integradora.</p>
        </div>
      </div>
    </section>
  );
};

export default ProyectosDestacados;
