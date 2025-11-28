import React from 'react';
import styles from './Table.module.css';

export const Table = ({ columns = [], data = [], columnsTemplate = '120px 1.6fr 1fr 1fr', className = '' }) => {
  return (
    <div className={`${styles.tableWrapper} ${className}`} style={{ ['--table-columns']: columnsTemplate }}>
      <div className={styles.tableHeader}>
        {columns.map((col, idx) => (
          <div
            key={idx}
            className={styles.headerCell}
            style={{
              textAlign:
                (col.headerAlign || col.align) === 'right'
                  ? 'right'
                  : (col.headerAlign || col.align) === 'center'
                  ? 'center'
                  : 'left'
            }}
          >
            {col.header}
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {data.map((row, i) => (
          <div key={i} className={styles.row}>
            {columns.map((col, idx) => (
              <div
                key={idx}
                className={styles.cell}
                style={{ justifyContent: col.align === 'right' ? 'flex-end' : col.align === 'center' ? 'center' : 'flex-start' }}
              >
                {col.render(row)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
