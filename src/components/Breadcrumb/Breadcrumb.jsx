import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className={styles.breadcrumbItem}>{item}</span>
          {index < items.length - 1 && <span className={styles.separator}>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
