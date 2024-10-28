import React from 'react';
import './DesarrolloGestionSoftware.css';
import iconoComputadora from '../../public/IDGS.png';

const IngenieriaDesarrolloGestionSoftware = () => {
  return (
    <>
      <main className="ingenieria-container">
        <div className="ingenieria-header">
          <div className="ingenieria-header__text">
            <h1 className="ingenieria-header__title">
              Ingeniería en <span>Desarrollo y Gestión de Software</span>
            </h1>
            <div className="ingenieria-plan-cuatrimestral">
              <a href="/MapaCuatrimestral%20INGDGS.pdf" target="_blank" rel="noopener noreferrer" className="ingenieria-plan-cuatrimestral__button">
                Conoce el mapa cuatrimestral - Plan Normal ➔
              </a>
            </div>
          </div>
          <img src={iconoComputadora} alt="Icono Computadora" className="ingenieria-header__icon" />
        </div>
        <div className="ingenieria-content">
          <section className="ingenieria-column">
            <h2 className="ingenieria-column__title">Perfil de Ingreso</h2>
            <ul className="ingenieria-column__list">
              <li>Perfil motivado por las innovaciones y las nuevas tecnologías.</li>
              <li>Entusiasta por el trabajo en equipo y/o colaborativo.</li>
              <li>Interesado por la ingeniería relacionada con la Informática.</li>
              <li>Con gran pensamiento analítico, crítico y lógico.</li>
              <li>Con gran capacidad para crear y diseñar sus propias soluciones.</li>
              <li>Personas con una base de matemáticas y física.</li>
            </ul>
          </section>

          <section className="ingenieria-column">
            <h2 className="ingenieria-column__title">Áreas de Aprendizaje y de Aplicación</h2>
            <ul className="ingenieria-column__list">
              <li>Desarrollo de aplicaciones móviles.</li>
              <li>Desarrollo de aplicaciones para la nube o Cloud Computing.</li>
              <li>Desarrollo de aplicaciones para Internet de las Cosas.</li>
              <li>Desarrollo de aplicaciones Web.</li>
              <li>Desarrollo de ambientes virtuales.</li>
              <li>Desarrollo de videojuegos.</li>
              <li>Desarrollo para dispositivos inteligentes.</li>
              <li>Minería de Datos y Extracción de Conocimiento.</li>
              <li>Redes y Telecomunicaciones.</li>
              <li>Seguridad Informática o Cybersecurity.</li>
              <li>Administrador de proyectos de Tecnologías de la Información.</li>
            </ul>
          </section>

          <section className="ingenieria-column">
            <h2 className="ingenieria-column__title">Campo Laboral</h2>
            <ul className="ingenieria-column__list">
              <li>Programador Full Stack.</li>
              <li>Desarrollador de Apps.</li>
              <li>Líder de proyectos de desarrollo de software.</li>
              <li>Arquitecto de software.</li>
              <li>Diseñador de sistemas de información.</li>
              <li>Gestor para el diseño, ejecución y mantenimiento de sistemas de información.</li>
              <li>Ejecutivo integrador de tecnologías de vanguardia para optimizar la operación de industrias y empresas.</li>
              <li>Administrador de proyectos de desarrollo de software.</li>
              <li>Director/Gerente de Tecnologías de Información.</li>
              <li>Director/Gerente de Desarrollo de software</li>
            </ul>
          </section>
        </div>
        <section className="ingenieria-presentation">
          <h2 className="ingenieria-presentation__title">Presentación</h2>
          <p className="ingenieria-presentation__text">
            Técnico Superior Universitario en Tecnologías de la Información, área desarrollo de software multiplataforma, con su 
            continuidad en la Ingeniería en Desarrollo y Gestión del Software. Las tecnologías de la información y las comunicaciones 
            son y seguirán siendo el apoyo tecnológico esencial para el desarrollo de todos los campos de la ciencia y la tecnología, 
            así como de las ciencias sociales, el gobierno, la educación, el entretenimiento entre muchos otros. Debido a los incesantes
            avances en la tecnología, la ingeniería del desarrollo de software se ha transformado en una de las profesiones más demandadas
            y con mayor crecimiento a nivel mundial. ¡Hoy en día el software forma parte de nuestra vida!
          </p>
        </section>
      </main>
    </>
  );
};

export default IngenieriaDesarrolloGestionSoftware;
