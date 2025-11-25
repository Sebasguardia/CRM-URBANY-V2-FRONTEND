import React from 'react';
import { User } from 'lucide-react';
import styles from './Avatar.module.css';

export const Avatar = ({ 
  src, 
  alt = 'Avatar', 
  size = 'md', 
  className = '', 
  fallback = true 
}) => {
  const sizeClasses = {
    sm: styles.avatarSmall,
    md: styles.avatarMedium,
    lg: styles.avatarLarge,
    xl: styles.avatarXLarge
  };

  return (
    <div className={`${styles.avatarContainer} ${sizeClasses[size]} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.avatarImage} />
      ) : (
        <div className={styles.avatarFallback}>
          <User size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
        </div>
      )}
    </div>
  );
};