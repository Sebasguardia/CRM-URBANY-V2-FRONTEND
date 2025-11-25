import React from 'react';
import { Bell, Settings, User, Menu } from 'lucide-react';
import styles from './Topbar.module.css';
import { Avatar } from '../../UI/Avatar/Avatar';

export const Topbar = ({ 
  onMenuToggle, 
  user,
  notifications = 0,
  className = '' 
}) => {
  return (
    <header className={`${styles.topbar} ${className}`}>
      <div className={styles.leftSection}>
        <button 
          className={styles.menuButton} 
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
        
        <div className={styles.searchWrapper}>
          {/* Search component se integrará aquí en features */}
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.iconGroup}>
          <button className={styles.iconButton} aria-label="Notificaciones">
            <Bell size={20} />
            {notifications > 0 && (
              <span className={styles.notificationBadge}>{notifications}</span>
            )}
          </button>
          
          <button className={styles.iconButton} aria-label="Configuración">
            <Settings size={20} />
          </button>
        </div>

        <div className={styles.userProfile}>
          <Avatar 
            src={user?.avatar} 
            size="sm" 
            alt={user?.name || 'Usuario'} 
          />
          <span className={styles.userName}>{user?.name || 'Usuario'}</span>
        </div>
      </div>
    </header>
  );
};