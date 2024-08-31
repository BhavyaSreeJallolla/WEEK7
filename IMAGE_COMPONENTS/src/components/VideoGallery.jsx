// src/components/VideoGallery.jsx
import React from 'react';
import './VideoGallery.css';
import video1 from '../assets/video1.jpg';

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      <img src={video1} alt="Video 1" className="video-thumbnail" />
    </div>
  );
};

export default VideoGallery;
