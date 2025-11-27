import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import FilterButton from '../FilterButton/FilterButton';
import styles from './AgentFilter.module.css';

const AgentFilter = ({ selectedAgent, onAgentChange, agents = [] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleSelectAgent = (agentId) => {
    onAgentChange(agentId);
    setIsOpen(false);
  };

  const selectedAgentName = agents.find(a => a.id === selectedAgent)?.name || 'Agente';

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.dropdownWrapper}>
        <FilterButton
          active={!!selectedAgent}
          onClick={handleToggle}
          icon={<ChevronDown size={20} />}
        >
          {selectedAgentName}
        </FilterButton>
        {isOpen && (
          <div className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownItem}
              onClick={() => handleSelectAgent(null)}
            >
              Todos los agentes
            </button>
            {agents.map((agent) => (
              <button
                key={agent.id}
                type="button"
                className={styles.dropdownItem}
                onClick={() => handleSelectAgent(agent.id)}
              >
                {agent.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentFilter;

