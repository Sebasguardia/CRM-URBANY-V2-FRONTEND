import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import styles from './OrigenDropdown.module.css';

export const OrigenDropdown = ({
    value = [],
    onChange,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempSelected, setTempSelected] = useState(value);
    const ref = useRef(null);

    const options = [
        { value: 'argenprop', label: 'Argenprop' },
        { value: 'cobaprop', label: 'Cobaprop' },
        { value: 'campana_marketing', label: 'Campaña Marketing' },
        { value: 'cartel', label: 'Cartel' },
        { value: 'cliengo', label: 'Cliengo' },
        { value: 'email_marketing', label: 'Email marketing' },
        { value: 'facebook', label: 'Facebook' },
        { value: 'ficha_publica', label: 'Ficha pública' },
        { value: 'folleteria', label: 'Folleteria' },
        { value: 'goplaceit', label: 'Goplaceit' },
        { value: 'hoomi', label: 'Hoomi' },
        { value: 'hoomi2', label: 'Hoomi' },
        { value: 'importado', label: 'Importado' },
        { value: 'inmoup', label: 'InmoUP' },
        { value: 'instagram', label: 'Instagram' },
        { value: 'la_gran_inmobiliaria', label: 'La Gran Inmobiliaria' },
        { value: 'la_voz_del_interior', label: 'La Voz del interior' },
        { value: 'landing_page', label: 'Landing page' },
        { value: 'linkedin', label: 'Linkedin' },
        { value: 'mendozaprop', label: 'Mendozaprop' },
        { value: 'mercado_libre', label: 'Mercado Libre' },
        { value: 'pagina_web', label: 'Pagina web' },
        { value: 'presencial', label: 'Presencial' },
        { value: 'propia', label: 'Propia' },
        { value: 'proppit', label: 'Proppit' },
        { value: 'red', label: 'Red' },
        { value: 'real_privada', label: 'Real Privada' },
        { value: 'referido', label: 'Referido' },
        { value: 'telefono', label: 'Teléfono' },
        { value: 'whatsapp', label: 'WhatsApp' },
        { value: 'zonaprop', label: 'Zonaprop' }
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
            return 'Origen';
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
