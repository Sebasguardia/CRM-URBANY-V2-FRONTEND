import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, checked, onChange, disabled, className = '', ...props }) => {
    return (
        <label className={`${styles.container} ${disabled ? styles.disabled : ''} ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={styles.input}
                {...props}
            />
            <span className={styles.checkmark}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};

export default Checkbox;
