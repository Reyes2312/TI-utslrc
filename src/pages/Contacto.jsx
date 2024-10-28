import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contacto</h2>
        <p><strong>Universidad Tecnológica de San Luis Río Colorado</strong></p>
        <p>Teléfono: (653) 518 5146</p>
        <p>Email: <a href="mailto:info@utslrc.edu.mx">info@utslrc.edu.mx</a></p>
        <p>Ave. Jalisco Y calle 59 s/n</p>
        <p>Col. Progreso C.P. 83458</p>
        <p>San Luis Río Colorado, Sonora, México.</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.3062013951508!2d-114.7193248248431!3d32.43773780124842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d64f618957e379%3A0xdf742bc47f4668d0!2sUniversidad%20Tecnol%C3%B3gica%20de%20San%20Luis%20R%C3%ADo%20Colorado!5e0!3m2!1ses-419!2smx!4v1725905254402!5m2!1ses-419!2smx"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación en Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;


