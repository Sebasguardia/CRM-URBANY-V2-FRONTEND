import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import styles from './Pagination.module.css';

export const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = '' 
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;
    
    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    
    if (currentPage > 3) pages.push('...');
    
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = start; i <= end; i++) pages.push(i);
    
    if (currentPage < totalPages - 2) pages.push('...');
    
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className={`${styles.paginationContainer} ${className}`}>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} />
      </button>

      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className={styles.ellipsis}>
              <MoreHorizontal size={16} />
            </span>
          ) : (
            <button
              className={`${styles.paginationButton} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};