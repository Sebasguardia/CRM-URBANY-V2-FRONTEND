import React, { useState, useRef } from 'react';
import { ChevronDown, MapPin, X } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import styles from './UbicacionDropdown.module.css';

export const UbicacionDropdown = ({
    value = [],
    onChange,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempSelected, setTempSelected] = useState(value);
    const [searchTerm, setSearchTerm] = useState('');
    const ref = useRef(null);

    const ubicaciones = [
        'Lima Metropolitana',
        'Lima Metropolitana, Santiago de Surco',
        'Lima Metropolitana, San Isidro',
        'Lima Metropolitana, Miraflores',
        'Arequipa',
        'Cusco',
        'Trujillo'
    ];

    useOutsideClick(ref, () => {
        setIsOpen(false);
        setTempSelected(value);
        setSearchTerm('');
    });

    const handleAddUbicacion = (ubicacion) => {
        if (!tempSelected.includes(ubicacion)) {
            setTempSelected([...tempSelected, ubicacion]);
        }
        setSearchTerm('');
    };

    const handleRemoveUbicacion = (ubicacion) => {
        setTempSelected(tempSelected.filter(u => u !== ubicacion));
    };

    const handleClearAll = () => {
        setTempSelected([]);
    };

    const handleSave = () => {
        onChange(tempSelected);
        setIsOpen(false);
        setSearchTerm('');
    };

    const getDisplayText = () => {
        if (value.length === 0) {
            return 'Ubicación';
        }
        return value.join(', ');
    };

    const filteredUbicaciones = ubicaciones.filter(ubicacion =>
        ubicacion.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !tempSelected.includes(ubicacion)
    );

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
                    <div className={styles.searchContainer}>
                        <MapPin className={styles.searchIcon} size={20} />
                        <input
                            type="text"
                            placeholder="Escribe un lugar para buscar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>

                    {tempSelected.length > 0 && (
                        <div className={styles.selectedList}>
                            {tempSelected.map((ubicacion) => (
                                <div key={ubicacion} className={styles.selectedItem}>
                                    <X
                                        className={styles.removeIcon}
                                        size={20}
                                        onClick={() => handleRemoveUbicacion(ubicacion)}
                                    />
                                    <span className={styles.selectedText}>{ubicacion}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {searchTerm && filteredUbicaciones.length > 0 && (
                        <div className={styles.suggestionsList}>
                            {filteredUbicaciones.map((ubicacion) => (
                                <div
                                    key={ubicacion}
                                    className={styles.suggestionItem}
                                    onClick={() => handleAddUbicacion(ubicacion)}
                                >
                                    {ubicacion}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className={styles.actionsFooter}>
                        <button
                            className={styles.clearButton}
                            onClick={handleClearAll}
                        >
                            Borrar todo
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
