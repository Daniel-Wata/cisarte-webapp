import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import firstImage from '../assets/images/atelie/first_image.png';
import secondImage from '../assets/images/atelie/second_image.png';
import './Atelie.css';

const Atelie = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      
      <div className="atelie-background">
        <div className="atelie-base">
          <div className="atelie-content">
            <h1 className="atelie-title">O ATELIÊ</h1>
            
            <div className="atelie-text">
              <p>A gente costura com o que tem. Retalho, tempo, conversa, vida.</p>
              <p>O ateliê é um espaço de criação, mas também de reconstrução.</p>
              <p>Aqui, quem já foi descartado pelo sistema encontra abrigo, escuta e ferramenta.</p>
              <p>Costurar é só o começo. O que se faz mesmo é reencontrar sentido.</p>
              <p>Cada peça carrega história.</p>
              <p>Cada ponto é também um recomeço.</p>
              <p>Mais do que ensinar técnicas, o ateliê abre espaço para autonomia.</p>
              <p>A estética vem da verdade do fazer.</p>
              <p>O ateliê nasceu dentro do CISARTE, mas tem vida própria.</p>
              <p>É fruto direto da coletividade.</p>
              <p>E prova viva de que criar com o que sobra pode, sim, gerar o que falta:</p>
              <p>Renda, autoestima, identidade, dignidade e sustentabilidade.</p>
            </div>
            
            <div className="white-separator"></div>
          </div>
        </div>
      </div>
      
      <div className="atelie-images">
        <div className="image-container">
          <img src={firstImage} alt="Ateliê imagem 1" className="atelie-image" />
        </div>
        <div className="image-container">
          <img src={secondImage} alt="Ateliê imagem 2" className="atelie-image" />
        </div>
      </div>
    </div>
  );
};

export default Atelie; 