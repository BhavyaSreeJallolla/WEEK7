import PropTypes from 'prop-types';
import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ title, author, yearPublished }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>{author}</p>
      <p className={styles.year}>{yearPublished}</p>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  yearPublished: PropTypes.number.isRequired
};

export default BookCard;
