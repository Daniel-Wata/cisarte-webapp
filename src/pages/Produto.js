import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import bolsasImg from '../assets/images/produto/bolsas.png';
import './Produto.css';

const Produto = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <div className="produto-content">
          <h1 className="produto-title">PRODUTOS</h1>
          
          <p>
            Nossos produtos são feitos à mão, um a um.<br/>
            Nenhuma peça é igual à outra, porque também não existe uma história igual à outra por aqui.
          </p>
          
          <p>
            Cada criação carrega a marca de quem fez, suas escolhas, seus traços, seu tempo, seu afeto.<br/>
            São peças únicas, costuradas com aquilo que a indústria descartou, mas que, nas mãos certas, 
            ganha forma, beleza e valor.
          </p>
          
          <p>
            O que para muitos era lixo, aqui vira matéria-prima de transformação.<br/>
            Transformação do tecido.<br/>
            Transformação de vidas.<br/>
            Transformação de pelo menos um pouquinho do nosso planeta.
          </p>
          
          <p>
            Comprar um produto do nosso ateliê é apoiar um ciclo diferente, mais humano, mais consciente
            e mais justo.<br/>
            É vestir o avesso da indústria.<br/>
            E sustentar, com pequenas escolhas, grandes mudanças.
          </p>
          
          
        </div>
        <div className="produto-image-container">
            <img src={bolsasImg} alt="Produtos RUAVESSA" className="produto-image" />
        </div>
      </div>
    </div>
  );
};

export default Produto; 