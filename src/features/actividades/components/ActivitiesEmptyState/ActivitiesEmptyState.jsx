import React from 'react';
import actividadesImage from '../../../../assets/actividades.svg';
import AddActivityButton from '../AddActivityButton/AddActivityButton';
import styles from './ActivitiesEmptyState.module.css';

const ActivitiesEmptyState = ({ onAddActivity }) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.imageContainer}>
        <img 
          src={actividadesImage} 
          alt="Actividades completadas" 
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>
        ¡Bien hecho! Has completado tus tareas.
      </h3>
      <p className={styles.description}>
        Tómate tu tiempo y recupera fuerzas.
      </p>
      <div className={styles.actionContainer}>
        <AddActivityButton onClick={onAddActivity} />
      </div>
    </div>
  );
};

export default ActivitiesEmptyState;

