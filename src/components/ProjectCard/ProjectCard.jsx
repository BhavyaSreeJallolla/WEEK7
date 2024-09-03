// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
