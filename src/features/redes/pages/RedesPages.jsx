import React, { useState, useRef } from "react";
import { redesMock } from "../services/redes.mock";
import { useRedesFilters } from "../hooks/useRedesFilters";
import { RedesToolbar } from "../components/RedesToolbar";
import { RedesTable } from "../components/RedesTable";
import { Modal } from "../../../shared/components/UI/Modal/Modal";
import "../redes.css";

const RedesPage = () => {
  const {
    dataFiltrada,
    search,
    setSearch,
    incluirPropias,
    setIncluirPropias,
  } = useRedesFilters(redesMock);

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [createStep, setCreateStep] = useState(1);
  const [selectedInvites, setSelectedInvites] = useState([]);
  const [commissionDefault, setCommissionDefault] = useState('30%');
  const [networkName, setNetworkName] = useState('');
  const [createSuccess, setCreateSuccess] = useState(false);
  const [createError, setCreateError] = useState('');
  const [logoUrl, setLogoUrl] = useState(null);
  const [createdNetworks, setCreatedNetworks] = useState([]);
  const logoInputRef = useRef(null);

  const handleAddLogoClick = () => {
    if (logoInputRef.current) logoInputRef.current.click();
  };
  const handleLogoFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLogoUrl(url);
  };
  const handleDeleteLogo = () => {
    setLogoUrl(null);
    if (logoInputRef.current) logoInputRef.current.value = '';
  };
  const resetCreateForm = () => {
    setCreateStep(1);
    setSelectedInvites([]);
    setNetworkName('');
    setCommissionDefault('30%');
    setLogoUrl(null);
    setCreateSuccess(false);
    setCreateError('');
    if (logoInputRef.current) logoInputRef.current.value = '';
  };
  const handleCloseCreateModal = () => {
    setCreateOpen(false);
    resetCreateForm();
  };
  const handleCreateNetwork = () => {
    const name = networkName.trim();
    if (!name) { setCreateError('Ingresa el nombre de la red'); setCreateSuccess(false); return; }
    if (selectedInvites.length === 0) { setCreateError('Selecciona al menos un invitado'); setCreateSuccess(false); return; }
    setCreateError('');
    setCreateSuccess(true);
    const newNetwork = {
      id: `net-${Date.now()}`,
      name,
      invites: selectedInvites.slice(),
      commission: commissionDefault,
      logo: logoUrl || null,
    };
    setCreatedNetworks((prev) => [...prev, newNetwork]);
    setTimeout(() => {
      setCreateOpen(false);
      resetCreateForm();
    }, 300);
  };
  const avatarsMap = {
    "Alferza Desarrolladora Inmobiliaria": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=80&h=80&q=60",
    "Arteco Inmobiliaria": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=80&h=80&q=60",
    "Domun Grupo Inmobiliario": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=80&h=80&q=60",
    "Inhouse Grupo Inmobiliario": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=80&h=80&q=60",
    "Imgenio Inmobiliaria": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=80&h=80&q=60",
  };
  const toggleInvite = (name) => (e) => {
    setSelectedInvites((prev) => {
      if (e.target.checked) {
        return prev.includes(name) ? prev : [...prev, name];
      }
      return prev.filter((n) => n !== name);
    });
  };
  const removeInvite = (name) => () => {
    setSelectedInvites((prev) => prev.filter((n) => n !== name));
  };

  return (
    <div className="redes-page">
      <div className="redes-page-header">
        <h1 className="redes-title">Redes</h1>

        <button className="redes-primary-button" onClick={() => setCreateOpen(true)}>
          Crear nueva red
        </button>
      </div>

      <div className="redes-card">
        <RedesToolbar
          search={search}
          setSearch={setSearch}
          incluirPropias={incluirPropias}
          setIncluirPropias={setIncluirPropias}
          onOpenFilters={() => setFiltersOpen(true)}
        />

        <RedesTable rows={dataFiltrada} />
      </div>

      <Modal isOpen={filtersOpen} onClose={() => setFiltersOpen(false)} title="Más filtros" size="md">
        <div className="redes-filters-modal">
          <div className="filters-section compact">
            <h4 className="filters-title">Cantidad de ambientes</h4>
            <div className="subtitle-row">
              <div className="filters-subtitle">Baños</div>
              <div className="chips-row">
                <button className="chip">1</button>
                <button className="chip">2</button>
                <button className="chip">3</button>
                <button className="chip">4</button>
                <button className="chip">5+</button>
              </div>
              {createStep === 2 && (createError || createSuccess) && (
                <div className={`create-status ${createSuccess ? 'is-success' : 'is-error'}`}>
                  {createSuccess ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Red creada correctamente</span>
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 8v5M12 16h.01" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>{createError}</span>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="subtitle-row">
              <div className="filters-subtitle">Garages</div>
              <div className="chips-row">
                <button className="chip">1</button>
                <button className="chip">2</button>
                <button className="chip">3</button>
                <button className="chip">4</button>
                <button className="chip">5+</button>
              </div>
            </div>
          </div>

          <div className="filters-section compact">
            <h4 className="filters-title">Antigüedad</h4>
            <div className="checkbox-grid">
              {[
                "A estrenar",
                "1 a 10 años",
                "10 a 20 años",
                "20 a 30 años",
                "30 a 40 años",
                "40 a 50 años",
                "Más de 50 años",
                "En construcción",
              ].map((label) => (
                <label key={label} className="checkbox-item">
                  <input type="checkbox" />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filters-section compact">
            <h4 className="filters-title">Superficie</h4>
            <div className="radio-row">
              <label><input type="radio" name="sup" /> Cubierta</label>
              <label><input type="radio" name="sup" /> Descubierta</label>
              <label><input type="radio" name="sup" /> Total</label>
            </div>
            <div className="inputs-row">
              <input className="input" placeholder="Superficie mínima..." />
              <input className="input" placeholder="Superficie máxima..." />
            </div>
          </div>

          <div className="filters-section">
            <div className="toggle-row">
              <div className="toggle-item">
                <span className="toggle-label">Acepta permuta</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
              </div>
              <div className="toggle-item">
                <span className="toggle-label">Amoblado</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
              </div>
            </div>
          </div>

          <div className="filters-section compact">
            <h4 className="filters-title">Disposición</h4>
            <div className="inputs-column">
              <input className="input" placeholder="Filtrar por disposición" />
            </div>
          </div>

          <div className="filters-section compact">
            <h4 className="filters-title">Orientación</h4>
            <div className="inputs-column">
              <input className="input" placeholder="Filtrar por orientación" />
            </div>
          </div>

          <div className="filters-section">
            <h4 className="filters-title">Más opciones</h4>
            <div className="options-list">
              <span className="more-options-label">Propiedades exclusivas</span>
              <label className="option"><input type="radio" name="exclusiva" /> No</label>
              <label className="option"><input type="radio" name="exclusiva" /> Sí</label>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={createOpen} onClose={handleCloseCreateModal} title="Crear nueva red" size="xl">
        <div className="create-network-modal">
          <div className="steps-nav">
            <div className={`step ${createStep===1?'active':''}`}>1. Invitar inmobiliarias</div>
            <div className={`step ${createStep===2?'active':''}`}>2. Información de la red</div>
          </div>
          <div className="create-content">
            {createStep === 1 && (
            <div className="create-left">
              <h3 className="section-title">Crear nueva red</h3>
              <p className="section-desc">Seleccione contactos de la red 2clics que desee agregar a su nueva red</p>
              <div className="dropdown-input-icon search-internal">
                <span className="dropdown-icon">🔍</span>
                <input className="input" placeholder="Buscar en red CRM Urbany" />
              </div>
              <ul className="invite-list">
                {["Alferza Desarrolladora Inmobiliaria","Arteco Inmobiliaria","Domun Grupo Inmobiliario","Inhouse Grupo Inmobiliario","Imgenio Inmobiliaria"].map((name) => (
                  <li key={name} className="invite-item">
                    <label className="checkbox-item">
                      <input type="checkbox" checked={selectedInvites.includes(name)} onChange={toggleInvite(name)} />
                    </label>
                    <img
                      className="invite-avatar"
                      src={avatarsMap[name]}
                      alt={name}
                    />
                    <div className="invite-name">{name}</div>
                  </li>
                ))}
              </ul>
              <div className="pager-row">
                <span>‹ 1 ›</span>
              </div>
            </div>
            )}
            {createStep === 2 && (
            <div className="create-left">
              <h3 className="section-title">Red</h3>
              <p className="section-desc">Complete los siguientes campos</p>
              <div className="figma-field">
                <label className="figma-label">Nombre</label>
                <input className="figma-input" placeholder="Ingrese el nombre de la red" value={networkName} onChange={(e)=>setNetworkName(e.target.value)} />
              </div>
              <div className="inputs-column" style={{marginTop:8}}>
                <label className="dropdown-label">Comisión por defecto</label>
                <div className="commission-chips">
                  <button className={`commission-chip ${commissionDefault==='30%'?'active':''}`} onClick={()=>setCommissionDefault('30%')}>30%</button>
                  <button className={`commission-chip ${commissionDefault==='50%'?'active':''}`} onClick={()=>setCommissionDefault('50%')}>50%</button>
                </div>
              </div>
              <div className="inputs-column" style={{marginTop:12}}>
                <label className="dropdown-label">Imagen/logo de la red</label>
                <div className="logo-upload-box">
                  {logoUrl ? (
                    <img className="logo-preview" src={logoUrl} alt="Logo preview" />
                  ) : (
                    <div className="logo-placeholder">Logo preview</div>
                  )}
                </div>
                <input type="file" accept="image/*" ref={logoInputRef} style={{ display: 'none' }} onChange={handleLogoFileChange} />
                <div className="logo-actions">
                  <button className="add-logo-button" onClick={handleAddLogoClick}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M6 18h12a3 3 0 0 0 0-6h-.5a5.5 5.5 0 0 0-10.7-1.7A3.5 3.5 0 0 0 6 18Z" stroke="#38E47A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 9v6M9 12h6" stroke="#38E47A" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    Añadir logo
                  </button>
                  <button className="delete-logo-button" onClick={handleDeleteLogo} disabled={!logoUrl}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 7h16M9 7V5h6v2M7 7l1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
            )}
            <div className="create-right">
              <div className="right-title">Invitados</div>
              <div className="right-desc">Serán notificados mediante la invitación a su red, una vez aceptada podrán elegir que propiedades desean compartirte</div>
              <div className="invited-box">
                {selectedInvites.map((name) => (
                  <div key={name} className="invited-chip">
                    <img className="invited-chip-avatar" src={avatarsMap[name]} alt={name} />
                    <span className="invited-chip-name">{name}</span>
                    <button className="invited-chip-remove" onClick={removeInvite(name)}>×</button>
                  </div>
                ))}
              </div>
              {createStep === 1 && selectedInvites.length > 0 && (
                <div className="create-callout">
                  <div className="redes-finish-icon">
<svg 
  width="80" 
  height="80" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="#0E1F38" 
  strokeWidth="1.8" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  {/* círculo */}
  <circle cx="12" cy="12" r="10" />

  {/* línea superior */}
  <path d="M6.5 9.2c2.5-2 8.5-2 11 0" />

  {/* línea media horizontal */}
  <path d="M3 12h6.5" />
  <path d="M14.5 12H21" />

  {/* línea inferior */}
  <path d="M6.5 14.8c2.5 2 8.5 2 11 0" />

  {/* curva vertical izquierda */}
  <path d="M9 5.8c-1.4 2.2-1.4 4.2 0 6.3" />

  {/* curva vertical derecha */}
  <path d="M15 11.9c1.4 2.2 1.4 4.2 0 6.3" />
</svg>
</div>
                  <div className="create-callout-text">¡Ya puedes continuar!</div>
                </div>
              )}
              <div className={`right-actions ${createStep===2?'step-2':''}`}>
                {createStep === 1 && (
                  <>
                    <button className="back-button">regresar</button>
                    <button className="continue-button" disabled={selectedInvites.length===0} onClick={()=>setCreateStep(2)}>Continuar</button>
                  </>
                )}
                {createStep === 2 && (
                  <>
                    <button className="back-button" onClick={()=>setCreateStep(1)}>regresar</button>
                    <button className="continue-button" onClick={handleCreateNetwork} disabled={networkName.trim()==='' || selectedInvites.length===0}>Crear red</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RedesPage;
