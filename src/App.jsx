import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarDesktop from './components/NavbarDesktop';
import NavbarMobile from './components/NavbarMobile';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import NivelTsu from './pages/NivelTsu';
import NivelIngenieria from './pages/NivelIngenieria';
import ProgramasEstudio from './pages/Programas_estudio';
import VidaEstudiantil from './pages/Vidaestudiantil';
import Contacto from './pages/Contacto';
import TecnologiasInformacion from './pages/TecnologiasInformacion';
import DesarrolloSoftware from './pages/DesarrolloSoftware';
import DesarrolloGestionSoftware from './pages/DesarrolloGestionSoftware';
import IngenieriaTecnologiasInnovacion from './pages/IngenieriaTecnologiasInnovacion';
import './App.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica el tamaño de la pantalla al cargar la página

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="app-container"> {/* Asegura un contenedor principal adecuado */}
        {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
        <div className="page-content"> {/* Contenedor para las páginas */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/nivel-tsu" element={<NivelTsu />} />
            <Route path="/nivel-ingenieria" element={<NivelIngenieria />} />
            <Route path="/programas-estudio" element={<ProgramasEstudio />} />
            <Route path="/vida-estudiantil" element={<VidaEstudiantil />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/tecnologias-informacion" element={<TecnologiasInformacion />} />
            <Route path="/desarrollo-software" element={<DesarrolloSoftware />} />
            <Route path="/desarrollo-gestion-software" element={<DesarrolloGestionSoftware />} />
            <Route path="/licenciatura-ingenieria-tecnologias-innovacion" element={<IngenieriaTecnologiasInnovacion />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
