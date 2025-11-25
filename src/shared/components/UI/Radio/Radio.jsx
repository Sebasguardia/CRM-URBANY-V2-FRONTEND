import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ label, name, value, checked, onChange, disabled, className = '', ...props }) => {
    return (
        <label className={`${styles.container} ${disabled ? styles.disabled : ''} ${className}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={styles.input}
                {...props}
            />
            <span className={styles.radioMark}></span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};

export default Radio;
