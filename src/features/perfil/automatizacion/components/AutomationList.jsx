import React, { useState } from 'react';
import styles from '../styles/AutomationList.module.css';
import { Home, Mail, Trophy, UserX, UserPlus } from 'lucide-react';

const AUTOMATIONS = [
  {
    id: 1,
    title: 'Cada vez que se añade una una propiedad, enviar un email a interesados',
    time: 'AHORRÁ 45 MIN',
    iconStart: <Home size={24} color="#2563EB" />,
    iconEnd: <Mail size={24} color="#F59E0B" fill="#FDE68A" />
  },
  {
    id: 2,
    title: 'Cada vez que se gana un negocio, enviar un email',
    time: 'AHORRÁ 15 MIN',
    iconStart: <Trophy size={24} color="#2563EB" />,
    iconEnd: <Mail size={24} color="#3B82F6" fill="#DBEAFE" />
  },
  {
    id: 3,
    title: 'Cada vez que se pierde un negocio, enviar un email',
    time: 'AHORRÁ 15 MIN',
    iconStart: <UserX size={24} color="#2563EB" />,
    iconEnd: <Mail size={24} color="#F59E0B" fill="#FDE68A" />
  },
  {
    id: 4,
    title: 'Cada vez que se añade un nuevo negocio, enviar un email',
    time: 'AHORRÁ 15 MIN',
    iconStart: <UserPlus size={24} color="#2563EB" />,
    iconEnd: <Mail size={24} color="#3B82F6" fill="#DBEAFE" />
  },
];

const AutomationList = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (item) => {
    setSelectedId(item.id);
    onSelect(item);
  };

  return (
    <div className={styles.grid}>
      {AUTOMATIONS.map((item) => (
        <div
          key={item.id}
          className={`${styles.automationCard} ${selectedId === item.id ? styles.selected : ''}`}
          onClick={() => handleSelect(item)}
        >
          <div className={styles.badge}>{item.time}</div>

          <div className={styles.visualDiagram}>
            <div className={styles.iconBox}>{item.iconStart}</div>
            <div className={styles.dashedLine}></div>
            <div className={styles.iconBox}>{item.iconEnd}</div>
          </div>

          <div className={styles.cardFooter}>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutomationList;