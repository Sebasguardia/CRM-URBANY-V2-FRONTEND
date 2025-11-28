import React, { useState } from 'react';
import styles from '../ReportesPage.module.css';
import { SearchInput } from '../../components/SearchInput';
import { Table } from '../../components/Table';
import { Pagination } from '../../components/Pagination';
import { Badge } from '../../../../shared/components/UI/Badge/Badge';
import { Avatar } from '../../../../shared/components/UI/Avatar/Avatar';
import { mockProperties } from '../../../../shared/mocks/properties.mock';

const formatPrice = (currency, amount) => {
  const formatted = new Intl.NumberFormat('es-ES').format(amount);
  return `${currency} ${formatted}`;
};

export default function CategoriaPropiedades() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const properties = mockProperties.slice(0, 40);
  const filtered = properties.filter((p) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      (p.address?.full || '').toLowerCase().includes(q) ||
      (p.id || '').toLowerCase().includes(q) ||
      (p.address?.city || '').toLowerCase().includes(q) ||
      (p.type || '').toLowerCase().includes(q)
    );
  });

  const columns = [
    {
      header: 'FOTO',
      render: (p) => (
        <Avatar src={p.images?.[0]} alt={p.title} size="xl" />
      )
    },
    {
      header: 'DIRECCIÓN',
      render: (p) => (
        <div className={styles.colSmall}>
          <div className={styles.textPrimary} style={{ fontWeight: 500 }}>{p.address?.full}</div>
          <div className={styles.rowWide}>
            <Badge variant="primary" size="sm">ID {p.id}</Badge>
            <span className={styles.textSecondary}>Distrito {p.address?.city}</span>
          </div>
        </div>
      )
    },
    {
      header: 'TIPO',
      render: (p) => (
        <div className={styles.colSmall}>
          <span className={styles.textPrimary}>{p.type}</span>
          <span className={styles.textSecondary}>
            {p.bedrooms} hab · {p.bathrooms} baños · {p.area} m²
          </span>
        </div>
      )
    },
    {
      header: 'PRECIO',
      render: (p) => (
        <div className={styles.colSmall}>
          <span className={styles.textSecondary}>{p.operation}</span>
          <span className={styles.textPrice}>{formatPrice(p.currency, p.price)}</span>
        </div>
      )
    }
  ];

  return (
    <div className={`${styles.card} ${styles.animateFade}`}>
      <div className={styles.cardHeader}>
        <div className={styles.sectionTitle}>Propiedades</div>
        <SearchInput className={styles.searchLocal} value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className={styles.cardBody}>
        <Table
          columns={columns}
          data={filtered.slice(0, 8)}
          columnsTemplate="120px 2fr 1.2fr 1fr"
        />
        <div className={styles.footer}>
          <Pagination
            current={page}
            total={5}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(5, p + 1))}
          />
        </div>
      </div>
    </div>
  );
}
