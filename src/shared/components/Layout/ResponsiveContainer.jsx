import React from 'react';
import styles from './ResponsiveContainer.module.css';

export const ResponsiveContainer = ({ 
  children, 
  breakpoint = 'lg',
  className = '' 
}) => {
  const breakpointClasses = {
    sm: styles.containerSmall,
    md: styles.containerMedium,
    lg: styles.containerLarge,
    xl: styles.containerXLarge,
    full: styles.containerFull
  };

  return (
    <div className={`${styles.responsiveContainer} ${breakpointClasses[breakpoint]} ${className}`}>
      {children}
    </div>
  );
};