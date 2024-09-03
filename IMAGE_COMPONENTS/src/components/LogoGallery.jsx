// src/components/LogoGallery.jsx
import React from 'react';
import './LogoGallery.css';
import logo1 from '../assets/logos/logo1.avif';
import logo2 from '../assets/logos/logo2.avif';
import logo3 from '../assets/logos/logo3.avif';

const LogoGallery = () => {
  return (
    <div className="logo-gallery">
      <img src={logo1} alt="Logo 1" className="logo" />
      <img src={logo2} alt="Logo 2" className="logo" />
      <img src={logo3} alt="Logo 3" className="logo" />
    </div>
  );
};

export default LogoGallery;
