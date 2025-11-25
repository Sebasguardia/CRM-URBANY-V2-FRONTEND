import React from 'react';
import styles from './Toggle.module.css';

const Toggle = ({ checked, onChange, disabled, className = '', ...props }) => {
    return (
        <label className={`${styles.switch} ${disabled ? styles.disabled : ''} ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={styles.input}
                {...props}
            />
            <span className={styles.slider}></span>
        </label>
    );
};

export default Toggle;
