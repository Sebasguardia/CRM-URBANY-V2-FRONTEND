import React from 'react';
import styles from './StatusIndicator.module.css';

export const StatusIndicator = ({ 
  status, 
  showText = true,
  size = 'md',
  className = '' 
}) => {
  const statusConfig = {
    active: { color: 'statusActive', text: 'Activo' },
    inactive: { color: 'statusInactive', text: 'Inactivo' },
    pending: { color: 'statusPending', text: 'Pendiente' },
    completed: { color: 'statusCompleted', text: 'Completado' },
    cancelled: { color: 'statusCancelled', text: 'Cancelado' },
    new: { color: 'statusNew', text: 'Nuevo' },
    contacted: { color: 'statusContacted', text: 'Contactado' },
    valuation: { color: 'statusValuation', text: 'Tasación' },
    visited: { color: 'statusVisited', text: 'Visitado' },
    offer: { color: 'statusOffer', text: 'Oferta' },
    closed: { color: 'statusClosed', text: 'Cerrado' }
  };

  const config = statusConfig[status] || statusConfig.inactive;
  const sizeClasses = {
    sm: styles.statusSmall,
    md: styles.statusMedium,
    lg: styles.statusLarge
  };

  return (
    <div className={`${styles.statusContainer} ${sizeClasses[size]} ${className}`}>
      <div className={`${styles.statusDot} ${styles[config.color]}`}></div>
      {showText && <span className={styles.statusText}>{config.text}</span>}
    </div>
  );
};