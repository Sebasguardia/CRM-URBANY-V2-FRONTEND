import React, { useState } from 'react';
import styles from './Amenities.module.css';

const serviciosList = [
  'Agua corriente', 'Aire Acondicionado', 'Alumbrado Público', 'Apto Crédito', 'Apto Profesional',
  'Arbolado', 'Cable Tv', 'Calles de adoquines', 'Cámaras CCTV', 'Cisterna', 'Cordon Cuneta',
  'Desague cloacal', 'Energía solar', 'Estabilizado de calles', 'Forestacion', 'Gas natural',
  'Internet', 'Luz', 'Ofrece Financiación', 'Pavimento', 'Teléfono', 'Terraza', 'Uso Comercial', 'WiFi'
];

const ambientesList = [
  'Accesible', 'Alarma', 'Altillo', 'Área de cine', 'Área de juegos infantiles', 'Área verde',
  'Ascensor', 'Balcón', 'Barrio abierto', 'Barrio privado', 'Box/Deposito', 'Caldera', 'Calefacción',
  'Cancha de básquetbol', 'Cancha de fútbol', 'Cancha de Padel', 'Cancha de tenis', 'Cancha polideportiva',
  'Chimenea', 'Club House', 'Cocina', 'Comedor', 'Con conexión para lavarropas', 'Cowork',
  'Dependencia de servicio', 'Desayunar', 'Dormitorio en suite', 'Escritorio', 'Estacionamiento para visitantes',
  'Agua corriente', 'Gimnasio', 'Grupo electrógeno', 'Heladera', 'Jacuzzi', 'Jardín', 'Juegos recreativos',
  'Lavador', 'Living', 'Living comedor', 'Parrilla', 'Patio', 'Permite mascotas', 'Piscina', 'Placards',
  'Portón automático', 'Puerta blindada', 'Puerta de seguridad', 'Quincho', 'Rampa para silla de ruedas',
  'Sala de juegos', 'Salón de fiestas', 'Salón de usos múltiples', 'Sauna', 'Seguridad', 'Solarium',
  'Vestidor', 'Zona escolar'
];

export default function Amenities({ onNext, onPrev }) {
  const [servicios, setServicios] = useState([]);
  const [ambientes, setAmbientes] = useState([]);

  const toggleItem = (list, setList, item) => {
    setList(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleContinuar = () => {
    console.log('Servicios seleccionados:', servicios);
    console.log('Ambientes seleccionados:', ambientes);
    onNext();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Amenities del emprendimiento</h2>
      <p className={styles.subtitle}>Las amenities del emprendimiento no son campos obligatorios.</p>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Servicios</h3>
        <div className={styles.checkboxGrid}>
          {serviciosList.map((item) => (
            <label key={item} className={styles.checkboxItem}>
              <input
                type="checkbox"
                checked={servicios.includes(item)}
                onChange={() => toggleItem(servicios, setServicios, item)}
                className={styles.checkbox}
              />
              <span className={styles.checkboxLabel}>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Ambientes</h3>
        <div className={styles.checkboxGrid}>
          {ambientesList.map((item) => (
            <label key={item} className={styles.checkboxItem}>
              <input
                type="checkbox"
                checked={ambientes.includes(item)}
                onChange={() => toggleItem(ambientes, setAmbientes, item)}
                className={styles.checkbox}
              />
              <span className={styles.checkboxLabel}>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <div className={styles.formButtons}>
        <button className={styles.btnRegresar} onClick={onPrev}>Regresar</button>
        <button className={styles.btnContinuar} onClick={handleContinuar}>Continuar</button>
      </div>
    </div>
  );
}
