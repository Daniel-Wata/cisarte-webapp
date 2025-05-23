import React from 'react';
import './ColorPatterns.css';
import mainPageBlock from '../assets/images/home/main_page_block.png';

const ColorPatterns = () => {
  return (
    <div className="color-patterns">
      <img src={mainPageBlock} alt="Colorful pattern of squares" />
    </div>
  );
};

export default ColorPatterns; 