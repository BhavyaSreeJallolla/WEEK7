import PropTypes from 'prop-types';
import React from 'react';
import styles from './NewsCard.module.css';

const NewsCard = ({ headline, summary, source }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.headline}>{headline}</h2>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.source}>Source: {source}</p>
    </div>
  );
};

NewsCard.propTypes = {
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

export default NewsCard;
