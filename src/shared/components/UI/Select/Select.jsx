import React, { useRef, useState } from 'react';
import styles from './Select.module.css';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

const Select = ({ options = [], value, onChange, placeholder, className = '', ...props }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setOpen(false));

  const selected = options.find(o => o.value === value);

  const handleSelect = (val) => {
    if (onChange) {
      onChange({ target: { value: val } });
    }
    setOpen(false);
  };

  return (
    <div ref={ref} className={`${styles.selectWrapper} ${className}`} {...props}>
      <button type="button" className={styles.selectButton} onClick={() => setOpen(!open)}>
        <span className={styles.selectLabel}>{selected ? selected.label : (placeholder || '')}</span>
        <span className={styles.arrow}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`${styles.option} ${opt.value === value ? styles.optionActive : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
