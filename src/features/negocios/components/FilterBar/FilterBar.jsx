import React from 'react';
import { Dropdown } from '../../../../shared/components/UI/Dropdown/Dropdown';
import { AgenteDropdownNew as AgenteDropdown } from '../AgenteDropdownNew/AgenteDropdownNew';
import { TagsDropdown } from '../TagsDropdown/TagsDropdown';
import { TipoOperacionDropdown } from '../TipoOperacionDropdown/TipoOperacionDropdown';
import { TipoPropiedadDropdown } from '../TipoPropiedadDropdown/TipoPropiedadDropdown';
import { OrigenDropdown } from '../OrigenDropdown/OrigenDropdown';
import { DormitoriosDropdown } from '../DormitoriosDropdown/DormitoriosDropdown';
import { PrecioDropdown } from '../PrecioDropdown/PrecioDropdown';
import { UbicacionDropdown } from '../UbicacionDropdown/UbicacionDropdown';
import { Calendar, Download } from 'lucide-react';
import styles from './FilterBar.module.css';

const FilterBar = ({ filters, onFilterChange }) => {
  const agenteOptions = [
    { value: '', label: 'Agente' },
    { value: 'agent1', label: 'URBANY2' },
  ];

  const negociosAbiertosOptions = [
    { value: '', label: 'Negocios Abiertos' },
    { value: 'Abiertos', label: 'Negocios Abiertos' },
    { value: 'Cerrados', label: 'Negocios Cerrados' },
    { value: 'Todos', label: 'Todos los Negocios' }
  ];

  const etiquetasOptions = [
    { value: '', label: 'Etiquetas' },
  ];

  const tipoOperacionOptions = [
    { value: 'venta', label: 'Venta' },
    { value: 'alquiler', label: 'Alquiler' },
    { value: 'alquiler_temporal', label: 'Alquiler temporal' }
  ];

  const tipoPropiedadOptions = [
    { value: '', label: 'Tipo Propiedad' },
    { value: 'casa', label: 'Casa' },
    { value: 'departamento', label: 'Departamento' },
    { value: 'terreno', label: 'Terreno' }
  ];

  const precioOptions = [
    { value: '', label: 'Precio' },
    { value: '0-100000', label: '$0 - $100,000' },
    { value: '100000-500000', label: '$100,000 - $500,000' }
  ];

  const ubicacionOptions = [
    { value: '', label: 'Ubicación' },
    { value: 'santiago', label: 'Santiago' },
    { value: 'valparaiso', label: 'Valparaíso' }
  ];

  const dormitoriosOptions = [
    { value: '', label: 'Dormitorios' },
    { value: '1', label: '1 dormitorio' },
    { value: '2', label: '2 dormitorios' },
    { value: '3', label: '3+ dormitorios' }
  ];

  const origenOptions = [
    { value: '', label: 'Origen' },
    { value: 'web', label: 'Web' },
    { value: 'referido', label: 'Referido' },
    { value: 'llamada', label: 'Llamada' }
  ];

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterRow}>
        <AgenteDropdown
          options={agenteOptions}
          value={filters.agente || []}
          onChange={(value) => onFilterChange('agente', value)}
          placeholder="Agente"
          className={styles.filterDropdown}
        />
        <Dropdown
          options={negociosAbiertosOptions}
          value={filters.negociosAbiertos}
          onChange={(value) => onFilterChange('negociosAbiertos', value)}
          placeholder="Negocios Abiertos"
          className={styles.filterDropdown}
        />
        <TagsDropdown
          options={etiquetasOptions}
          value={filters.etiquetas || []}
          onChange={(value) => onFilterChange('etiquetas', value)}
          placeholder="Etiquetas"
          className={styles.filterDropdown}
        />
        <TipoOperacionDropdown
          value={filters.tipoOperacion || []}
          onChange={(value) => onFilterChange('tipoOperacion', value)}
          className={styles.filterDropdown}
        />
        <TipoPropiedadDropdown
          value={filters.tipoPropiedad || []}
          onChange={(value) => onFilterChange('tipoPropiedad', value)}
          className={styles.filterDropdown}
        />
      </div>

      <div className={styles.filterRow}>
        <PrecioDropdown
          value={filters.precio || { moneda: 'USD', min: '', max: '' }}
          onChange={(value) => onFilterChange('precio', value)}
          className={styles.filterDropdown}
        />
        <UbicacionDropdown
          value={filters.ubicacion || []}
          onChange={(value) => onFilterChange('ubicacion', value)}
          className={styles.filterDropdown}
        />
        <DormitoriosDropdown
          value={filters.dormitorios || []}
          onChange={(value) => onFilterChange('dormitorios', value)}
          className={styles.filterDropdown}
        />
        <OrigenDropdown
          value={filters.origen || []}
          onChange={(value) => onFilterChange('origen', value)}
          className={styles.filterDropdown}
        />

        <button className={styles.actionButton} aria-label="Filtrar por fecha">
          <Calendar size={18} />
        </button>
        <button className={styles.actionButton} aria-label="Descargar">
          <Download size={18} />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
