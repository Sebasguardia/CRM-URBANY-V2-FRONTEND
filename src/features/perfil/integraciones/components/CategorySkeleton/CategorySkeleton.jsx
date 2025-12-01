import React from 'react';
import styles from './CategorySkeleton.module.css';

const CategorySkeleton = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.cardMainRow}>
                        <div className={styles.iconPlaceholder} />
                        <div className={styles.textGroup}>
                            <div className={styles.linePrimary} />
                            <div className={styles.lineSecondary} />
                            <div className={styles.lineSecondaryWide} />
                        </div>
                    </div>
                    <div className={styles.cardFooter}>
                        <div className={styles.buttonPlaceholder} />
                        <div className={styles.buttonSecondaryPlaceholder} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorySkeleton;
