import React from 'react';
import Song from './Song';

const Playlist = ({ songs }) => {
  return (
    <div>
      <h1>Playlist</h1>
      {songs.map(song => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Playlist;
