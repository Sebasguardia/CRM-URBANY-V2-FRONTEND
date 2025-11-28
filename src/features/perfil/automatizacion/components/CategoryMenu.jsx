import React from 'react';
import styles from '../styles/CategoryMenu.module.css'; // CSS Específico
import { VIEW_TYPES } from '../hooks/useAutomation';

const CategoryMenu = ({ currentView, onChangeView }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTitle}>CATEGORIAS</div>
      
      <button 
        className={`${styles.menuItem} ${currentView === VIEW_TYPES.MERCADO_LIBRE ? styles.menuItemActive : ''}`}
        onClick={() => onChangeView(VIEW_TYPES.MERCADO_LIBRE)}
      >
        Mercado Libre
      </button>

      <div className={styles.sidebarTitle}>Plantillas</div>
      
      <button 
        className={`${styles.menuItem} ${currentView === VIEW_TYPES.EMAIL_TEMPLATES ? styles.menuItemActive : ''}`}
        onClick={() => onChangeView(VIEW_TYPES.EMAIL_TEMPLATES)}
      >
        Plantilla e-mail
      </button>
      
      <button 
        className={`${styles.menuItem} ${currentView === VIEW_TYPES.WHATSAPP_TEMPLATES ? styles.menuItemActive : ''}`}
        onClick={() => onChangeView(VIEW_TYPES.WHATSAPP_TEMPLATES)}
      >
        Plantilla de WhatsApp
      </button>
    </div>
  );
};

export default CategoryMenu;