import React from 'react';
import './PromoVideo.css';

const PromoVideo = () => {
  return (
    <section className="promo-video">
      <h2>Conoce más sobre nuestra carrera</h2>
      <div className="video-container">
        <video 
          className="promo-video-element"
          src="/videopromocional.mp4" 
          width="800" 
          height="450" 
          controls 
          autoPlay 
          muted 
          loop
        >
          Tu navegador no soporta el video.
        </video>
      </div>
    </section>
  );
};

export default PromoVideo;
