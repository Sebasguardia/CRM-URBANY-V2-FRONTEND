import React from 'react';
import { Loader as LoaderIcon } from 'lucide-react';
import styles from './Loader.module.css';

export const Loader = ({ 
  size = 'md', 
  text = 'Cargando...',
  className = '' 
}) => {
  const sizeClasses = {
    sm: styles.loaderSmall,
    md: styles.loaderMedium,
    lg: styles.loaderLarge
  };

  return (
    <div className={`${styles.loaderContainer} ${sizeClasses[size]} ${className}`}>
      <LoaderIcon className={styles.loaderIcon} size={32} />
      {text && <p className={styles.loaderText}>{text}</p>}
    </div>
  );
};

export const Skeleton = ({ type = 'text', lines = 1, className = '' }) => {
  if (type === 'card') {
    return (
      <div className={`${styles.skeletonCard} ${className}`}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonBody}>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.skeletonContainer} ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className={styles.skeletonLine}></div>
      ))}
    </div>
  );
};