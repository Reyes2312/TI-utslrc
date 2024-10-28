import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './VidaEstudiantil.css';

const VidaEstudiantil = () => {
  return (
    <div className="vida-container fadeIn">
      <p className="vida-description2">En esta sección podrás encontrar una galería con imágenes de viajes, prácticas y momentos destacados de los estudiantes a lo largo de diferentes cuatrimestres.</p>

      <div className="vida-content fadeIn">
        <div className="vida-gallery">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            <div>
              <img src="./f1.jpg" alt="Estudiantes" className="vida-image" />
              <p className="legend">El año pasado, nuestra universidad UTSLR de la carrera de Tecnologías de la Información vivieron una experiencia única en el evento JATIC 2023 en Ciudad Obregón.</p>
            </div>
            <div>
              <img src="./f2.jpg" alt="Estudiantes" className="vida-image" />
              <p className="legend">Los alumnos de 5to cuatrimestre disfrutando de la vista del Centro de Investigación Científica y Estudios Superiores de Ensenada (#CICESE). 2024🏝️</p>
            </div>
            <div>
              <img src="./f3.jpg" alt="Estudiantes" className="vida-image" />
              <p className="legend">🎄 ¡Nos sumergimos en el espíritu navideño desde temprano! 🌟 La Posada Navideña por los estudiantes de la carrera de Tecnologías de la Información. 💻🎅🏼</p>
            </div>
            <div>
              <img src="./f4.jpg" alt="Estudiantes" className="vida-image" />
              <p className="legend">Visita Guiada a Telvista Mexicali por parte de los estudiantes de Segundo Cuatrimestre del TSU en Tecnologías de la Información, con el objetivo de conocer las instalaciones y las tecnologías que utilizan para su operación como Contact Center 💫</p>
            </div>
            <div>
              <img src="./f5.jpg" alt="Estudiantes" className="vida-image" />
              <p className="legend">Feria del Emprendimiento en nuestra universidad, y la carrera de Tecnologías de la Información estuvo presente con el innovador proyecto Vault Gate”. 💻🔐</p>
            </div>
            <div>
              <img src="./f6.jpg" alt="Estudiantes" className="vida-image" />
              <p className="legend">Alumnos en plena acción durante la clase de IoT, donde combinan conocimientos de electrónica y programación para trabajar con sensores inteligentes. ¡La tecnología del futuro al alcance de sus manos!</p>
            </div>
            <div>
              <img src="./f7.jpg" alt="Estudiantes" className="vida-image" />
              <p className="legend">Alumnos concentrados en el desarrollo de sus habilidades de programación, preparándose para enfrentar los retos del mundo digital. El aprendizaje práctico y el trabajo en equipo son clave en cada sesión de clases.</p>
            </div>
          </Carousel>
        </div>

        <div className="vida-buttons fadeIn">
          <a href="/Justificante.pdf" target="_blank" rel="noopener noreferrer" className="vida-button">
            JUSTIFICANTE
          </a>
          <a href="/Calendario2024-2025.pdf" target="_blank" rel="noopener noreferrer" className="vida-button2">
            CALENDARIO
          </a>
        </div>
      </div>
    </div>
  );
};

export default VidaEstudiantil;
