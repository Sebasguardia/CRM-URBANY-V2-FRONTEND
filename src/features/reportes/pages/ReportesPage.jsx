import React, { useState } from 'react';
import { Building2, Users as UsersIcon, ExternalLink } from 'lucide-react';
import styles from './ReportesPage.module.css';

import { TabButton } from '../components/TabButton';
import { Table } from '../components/Table';
import { Pagination } from '../components/Pagination';
import { Badge } from '../../../shared/components/UI/Badge/Badge';
import { Avatar } from '../../../shared/components/UI/Avatar/Avatar';

import { mockProperties } from '../../../shared/mocks/properties.mock';
import { mockNetwork } from '../../../shared/mocks/network.mock';
import { InitialAvatar } from '../components/InitialAvatar';
import CategoriaAgentes from './Categoria.Agentes';
import CategoriaPropiedades from './Categoria.Propiedades';

const formatPrice = (currency, amount) => {
  const formatted = new Intl.NumberFormat('es-ES').format(amount);
  return `${currency} ${formatted}`;
};

export default function ReportesPage() {
  const [activeTab, setActiveTab] = useState('propiedades');

  

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
            <CategoriaPropiedades />
          )}

          {activeTab === 'agentes' && (
            <CategoriaAgentes />
          )}
        </div>
      </div>
    </div>
  );
}
