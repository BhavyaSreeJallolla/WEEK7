// src/components/cards/MovieCard.jsx
import React from 'react';

const MovieCard = ({ title, director, releaseYear }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: '0 0 8px' }}>Director: {director}</p>
      <p style={{ margin: '0' }}>Release Year: {releaseYear}</p>
    </div>
  );
};

export default MovieCard;
