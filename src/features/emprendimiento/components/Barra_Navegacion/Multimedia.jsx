import React, { useState } from 'react';
import styles from './Multimedia.module.css';

export default function Multimedia({ onNext, onPrev }) {
  const [imagenes, setImagenes] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [tourUrl, setTourUrl] = useState('');

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => file.size <= 10 * 1024 * 1024); // 10MB
    setImagenes(prev => [...prev, ...validFiles]);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => file.size <= 10 * 1024 * 1024);
    setImagenes(prev => [...prev, ...validFiles]);
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleContinuar = () => {
    console.log('Imágenes:', imagenes);
    console.log('Video URL:', videoUrl);
    console.log('Tour Virtual URL:', tourUrl);
    onNext();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Multimedia</h2>
      <p className={styles.subtitle}>Aprovecha que la foto principal es la más grande y sube una imagen horizontal de 1200 x 900 px, nítida y bien iluminada</p>

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
            accept="image/*" 
            onChange={handleFileSelect}
            className={styles.fileInput}
            id="file-upload"
          />
        </div>
      </div>

      {imagenes.length > 0 && (
        <div className={styles.previewList}>
          <h4>Imágenes cargadas:</h4>
          <ul>
            {imagenes.map((img, index) => (
              <li key={index}>{img.name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.videoSection}>
        <h3 className={styles.videoTitle}>Video</h3>
        
        <div className={styles.videoGrid}>
          <div className={styles.formField}>
            <label className={styles.label}>URL del video</label>
            <input
              type="url"
              placeholder="https://www.youtube.com/kalwsjndwakljd walkdnwakjd"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className={styles.input}
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>URL del Tour Virtual</label>
            <input
              type="url"
              placeholder="https://www.ejemplo.com/"
              value={tourUrl}
              onChange={(e) => setTourUrl(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>
      </div>

      <div className={styles.formButtons}>
        <button className={styles.btnRegresar} onClick={onPrev}>Regresar</button>
        <button className={styles.btnContinuar} onClick={handleContinuar}>Continuar</button>
      </div>
    </div>
  );
}
