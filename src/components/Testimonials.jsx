import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Lo que dicen nuestros estudiantes</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"Gracias a la carrera de TI, he adquirido las habilidades necesarias para enfrentar los desafíos tecnológicos del mundo real"</p>
          <h4>Ricardo Lara</h4>
        </div>
        <div className="testimonial">
          <p>"Los profesores y el ambiente de aprendizaje me motivaron a continuar mi carrera en el desarrollo de software"</p>
          <h4>Jesus Escobedo</h4>
        </div>
        <div className="testimonial">
          <p>"Estudiar esta carrera me ha permitido desarrollar habilidades técnicas y creativas. Gracias a los profesores y las herramientas que ofrece, me siento preparado para enfrentar los retos del mundo laboral en tecnología"</p>
          <h4>Oscar Cortes</h4>
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
