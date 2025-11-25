import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info, Warning } from 'lucide-react';
import styles from './Toast.module.css';

const ToastIcon = ({ type }) => {
  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />,
    warning: <Warning size={20} />,
    info: <Info size={20} />
  };
  return icons[type] || null;
};

export const Toast = ({ 
  id, 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  return (
    <div
      className={`${styles.toast} ${styles[`toast${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${
        isVisible ? styles.show : styles.hide
      }`}
      role="alert"
    >
      <div className={styles.toastIcon}>
        <ToastIcon type={type} />
      </div>
      <div className={styles.toastMessage}>{message}</div>
      <button className={styles.toastClose} onClick={handleClose} aria-label="Cerrar">
        <X size={16} />
      </button>
    </div>
  );
};

export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
};