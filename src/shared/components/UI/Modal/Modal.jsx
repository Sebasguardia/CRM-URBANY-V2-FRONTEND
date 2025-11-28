import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md', 
  className = '',
  showClose = true,
  titleAlign = 'start',
  scroll = true,
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

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContainer} ${sizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${styles.modalHeader} ${titleAlign === 'center' ? styles.modalHeaderCenter : ''}`}>
          <h3 className={styles.modalTitle}>{title}</h3>
          {showClose && (
            <button className={`${styles.closeButton} ${styles.closeButtonRight}`} onClick={onClose} aria-label="Cerrar">
              <X size={20} />
            </button>
          )}
        </div>
        <div className={`${styles.modalBody} ${scroll ? '' : styles.modalBodyNoScroll}`}>{children}</div>
      </div>
    </div>
  );
};
