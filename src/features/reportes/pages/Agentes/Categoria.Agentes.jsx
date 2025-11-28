import React, { useState } from 'react';
import styles from '../ReportesPage.module.css';
import { ExternalLink } from 'lucide-react';
import { SearchInput } from '../../components/SearchInput';
import { Table } from '../../components/Table';
import { Pagination } from '../../components/Pagination';
import { Badge } from '../../../../shared/components/UI/Badge/Badge';
import { InitialAvatar } from '../../components/InitialAvatar';
import { mockNetwork } from '../../../../shared/mocks/network.mock';

export default function CategoriaAgentes() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const agents = mockNetwork.slice(0, 40);
  const filtered = agents.filter((a) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      (a.user?.name || '').toLowerCase().includes(q) ||
      (a.user?.email || '').toLowerCase().includes(q) ||
      (a.user?.role || '').toLowerCase().includes(q)
    );
  });

  const columns = [
    {
      header: 'IMAGEN',
      align: 'center',
      render: (a) => (
        <InitialAvatar name={a.user?.name} />
      )
    },
    {
      header: 'AGENTE',
      render: (a) => (
        <div className={styles.colSmall}>
          <span className={styles.textPrimary} style={{ fontWeight: 500 }}>{a.user?.name}</span>
          <span className={styles.textSecondary}>{a.user?.email}</span>
        </div>
      )
    },
    {
      header: 'ROL',
      headerAlign: 'center',
      align: 'center',
      render: (a) => (
        <Badge variant="primary" size="md">
          {a.user?.role === 'ADMIN' ? 'Administrador' : a.user?.role === 'VALUER' ? 'Tasador' : 'Agente'}
        </Badge>
      )
    }
  ];

  return (
    <div className={`${styles.card} ${styles.animateFade}`}>
      <div className={styles.cardHeader}>
        <a className={styles.agentsAction} href="#">
          <ExternalLink size={18} />
          <span>Visitar reporte de todos los agentes</span>
        </a>
        <SearchInput className={styles.searchLocal} value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.agentsHint}>O seleccione un agente específico para ingresar a su reporte</div>
        <div style={{ height: 8 }} />
        <Table
          columns={columns}
          data={filtered.slice(0, 8)}
          columnsTemplate="120px 2fr 1fr"
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
