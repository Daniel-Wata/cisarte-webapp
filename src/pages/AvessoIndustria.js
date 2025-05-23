import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import avessoIndustria from '../assets/images/avesso-industria/Avesso Indus.png';
import './AvessoIndustria.css';

const AvessoIndustria = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="avesso-container">
        <div className="image-wrapper">
          <img 
            src={avessoIndustria} 
            alt="Avesso da Indústria" 
            className="avesso-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AvessoIndustria; 