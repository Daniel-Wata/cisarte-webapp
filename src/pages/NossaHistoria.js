import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import topImage from '../assets/images/nossa-historia/top_image.png';
import missaoImg from '../assets/images/nossa-historia/missao.png';
import valoresImg from '../assets/images/nossa-historia/valores.png';
import objetivosImg from '../assets/images/nossa-historia/objetivos.png';
import './NossaHistoria.css';

const NossaHistoria = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      
      <div className="nossa-historia-banner">
        <div className="container">
          <img src={topImage} alt="Nossa História" className="top-image" style={{ backgroundColor: '#3E3B3B' }} />
        </div>
      </div>
      
      <div className="container">
        <div className="nossa-historia-content">
          <p className="historia-paragraph">
            A <strong>RUAVESSA</strong> nasceu dentro do <strong>CISARTE</strong>, um espaço de acolhimento e transformação para 
            pessoas em situação de rua. Tudo começou com oficinas de costura e <strong>reaproveitamento 
            de tecidos</strong>, onde cada ponto era também um recomeço. Aos poucos, essas mãos 
            costuraram mais do que bags, construíram pertencimento, identidade e sonho.
          </p>
          
          <p className="historia-paragraph">
            Com a parceria entre moradores e estudantes de design da universidade presbiteriana 
            mackenzie, surgiu uma marca que carrega a alma da rua e a coragem de olhar para o avesso 
            da indústria. <strong>RUAVESSA</strong> não é só moda. É <strong>resistência, afeto e reconstrução de vida</strong>. Uma 
            forma de dizer, através de costura e retalhos, que toda história pode ser reescrita com 
            <strong> beleza e dignidade</strong>.
          </p>
          
          <div className="section-missao">
            <div className="section-header">
              <img src={missaoImg} alt="Missão" className="section-icon" />
              <h2 className="section-title">Missão</h2>
            </div>
            <p className="section-text">
              Promover autonomia e dignidade por meio da arte, da costura e 
              do trabalho coletivo, com foco na inclusão social de pessoas em 
              situação de vulnerabilidade.
            </p>
          </div>
          
          <div className="section-valores">
            <div className="section-header">
              <img src={valoresImg} alt="Valores" className="section-icon" />
              <h2 className="section-title">Valores</h2>
            </div>
            <ul className="section-list">
              <li>Respeito aos tempos e histórias</li>
              <li>Coletividade e cuidado</li>
              <li>Sustentabilidade e reaproveitamento</li>
              <li>Liberdade criativa</li>
              <li>Trabalho com propósito</li>
              <li>Escuta e reconstrução de vínculos</li>
            </ul>
          </div>
          
          <div className="section-objetivos">
            <div className="section-header">
              <img src={objetivosImg} alt="Objetivos" className="section-icon" />
              <h2 className="section-title">Objetivos</h2>
            </div>
            <ul className="section-list">
              <li>Criar oportunidades reais de renda e reinserção social</li>
              <li>Fortalecer a autoestima e a autonomia de quem participa</li>
              <li>Reduzir o desperdício têxtil com reaproveitamento consciente</li>
              <li>Transformar retalho em recurso, e exclusão em presença</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NossaHistoria; 