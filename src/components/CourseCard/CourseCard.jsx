import PropTypes from 'prop-types';
import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ courseName, instructor, duration }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.courseName}>{courseName}</h2>
      <p className={styles.instructor}>Instructor: {instructor}</p>
      <p className={styles.duration}>Duration: {duration} hours</p>
    </div>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
};

export default CourseCard;
