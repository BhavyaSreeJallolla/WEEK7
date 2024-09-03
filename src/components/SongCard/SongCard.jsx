import PropTypes from 'prop-types';
import React from 'react';
import styles from './SongCard.module.css';

const SongCard = ({ songTitle, artist, album }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.songTitle}>{songTitle}</h2>
      <p className={styles.artist}>Artist: {artist}</p>
      <p className={styles.album}>Album: {album}</p>
    </div>
  );
};

SongCard.propTypes = {
  songTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
};

export default SongCard;
