import React from 'react';
import { Phone, Mail, MapPin, Users, FileText, FileCheck, MoreHorizontal } from 'lucide-react';
import FilterButton from '../FilterButton/FilterButton';
import AgentFilter from '../AgentFilter/AgentFilter';
import styles from './ActivityTypeFilter.module.css';

const activityTypes = [
  { id: 'llamada', label: 'Llamada', icon: Phone },
  { id: 'correo', label: 'Correo electrónico', icon: Mail },
  { id: 'visita', label: 'Visita', icon: MapPin },
  { id: 'reunion', label: 'Reunión', icon: Users },
  { id: 'tasacion', label: 'Tasación', icon: FileText },
  { id: 'firma', label: 'Firma de contrato', icon: FileCheck },
  { id: 'otro', label: 'Otro', icon: MoreHorizontal }
];

const ActivityTypeFilter = ({ selectedType, onTypeChange, selectedAgent, onAgentChange, agents = [] }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Filtrar por:</span>
      <div className={styles.buttons}>
        <AgentFilter
          selectedAgent={selectedAgent}
          onAgentChange={onAgentChange}
          agents={agents}
        />
        {activityTypes.map((type) => {
          const Icon = type.icon;
          return (
            <FilterButton
              key={type.id}
              active={selectedType === type.id}
              onClick={() => onTypeChange(type.id)}
              icon={<Icon size={20} />}
            >
              {type.label}
            </FilterButton>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityTypeFilter;

