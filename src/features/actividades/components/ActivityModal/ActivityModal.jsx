import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Users, FileText, FileCheck, MoreHorizontal, Calendar, Clock, Building, Plus } from 'lucide-react';
import { Modal } from '../../../../shared/components/UI/Modal/Modal';
import Input from '../../../../shared/components/UI/Input/Input';
import DurationDropdown from '../DurationDropdown/DurationDropdown';
import ActivityScheduleSidebar from './ActivityScheduleSidebar';
import AgentSelectDropdown from './AgentSelectDropdown';
import { useDispatch } from 'react-redux';
import { addActivity, updateActivity } from '../../store/activities.slice';
import styles from './ActivityModal.module.css';

const activityTypes = [
  { id: 'llamada', label: 'Llamada', icon: Phone },
  { id: 'correo', label: 'Correo electrónico', icon: Mail },
  { id: 'visita', label: 'Visita', icon: MapPin },
  { id: 'reunion', label: 'Reunión', icon: Users },
  { id: 'tasacion', label: 'Tasación', icon: FileText },
  { id: 'firma', label: 'Firma de contrato', icon: FileCheck },
  { id: 'otro', label: 'Otro', icon: MoreHorizontal }
];

const ActivityModal = ({ isOpen, onClose, activity = null }) => {
  const dispatch = useDispatch();
  
  const agents = [
    { id: '1', name: 'Juan Pérez' },
    { id: '2', name: 'María García' },
    { id: '3', name: 'Carlos López' }
  ];

  const [formData, setFormData] = useState({
    title: '',
    type: 'llamada',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    duration: 30,
    notes: '',
    agentId: '1',
    inviteAgents: [],
    linkedTo: '',
    property: '',
    completed: false
  });

  useEffect(() => {
    if (activity) {
      const date = new Date(activity.date);
      setFormData({
        title: activity.title || '',
        type: activity.type || 'llamada',
        date: date.toISOString().split('T')[0],
        time: date.toTimeString().slice(0, 5),
        duration: activity.duration || 30,
        notes: activity.notes || '',
        agentId: activity.agent?.id || '1',
        inviteAgents: [],
        linkedTo: activity.deal?.title || '',
        property: activity.property?.title || '',
        completed: activity.completed || false
      });
    } else {
      const today = new Date();
      setFormData({
        title: '',
        type: 'llamada',
        date: today.toISOString().split('T')[0],
        time: today.toTimeString().slice(0, 5),
        duration: 30,
        notes: '',
        agentId: '1',
        inviteAgents: [],
        linkedTo: '',
        property: '',
        completed: false
      });
    }
  }, [activity, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dateTime = new Date(`${formData.date}T${formData.time}`);
    const activityData = {
      id: activity?.id || `activity-${Date.now()}`,
      title: formData.title,
      type: formData.type,
      date: dateTime,
      duration: formData.duration,
      notes: formData.notes,
      agent: {
        id: formData.agentId,
        name: agents.find(a => a.id === formData.agentId)?.name || 'Juan Pérez'
      },
      completed: formData.completed,
      createdAt: activity?.createdAt || new Date()
    };

    if (formData.linkedTo) {
      activityData.deal = { title: formData.linkedTo };
    }

    if (formData.property) {
      activityData.property = { title: formData.property };
    }

    if (activity) {
      dispatch(updateActivity(activityData));
    } else {
      dispatch(addActivity(activityData));
    }
    
    onClose();
  };

  const handleTypeChange = (type) => {
    setFormData({ ...formData, type });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={activity ? 'Editar actividad' : 'Nueva actividad'} size="xl" className={styles.modalWrapper} noPadding>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.layout}>
          <ActivityScheduleSidebar
            selectedDate={formData.date}
            onDateChange={(date) => setFormData({ ...formData, date })}
            selectedTime={formData.time}
            onTimeChange={(time) => setFormData({ ...formData, time })}
          />
          
          <div className={styles.content}>
            <div className={styles.section}>
              <label className={styles.label}>Título</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ingrese título"
                icon={<Phone size={18} />}
                required
              />
            </div>

            <div className={styles.section}>
              <label className={styles.label}>Tipo de actividad</label>
              <div className={styles.typeButtons}>
                {activityTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      className={`${styles.typeButton} ${formData.type === type.id ? styles.active : ''}`}
                      onClick={() => handleTypeChange(type.id)}
                    >
                      <Icon size={18} />
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.grid}>
              <div className={styles.section}>
                <label className={styles.label}>Fecha</label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  icon={<Calendar size={18} />}
                  required
                />
              </div>

              <div className={styles.section}>
                <label className={styles.label}>Hora</label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  icon={<Clock size={18} />}
                  required
                />
              </div>

              <div className={styles.section}>
                <label className={styles.label}>Duración</label>
                <DurationDropdown
                  value={formData.duration}
                  onChange={(duration) => setFormData({ ...formData, duration })}
                />
              </div>
            </div>

            <div className={styles.section}>
              <label className={styles.label}>Notas</label>
              <textarea
                className={styles.textarea}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Ingresa una nota..."
                rows={4}
              />
            </div>

            <div className={styles.section}>
              <label className={styles.label}>Asigna a</label>
              <AgentSelectDropdown
                agents={agents}
                selectedAgent={formData.agentId}
                onSelect={(agentId) => setFormData({ ...formData, agentId })}
                placeholder="Agente"
              />
            </div>

            <div className={styles.section}>
              <label className={styles.label}>Vinculado a</label>
              <div className={styles.searchWithIcon}>
                <Input
                  type="text"
                  value={formData.linkedTo}
                  onChange={(e) => setFormData({ ...formData, linkedTo: e.target.value })}
                  placeholder="Busca un negocio, tasa..."
                  icon={<Users size={18} />}
                />
                <button type="button" className={styles.iconButton}>
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className={styles.section}>
              <label className={styles.label}>Dirección o código</label>
              <Input
                type="text"
                value={formData.property}
                onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                placeholder="Propiedad"
                icon={<Building size={18} />}
              />
            </div>

            <div className={styles.section}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={formData.completed}
                  onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
                />
                Marcar actividad como realizada
              </label>
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.cancelButton} onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className={styles.saveButton}>
                Guardar actividad
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ActivityModal;
