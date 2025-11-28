import React from 'react';
import styles from '../styles/AutomationPage.module.css';
import { useAutomation, VIEW_TYPES } from '../hooks/useAutomation';

// Sub-componentes
import CategoryMenu from '../components/CategoryMenu';
import AutomationList from '../components/AutomationList';
import TemplateList from '../components/TemplateList';

// Componentes Locales
import { Modal } from '../components/Modal';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Toggle from '../components/Toggle';
import Textarea from '../components/Textarea';

const AutomationPage = () => {
  const { currentView, setCurrentView, modals, selectedAutomation, handleAutomationClick } = useAutomation();

  const renderContent = () => {
    switch (currentView) {
      case VIEW_TYPES.MERCADO_LIBRE:
        return <AutomationList onSelect={handleAutomationClick} />;
      case VIEW_TYPES.EMAIL_TEMPLATES:
        return <TemplateList type="email" onAddClick={modals.create.open} />;
      case VIEW_TYPES.WHATSAPP_TEMPLATES:
        return <TemplateList type="whatsapp" onAddClick={modals.create.open} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Automatización</h1>
        <p className={styles.subtitle}>Cree flujos de trabajo automatizados para ahorrarse tiempo en tareas repetitivas.</p>
      </div>

      <div className={styles.contentWrapper}>
        {/* Sidebar */}
        <CategoryMenu currentView={currentView} onChangeView={setCurrentView} />

        {/* Contenido Dinámico */}
        <div className={styles.mainContent}>
          {renderContent()}
        </div>
      </div>

      {/* --- MODALES --- */}

      {/* 1. Modal Configurar */}
      <Modal
        isOpen={modals.config.isOpen}
        onClose={modals.config.close}
        size="md"
        title=""
      >
        <div className={styles.configModalContent}>
          <div className={styles.grayHeaderBox}>
            Cada vez que se añade una una propiedad, enviar un email a interesados
          </div>

          <div className={styles.configLink}>
            <div className={styles.configLinkTitle}>Selecciona la plantilla de email</div>
            <div className={styles.configLinkText}>
              Puedes crear plantillas personalizables en <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView(VIEW_TYPES.EMAIL_TEMPLATES); modals.config.close(); }}>Automatización &gt; Plantillas.</a>
            </div>
          </div>

          <div className={styles.formGroup}>
            <Select placeholder="Seleccionar una plantilla" options={['Nueva consulta', 'Difusión de una nueva propiedad', 'Negocio ganado', 'Negocio cerrado']} />
          </div>

          <div className={styles.togglesContainer}>
            <div className={styles.toggleRow}>
              <span className={styles.toggleLabel}>Habilitar seguimiento de aperturas</span>
              <Toggle />
            </div>
            <div className={styles.toggleRow}>
              <span className={styles.toggleLabel}>Habilitar seguimiento de aperturas</span>
              <Toggle />
            </div>
          </div>

          <div className={styles.mainToggleContainer}>
            <div className={styles.blueCircleIcon}></div>
            <div className={styles.mainToggleRow}>
              <span>Activar Automatización</span>
              <Toggle size="large" />
            </div>
          </div>
        </div>
      </Modal>

      {/* 2. Modal Crear Plantilla */}
      <Modal
        isOpen={modals.create.isOpen}
        onClose={modals.create.close}
        title={currentView === VIEW_TYPES.WHATSAPP_TEMPLATES ? 'Crear una plantilla para WhatsApp' : undefined}
        size="lg"
      >
        <div className={styles.createModalContent}>
          <div className={styles.row}>
            <div className={styles.col}>
              <Input 
                label={currentView === VIEW_TYPES.WHATSAPP_TEMPLATES ? "Nombre" : "Nombre de la plantilla"} 
                defaultValue={currentView === VIEW_TYPES.WHATSAPP_TEMPLATES ? "prueba_para_urbany2" : "pepe"}
                placeholder={currentView === VIEW_TYPES.WHATSAPP_TEMPLATES ? "prueba_para_urbany2" : "pepe"} 
              />
            </div>
            {currentView === VIEW_TYPES.EMAIL_TEMPLATES && (
              <div className={styles.col}>
                <Select label="Nombre y Apellido" options={['Privado', 'Público']} defaultValue="Privado" />
              </div>
            )}
          </div>

          {currentView === VIEW_TYPES.EMAIL_TEMPLATES && (
            <div className={styles.row}>
              <div className={styles.colFull}>
                <Input label="Asunto" defaultValue="99999999" placeholder="99999999" />
              </div>
            </div>
          )}

          <div className={styles.editorContainer}>
            <label className={styles.editorLabel}>Plantilla</label>
            <Textarea
              placeholder=""
              rows={12}
              className={styles.editorTextarea}
            />
          </div>

          {currentView === VIEW_TYPES.WHATSAPP_TEMPLATES && (
            <div className={styles.aiToggleContainer}>
              <Toggle /> <span className={styles.aiLabel}>Utilizar IA</span>
            </div>
          )}

          <div className={styles.modalFooter}>
            <Button variant="secondary" onClick={modals.create.close} className={styles.cancelButton}>cancelar</Button>
            <Button variant="primary" className={styles.saveButton}>Guardar Plantilla</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AutomationPage;