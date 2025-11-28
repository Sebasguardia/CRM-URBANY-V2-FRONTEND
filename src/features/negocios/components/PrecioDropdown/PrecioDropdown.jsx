import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import styles from './PrecioDropdown.module.css';

export const PrecioDropdown = ({
    value = { moneda: 'USD', min: '', max: '' },
    onChange,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const ref = useRef(null);

    useOutsideClick(ref, () => {
        setIsOpen(false);
        setTempValue(value);
    });

    const handleClear = () => {
        setTempValue({ moneda: 'USD', min: '', max: '' });
    };

    const handleSave = () => {
        onChange(tempValue);
        setIsOpen(false);
    };

    const getDisplayText = () => {
        if (!value.min && !value.max) {
            return 'Precio';
        }
        if (value.min && value.max) {
            return `${value.moneda} ${value.min} - ${value.max}`;
        }
        if (value.min) {
            return `${value.moneda} desde ${value.min}`;
        }
        return `${value.moneda} hasta ${value.max}`;
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
                    <div className={styles.monedaSection}>
                        <span className={styles.monedaLabel}>Moneda:</span>
                        <div className={styles.monedaButtons}>
                            <button
                                className={`${styles.monedaButton} ${tempValue.moneda === 'USD' ? styles.active : ''}`}
                                onClick={() => setTempValue({ ...tempValue, moneda: 'USD' })}
                            >
                                USD
                            </button>
                            <button
                                className={`${styles.monedaButton} ${tempValue.moneda === 'PENS' ? styles.active : ''}`}
                                onClick={() => setTempValue({ ...tempValue, moneda: 'PENS' })}
                            >
                                PENS/
                            </button>
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <span className={styles.currency}>{tempValue.moneda}</span>
                            <input
                                type="number"
                                placeholder="Precio mínimo"
                                value={tempValue.min}
                                onChange={(e) => setTempValue({ ...tempValue, min: e.target.value })}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <span className={styles.currency}>{tempValue.moneda}</span>
                            <input
                                type="number"
                                placeholder="Precio máximo"
                                value={tempValue.max}
                                onChange={(e) => setTempValue({ ...tempValue, max: e.target.value })}
                                className={styles.input}
                            />
                        </div>
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
