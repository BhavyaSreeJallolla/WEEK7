import React from 'react';
import styles from './ProfilePicture.module.css';

const ProfilePicture = ({ src, alt }) => {
  return <img className={styles.profilePicture} src={src} alt={alt} />;
};

export default ProfilePicture;
