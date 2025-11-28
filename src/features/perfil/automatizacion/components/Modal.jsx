import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md', 
  className = '' 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: styles.modalSmall,
    md: styles.modalMedium,
    lg: styles.modalLarge,
    xl: styles.modalXLarge
  };

  const hasTitle = title !== undefined && title !== '';

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContainer} ${sizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {hasTitle && (
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{title}</h3>
            <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar">
              <X size={20} />
            </button>
          </div>
        )}
        {!hasTitle && (
          <button className={styles.closeButtonTopRight} onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        )}
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

