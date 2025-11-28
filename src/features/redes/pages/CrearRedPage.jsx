import React, { useState } from "react";
import "../Redes.css";

const mockInvitado = {
  nombre: "Alferza Desarrolladora Inmobiliaria",
  avatar: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=80&h=80&q=60",
};

export const CrearRedPage = () => {
  const [commission, setCommission] = useState("30%");

  return (
    <div className="crear-red-page">
      <div className="crear-header">
        <div className="crear-step">1. Invitar inmobiliarias</div>
        <div className="crear-step active">2. Información de la red</div>
      </div>

      <div className="crear-grid">
        <div className="crear-left">
          <h3 className="crear-title">Red</h3>
          <p className="crear-desc">Complete los siguientes campos</p>

          <div className="crear-field">
            <label className="crear-label">Nombre</label>
            <input className="crear-input" placeholder="Ingrese el nombre de la red" />
          </div>

          <div className="crear-field">
            <label className="crear-label">Comisión por defecto</label>
            <div className={`crear-segmented ${commission==='30%'?'is-30':'is-50'}`}>
              <button
                className={`segment segment-30 ${commission==='30%'?'active':''}`}
                onClick={()=>setCommission('30%')}
              >30%</button>
              <span className="segmented-divider" />
              <button
                className={`segment segment-50 ${commission==='50%'?'active':''}`}
                onClick={()=>setCommission('50%')}
              >50%</button>
            </div>
          </div>

          <div className="crear-field">
            <label className="crear-label">Imagen/logo de la red</label>
            <div className="crear-logo-box">
              <img
                className="crear-logo-preview"
                src="https://images.unsplash.com/photo-1529429612779-c73fcf7b1a51?auto=format&fit=crop&w=640&q=60"
                alt="Logo preview"
              />
            </div>
            <div className="crear-logo-actions">
              <button className="crear-add-btn"><span className="crear-add-icon">☁️</span> Añadir logo</button>
              <button className="crear-del-btn">🗑️ Eliminar</button>
            </div>
          </div>
        </div>

        <div className="crear-right">
          <div className="crear-right-title">Invitados</div>
          <div className="crear-right-desc">Serán notificados mediante la invitación a su red, una vez aceptada podrán elegir que propiedades desean compartirte</div>
          <div className="crear-invited-box">
            <div className="crear-invited-chip">
              <img className="crear-invited-avatar" src={mockInvitado.avatar} alt={mockInvitado.nombre} />
              <span className="crear-invited-name">{mockInvitado.nombre}</span>
              <button className="crear-invited-remove">×</button>
            </div>
          </div>
          <div className="crear-invited-box crear-invited-box-empty" />

          <div className="crear-actions">
            <button className="crear-back">regresar</button>
            <button className="crear-primary">Crear red</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearRedPage;
