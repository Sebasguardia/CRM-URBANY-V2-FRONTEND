import React from 'react';
import { Modal } from '../../../../shared/components/UI/Modal/Modal';
import { Phone, Mail, MapPin, Users, FileText, FileCheck, MoreHorizontal, Calendar, Clock, User, Check } from 'lucide-react';
import styles from './ViewActivityModal.module.css';

const typeIcons = {
  llamada: Phone,
  correo: Mail,
  visita: MapPin,
  reunion: Users,
  tasacion: FileText,
  firma: FileCheck,
  otro: MoreHorizontal
};

const typeLabels = {
  llamada: 'Llamada',
  correo: 'Correo electrónico',
  visita: 'Visita',
  reunion: 'Reunión',
  tasacion: 'Tasación',
  firma: 'Firma de contrato',
  otro: 'Otro'
};

const ViewActivityModal = ({ isOpen, onClose, activity }) => {
  if (!activity) return null;

  const Icon = typeIcons[activity.type] || MoreHorizontal;

  const formatDate = (date) => {
    const d = new Date(date);
    const options = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return d.toLocaleDateString('es-ES', options);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Detalles de la actividad" size="md">
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Icon size={24} />
          </div>
          <div className={styles.headerContent}>
            <h3 className={styles.title}>{activity.title}</h3>
            <span className={styles.type}>{typeLabels[activity.type]}</span>
          </div>
          {activity.completed && (
            <div className={styles.completedBadge}>
              <Check size={16} />
              Completada
            </div>
          )}
        </div>

        <div className={styles.section}>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>
              <User size={16} />
              Agente
            </div>
            <div className={styles.fieldValue}>{activity.agent?.name || 'No asignado'}</div>
          </div>

          <div className={styles.field}>
            <div className={styles.fieldLabel}>
              <Calendar size={16} />
              Fecha y hora
            </div>
            <div className={styles.fieldValue}>{formatDate(activity.date)}</div>
          </div>

          {activity.duration && (
            <div className={styles.field}>
              <div className={styles.fieldLabel}>
                <Clock size={16} />
                Duración
              </div>
              <div className={styles.fieldValue}>{activity.duration} minutos</div>
            </div>
          )}
        </div>

        {activity.notes && (
          <div className={styles.section}>
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Notas</div>
              <div className={styles.fieldValue}>{activity.notes}</div>
            </div>
          </div>
        )}

        {activity.deal && (
          <div className={styles.section}>
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Operación</div>
              <div className={styles.fieldValue}>{activity.deal.title}</div>
            </div>
          </div>
        )}

        {activity.property && (
          <div className={styles.section}>
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Propiedad</div>
              <div className={styles.fieldValue}>{activity.property.title}</div>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ViewActivityModal;

