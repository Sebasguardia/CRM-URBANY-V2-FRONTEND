import React, { useState } from 'react';
import { Phone, Mail, MapPin, Users, FileText, FileCheck, MoreHorizontal, Check, Edit, Trash2, Calendar, Eye } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../../store/activities.slice';
import DeleteActivityModal from '../DeleteActivityModal/DeleteActivityModal';
import ViewActivityModal from '../ViewActivityModal/ViewActivityModal';
import styles from './ActivityList.module.css';

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

const ActivityList = ({ activities, onEdit }) => {
  const dispatch = useDispatch();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const formatDate = (date) => {
    const d = new Date(date);
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return d.toLocaleDateString('es-ES', options);
  };

  const handleToggleComplete = (activityId) => {
    dispatch(toggleComplete(activityId));
  };

  const handleDeleteClick = (activity) => {
    setSelectedActivity(activity);
    setDeleteModalOpen(true);
  };

  const handleViewClick = (activity) => {
    setSelectedActivity(activity);
    setViewModalOpen(true);
  };

  if (activities.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.list}>
        {activities.map((activity) => {
          const Icon = typeIcons[activity.type] || MoreHorizontal;
          const isOverdue = new Date(activity.date) < new Date() && !activity.completed;

          return (
            <div
              key={activity.id}
              className={`${styles.item} ${activity.completed ? styles.completed : ''} ${isOverdue ? styles.overdue : ''}`}
            >
              <div className={styles.icon}>
                <Icon size={20} />
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h4 className={styles.title}>{activity.title}</h4>
                  <span className={styles.type}>{typeLabels[activity.type]}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.agent}>{activity.agent?.name}</span>
                  <span className={styles.separator}>•</span>
                  <span className={styles.date}>
                    <Calendar size={14} />
                    {formatDate(activity.date)}
                  </span>
                  {activity.duration && (
                    <>
                      <span className={styles.separator}>•</span>
                      <span className={styles.duration}>{activity.duration} min</span>
                    </>
                  )}
                </div>
                {activity.notes && (
                  <p className={styles.notes}>{activity.notes}</p>
                )}
              </div>
              <div className={styles.actions}>
                <button
                  className={`${styles.actionButton} ${activity.completed ? styles.completed : ''}`}
                  onClick={() => handleToggleComplete(activity.id)}
                  title={activity.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
                >
                  <Check size={18} />
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => handleViewClick(activity)}
                  title="Ver"
                >
                  <Eye size={18} />
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => onEdit(activity)}
                  title="Editar"
                >
                  <Edit size={18} />
                </button>
                <button
                  className={`${styles.actionButton} ${styles.delete}`}
                  onClick={() => handleDeleteClick(activity)}
                  title="Eliminar"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <DeleteActivityModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedActivity(null);
        }}
        activity={selectedActivity}
      />
      <ViewActivityModal
        isOpen={viewModalOpen}
        onClose={() => {
          setViewModalOpen(false);
          setSelectedActivity(null);
        }}
        activity={selectedActivity}
      />
    </>
  );
};

export default ActivityList;

