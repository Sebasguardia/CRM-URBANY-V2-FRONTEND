import React, { useState } from 'react';
import styles from './Plans.module.css';

export default function Plans({ onNext, onPrev }) {
  const [planos, setPlanos] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file =>
      (file.type === 'image/png' || file.type === 'image/jpeg') &&
      file.size <= 10 * 1024 * 1024
    );
    setPlanos(prev => [...prev, ...validFiles]);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file =>
      (file.type === 'image/png' || file.type === 'image/jpeg') &&
      file.size <= 10 * 1024 * 1024
    );
    setPlanos(prev => [...prev, ...validFiles]);
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleContinuar = () => {
    console.log('Planos subidos:', planos);
    onNext();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Planos</h2>
      <p className={styles.subtitle}>ingresa las imagenes de los planos del emprendimiento, recuerda que sean tipo .png o .jpg.</p>

      <div
        className={styles.dropZone}
        onDrop={handleDrop}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        onDragLeave={preventDefaults}
      >
        <div className={styles.dropContent}>
          <svg className={styles.imageIcon} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="15" width="60" height="50" rx="4" stroke="#60A5FA" strokeWidth="3" fill="none"/>
            <rect x="15" y="20" width="50" height="40" rx="4" fill="#DBEAFE"/>
            <circle cx="30" cy="35" r="5" fill="#60A5FA"/>
            <path d="M20 50 L35 35 L45 45 L55 35 L60 40" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          
          <p className={styles.dropText}>
            <span className={styles.linkText}>Cargue imágenes</span> o simplemente arrastre y suelte
          </p>
          
          <p className={styles.dropHint}>
            -Ten en cuenta no utilizar imágenes extremadamente grandes (10mb máximo).
          </p>
          
          <input 
            type="file" 
            multiple 
            accept=".png,.jpg,.jpeg" 
            onChange={handleFileSelect}
            className={styles.fileInput}
            id="file-upload-plans"
          />
        </div>
      </div>

      {planos.length > 0 && (
        <div className={styles.previewList}>
          <h4>Planos cargados:</h4>
          <ul>
            {planos.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.formButtons}>
        <button className={styles.btnRegresar} onClick={onPrev}>Regresar</button>
        <button className={styles.btnContinuar} onClick={handleContinuar}>Continuar</button>
      </div>
    </div>
  );
}
