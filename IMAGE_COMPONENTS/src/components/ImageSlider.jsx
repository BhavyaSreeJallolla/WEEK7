// src/components/ImageSlider.jsx
import React, { useState } from 'react';
import './ImageSlider.css';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.png';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={handlePrevious} className="slider-button">Previous</button>
      <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      <button onClick={handleNext} className="slider-button">Next</button>
    </div>
  );
};

export default ImageSlider;
