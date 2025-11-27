import React, { useState } from 'react';
import { Building2, Users as UsersIcon, ExternalLink } from 'lucide-react';
import styles from './ReportesPage.module.css';

import { TabButton } from '../components/TabButton';
import { SearchInput } from '../components/SearchInput';
import { Table } from '../components/Table';
import { Pagination } from '../components/Pagination';
import { Badge } from '../../../shared/components/UI/Badge/Badge';
import { Avatar } from '../../../shared/components/UI/Avatar/Avatar';

import { mockProperties } from '../../../shared/mocks/properties.mock';
import { mockNetwork } from '../../../shared/mocks/network.mock';
import { InitialAvatar } from '../components/InitialAvatar';

const formatPrice = (currency, amount) => {
  const formatted = new Intl.NumberFormat('es-ES').format(amount);
  return `${currency} ${formatted}`;
};

export default function ReportesPage() {
  const [activeTab, setActiveTab] = useState('propiedades');
  const [page, setPage] = useState(1);
  const [searchPropiedades, setSearchPropiedades] = useState('');
  const [searchAgentes, setSearchAgentes] = useState('');

  const properties = mockProperties.slice(0, 40);
  const agents = mockNetwork.slice(0, 40);

  const filteredProperties = properties.filter((p) => {
    const q = searchPropiedades.trim().toLowerCase();
    if (!q) return true;
    return (
      (p.address?.full || '').toLowerCase().includes(q) ||
      (p.id || '').toLowerCase().includes(q) ||
      (p.address?.city || '').toLowerCase().includes(q) ||
      (p.type || '').toLowerCase().includes(q)
    );
  });

  const filteredAgents = agents.filter((a) => {
    const q = searchAgentes.trim().toLowerCase();
    if (!q) return true;
    return (
      (a.user?.name || '').toLowerCase().includes(q) ||
      (a.user?.email || '').toLowerCase().includes(q) ||
      (a.user?.role || '').toLowerCase().includes(q)
    );
  });

  const propertyColumns = [
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

  const agentColumns = [
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
      align: 'right',
      render: (a) => (
        <Badge variant="primary" size="md">
          {a.user?.role === 'ADMIN' ? 'Administrador' : a.user?.role === 'VALUER' ? 'Tasador' : 'Agente'}
        </Badge>
      )
    }
  ];

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.pageTitle}>Reportes</div>
        <p className={styles.subtitle}>Encuentre las estadísticas de su negocio para facilitar sus próximas decisiones.</p>
      </div>

      <div className={styles.content}>
        <div>
          <div className={styles.categoriesTitle}>Categorías</div>
          <div className={styles.tabs}>
          <TabButton
            icon={<Building2 size={18} />}
            label="Propiedades"
            active={activeTab === 'propiedades'}
            onClick={() => setActiveTab('propiedades')}
          />
          <TabButton
            icon={<UsersIcon size={18} />}
            label="Agentes"
            active={activeTab === 'agentes'}
            onClick={() => setActiveTab('agentes')}
          />
          </div>
        </div>

        <div>
          {activeTab === 'propiedades' && (
            <div>
              <div className={`${styles.card} ${styles.animateFade}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.sectionTitle}>Propiedades</div>
                  <SearchInput className={styles.searchLocal} value={searchPropiedades} onChange={(e) => setSearchPropiedades(e.target.value)} />
                </div>
                <div className={styles.cardBody}>
                  <Table
                    columns={propertyColumns}
                    data={filteredProperties.slice(0, 8)}
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
            </div>
          )}

          {activeTab === 'agentes' && (
            <div>
              <div className={`${styles.card} ${styles.animateFade}`}>
                <div className={styles.cardHeader}>
                  <a className={styles.agentsAction} href="#">
                    <ExternalLink size={18} />
                    <span>Visitar reporte de todos los agentes</span>
                  </a>
                  <SearchInput className={styles.searchLocal} value={searchAgentes} onChange={(e) => setSearchAgentes(e.target.value)} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.agentsHint}>O seleccione un agente específico para ingresar a su reporte</div>
                  <div style={{ height: 8 }} />
                  <Table
                    columns={agentColumns}
                    data={filteredAgents.slice(0, 8)}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
