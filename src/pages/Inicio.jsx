import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import PromoVideo from '../components/PromoVideo';
import NewsEvents from '../components/NewsEvents';
import ProyectosDestacados from '../components/ProyectosDestacados';
import FaqSection from '../components/FaqSection';
import EnlacesInteres from '../components/EnlacesInteres';  

const Inicio = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <NewsEvents />
      <PromoVideo />
      <ProyectosDestacados />
      <FaqSection />
      <EnlacesInteres />  
    </div>
  );
};

export default Inicio;
