import React from 'react';
import styles from './ProgressBar.module.css';

export const ProgressBar = ({ 
  value, 
  max = 100, 
  size = 'md',
  variant = 'primary',
  showPercentage = false,
  className = '' 
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizeClasses = {
    sm: styles.progressSmall,
    md: styles.progressMedium,
    lg: styles.progressLarge
  };

  const variantClasses = {
    primary: styles.progressPrimary,
    success: styles.progressSuccess,
    warning: styles.progressWarning,
    danger: styles.progressDanger
  };

  return (
    <div className={`${styles.progressContainer} ${sizeClasses[size]} ${className}`}>
      <div className={`${styles.progressBar} ${variantClasses[variant]}`}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <span className={styles.progressText}>{Math.round(percentage)}%</span>
      )}
    </div>
  );
};