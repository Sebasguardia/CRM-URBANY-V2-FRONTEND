import React from 'react';
import styles from './Checkbox.module.css';

function Checkbox() {
  return (
    <div className={styles.mainHead}>
        <input id='one' type='checkbox' />
        <label className={styles.labeltype} for='one'>
            <span></span>
            Incluir mis propiedades
        </label>
    </div>
  );
}

export default Checkbox;