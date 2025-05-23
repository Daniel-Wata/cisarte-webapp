import React from 'react';
import Navbar from '../components/Navbar';
import ColorPatterns from '../components/ColorPatterns';
import CircularNav from '../components/CircularNav';
import Sponsors from '../components/Sponsors';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="section navbar-section">
        <div className="container">
          <Navbar />
        </div>
      </div>
      
      <div className="section color-patterns-section">
        <div className="container">
          <ColorPatterns />
        </div>
      </div>
      
      <div className="section circular-nav-section">
        <div className="container">
          <CircularNav />
        </div>
      </div>
      
      <div className="section sponsors-section">
        <div className="container">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default Home; 