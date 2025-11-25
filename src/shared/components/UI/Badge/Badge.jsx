import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '' 
}) => {
  const variantClasses = {
    default: styles.badgeDefault,
    primary: styles.badgePrimary,
    success: styles.badgeSuccess,
    warning: styles.badgeWarning,
    danger: styles.badgeDanger,
    info: styles.badgeInfo
  };

  const sizeClasses = {
    sm: styles.badgeSmall,
    md: styles.badgeMedium,
    lg: styles.badgeLarge
  };

  return (
    <span className={`${styles.badge} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
};