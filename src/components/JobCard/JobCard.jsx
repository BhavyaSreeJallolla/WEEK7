import PropTypes from 'prop-types';
import React from 'react';
import styles from './JobCard.module.css';

const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.jobTitle}>{jobTitle}</h2>
      <p className={styles.companyName}>{companyName}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

JobCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default JobCard;
