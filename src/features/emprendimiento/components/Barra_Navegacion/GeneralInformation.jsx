import React, { useState } from 'react';
import styles from './GeneralInformation.module.css';

export default function GeneralInformation({ onNext, onPrev }) {
  const [form, setForm] = useState({
    titulo: '',
    fechaEntrega: '',
    nroUnidades: '',
    formaPago: '',
    pisosPorEdificio: '',
    departamentosPorPiso: '',
    cocheras: '',
    departamentosTotales: '',
    oficinas: '',
    locales: '',
    ascensores: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinuar = () => {
    // Validación básica
    if (!form.titulo || !form.fechaEntrega || !form.nroUnidades || !form.pisosPorEdificio || !form.departamentosPorPiso || !form.cocheras) {
      alert('Por favor completa todos los campos obligatorios (*)');
      return;
    }
    console.log('Formulario válido:', form);
  };

  return (
    <div className={styles.container}>
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Características generales</h3>
        <p className={styles.sectionSubtitle}>Los campos (*) son requeridos</p>
        
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label className={styles.label}>Título del emprendimiento (*)</label>
            <input 
              type="text" 
              name="titulo" 
              value={form.titulo} 
              onChange={handleChange} 
              placeholder="Ingrese título"
              className={styles.input}
              required 
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Fecha de entrega(*)</label>
            <input 
              type="date" 
              name="fechaEntrega" 
              value={form.fechaEntrega} 
              onChange={handleChange} 
              placeholder="Seleccionar fecha"
              className={styles.input}
              required 
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Nro. de unidades (*)</label>
            <input 
              type="number" 
              name="nroUnidades" 
              value={form.nroUnidades} 
              onChange={handleChange} 
              placeholder="Ingrese cantidad de unidades"
              className={styles.input}
              required 
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Forma de pago <span className={styles.optional}>*Opcional</span></label>
            <input 
              type="text" 
              name="formaPago" 
              value={form.formaPago} 
              onChange={handleChange} 
              placeholder="Ingrese la forma de pago"
              className={styles.input}
            />
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Cantidad de unidades</h3>
        <p className={styles.sectionSubtitle}>Ingrese la cantidad solo en números</p>
        
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label className={styles.label}>Cantidad de pisos por edificio (*)</label>
            <input 
              type="number" 
              name="pisosPorEdificio" 
              value={form.pisosPorEdificio} 
              onChange={handleChange} 
              placeholder="Ingrese cantidad de pisos"
              className={styles.input}
              required 
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Cantidad de departamentos por piso(*)</label>
            <input 
              type="number" 
              name="departamentosPorPiso" 
              value={form.departamentosPorPiso} 
              onChange={handleChange} 
              placeholder="Ingrese cantidad de departamentos"
              className={styles.input}
              required 
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Cantidad de cocheras (*)</label>
            <input 
              type="number" 
              name="cocheras" 
              value={form.cocheras} 
              onChange={handleChange} 
              placeholder="Ingrese cantidad de cocheras"
              className={styles.input}
              required 
            />
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Cantidad de unidades totales</h3>
        <p className={styles.sectionSubtitle}>Campos no obligatorios. Ingresar cantidad sólo en números.</p>
        
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label className={styles.label}>Cantidad de departamentos totales <span className={styles.optional}>*Opcional</span></label>
            <input 
              type="number" 
              name="departamentosTotales" 
              value={form.departamentosTotales} 
              onChange={handleChange} 
              placeholder="Ingrese cantidad de departamentos totales"
              className={styles.input}
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Cantidad de oficinas <span className={styles.optional}>*Opcional</span></label>
            <input 
              type="number" 
              name="oficinas" 
              value={form.oficinas} 
              onChange={handleChange} 
              placeholder="Ingrese cantidad de oficinas"
              className={styles.input}
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Cantidad de ascensores <span className={styles.optional}>*Opcional</span></label>
            <select 
              name="ascensores" 
              value={form.ascensores} 
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Ingrese cantidad de ascensores</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3 o más</option>
            </select>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>Cantidad de locales comerciales <span className={styles.optional}>*Opcional</span></label>
            <input 
              type="number" 
              name="locales" 
              value={form.locales} 
              onChange={handleChange} 
              placeholder="Ingrese cantidad de locales"
              className={styles.input}
            />
          </div>
        </div>
      </section>

      <div className={styles.formButtons}>
        <button className={styles.btnRegresar} onClick={onPrev}>Regresar</button>
        <button className={styles.btnContinuar} onClick={handleContinuar}>Continuar</button>
      </div>
    </div>
  );
}
