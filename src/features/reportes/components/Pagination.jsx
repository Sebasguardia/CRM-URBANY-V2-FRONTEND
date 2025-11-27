import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pagination.module.css';

export const Pagination = ({ current = 1, total = 5, onPrev, onNext, className = '' }) => {
  const isPrevDisabled = current <= 1;
  const isNextDisabled = current >= total;

  return (
    <div className={`${styles.pagination} ${className}`}>
      <button
        type="button"
        className={`${styles.circle} ${isPrevDisabled ? styles.disabled : ''}`}
        onClick={onPrev}
        disabled={isPrevDisabled}
        aria-label="Anterior"
      >
        <ChevronLeft size={18} />
      </button>

      <div className={`${styles.circle} ${styles.active}`}>{current}</div>

      <button
        type="button"
        className={`${styles.circle} ${isNextDisabled ? styles.disabled : ''}`}
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Siguiente"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;

