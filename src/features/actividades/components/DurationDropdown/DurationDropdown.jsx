import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import FilterButton from '../FilterButton/FilterButton';
import styles from './DurationDropdown.module.css';

const durationOptions = [
  { value: 15, label: '15 min' },
  { value: 30, label: '30 min' },
  { value: 45, label: '45 min' },
  { value: 60, label: '1 hora' },
  { value: 90, label: '1.5 horas' },
  { value: 120, label: '2 horas' }
];

const DurationDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleSelectDuration = (duration) => {
    onChange(duration);
    setIsOpen(false);
  };

  const selectedLabel = durationOptions.find(opt => opt.value === value)?.label || durationOptions[1].label;

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.dropdownWrapper}>
        <FilterButton
          active={true}
          onClick={handleToggle}
          icon={<ChevronDown size={20} />}
        >
          {selectedLabel}
        </FilterButton>
        {isOpen && (
          <div className={styles.dropdown}>
            {durationOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`${styles.dropdownItem} ${value === option.value ? styles.selected : ''}`}
                onClick={() => handleSelectDuration(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DurationDropdown;

