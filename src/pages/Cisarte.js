import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import cisarteFooterImg from '../assets/images/cisarte/footer_image.png';
import './Cisarte.css';

const Cisarte = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      
      <div className="container">
        <div className="cisarte-content">
          <section className="cisarte-title-section">
            <h1 className="cisarte-title">CISARTE</h1>
            <h2 className="cisarte-subtitle">Centro de Integração Social pela Arte, Trabalho e Educação</h2>
          </section>
          
          <section className="cisarte-intro-section">
            <p>
              O CISARTE é uma associação comunitária sem fins lucrativos fundada em 2016, no 
              Viaduto Pedroso, no centro de São Paulo. Surgiu como resposta direta às realidades 
              vividas por pessoas em situação de rua, oferecendo <strong>acolhimento, formação 
              e oportunidades</strong> reais de reinserção social.
            </p>
          </section>
          
          <section className="cisarte-approach-section">
            <p>
              Por meio da <strong>arte</strong>, do <strong>trabalho coletivo</strong> e da <strong>educação</strong>, 
              o centro promove <strong>autonomia, escuta e dignidade</strong>. Já realizou mais de 29 mil 
              atendimentos, com oficinas, vivências e capacitações que fortalecem trajetórias 
              individuais e coletivas.
            </p>
          </section>
          
          <section className="cisarte-atelie-section">
            <p>
              Foi dentro desse espaço que nasceu o <strong>ateliê</strong>, como um desdobramento natural 
              do trabalho realizado com <strong>costura, reaproveitamento têxtil</strong> e fortalecimento 
              comunitário.
            </p>
          </section>
          
          <section className="cisarte-values-section">
            <p>
              O CISARTE segue como base, <strong>apoio e inspiração</strong> para iniciativas que acreditam 
              que <strong>transformar o mundo</strong> começa pelo cuidado com quem está ao lado.
            </p>
          </section>
        </div>
      </div>
      
      <div className="cisarte-footer-img-container">
        <img src={cisarteFooterImg} alt="Cisarte Footer" className="cisarte-footer-img" />
      </div>
    </div>
  );
};

export default Cisarte; 