import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import FilterButton from '../FilterButton/FilterButton';
import styles from './FilterDropdown.module.css';

const FilterDropdown = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = 'Seleccionar',
  active = false,
  minWidth = '200px'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => {
    const optValue = typeof opt === 'object' ? opt.value : opt;
    if (value === null || value === undefined) {
      return optValue === null || optValue === undefined;
    }
    return optValue === value;
  });

  const displayText = selectedOption 
    ? (typeof selectedOption === 'object' ? selectedOption.label : selectedOption)
    : placeholder;

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.dropdownWrapper}>
        <FilterButton
          active={active || !!value}
          onClick={handleToggle}
          icon={<ChevronDown size={20} />}
        >
          {displayText}
        </FilterButton>
        {isOpen && (
          <div className={styles.dropdown} style={{ minWidth }}>
            {options.map((option, index) => {
              const optionValue = typeof option === 'object' ? option.value : option;
              const optionLabel = typeof option === 'object' ? option.label : option;
              let isSelected = false;
              if (value === null || value === undefined) {
                isSelected = optionValue === null || optionValue === undefined;
              } else {
                isSelected = optionValue === value;
              }

              return (
                <button
                  key={typeof option === 'object' && option.value !== null ? option.value : index}
                  type="button"
                  className={`${styles.dropdownItem} ${isSelected ? styles.selected : ''}`}
                  onClick={() => handleSelect(optionValue)}
                >
                  {optionLabel}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;

