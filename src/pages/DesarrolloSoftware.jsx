import React, { useState, useEffect } from 'react';
import './DesarrolloSoftware.css';

const DesarrolloSoftware = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);


  const handleOverlayClick = (e) => {
    if (!isMobile && e.target.classList.contains('modal-overlay')) {
      setShowModal(false);
    }
  };

  return (
    <div className="dev-software-container fade-in-animation">
      <header className="dev-software-header">
        <h2 className="tech-info-subtitle2">TÉCNICO SUPERIOR UNIVERSITARIO</h2>
        <h1 className="dev-software-title">Desarrollo de Software Multiplataforma</h1>
      </header>

      {/* Sección de Perfil de Ingreso */}
      <section className="profile-grid">
        <div className="profile-card">
          <h3>Perfil de Ingreso del Aspirante</h3>
          <p>El aspirante a la Universidad y al programa educativo en Ingeniería en Tecnologías de la Información e Innovación Digital se caracterizará idealmente por poseer:</p>
          <ul className="skills-list">
            <li>Habilidades de pensamiento crítico.</li>
            <li>Conocimientos básicos en matemáticas y ciencias.</li>
            <li>Competencias tecnológicas.</li>
            <li>Innovación y creatividad.</li>
            <li>Capacidad de gestión de proyectos.</li>
            <li>Interés en el desarrollo tecnológico.</li>
          </ul>
        </div>

        {/* Tarjeta de Presentación */}
        <div className="profile-card">
          <h3>Presentación</h3>
          <p>El egresado de Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital cuenta con las competencias profesionales necesarias para su desempeño en el campo laboral, en el ámbito local, regional y nacional.</p>
          <p>El egresado de Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital se distingue por poseer las competencias profesionales 
esenciales que respaldan su desempeño con éxito en el dinámico entorno laboral, abarcando tanto el ámbito local como el regional y nacional. Este perfil 
integral no solo se ajusta a las demandas actuales del sector, sino que también anticipa y se adapta a las transformaciones y desafíos emergentes de la
Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital. Su capacidad para integrar conocimientos técnicos especializados, habilidades analíticas y una visión innovadora lo posiciona como un profesional altamente cualificado y preparado para contribuir significativamente al avance de la disciplina y a la resolución eficiente de problemáticas complejas en distintos contextos.
</p>
        </div>
      </section>

      {/* Sección de Escenarios y Habilidades */}
      <section className="scenarios-occupations-grid">
        <div className="scenarios-card">
          <h3>Escenarios de Actuación</h3>
          <ul className="scenarios-list">
            <li>Empresas grandes, medianas, pequeñas y microempresas.</li>
            <li>Empresas del sector financiero, de apoyo y fomento a MiPyMES.</li>
            <li>Instituciones gubernamentales de apoyo y fomento al desarrollo.</li>
            <li>Organizaciones No Gubernamentales.</li>
            <li>Empresas de consultoría en materia de formulación y evaluación de proyectos de Tecnologías de la Información.</li>
            <li>Empresas del sector público, privado y social.</li>
            <li>Empresas nacionales y transnacionales.</li>
            <li>Emprendimientos.</li>
          </ul>
        </div>

        <div className="occupations-card">
          <h3>Habilidades y Capacidades Transversales</h3>
          <ul className="occupations-list">
            <li>Habilidad para indagar, analizar y transmitir información procedente de diversas fuentes.</li>
            <li>Habilidad para escuchar, interpretar y expresar mensajes en distintos contextos.</li>
            <li>Capacidad para expresar de forma clara sus ideas tanto oral como escrita.</li>
            <li>Capacidad para resolver problemas a partir de métodos establecidos.</li>
            <li>Capacidad para aprender por iniciativa propia a lo largo de la vida.</li>
            <li>Capacidad de trabajar de manera colaborativa para el cumplimiento de metas.</li>
            <li>Fomentar la inclusión, reconocimiento y respeto por la diversidad cultural, de creencias, valores, ideas, prácticas sociales y de género.</li>
            <li>Interés por participar con una conciencia cívica y ética en la vida de su comunidad, región, entidad, México y el mundo.</li>
          </ul>
        </div>
      </section>

      {/* Sección Promocional */}
      <section className="promo-section">
        <div className="promo-container">
          <div className="promo-image">
            <img src='/fondoIngenieria.jpg' alt="Promoción" />
          </div>
          <div className="promo-text-content">
            <h2>Ocupaciones Profesionales</h2>
            <p>El Ingeniero en Tecnologías de la Información e Innovación Digital podrá desempeñarse atendiendo los siguientes puestos de trabajo:</p>
            <button className="promo-button" onClick={() => setShowModal(true)}>Ver más</button> {/* Botón para mostrar el modal */}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <h2>Ocupaciones Profesionales</h2>
            <ul>
              <li>Desarrollador Front-End, Back-End o Full Stack.</li>
              <li>Desarrollador de aplicaciones móviles.</li>
              <li>Líder de proyectos de Tecnologías de la Información.</li>
              <li>Director de proyectos de innovación digital.</li>
              <li>Desarrollador de videojuegos.</li>
              <li>Creador de contenidos digitales.</li>
              <li>Director de negocios digitales.</li>
              <li>Ingeniero de redes digitales.</li>
              <li>Ingeniero de cómputo en la nube y virtualización.</li>
              <li>Ingeniero DevOps.</li>
              <li>Especialista en ciberseguridad y protección de datos.</li>
              <li>Integrador de soluciones de infraestructura de redes inteligentes.</li>
              <li>Líder de proyectos de infraestructura de redes inteligentes y ciberseguridad.</li>
              <li>Administrador de TI.</li>
              <li>Auditor de TI.</li>
              <li>Administrador de redes.</li>
              <li>Analista de Ciberseguridad.</li>
              <li>Administrador de bases de datos.</li>
              <li>Científico de datos.</li>
              <li>Integrador de proyectos IoT.</li>
              <li>Integrador de proyectos de Inteligencia Artificial y aprendizaje automático.</li>
              <li>Consultor de proyectos de Tecnologías de la Información.</li>
              <li>Educador tecnológico.</li>
              <li>Ingeniero de calidad de software y pruebas.</li>
              <li>Ingeniero de soporte y servicios.</li>
              <li>Director de TI.</li>
              <li>Arquitecto de software.</li>
              <li>Diseñador de experiencia de usuario.</li>
            </ul>
            <button className="modal-close-button" onClick={() => setShowModal(false)}>Cerrar</button> {/* Botón para cerrar el modal */}
          </div>
        </div>
      )}

      {/* Asignaturas TSU */}
      <section className="subjects-section">
        <h3 className="subjects-title">Asignaturas TSU Desarrollo de Software Multiplataforma</h3>
        <div className="subjects-grid">
          <div className="subject-card">
            <h4>1o.</h4>
            <ul>
              <li>Inglés I</li>
              <li>Desarrollo Humano y Valores</li>
              <li>Fundamentos Matemáticos</li>
              <li>Fundamentos de Redes </li>
              <li>Física</li>
              <li>Fundamentos de Programación</li>
              <li>Comunicación y Habilidades Digitales</li>
            </ul>
          </div>
          <div className="subject-card">
            <h4>2o.</h4>
            <ul>
              <li>Inglés II</li>
              <li>Habilidades Socioemocionales y Manejo de Conflictos</li>
              <li>Cálculo Diferencial </li>
              <li>Computación y Enrutamiento de Redes</li>
              <li>Probabilidad y Estadística</li>
              <li>Programación Estructurada</li>
              <li>Sistemas Operativos</li>
            </ul>
          </div>
          <div className="subject-card">
            <h4>3o.</h4>
            <ul>
              <li>Inglés III</li>
              <li>Desarrollo del Pensamiento y Toma de Decisiones</li>
              <li>Cálculo Integral</li>
              <li>Tópicos de Calidad para el Diseño de Software</li>
              <li>Base de Datos</li>
              <li>Programación Orientada a Objetos</li>
              <li>Proyecto Integrador I</li>
            </ul>
          </div>
          <div className="subject-card">
            <h4>4o.</h4>
            <ul>
              <li>Inglés IV </li>
              <li>Ética Profesional</li>
              <li>Cálculo de Varias Variables</li>
              <li>Aplicaciones Web</li>
              <li>Estructura de Datos</li>
              <li>Desarrollo de Aplicaciones Móviles</li> 
              <li>Análisis y Diseño de Software</li>
            </ul>
          </div>
          <div className="subject-card">
            <h4>5o.</h4>
            <ul>
              <li>Inglés V</li>
              <li>Liderazgo de Equipos de Alto Desempeño</li>
              <li>Ecuaciones Diferenciales</li>
              <li>Aplicaciones Web Orientadas a Servicios</li>
              <li>Bases de Datos Avanzadas</li>
              <li>Estándares y Métricas para el Desarollo de Software</li>
              <li>Proyecto Integrador II</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesarrolloSoftware;
