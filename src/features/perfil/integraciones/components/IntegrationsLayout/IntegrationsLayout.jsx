import React from 'react';
import Card from '../../../../../shared/components/UI/Card/Card';
import CategoriesSidebar from '../CategoriesSidebar/CategoriesSidebar';
import IntegrationsSection from '../IntegrationsSection/IntegrationsSection';
import CategorySkeleton from '../CategorySkeleton/CategorySkeleton';
import styles from './IntegrationsLayout.module.css';

const IntegrationsLayout = ({
    categories,
    activeCategory,
    onChangeCategory,
    sections,
    isLoading,
}) => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.headerRow}>
                <div>
                    <h1 className={styles.title}>Integraciones</h1>
                    <p className={styles.subtitle}>
                        Realice las diferentes integraciones para incrementar su efectividad.
                    </p>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <aside className={styles.sidebar}>
                    <span className={styles.sidebarLabel}>Categorías</span>
                    <CategoriesSidebar
                        categories={categories}
                        activeCategory={activeCategory}
                        onChangeCategory={onChangeCategory}
                    />
                </aside>

                <section className={styles.mainContent}>
                    {isLoading ? (
                        <CategorySkeleton />
                    ) : (
                        sections.map((section) => (
                            <div key={section.id} className={styles.sectionWrapper}>
                                <h2 className={styles.sectionTitle}>{section.title}</h2>
                                <Card className={styles.sectionCard}>
                                    <IntegrationsSection items={section.items} />
                                </Card>
                            </div>
                        ))
                    )}
                </section>
            </div>
        </div>
    );
};

export default IntegrationsLayout;
