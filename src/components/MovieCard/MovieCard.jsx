import PropTypes from 'prop-types';
import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ title, director, releaseYear }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.director}>{director}</p>
      <p className={styles.releaseYear}>{releaseYear}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired
};

export default MovieCard;
