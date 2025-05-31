import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './EmailSent.css';

const EmailSent = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <div className="email-sent-content">
          <h1 className="email-sent-title">Email enviado com sucesso!</h1>
          <p className="email-sent-message">Obrigado por entrar em contato. Em breve retornaremos.</p>
          <Link to="/" className="email-sent-home-btn">Voltar para a página inicial</Link>
        </div>
      </div>
    </div>
  );
};

export default EmailSent; 