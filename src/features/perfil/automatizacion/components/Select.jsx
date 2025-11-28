import React from 'react';
import styles from './Select.module.css';

const Select = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder, 
  label,
  defaultValue,
  className = '', 
  ...props 
}) => {
  // Si options es un array de strings, convertirlo a formato {value, label}
  const normalizedOptions = options.map(opt => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <select
        className={styles.select}
        value={value !== undefined ? value : ''}
        onChange={onChange}
        defaultValue={defaultValue}
        {...props}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {normalizedOptions.map((opt, index) => (
          <option key={opt.value || index} value={opt.value}>
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

