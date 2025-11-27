import React from 'react';
import styles from './FilterButton.module.css';

const FilterButton = ({ 
  children, 
  active = false, 
  onClick, 
  icon,
  className = '' 
}) => {
  return (
    <button
      type="button"
      className={`${styles.filterButton} ${active ? styles.active : ''} ${className}`}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default FilterButton;

