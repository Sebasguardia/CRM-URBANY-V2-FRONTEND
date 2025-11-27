import React from 'react';
import styles from './AuthContainer.module.css';

const AuthContainer = ({ children, isActive = false }) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <div className={styles.curvedShape}></div>
      <div className={styles.curvedShape2}></div>
      {children}
    </div>
  );
};

export default AuthContainer;

