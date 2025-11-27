import React from 'react';
import { Modal } from '../../../../shared/components/UI/Modal/Modal';
import { useDispatch } from 'react-redux';
import { deleteActivity } from '../../store/activities.slice';
import styles from './DeleteActivityModal.module.css';

const DeleteActivityModal = ({ isOpen, onClose, activity }) => {
  const dispatch = useDispatch();

  if (!activity) return null;

  const handleDelete = () => {
    dispatch(deleteActivity(activity.id));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Eliminar actividad" size="sm">
      <div className={styles.content}>
        <p className={styles.message}>
          ¿Estás seguro de que deseas eliminar la actividad <strong>"{activity.title}"</strong>?
        </p>
        <p className={styles.warning}>
          Esta acción no se puede deshacer.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className={styles.deleteButton} onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteActivityModal;

