import React from 'react';

const Song = ({ song }) => {
  return (
    <div>
      <h4>{song.title}</h4>
      <p>Artist: {song.artist}</p>
    </div>
  );
};

export default Song;
