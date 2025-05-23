import React from 'react';
import './Sponsors.css';
import patrocinadores from '../assets/images/home/patrocinadores.png';

const Sponsors = () => {
  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">Patrocinadores:</h2>
      <div className="sponsors-container">
        {/* This would be replaced with the actual sponsors image */}
        <div className="sponsors-image-container">
          <img 
            src={patrocinadores} 
            alt="Patrocinadores" 
            className="sponsors-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors; 