import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import kitImage from '../assets/images/kit-corporativo/image_kit.png';
import instaLogo from '../assets/images/insta_logo_white.png';
import './KitCorporativo.css';

const KitCorporativo = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      
      <div className="container">
        <div className="kit-content">
          <h1 className="kit-title">KIT<br/>CORPORATIVO</h1>
          
          <p className="kit-description">
            Quando sua empresa escolhe um brinde, ela também escolhe o que deseja comunicar. Aqui, cada 
            peça é feita com propósito, carinho e a força de quem está reconstruindo a própria vida. Criamos 
            ecobags e camisetas personalizados para empresas que querem mais do que presença: querem 
            impacto. Ao encomendar com a gente, você fortalece o ateliê, um coletivo que encontraram na 
            costura um caminho de autonomia, arte e dignidade.
          </p>
          
          
        </div>
        <div className="kit-image-container">
            <img src={kitImage} alt="Kit Corporativo" className="kit-image" />
            <div className="kit-footer">
        <div className="container">
          <div className="kit-footer-content">
            <p className="contact-text">Entre em contato para pedidos:</p>
            <div className="social-link">
              <img src={instaLogo} alt="Instagram" className="insta-logo" />
              <a href="https://instagram.com/cisarte.rua" target="_blank" rel="noopener noreferrer">cisarte.rua</a>
            </div>
          </div>
        </div>
      </div>
          </div>
      </div>
      
      
    </div>
  );
};

export default KitCorporativo; 