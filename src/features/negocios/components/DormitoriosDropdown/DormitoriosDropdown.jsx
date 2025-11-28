import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import styles from './DormitoriosDropdown.module.css';

export const DormitoriosDropdown = ({
    value = [],
    onChange,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempSelected, setTempSelected] = useState(value);
    const ref = useRef(null);

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5+', label: '5+' }
    ];

    useOutsideClick(ref, () => {
        setIsOpen(false);
        setTempSelected(value);
    });

    const handleToggleOption = (optionValue) => {
        setTempSelected(prev => {
            if (prev.includes(optionValue)) {
                return prev.filter(v => v !== optionValue);
            } else {
                return [...prev, optionValue];
            }
        });
    };

    const handleClear = () => {
        setTempSelected([]);
    };

    const handleSave = () => {
        onChange(tempSelected);
        setIsOpen(false);
    };

    const getDisplayText = () => {
        if (value.length === 0) {
            return 'Dormitorios';
        }
        return value.join(', ');
    };

    return (
        <div className={`${styles.dropdownContainer} ${className}`} ref={ref}>
            <button
                className={styles.dropdownToggle}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className={styles.dropdownValue}>
                    {getDisplayText()}
                </span>
                <ChevronDown className={`${styles.chevron} ${isOpen ? styles.open : ''}`} size={16} />
            </button>

            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <div className={styles.optionsList}>
                        {options.map((option) => {
                            const isSelected = tempSelected.includes(option.value);

                            return (
                                <button
                                    key={option.value}
                                    className={`${styles.optionButton} ${isSelected ? styles.selected : ''}`}
                                    onClick={() => handleToggleOption(option.value)}
                                >
                                    {option.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className={styles.actionsFooter}>
                        <button
                            className={styles.clearButton}
                            onClick={handleClear}
                        >
                            Borrar
                        </button>
                        <button
                            className={styles.saveButton}
                            onClick={handleSave}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
