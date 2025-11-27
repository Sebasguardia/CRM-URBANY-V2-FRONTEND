import React from 'react';
import styles from './TabButton.module.css';

export const TabButton = ({ icon, label, active = false, onClick, className = '' }) => {
  return (
    <button
      type="button"
      className={`${styles.tabButton} ${active ? styles.active : ''} ${className}`}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default TabButton;

