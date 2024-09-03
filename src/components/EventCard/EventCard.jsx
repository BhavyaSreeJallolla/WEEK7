import PropTypes from 'prop-types';
import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ eventName, date, location }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.eventName}>{eventName}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

EventCard.propTypes = {
  eventName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default EventCard;
