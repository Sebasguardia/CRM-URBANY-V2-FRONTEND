import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import styles from './Dropdown.module.css';

export const Dropdown = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = 'Seleccionar...',
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  
  useOutsideClick(ref, () => setIsOpen(false));

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`${styles.dropdownContainer} ${className}`} ref={ref}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.dropdownValue}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`${styles.chevron} ${isOpen ? styles.open : ''}`} size={16} />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.dropdownItem} ${
                option.value === value ? styles.selected : ''
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};