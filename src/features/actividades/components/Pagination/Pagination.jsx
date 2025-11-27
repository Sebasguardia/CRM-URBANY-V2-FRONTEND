import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/activities.slice';
import { filterActivities } from '../../utils/filterActivities';
import styles from './Pagination.module.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector(state => state.activities.pagination);
  const filteredActivities = useSelector(state => {
    const { items, filters } = state.activities;
    return filterActivities(items, filters);
  });

  const totalPages = Math.ceil(filteredActivities.length / limit);
  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, filteredActivities.length);

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const handlePageClick = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        Mostrando {startItem}-{endItem} de {filteredActivities.length} actividades
      </div>
      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={handlePrevious}
          disabled={page === 1}
        >
          <ChevronLeft size={18} />
        </button>
        <div className={styles.pages}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
            <button
              key={pageNum}
              className={`${styles.pageButton} ${page === pageNum ? styles.active : ''}`}
              onClick={() => handlePageClick(pageNum)}
            >
              {pageNum}
            </button>
          ))}
        </div>
        <button
          className={styles.button}
          onClick={handleNext}
          disabled={page === totalPages}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

