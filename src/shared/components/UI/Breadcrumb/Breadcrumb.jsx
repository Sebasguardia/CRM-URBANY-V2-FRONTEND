import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export const Breadcrumb = ({ items = [], className = '' }) => {
  return (
    <nav className={`${styles.breadcrumbContainer} ${className}`} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/dashboard" className={styles.breadcrumbLink}>
            <Home size={16} />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className={styles.separator} size={16} />
            <li className={styles.breadcrumbItem}>
              {item.href ? (
                <Link to={item.href} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.breadcrumbCurrent}>{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};