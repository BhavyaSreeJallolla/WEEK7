import React, { useState } from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`${styles.toggleSwitch} ${isOn ? styles.on : styles.off}`}
      onClick={handleToggle}
    >
      <div className={styles.slider}></div>
    </div>
  );
};

export default ToggleSwitch;
