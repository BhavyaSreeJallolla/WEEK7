import React from 'react';
import './ArtworkGallery.css';
import artwork1 from '../assets/artworks/artimage1.webp';
import artwork2 from '../assets/artworks/artimage2.jpg';
import artwork3 from '../assets/artworks/artimage3.jpg';

const artworks = [
  { src: artwork1, title: 'Artwork 1', description: 'Diversity' },
  { src: artwork2, title: 'Artwork 2', description: 'Diversity2' },
  { src: artwork3, title: 'Artwork 3', description: 'Diversity3' },
];

const ArtworkGallery = () => {
  return (
    <div className="artwork-gallery">
      {artworks.map((artwork, index) => (
        <div key={index} className="artwork-item">
          <img src={artwork.src} alt={artwork.title} className="artwork-image" />
          <div className="artwork-info">
            <h3 className="artwork-title">{artwork.title}</h3>
            <p className="artwork-description">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGallery;
