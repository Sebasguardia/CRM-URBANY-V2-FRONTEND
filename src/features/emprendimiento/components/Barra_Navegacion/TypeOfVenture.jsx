import React, { useState } from 'react';
import styles from './TypeOfVenture.module.css';

export default function TypeOfVenture({ onNext }) {
  const [orientacion, setOrientacion] = useState(null);
  const [etapa, setEtapa] = useState(null);

  const opcionesOrientacion = ['Vertical', 'Horizontal'];
  const opcionesEtapa = ['En pozo', 'Construcción', 'Terminado'];

  const isComplete = orientacion && etapa;

  const handleContinuar = () => {
    if (isComplete) {
      onNext();
    } else {
      alert('Por favor seleccione la orientación y la etapa de desarrollo');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Añadir nuevo emprendimiento</h2>
      <p className={styles.subtitle}>Ingrese el tipo de desarrollo que desea añadir</p>

      <div className={styles.mainContent}>
        <div className={styles.visualPlaceholder}>
          <img 
            src="https://cdn3d.iconscout.com/3d/premium/thumb/construction-site-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--building-crane-architecture-heavy-machinery-pack-transport-illustrations-4660227.png?f=webp" 
            alt="Construcción" 
            className={styles.constructionImage}
          />
        </div>

        <div className={styles.opcionesSection}>
          <h3 className={styles.groupTitle}>Orientación</h3>
          <div className={styles.opciones}>
            {opcionesOrientacion.map((op) => (
              <button
                key={op}
                className={`${styles.opcion} ${orientacion === op ? styles.selected : ''}`}
                onClick={() => setOrientacion(op)}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.opcionesSection}>
          <h3 className={styles.groupTitle}>Etapa de desarrollo</h3>
          <div className={styles.opciones}>
            {opcionesEtapa.map((op) => (
              <button
                key={op}
                className={`${styles.opcion} ${etapa === op ? styles.selected : ''}`}
                onClick={() => setEtapa(op)}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.confirmacionSection}>
          {isComplete ? (
            <div className={styles.listoContent}>
              <div className={styles.handsEmoji}>👏</div>
              <h3 className={styles.listoTitle}>¡Listo!</h3>
              <button className={styles.continuarBtn} onClick={handleContinuar}>Continuar</button>
            </div>
          ) : (
            <div className={styles.emptyConfirmation}></div>
          )}
        </div>
      </div>
    </div>
  );
}
