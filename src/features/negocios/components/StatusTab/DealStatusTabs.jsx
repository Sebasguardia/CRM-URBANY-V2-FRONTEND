import React from 'react';
import { Wrench } from 'lucide-react';
import styles from './DealStatusTabs.module.css';

const DealStatusTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'nuevo', label: 'Nuevo negocio', count: 1 },
    { id: 'contactado', label: 'Contactado', count: 0 },
    { id: 'visita', label: 'Visita programada', count: 0 },
    { id: 'negociacion', label: 'En negociación', count: 0 },
    { id: 'frio', label: 'Frío', count: 0, hasIcon: true }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Estado del Negocio</h2>
      <div className={styles.statusCards}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.statusCard} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className={styles.statusLabel}>{tab.label}</span>
            <span className={styles.statusCount}>{tab.count}</span>
            {tab.hasIcon && (
              <div 
                className={styles.iconButton}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = '/negocios/progreso';
                }}
              >
                <Wrench size={18} />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DealStatusTabs;
