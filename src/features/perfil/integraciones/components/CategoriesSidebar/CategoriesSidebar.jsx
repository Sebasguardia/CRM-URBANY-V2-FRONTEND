import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './CategoriesSidebar.module.css';

const CategoriesSidebar = ({ categories, activeCategory, onChangeCategory }) => {
    return (
        <div className={styles.container}>
            {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                    <button
                        key={category}
                        type="button"
                        className={isActive ? styles.itemActive : styles.item}
                        onClick={() => onChangeCategory(category)}
                    >
                        <span className={styles.itemLabel}>{category}</span>
                        {isActive && (
                            <ChevronRight className={styles.activeIcon} strokeWidth={2.4} />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default CategoriesSidebar;
