import React, { useState } from 'react';
import IntegrationItem from '../IntegrationItem/IntegrationItem';
import styles from './IntegrationsSection.module.css';

const IntegrationsSection = ({ items }) => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((current) => (current === id ? null : id));
    };

    return (
        <div className={styles.list}>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={styles.itemWrapper}
                    style={{ animationDelay: `${index * 60}ms` }}
                >
                    <IntegrationItem
                        item={item}
                        isOpen={openId === item.id}
                        onToggle={() => handleToggle(item.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default IntegrationsSection;
