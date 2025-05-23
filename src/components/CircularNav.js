import React from 'react';
import { Link } from 'react-router-dom';
import './CircularNav.css';
import nossaHistoriaImg from '../assets/images/home/nossa_historia_circle.png';
import oAtelieImg from '../assets/images/home/o_atelie_circle.png';
import avessoDaIndustriaImg from '../assets/images/home/avesso_da_industria_circle.png';

const CircularNav = () => {
  const navItems = [
    {
      id: 1,
      title: 'Nossa História',
      path: '/nossa-historia',
      image: nossaHistoriaImg,
      alt: 'Nossa História'
    },
    {
      id: 2,
      title: 'O ateliê',
      path: '/atelie',
      image: oAtelieImg,
      alt: 'O ateliê'
    },
    {
      id: 3,
      title: 'Avesso da Indústria',
      path: '/avesso-industria',
      image: avessoDaIndustriaImg,
      alt: 'Avesso da Indústria'
    }
  ];

  return (
    <div className="circular-nav-container">
      <div className="circular-nav">
        {navItems.map(item => (
          <div key={item.id} className="nav-item-container">
            <Link to={item.path} className="nav-item-circle">
              <img src={item.image} alt={item.alt} className="circle-image" />
            </Link>
            <h3 className="nav-item-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularNav; 