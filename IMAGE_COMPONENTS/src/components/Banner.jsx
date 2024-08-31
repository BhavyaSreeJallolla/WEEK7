// src/components/Banner.jsx
import React, { useState, useEffect } from 'react';
import './Banner.css'; 


import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.png';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="banner">
      <img src={images[currentImage]} alt="Rotating banner" className="banner-image" />
    </div>
  );
};

export default Banner;
