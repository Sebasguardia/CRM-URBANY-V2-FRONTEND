import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import styles from './TipoOperacionDropdown.module.css';

export const TipoOperacionDropdown = ({
    value = [],
    onChange,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempSelected, setTempSelected] = useState(value);
    const ref = useRef(null);

    const options = [
        { value: 'venta', label: 'Venta' },
        { value: 'alquiler', label: 'Alquiler' },
        { value: 'alquiler_temporal', label: 'Alquiler temporal' }
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
            return 'Tipo operación';
        }
        const selectedLabels = options
            .filter(opt => value.includes(opt.value))
            .map(opt => opt.label);
        return selectedLabels.join(', ');
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
                            const isChecked = tempSelected.includes(option.value);

                            return (
                                <div
                                    key={option.value}
                                    className={styles.dropdownItem}
                                    onClick={() => handleToggleOption(option.value)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => { }}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.optionLabel}>{option.label}</span>
                                </div>
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
