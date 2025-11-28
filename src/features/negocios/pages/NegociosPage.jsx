import { useState } from 'react';
import { Download, User, Mail, Phone, Home } from 'lucide-react';
import DealStatusTabs from '../components/StatusTab/DealStatusTabs';
import FilterBar from '../components/FilterBar/FilterBar';
import DealsTable from '../components/Table/DealsTable';
import { Modal } from '../../../shared/components/UI/Modal/Modal';
import Button from '../../../shared/components/UI/Button/Button';
import { ModalDropdown } from '../components/ModalDropdown/ModalDropdown';
import { useNegocios } from '../hooks/useNegocios';
import styles from './NegociosPage.module.css';

const NegociosPage = () => {
  const [activeTab, setActiveTab] = useState('nuevo');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    agente: '',
    negociosAbiertos: '',
    etiquetas: '',
    tipoOperacion: '',
    tipoPropiedad: '',
    precio: '',
    ubicacion: '',
    dormitorios: '',
    origen: ''
  });

  const [formData, setFormData] = useState({
    nombreContacto: '',
    email: '',
    telefono: '',
    agenteAsignado: '',
    etapaActual: '',
    comoContacto: '',
    propiedadesInteres: ''
  });

  const { deals: allDeals } = useNegocios();

  // Filtrar deals por tab activo
  const deals = allDeals.filter(deal => deal.estado === activeTab);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveNegocio = () => {
    console.log('Guardar negocio:', formData);
    setIsModalOpen(false);
    // Aquí iría la lógica para guardar el negocio
  };

  return (
    <div className={styles.negociosPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Negocios</h1>
        <div className={styles.headerActions}>
          <button className={styles.iconButton} aria-label="Scroll to top">
            <Download size={20} />
          </button>
          <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>
            Agregar nuevo negocio
          </button>
        </div>
      </div>

      {/* Status Tabs */}
      <DealStatusTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Search Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar por nombre, correo electrónico, teléfono y propiedad"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      {/* Table */}
      <DealsTable deals={deals} />

      {/* Modal Agregar Negocio */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Agregar Nuevo Negocio"
        size="md"
      >
        <div className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nombre de la persona de contacto</label>
            <div className={styles.inputWrapper}>
              <User size={18} className={styles.inputIcon} />
              <input
                type="text"
                className={styles.modalInput}
                value={formData.nombreContacto}
                onChange={(e) => handleFormChange('nombreContacto', e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>E-Mail</label>
            <div className={styles.inputWrapper}>
              <Mail size={18} className={styles.inputIcon} />
              <input
                type="email"
                className={styles.modalInput}
                value={formData.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Teléfono</label>
            <div className={styles.inputWrapper}>
              <Phone size={18} className={styles.inputIcon} />
              <input
                type="tel"
                className={styles.modalInput}
                value={formData.telefono}
                onChange={(e) => handleFormChange('telefono', e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Agente asignado</label>
            <ModalDropdown
              options={[
                { value: 'agente1', label: 'Agente 1' },
                { value: 'agente2', label: 'Agente 2' },
                { value: 'agente3', label: 'Agente 3' }
              ]}
              value={formData.agenteAsignado}
              onChange={(value) => handleFormChange('agenteAsignado', value)}
              placeholder="Seleccionar agente"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Etapa actual del negocio</label>
            <ModalDropdown
              options={[
                { value: 'nuevo', label: 'Nuevo Negocio' },
                { value: 'contacto', label: 'Contacto' },
                { value: 'visita', label: 'Visita Programada' }
              ]}
              value={formData.etapaActual}
              onChange={(value) => handleFormChange('etapaActual', value)}
              placeholder="Seleccionar etapa"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Como nos cantactó</label>
            <ModalDropdown
              options={[
                { value: 'web', label: 'Sitio Web' },
                { value: 'telefono', label: 'Teléfono' },
                { value: 'email', label: 'Email' },
                { value: 'redes', label: 'Redes Sociales' }
              ]}
              value={formData.comoContacto}
              onChange={(value) => handleFormChange('comoContacto', value)}
              placeholder="Seleccionar origen"
            />
          </div>

          <div className={styles.toggleSection}>
            <button className={styles.toggleButton}>Filtros manuales</button>
            <button className={styles.toggleButton}>Le interesa una propiedad</button>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Propiedades de interés</label>
            <div className={styles.inputWrapper}>
              <Home size={18} className={styles.inputIcon} />
              <input
                type="text"
                className={styles.modalInput}
                value={formData.propiedadesInteres}
                onChange={(e) => handleFormChange('propiedadesInteres', e.target.value)}
              />
            </div>
          </div>

          <div className={styles.modalActions}>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSaveNegocio}>
              Guardar negocio
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NegociosPage;
