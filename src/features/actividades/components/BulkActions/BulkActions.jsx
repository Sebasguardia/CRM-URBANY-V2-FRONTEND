import React from 'react';
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMultipleActivities, clearSelection } from '../../store/activities.slice';
import styles from './BulkActions.module.css';

const BulkActions = () => {
  const dispatch = useDispatch();
  const selectedActivities = useSelector(state => state.activities.selectedActivities);

  if (selectedActivities.length === 0) {
    return null;
  }

  const handleDelete = () => {
    if (window.confirm(`¿Estás seguro de eliminar ${selectedActivities.length} actividad(es)?`)) {
      dispatch(deleteMultipleActivities(selectedActivities));
      dispatch(clearSelection());
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.count}>
        {selectedActivities.length} seleccionada{selectedActivities.length > 1 ? 's' : ''}
      </span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        <Trash2 size={18} />
        Eliminar seleccionadas
      </button>
      <button className={styles.clearButton} onClick={() => dispatch(clearSelection())}>
        Cancelar
      </button>
    </div>
  );
};

export default BulkActions;


