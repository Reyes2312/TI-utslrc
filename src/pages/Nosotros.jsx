import React from 'react';
import './Nosotros.css';

const maestros = [
  {
    imagen: "/mtrayohani.jpg",
    nombre: "Materias:",
    estudios: [
      "Fundamento de Redes",
      "Interconexión de Redes",
      "Aplicaciones web",
      "Creación de VideoJuegos"
    ]
  },
  {
    imagen: "/MtroMiguel.jpg",
    nombre: "Materias:",
    estudios: [
      "Programación",
      "Estructura de datos",
      "Base de datos para aplicaciones"
    ]
  },
  {
    imagen: "/MtraSusy.jpg",
    nombre: "Materias:",
    estudios: [
      "Metodología de la programación",
      "Programación Orientada a Objetos",
      "Base de datos para aplicaciones",
      "Integradora I",
      "Integradora II",
      "Estructura de datos aplicadas"
    ]
  },
  {
    imagen: "/MtroRicardo.jpg",
    nombre: "Materias:",
    estudios: [
      "Fundamentos de TI",
      "Metodología de Desarrollo de software",
      "Sistemas Operativos",
      "Estándares y métricas para el desarrollo de software"
    ]
  },
  {
    imagen: "/mtrayajaira.jpg",
    nombre: "Materias:",
    estudios: [
      "Inglés", 
      "Formacion Sociocultural"]
  },
  {
    imagen: "/MtroAurelio.jpg",
    nombre: "Materias:",
    estudios: [
      "Aplicaciones Web para I4.0",
      "Aplicaciones web orientadas a servicios"
    ]
  },
  {
    imagen: "/MtraJulia.jpg",
    nombre: "Materias:",
    estudios: [
      "Base de Datos",
      "Base de Datos para Cómputo en la Nube"
    ]
  },
  {
    imagen: "/MtraMarisol.jpg",
    nombre: "Materias:",
    estudios: [
      "Inglés",
      "Formacion Sociocultural"]
  },
  {
    imagen: "/MtraAndrea.jpg",
    nombre: "Materias:",
    estudios: [
      "Inglés",
      "Formacion Sociocultural"]
  },
  {
    imagen: "/MtraYasohara.jpg",
    nombre: "Materias:",
    estudios: [
      "Introducción al diseño digital",
      "Desarrollo móvil multiplataforma"
    ]
  },
  {
    imagen: "/MtraIrene.jpg",
    nombre: "Materias:",
    estudios: [
      "Probabilidad y estadística",
      "Principios para IoT",
      "Aplicaciones IoT"
    ]
  },
  {
    imagen: "/MtroJavier.jpg",
    nombre: "Materias:",
    estudios: [
      "Desarrollo Web Integral",
      "Aplicaciones Web Progresivas",
      "Experiencia de usuarios"
    ]
  }
];

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <p>Conoce al talentoso equipo académico comprometido con ofrecerte la mejor formación para enfrentar los retos del mañana.</p>
      <div className="maestros-grid">
        {maestros.map((maestro, index) => (
          <div key={index} className="maestro-card fadeIn">
            <img src={maestro.imagen} alt={maestro.nombre} className="maestro-imagen" />
            <div className="maestro-info">
              <h3>{maestro.nombre}</h3>
              <ul>
                {maestro.estudios.map((materia, idx) => (
                  <li key={idx}>{materia}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros;
