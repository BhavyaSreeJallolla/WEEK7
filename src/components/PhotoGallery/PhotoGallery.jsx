import React from 'react';
import Photo from './Photo';

const PhotoGallery = ({ photos }) => {
  return (
    <div>
      <h1>Photo Gallery</h1>
      {photos.map(photo => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGallery;
