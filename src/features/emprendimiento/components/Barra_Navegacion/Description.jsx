import React, { useState, useEffect } from 'react';
import styles from './Description.module.css';

export default function Description({ onPrev }) {
  const [descripcion, setDescripcion] = useState('');
  const [generando, setGenerando] = useState(true);

  useEffect(() => {
    // Simula generación automática con IA
    const timeout = setTimeout(() => {
      setDescripcion('Este emprendimiento destaca por su ubicación estratégica, diseño moderno y excelente conectividad. Ideal para uso residencial o comercial, ofrece ambientes amplios, servicios completos y acceso a transporte público.');
      setGenerando(false);
    }, 3000); // 3 segundos de espera

    return () => clearTimeout(timeout);
  }, []);

  const handleGuardar = () => {
    console.log('Descripción final:', descripcion);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Descripción del inmueble</h2>
      <p className={styles.subtitle}>Ingrese una descripción con los puntos a destacar de la propiedad.</p>

      {generando ? (
        <div className={styles.generandoBox}>
          <p className={styles.generandoText}>La descripción está siendo creada utilizando inteligencia artificial, por favor aguarda un momento.</p>
        </div>
      ) : (
        <textarea
          rows={8}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Escriba aquí los detalles del inmueble..."
          className={styles.textarea}
        />
      )}

      <div className={styles.formButtons}>
        <button className={styles.btnRegresar} onClick={onPrev}>Regresar</button>
        <button className={styles.btnGuardar} onClick={handleGuardar}>Guardar proyecto</button>
      </div>
    </div>
  );
}
