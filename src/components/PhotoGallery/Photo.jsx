import React from 'react';

const Photo = ({ photo }) => {
  return (
    <div>
      <img src={photo.url} alt={photo.description} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{photo.description}</p>
    </div>
  );
};

export default Photo;
