// src/components/PortfolioList/PortfolioList.jsx
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './PortfolioList.module.css';

const PortfolioList = ({ projects }) => {
  return (
    <div className={styles.portfolioList}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default PortfolioList;
