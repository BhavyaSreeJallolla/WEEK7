import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ type, children }) => {
  return <span className={`${styles.badge} ${styles[type]}`}>{children}</span>;
};

export default Badge;
