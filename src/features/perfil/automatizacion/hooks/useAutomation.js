// src/features/perfil/automatizacion/hooks/useAutomation.js
import { useState } from 'react';
import useModal from '../../../../shared/hooks/useModal';

export const VIEW_TYPES = {
  MERCADO_LIBRE: 'mercadolibre',
  EMAIL_TEMPLATES: 'email_templates',
  WHATSAPP_TEMPLATES: 'whatsapp_templates'
};

export const useAutomation = () => {
  const [currentView, setCurrentView] = useState(VIEW_TYPES.MERCADO_LIBRE);

  // IDs únicos
  const {
    isOpen: isCreateModalOpen,
    open: openCreateModal,
    close: closeCreateModal
  } = useModal('automation_create');

  const {
    isOpen: isConfigModalOpen,
    open: openConfigModal,
    close: closeConfigModal
  } = useModal('automation_config');

  const [selectedAutomation, setSelectedAutomation] = useState(null);

  const handleAutomationClick = (automation) => {
    setSelectedAutomation(automation);
    openConfigModal();
  };

  return {
    currentView,
    setCurrentView,

    modals: {
      create: {
        isOpen: isCreateModalOpen,
        open: openCreateModal,
        close: closeCreateModal
      },
      config: {
        isOpen: isConfigModalOpen,
        open: openConfigModal,
        close: closeConfigModal
      }
    },

    selectedAutomation,
    handleAutomationClick
  };
};
