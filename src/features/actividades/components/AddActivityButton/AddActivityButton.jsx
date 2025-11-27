import React from 'react';
import { Plus } from 'lucide-react';
import styles from './AddActivityButton.module.css';

const AddActivityButton = ({ onClick, className = '' }) => {
  return (
    <button
      className={`${styles.addButton} ${className}`}
      onClick={onClick}
    >
      <Plus size={24} />
      Añadir nueva actividad
    </button>
  );
};

export default AddActivityButton;

