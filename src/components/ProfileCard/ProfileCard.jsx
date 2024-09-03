import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ username, bio, profilePicture }) => {
  return (
    <div className={styles.card}>
      <img src={profilePicture} alt={`${username}'s profile`} className={styles.profilePicture} />
      <h2 className={styles.username}>{username}</h2>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired
};

export default ProfileCard;
