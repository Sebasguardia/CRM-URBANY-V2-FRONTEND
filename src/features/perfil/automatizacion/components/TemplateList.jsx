import React from 'react';
import styles from '../styles/TemplateList.module.css'; // CSS Específico
import Button from './Button';
import Input from './Input';

const TemplateList = ({ type, onAddClick }) => {
  const isEmail = type === 'email';
  const title = isEmail ? 'Plantillas de email' : 'Plantillas de WhatsApp';

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <Button variant="primary" onClick={onAddClick} className={styles.addButton}>
          + Añadir nueva plantilla
        </Button>
      </div>

      <div className={styles.searchContainer}>
        <Input placeholder="Buscar plantillas por nombre" icon="search" />
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h4 className={styles.cardTitle}>{isEmail ? 'Nueva consulta' : 'Prueba_para_urbany2'}</h4>
          {!isEmail && (
            <button className={styles.menuButton} aria-label="Menú">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="1" fill="currentColor"/>
                <circle cx="12" cy="12" r="1" fill="currentColor"/>
                <circle cx="12" cy="19" r="1" fill="currentColor"/>
              </svg>
            </button>
          )}
        </div>

        {isEmail && (
          <div className={styles.cardContent}>
            <p>
              [[Saludo inicial]] [[Nombre del contacto]],<br />
              He recibido la consulta que realizaste en [[Origen de la consulta]]. Me gustaría saber en qué horario puedo comunicarme para conocer lo qué estás buscando y poder dar con una propiedad de tu interés.<br />
              Te dejo más información que tal vez te ayude en la búsqueda.<br />
              Más info sobre la propiedad consultada:<br />
              [[Enlace de la propiedad]]<br />
              [[Bloque de propiedades similares]]<br />
              [[Firma]]
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateList;