import React from 'react';
import styles from './Select.module.css';

const Select = ({ options = [], value, onChange, placeholder, className = '', ...props }) => {
    return (
        <div className={`${styles.selectWrapper} ${className}`}>
            <select
                className={styles.select}
                value={value}
                onChange={onChange}
                {...props}
            >
                {placeholder && <option value="" disabled>{placeholder}</option>}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <div className={styles.arrow}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        </div>
    );
};

export default Select;
