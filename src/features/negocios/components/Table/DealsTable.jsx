import React, { useState } from 'react';
import { MessageCircle, Calendar, Mail, MessageSquare } from 'lucide-react';
import styles from './DealsTable.module.css';

const DealsTable = ({ deals }) => {
  const [selectedDeals, setSelectedDeals] = useState([]);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedDeals(deals.map(deal => deal.id));
    } else {
      setSelectedDeals([]);
    }
  };

  const handleSelectDeal = (dealId, checked) => {
    if (checked) {
      setSelectedDeals([...selectedDeals, dealId]);
    } else {
      setSelectedDeals(selectedDeals.filter(id => id !== dealId));
    }
  };

  const isAllSelected = deals.length > 0 && selectedDeals.length === deals.length;

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkboxColumn}>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </div>
            </th>
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Propiedad</th>
            <th>Fecha</th>
            <th className={styles.optionsColumn}>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className={styles.tableRow}>
              <td className={styles.checkboxColumn}>
                <div className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selectedDeals.includes(deal.id)}
                    onChange={(e) => handleSelectDeal(deal.id, e.target.checked)}
                  />
                </div>
              </td>
              <td>
                <span className={styles.dealName}>{deal.nombre}</span>
              </td>
              <td>
                <div className={styles.contactInfo}>
                  <div className={styles.contactDetail}>
                    <span className={styles.contactLabel}>Teléfono:</span>
                    <span className={styles.contactValue}>{deal.telefono}</span>
                  </div>
                  <div className={styles.contactDetail}>
                    <span className={styles.contactLabel}>Correo electrónico:</span>
                    <span className={styles.contactValue}>{deal.email}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.propertyInfo}>
                  <span className={styles.propertyText}>
                    <span className={styles.propertyType}>{deal.propiedad.tipo}</span>
                    <span className={styles.propertySeparator}>, </span>
                    <span className={styles.propertyStatus}>{deal.propiedad.disponibilidad}</span>
                    <span className={styles.propertySeparator}>, </span>
                    <span className={styles.propertyAddress}>{deal.propiedad.direccion}</span>
                  </span>
                </div>
              </td>
              <td>
                <span className={styles.date}>{deal.fecha}</span>
              </td>
              <td className={styles.optionsColumn}>
                <div className={styles.actionButtons}>
                  <button 
                    className={styles.actionIcon} 
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <MessageCircle size={18} />
                  </button>
                  <button 
                    className={styles.actionIcon} 
                    aria-label="Calendario"
                    title="Calendario"
                  >
                    <Calendar size={18} />
                  </button>
                  <button 
                    className={styles.actionIcon} 
                    aria-label="Email"
                    title="Email"
                  >
                    <Mail size={18} />
                  </button>
                  <button 
                    className={styles.actionIcon} 
                    aria-label="Mensaje"
                    title="Mensaje"
                  >
                    <MessageSquare size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deals.length === 0 && (
        <div className={styles.emptyState}>
          <p>No hay negocios para mostrar</p>
        </div>
      )}
    </div>
  );
};

export default DealsTable;
