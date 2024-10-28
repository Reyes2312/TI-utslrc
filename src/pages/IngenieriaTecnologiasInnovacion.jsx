import React from 'react';
import { FaBuilding, FaUniversity, FaPiggyBank, FaIndustry, FaGlobe, FaRocket, FaUsers, FaMobileAlt, FaCity, FaCogs, FaDatabase, FaProjectDiagram, FaShieldAlt, FaNetworkWired, FaCloud, FaUserShield, FaClipboardList, FaUserLock, FaCode, FaGamepad, FaGraduationCap, FaLaptopCode, FaServer, FaLock, FaUserTie, FaTasks, FaGlasses, FaBusinessTime, FaEdit, FaChartLine, FaPuzzlePiece, FaRobot, FaTools, FaUserCog, FaFileAlt, FaUserCheck, FaUserCircle, FaObjectGroup } from 'react-icons/fa';

import './IngenieriaTecnologiasInnovacion.css';

const IngenieriaTecnologiasInnovacion = () => {
  return (
    <div className="ingenieria-container fade-in-animation">
      <h1 className="ingenieria-title">
        Licenciatura en Ingeniería en <span> Tecnologías de la Información e Innovación Digital</span> 
      </h1>
      
      {/* Sección Perfil de Ingreso */}
      <div className="ingenieria-card ingenieria-profile-section">
        <h2 className="ingenieria-profile-title">Perfil de Ingreso del Aspirante</h2>
        <p className="ingenieria-profile-description">
          El aspirante a la Universidad y al programa educativo en Ingeniería en Tecnologías de la Información e Innovación Digital se caracterizará idealmente por poseer:
        </p>
        <div className="ingenieria-profile-extra">
          <h3>Habilidades y capacidades transversales:</h3>
          <ul>
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
        <ul className="ingenieria-skills-list">
          <h3>Habilidades y capacidades específicas del perfil de ingreso:</h3>
          <li>Habilidades de pensamiento crítico: La capacidad de analizar, evaluar y resolver problemas de manera lógica y estructurada.</li>
          <li>Conocimientos básicos en matemáticas y ciencias: La comprensión de principios matemáticos y científicos que son fundamentales para la ingeniería.</li>
          <li>Competencias tecnológicas: Familiaridad con herramientas y plataformas digitales, así como una disposición para aprender y adaptarse a nuevas tecnologías.</li>
          <li>Innovación y creatividad: La habilidad para desarrollar ideas originales y aplicarlas en contextos prácticos.</li>
          <li>Capacidad de gestión de proyectos: Habilidad para planificar, organizar y gestionar proyectos, incluyendo la gestión del tiempo y los recursos.</li>
          <li>Interés en el desarrollo tecnológico: Pasión por la tecnología y el deseo de contribuir a su evolución mediante la innovación y la implementación de nuevas soluciones.</li>
        </ul>
      </div>

      {/* Sección Presentación */}
      <div className="ingenieria-card ingenieria-presentation-section">
        <h2 className="ingenieria-presentation-title">Presentación</h2>
        <p className="ingenieria-presentation-description">
        El egresado de Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital cuenta con las competencias profesionales necesarias para 
        su desempeño en el campo laboral, en el ámbito local, regional y nacional. 
        </p>
        <p className="ingenieria-presentation-description2">
        El egresado de Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital se distingue por poseer las competencias profesionales 
esenciales que respaldan su desempeño con éxito en el dinámico entorno laboral, abarcando tanto el ámbito local como el regional y nacional. Este perfil 
integral no solo se ajusta a las demandas actuales del sector, sino que también anticipa y se adapta a las transformaciones y desafíos emergentes de la 
Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital Ingeniero en Tecnologías de la Información e Innovación Digital. Su 
capacidad para integrar conocimientos técnicos especializados, habilidades analíticas y una visión innovadora lo posiciona como un profesional altamente 
cualificado y preparado para contribuir significativamente al avance de la disciplina y a la resolución eficiente de problemáticas complejas en distintos 
contextos.
        </p>
      </div>
{/* Sección Escenarios de Actuación */}
<div className="ingenieria-card ingenieria-scenarios-section">
  <h2 className="ingenieria-scenarios-title">Escenarios de Actuación</h2>
  <p className="ingenieria-scenarios-description">
    El egresado podrá desenvolverse en las siguientes unidades productivas y sociales:
  </p>
  <div className="ingenieria-scenarios-grid">
    <div className="ingenieria-scenario-card">
      <FaBuilding className="scenario-icon" />
      <p>Empresas grandes, medianas, pequeñas y microempresas.</p>
    </div>
    <div className="ingenieria-scenario-card">
      <FaPiggyBank className="scenario-icon" />
      <p>Empresas asociadas al sector financiero de apoyo y fomento a MiPyMES.</p>
    </div>
    <div className="ingenieria-scenario-card">
      <FaUniversity className="scenario-icon" />
      <p>Instituciones gubernamentales de apoyo y fomento al desarrollo.</p>
    </div>
    <div className="ingenieria-scenario-card">
      <FaUsers className="scenario-icon" />
      <p>Organizaciones No Gubernamentales.</p>
    </div>
    <div className="ingenieria-scenario-card">
      <FaIndustry className="scenario-icon" />
      <p>Empresas de consultoría en materia de formulación y evaluación de proyectos de Tecnologías de la Información.</p>
    </div>
    <div className="ingenieria-scenario-card">
      <FaCity className="scenario-icon" />
      <p>Empresas del sector público, privado y social.</p>
    </div>
    <div className="ingenieria-scenario-card">
      <FaGlobe className="scenario-icon" />
      <p>Empresas nacionales y transnacionales.</p>
    </div>
    <div className="ingenieria-scenario-card">
      <FaRocket className="scenario-icon" />
      <p>Emprendimientos propios.</p>
    </div>
  </div>
</div>



      {/* Sección Ocupaciones Profesionales */}
      <div className="ingenieria-card ingenieria-occupations-section">
        <h2 className="ingenieria-occupations-title">Ocupaciones Profesionales</h2>
        <p className="ingenieria-occupations-description">
        El Ingeniero en Tecnologías de la Información e Innovación Digital podrá desempeñarse atendiendo los siguientes puestos de trabajo:
        </p>
        <div className="ingenieria-occupations-grid">
          <div className="ingenieria-occupation-card">
            <FaCode className="occupation-icon" />
            <p>Desarrollador Front-End, Back-End o Full Stack.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaMobileAlt className="occupation-icon" />
            <p>Desarrollador de aplicaciones móviles.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaProjectDiagram className="occupation-icon" />
            <p>Líder de proyectos de Tecnologías de la Información.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaBusinessTime className="occupation-icon" />
            <p>Director de proyectos de innovación digital.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaGamepad className="occupation-icon" />
            <p>Desarrollador de videojuegos.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaEdit className="occupation-icon" />
            <p>Creador de contenidos digitales.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaUserTie className="occupation-icon" />
            <p>Director de negocios digitales.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaNetworkWired className="occupation-icon" />
            <p>Ingeniero de redes digitales.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaCloud className="occupation-icon" />
            <p>Ingeniero de cómputo en la nube y virtualización.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaCogs className="occupation-icon" />
            <p>Ingeniero DevOps.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaShieldAlt className="occupation-icon" />
            <p>Especialista en ciberseguridad y protección de datos.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaObjectGroup className="occupation-icon" />
            <p>Integrador de soluciones de infraestructura de redes inteligentes.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaChartLine className="occupation-icon" />
            <p>Líder de proyectos de infraestructura de redes inteligentes y ciberseguridad.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaServer className="occupation-icon" />
            <p>Administrador de TI.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaLock className="occupation-icon" />
            <p>Auditor de TI.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaUserShield className="occupation-icon" />
            <p>Administrador de redes.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaUserLock className="occupation-icon" />
            <p>Analista de Ciberseguridad.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaDatabase className="occupation-icon" />
            <p>Administrador de bases de datos.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaRobot className="occupation-icon" />
            <p>Integrador de proyectos IoT.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaPuzzlePiece className="occupation-icon" />
            <p>Integrador de proyectos de Inteligencia Artificial y aprendizaje automático.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaClipboardList className="occupation-icon" />
            <p>Consultor de proyectos de TI.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaGraduationCap className="occupation-icon" />
            <p>Educador tecnológico.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaLaptopCode className="occupation-icon" />
            <p>Ingeniero de calidad de software y pruebas.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaTools className="occupation-icon" />
            <p>Ingeniero de soporte y servicios.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaTasks className="occupation-icon" />
            <p>Director de TI.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaFileAlt className="occupation-icon" />
            <p>Arquitecto de software.</p>
          </div>
          <div className="ingenieria-occupation-card">
            <FaUserCheck className="occupation-icon" />
            <p>Diseñador de experiencia de usuario.</p>
          </div>
        </div>
      </div>

      {/* Asignaturas TSU */}
      <div className="ingenieria-card asignaturas-tsu-section">
        <h2 className="asignaturas-title">Asignaturas TSU Desarrollo de Software Multiplataforma</h2>
        <div className="asignaturas-grid">
          <div className="asignaturas-column">
            <h3>7o.</h3>
            <p>Inglés VI</p>
            <p>Habilidades Gerenciales</p>
            <p>Formulación de Proyectos de Tecnología</p>
            <p>Fundamentos de Inteligencia Artificial</p>
            <p>Ética y Legislación en Tecnologías de la Información</p>
            <p>Optativa I</p>
            <p>Seguridad Informática</p>
          </div>
          <div className="asignaturas-column">
            <h3>8o.</h3>
            <p>Inglés VII</p>
            <p>Electrónica Digital</p>
            <p>Gestión de Proyectos de Tecnología</p>
            <p>Programación para Inteligencia Artificial</p>
            <p>Administración de Servidores</p>
            <p>Optativa II</p>
            <p>Informática Forense</p>
          </div>
          <div className="asignaturas-column">
            <h3>9o.</h3>
            <p>Inglés VIII</p>
            <p>Internet de las Cosas</p>
            <p>Evaluación de Proyectos de Tecnología</p>
            <p>Ciencia de Datos</p>
            <p>Tecnologías Disruptivas</p>
            <p>Optativa III</p>
            <p>Proyecto Integrador III</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngenieriaTecnologiasInnovacion;
