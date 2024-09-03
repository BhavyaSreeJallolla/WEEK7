import React, { useState } from 'react';
import styles from './Tab.module.css';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  return (
    <div>
      <div className={styles.tabHeaders}>
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`${styles.tabHeader} ${activeTab === tab.label ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tab;
