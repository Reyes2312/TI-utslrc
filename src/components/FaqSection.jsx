import React from 'react';
import './FaqSection.css'; 

const FaqSection = () => {
  return (
    <section className="faq-section">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-item">
        <h3>¿Cuáles son los requisitos de inscripción?</h3>
        <p>Los estudiantes deben contar con el certificado de bachillerato y acta de nacimiento actualizada y cumplir con los trámites de inscripción establecidos por la universidad.</p>
      </div>
      <div className="faq-item">
        <h3>¿Qué modalidades de estudio se ofrecen?</h3>
        <p>Ofrecemos modalidad presencial. En turno matutino con horario de 7:00 am a 3:00 pm de lunes a viernes (Técnico). En turno vespertino de 5:00 pm a 10:00 pm de lunes a viernes (Ingeniería).</p>
      </div>
      <div className="faq-item">
        <h3>¿Cuánto dura la carrera?</h3>
        <p>La carrera tiene una duración de 2 años y 4 meses para obtener el título de Técnico Superior Universitario, y un año y 8 meses para el título de Ingeniería.</p>
      </div>
    </section>
  );
};

export default FaqSection;
