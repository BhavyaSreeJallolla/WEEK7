// src/components/AboutMe/AboutMe.jsx
import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const inlineStyle = {
    color: '#007bff',
    fontWeight: 'bold',
  };

  return (
    <div className={styles.aboutMe}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.description}>
        Hello! I'm a passionate web developer with experience in building dynamic and responsive web applications. I enjoy working with technologies like React, JavaScript, and CSS.
      </p>
      <p style={inlineStyle}>
        I'm always eager to learn new things and take on challenges.
      </p>
    </div>
  );
};

export default AboutMe;
