import React, { useState, useRef } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import styles from './TagsDropdown.module.css';

export const TagsDropdown = ({
    options = [],
    value = [],
    onChange,
    placeholder = 'Etiquetas',
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempSelected, setTempSelected] = useState(value);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('todas'); // 'todas' | 'mias'
    const ref = useRef(null);

    useOutsideClick(ref, () => {
        setIsOpen(false);
        setTempSelected(value);
        setSearchTerm('');
    });

    const handleToggleOption = (optionValue) => {
        if (optionValue === '') return;

        setTempSelected(prev => {
            if (prev.includes(optionValue)) {
                return prev.filter(v => v !== optionValue);
            } else {
                return [...prev, optionValue];
            }
        });
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
            return placeholder;
        }
        const selectedLabels = options
            .filter(opt => value.includes(opt.value))
            .map(opt => opt.label);
        return selectedLabels.join(', ');
    };

    // Filter options based on search and tab
    const filteredOptions = options.filter(option => {
        if (option.value === '') return false;

        const matchesSearch = option.label.toLowerCase().includes(searchTerm.toLowerCase());

        // For now, show all in "todas" tab
        // You can add logic for "mias" tab based on your data structure
        if (activeTab === 'mias') {
            // Add your logic here to filter user's tags
            return matchesSearch;
        }

        return matchesSearch;
    });

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
                    {/* Search Bar */}
                    <div className={styles.searchContainer}>
                        <Search className={styles.searchIcon} size={18} />
                        <input
                            type="text"
                            placeholder="Buscar etiquetas"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>

                    {/* Tabs */}
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'todas' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('todas')}
                        >
                            Todas
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'mias' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('mias')}
                        >
                            Mías
                        </button>
                    </div>

                    {/* Options List */}
                    <div className={styles.optionsList}>
                        {filteredOptions.length === 0 ? (
                            <div className={styles.emptyState}>
                                No hay etiquetas Disponibles
                            </div>
                        ) : (
                            filteredOptions.map((option) => {
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
                            })
                        )}
                    </div>

                    {/* Actions Footer */}
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
