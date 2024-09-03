// src/components/cards/SongCard.jsx
import React from 'react';

const SongCard = ({ songTitle, artist, album }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 8px' }}>{songTitle}</h3>
      <p style={{ margin: '0 0 8px' }}>Artist: {artist}</p>
      <p style={{ margin: '0' }}>Album: {album}</p>
    </div>
  );
};

export default SongCard;
