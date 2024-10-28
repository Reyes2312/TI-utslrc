import React from 'react';
import './TecnologiasInformacion.css';
import imagenTSU from '../../public/fondo3.png';

const TecnologiasInformacion = () => {
  return (
    <div className="tech-info-container">
      <div className="tech-info-header">
        <div className="tech-info-text">
          <h2 className="tech-info-subtitle">TÉCNICO SUPERIOR UNIVERSITARIO</h2>
          <h1 className="tech-info-title">TECNOLOGÍAS DE LA INFORMACIÓN</h1>
          <h3 className="tech-info-subtitle-secondary">ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA</h3>
          <div className="map-info-container">
            <a href="/MapaCuatrimestral%20TSUMTI%20(1).pdf" target="_blank" rel="noopener noreferrer" className="map-link">
              Conoce el mapa cuatrimestral
            </a>
            <a href="/MapaCuatrimestral%20TSUMTI%20(1).pdf" target="_blank" rel="noopener noreferrer" className="map-button">
              Plan Normal ➔
            </a>
          </div>
        </div>
        <div className="tech-info-image-container">
          <img src={imagenTSU} alt="Imagen TSU" className="tech-info-image-header" />
        </div>
      </div>

      <div className="tech-info-content">
        <div className="tech-info-column">
          <h4>PERFIL DE INGRESO</h4>
          <p>El Alumno que ingrese al TSU en Tecnologías de la Información deberá poseer las siguientes características:</p>
          <ul>
            <li>Interesados en la tecnología y en el mejoramiento de la sociedad a través de la tecnología.</li>
            <li>Estudiantes creativos y emprendedores.</li>
            <li>Con habilidades lógicas y pensamiento estructurado.</li>
          </ul>

          <h4>PRESENTACIÓN</h4>
          <p>
            El Técnico Superior Universitario en Tecnologías de la Información cuenta con las competencias profesionales necesarias para su desempeño en el campo laboral, en el ámbito local, regional y nacional.
          </p>

          <h4>OBJETIVOS ESTRATÉGICOS</h4>
          <ul>
            <li>Desarrollo de los Cuerpos Académicos de la planta académica.</li>
            <li>Incremento de la competitividad académica de los PE.</li>
            <li>Atención a los estudiantes.</li>
          </ul>

          <h4>OBJETIVO GENERAL</h4>
          <p>
            Desarrollar sistemas de información, frameworks, patrones de diseño y arquitecturas de desarrollo para generar soluciones multiplataforma, en la nube y software embebido, así como administrar información mediante gestores de bases de datos.
          </p>
          <div className="iconos-container2">
            <img src="/desarrollador.gif" alt="Desarrollador animado" className="icono-desarrollador" />
          </div>
        </div>

        <div className="tech-info-column">
          <h4>MISIÓN</h4>
          <p>
            Formar TSU en Tecnologías de la Información con las competencias pertinentes y actualizadas al entorno social y productivo, que permitan contribuir al desarrollo sostenible de la comunidad, de manera ética profesional.
          </p>

          <h4>VISIÓN</h4>
          <p>
            Ser la mejor opción para el aspirante a ingresar a una carrera técnica, por su programa de estudio pertinente, sus docentes competentes y los egresados aceptados en el sector industrial.
          </p>

          <h4>ESCENARIOS DE ACTUACIÓN</h4>
          <p>
            Empresas públicas y privadas dedicadas al desarrollo y consultoría de software, empresas cuyo fin no sea el desarrollo de software con funciones de análisis, diseño implementación, evaluación y venta de software.
          </p>

          <h4>OCUPACIONES PROFESIONALES</h4>
          <ul>
            <li>Organizaciones públicas y privadas dedicadas al desarrollo y consultoría de software.</li>
            <li>Organizaciones públicas y privadas cuyo fin no sea el desarrollo de software en funciones de análisis, diseño, implementación, evaluación y venta de software.</li>
            <li>Organizaciones públicas y privadas que cuenten con un área o departamento de TI.</li>
            <li>En su propia empresa de integración de soluciones de software.</li>
            <li>
            En los sectores público y social así como de manera independiente en las diferentes ramas productivas que demanden servicios de tecnologías de la información preferentemente en desarrollo de software multiplataforma.</li>
            <li>En forma independiente mediante consultorías de bienes y servicios.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TecnologiasInformacion;
