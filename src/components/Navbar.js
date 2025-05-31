import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/home/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="RUAV3SSA Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/produtos" className="nav-item">Produtos</Link>
        <Link to="/kit-corporativo" className="nav-item">Kit Corporativo</Link>
        <Link to="/cisarte" className="nav-item">Cisarte</Link>
        <Link to="/contato" className="nav-item">Contato</Link>
      </div>
    </nav>
  );
};

export default Navbar; 