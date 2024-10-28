import React from 'react';
import './NewsEvents.css';

const isMobile = window.innerWidth <= 768;

const NewsEvents = () => {
  return (
    <section className="news-events">
      <h2>Noticias y Eventos</h2>
      <div className="social-feeds">
        {!isMobile ? (
          <>
            <div className="social-feed">
              <iframe 
                title="Facebook Page Feed 1"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTI.UTSLRC%2F&tabs=timeline&width=700&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="700" 
                height="800" 
                style={{border:'none', overflow:'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            <div className="social-feed">
              <iframe 
                title="Facebook Page Feed 2"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUniversidadTecnologicadeSanLuisRioColorado%2F&tabs=timeline&width=700&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="700" 
                height="800" 
                style={{border:'none', overflow:'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </>
        ) : (
          <>
            <p>Consulta nuestras noticias y eventos en <a href="https://www.facebook.com/TI.UTSLRC" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            <p>Consulta nuestras noticias y eventos en <a href="https://www.facebook.com/UniversidadTecnologicadeSanLuisRioColorado" target="_blank" rel="noopener noreferrer">Facebook Universidad</a></p>
          </>
        )}
      </div>
    </section>
  );
}

export default NewsEvents;
