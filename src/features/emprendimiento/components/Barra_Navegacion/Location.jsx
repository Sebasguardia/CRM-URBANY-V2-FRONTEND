import React, { useState } from 'react';
import styles from './Location.module.css';

export default function Location({ onNext, onPrev }) {
  const [ubicacion, setUbicacion] = useState({
    ciudad: '',
    latitud: '',
    longitud: '',
    precision: 'Exacta',
    videoUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUbicacion((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinuar = () => {
    console.log('Ubicación del proyecto:', ubicacion);
    onNext();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ubicación del proyecto</h2>

      <div className={styles.layoutGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>URL del video</label>
            <input
              type="url"
              name="videoUrl"
              placeholder="https://www.youtube.com/kalwsjndwaklid walkdnwakjd"
              value={ubicacion.videoUrl}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98514.87487819308!2d-98.78574543945312!3d39.78000899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a0f75db8d2f7f5%3A0x98b9f77e9d1a2e7e!2sSmith%20Center%2C%20KS%2066967%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Ciudad, localidad o barrio
              <span className={styles.helpIcon}>?</span>
            </label>
            <div className={styles.inputWithIcon}>
              <svg className={styles.locationIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1a1a1a"/>
              </svg>
              <input
                type="text"
                name="ciudad"
                placeholder="Escribe un lugar para buscar"
                value={ubicacion.ciudad}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.coordsGrid}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Latitud</label>
              <input
                type="text"
                name="latitud"
                placeholder="Ingrese la dirección"
                value={ubicacion.latitud}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Longitud</label>
              <input
                type="text"
                name="longitud"
                placeholder="Ingrese la dirección"
                value={ubicacion.longitud}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Mostrar ubicación
              <span className={styles.helpIcon}>?</span>
            </label>
            <div className={styles.selectWrapper}>
              <select 
                name="precision" 
                value={ubicacion.precision} 
                onChange={handleChange}
                className={styles.select}
              >
                <option value="Exacta">Exacta</option>
                <option value="Aproximada">Aproximada</option>
              </select>
              <svg className={styles.selectArrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
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
