import React from 'react';
import { Search, Inbox, File, Users, MapPin, Activity, Building2 } from 'lucide-react';
import styles from './EmptyState.module.css';

const EmptyStateIcon = ({ type }) => {
  const icons = {
    search: <Search size={48} />,
    inbox: <Inbox size={48} />,
    file: <File size={48} />,
    users: <Users size={48} />,
    map: <MapPin size={48} />,
    activity: <Activity size={48} />,
    building: <Building2 size={48} />
  };
  return icons[type] || null;
};

export const EmptyState = ({ 
  title = 'No hay datos',
  description = 'Intenta ajustar tus filtros o agregar nuevo contenido',
  type = 'search',
  actionLabel,
  onAction,
  className = '' 
}) => {
  return (
    <div className={`${styles.emptyState} ${className}`}>
      <div className={styles.emptyStateIcon}>
        <EmptyStateIcon type={type} />
      </div>
      <h3 className={styles.emptyStateTitle}>{title}</h3>
      <p className={styles.emptyStateDescription}>{description}</p>
      {actionLabel && onAction && (
        <button className={styles.emptyStateAction} onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
};