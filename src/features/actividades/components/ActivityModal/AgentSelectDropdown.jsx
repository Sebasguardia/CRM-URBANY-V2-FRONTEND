import React, { useState, useRef } from 'react';
import { ChevronDown, User } from 'lucide-react';
import { useOutsideClick } from '../../../../shared/hooks/useOutsideClick';
import Input from '../../../../shared/components/UI/Input/Input';
import styles from './AgentSelectDropdown.module.css';

const AgentSelectDropdown = ({ agents = [], selectedAgent, onSelect, placeholder = 'Agente' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const ref = useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const selectedAgentData = agents.find(a => a.id === selectedAgent);

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchQuery('');
    }
  };

  const handleSelect = (agentId) => {
    onSelect(agentId);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className={styles.container} ref={ref}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={handleToggle}
      >
        <User size={18} />
        <span className={styles.toggleText}>
          {selectedAgentData ? selectedAgentData.name : placeholder}
        </span>
        <ChevronDown size={18} className={`${styles.chevron} ${isOpen ? styles.open : ''}`} />
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.searchContainer}>
            <Input
              type="text"
              placeholder="Buscar agente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.optionsList}>
            {filteredAgents.length === 0 ? (
              <div className={styles.noResults}>No se encontraron agentes</div>
            ) : (
              filteredAgents.map((agent) => (
                <button
                  key={agent.id}
                  type="button"
                  className={`${styles.option} ${selectedAgent === agent.id ? styles.selected : ''}`}
                  onClick={() => handleSelect(agent.id)}
                >
                  {agent.name}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentSelectDropdown;


