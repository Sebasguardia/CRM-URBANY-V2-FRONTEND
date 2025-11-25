import React from 'react';
import { X } from 'lucide-react';
import styles from './Tag.module.css';

export const Tag = ({ 
  label, 
  onRemove, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const variantClasses = {
    default: styles.tagDefault,
    primary: styles.tagPrimary,
    success: styles.tagSuccess,
    warning: styles.tagWarning,
    danger: styles.tagDanger
  };

  const sizeClasses = {
    sm: styles.tagSmall,
    md: styles.tagMedium,
    lg: styles.tagLarge
  };

  return (
    <span className={`${styles.tag} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      <span className={styles.tagLabel}>{label}</span>
      {onRemove && (
        <button className={styles.tagRemove} onClick={onRemove} aria-label="Remover etiqueta">
          <X size={12} />
        </button>
      )}
    </span>
  );
};