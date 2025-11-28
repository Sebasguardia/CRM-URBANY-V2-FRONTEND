import React, { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal, Heart, Trash2, MapPin, Globe } from 'lucide-react';

export const RedesToolbar = ({
  search,
  setSearch,
  incluirPropias,
  setIncluirPropias,
  onOpenFilters,
}) => {
  const [opOpen, setOpOpen] = useState(false);
  const [opSelections, setOpSelections] = useState({ venta: false, alquiler: false, temporal: false });
  const [propOpen, setPropOpen] = useState(false);
  const [propSelections, setPropSelections] = useState({});
  const [priceOpen, setPriceOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [locOpen, setLocOpen] = useState(false);
  const [locQuery, setLocQuery] = useState('');
  const [locSelections, setLocSelections] = useState(['Lima Metropolitana', 'Lima Metropolitana, Santiago de Surco']);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [bedsOpen, setBedsOpen] = useState(false);
  const [agenciesOpen, setAgenciesOpen] = useState(false);
  const [commissionOpen, setCommissionOpen] = useState(false);

  const toggleOp = () => setOpOpen((v) => !v);
  const setSelection = (key) => (e) => {
    setOpSelections((prev) => ({ ...prev, [key]: e.target.checked }));
  };
  const clearSelections = () => setOpSelections({ venta: false, alquiler: false, temporal: false });
  const saveSelections = () => setOpOpen(false);
  const toggleProp = () => setPropOpen((v) => !v);
  const propertyTypes = [
    'Cabaña','Campo','Casa','Casa Quinta','Chacra','Chalet','Cochera','Departamento','Depósito','Dúplex',
    'Edificio','Finca','Fondo de comercio','Galpón','Hotel','Local comercial','Oficina','PH','Terreno / Lote'
  ];
  const setPropSelection = (key) => (e) => {
    setPropSelections((prev) => ({ ...prev, [key]: e.target.checked }));
  };
  const clearPropSelections = () => setPropSelections({});
  const savePropSelections = () => setPropOpen(false);
  const togglePrice = () => setPriceOpen((v) => !v);
  const clearPrice = () => {
    setPriceMin('');
    setPriceMax('');
  };
  const savePrice = () => setPriceOpen(false);
  const toggleLoc = () => setLocOpen((v) => !v);
  const clearLoc = () => setLocSelections([]);
  const saveLoc = () => setLocOpen(false);
  const toggleRooms = () => setRoomsOpen((v) => !v);
  const toggleBeds = () => setBedsOpen((v) => !v);
  const toggleAgencies = () => setAgenciesOpen((v) => !v);
  const toggleCommission = () => setCommissionOpen((v) => !v);
  return (
    <div className="redes-toolbar">
      <div className="redes-toolbar-top">
        <div className="redes-search-container">
          <SearchIcon className="redes-search-icon" size={18} />
          <input
            type="text"
            className="redes-search-input"
            placeholder="Dirección  o código de la propiedad..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <label className="redes-checkbox">
          <input
            type="checkbox"
            checked={incluirPropias}
            onChange={(e) => setIncluirPropias(e.target.checked)}
          />
          <span>Incluir mis propiedades</span>
        </label>
      </div>

      <div className="redes-toolbar-bottom">
        <div className="redes-filters">
          <div className="redes-filter-with-dropdown">
            <button
              className={`redes-filter-chip ${opOpen ? 'is-active' : ''}`}
              onClick={toggleOp}
            >
              Tipo operación ▾
            </button>
            {opOpen && (
              <div className="redes-filter-dropdown dropdown-panel">
                <div className="dropdown-content">
                <ul className="dropdown-list">
                  <li>
                    <label className="dropdown-check">
                      <input type="checkbox" checked={opSelections.venta} onChange={setSelection('venta')} />
                      <span>Venta</span>
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-check">
                      <input type="checkbox" checked={opSelections.alquiler} onChange={setSelection('alquiler')} />
                      <span>Alquiler</span>
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-check">
                      <input type="checkbox" checked={opSelections.temporal} onChange={setSelection('temporal')} />
                      <span>Alquiler temporal</span>
                    </label>
                  </li>
                </ul>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-actions dropdown-actions-fixed">
                  <button className="dropdown-clear" onClick={clearSelections}>Borrar</button>
                  <button className="dropdown-save" onClick={saveSelections}>Guardar</button>
                </div>
              </div>
            )}
          </div>
          <div className="redes-filter-with-dropdown">
            <button
              className={`redes-filter-chip ${propOpen ? 'is-active' : ''}`}
              onClick={toggleProp}
            >
              Tipo de propiedad ▾
            </button>
            {propOpen && (
              <div className="redes-filter-dropdown prop-dropdown">
                <div className="dropdown-grid prop-content">
                  {propertyTypes.map((label) => (
                    <label key={label} className="dropdown-check">
                      <input
                        type="checkbox"
                        checked={!!propSelections[label]}
                        onChange={setPropSelection(label)}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-actions prop-actions">
                  <button className="dropdown-clear" onClick={clearPropSelections}>Borrar</button>
                  <button className="dropdown-save" onClick={savePropSelections}>Guardar</button>
                </div>
              </div>
            )}
          </div>
          <div className="redes-filter-with-dropdown">
            <button className={`redes-filter-chip ${priceOpen ? 'is-active' : ''}`} onClick={togglePrice}>Precio ▾</button>
            {priceOpen && (
              <div className="redes-filter-dropdown price-dropdown">
                <div className="inputs-column price-inputs price-content">
                  <div className="price-header">
                    <span>Moneda:</span>
                    <div className="chips-row currency-chips">
                      <button className={`chip-toggle ${currency==='USD'?'active':''}`} onClick={()=>setCurrency('USD')}>USD</button>
                      <button className={`chip-toggle ${currency==='PEN'?'active':''}`} onClick={()=>setCurrency('PEN')}>PEN S/</button>
                    </div>
                  </div>
                  <div className="input-with-prefix">
                    <span className="prefix">{currency === 'USD' ? 'USD' : 'S/'}</span>
                    <input className="input price-input" placeholder="Precio mínimo" value={priceMin} onChange={(e)=>setPriceMin(e.target.value)} />
                  </div>
                  <div className="input-with-prefix">
                    <span className="prefix">{currency === 'USD' ? 'USD' : 'S/'}</span>
                    <input className="input price-input" placeholder="Precio máximo" value={priceMax} onChange={(e)=>setPriceMax(e.target.value)} />
                  </div>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-actions price-actions">
                  <button className="dropdown-clear" onClick={clearPrice}>Borrar</button>
                  <button className="dropdown-save" onClick={savePrice}>Guardar</button>
                </div>
              </div>
            )}
          </div>
          <div className="redes-filter-with-dropdown">
            <button className={`redes-filter-chip ${locOpen ? 'is-active' : ''}`} onClick={toggleLoc}>Ubicación ▾</button>
            {locOpen && (
              <div className="redes-filter-dropdown loc-dropdown">
                <div className="loc-content">
                  <div className="dropdown-input-icon">
                    <MapPin size={16} className="dropdown-icon" />
                    <input className="input loc-input" placeholder="Escribe un lugar para buscar" value={locQuery} onChange={(e)=>setLocQuery(e.target.value)} />
                  </div>
                  <div className="dropdown-locations">
                    {locSelections.map((loc) => (
                      <div key={loc} className="location-item">
                        <button className="location-remove">×</button>
                        <span>{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-actions loc-actions">
                  <button className="dropdown-clear" onClick={clearLoc}>Borrar todo</button>
                  <button className="dropdown-save" onClick={saveLoc}>Guardar</button>
                </div>
              </div>
            )}
          </div>
          <div className="redes-filter-with-dropdown">
            <button className={`redes-filter-chip ${roomsOpen ? 'is-active' : ''}`} onClick={toggleRooms}>Ambientes ▾</button>
            {roomsOpen && (
              <div className="redes-filter-dropdown dropdown-panel rooms-dropdown">
                <div className="dropdown-content">
                  <div className="chips-row">
                    {[1,2,3,4,'5+'].map((n)=>(<button key={n} className="chip">{n}</button>))}
                  </div>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-actions dropdown-actions-fixed rooms-actions">
                  <button className="dropdown-clear">Borrar</button>
                  <button className="dropdown-save" onClick={()=>setRoomsOpen(false)}>Guardar</button>
                </div>
              </div>
            )}
          </div>
          <div className="redes-filter-with-dropdown">
            <button className={`redes-filter-chip ${bedsOpen ? 'is-active' : ''}`} onClick={toggleBeds}>Dormitorios ▾</button>
            {bedsOpen && (
              <div className="redes-filter-dropdown dropdown-panel">
                <div className="dropdown-content">
                <div className="chips-row">
                  {[1,2,3,4,'5+'].map((n)=>(<button key={n} className="chip">{n}</button>))}
                </div>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-actions dropdown-actions-fixed">
                  <button className="dropdown-clear">Borrar</button>
                  <button className="dropdown-save" onClick={()=>setBedsOpen(false)}>Guardar</button>
                </div>
              </div>
            )}
          </div>
          <div className="redes-filter-with-dropdown">
            <button className={`redes-filter-chip ${agenciesOpen ? 'is-active' : ''}`} onClick={toggleAgencies}>Inmobiliarias ▾</button>
            {agenciesOpen && (
              <div className="redes-filter-dropdown agencies-dropdown">
                <div className="dropdown-content agencies-content">
                  <div className="dropdown-input-icon">
                    <Globe size={16} className="dropdown-icon" />
                    <input className="input" placeholder="Escribe un nombre para buscar" />
                  </div>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-actions agencies-actions">
                  <button className="dropdown-clear">Borrar todo</button>
                  <button className="dropdown-save" onClick={()=>setAgenciesOpen(false)}>Guardar</button>
                </div>
              </div>
            )}
          </div>
          <div className="redes-filter-with-dropdown">
            <button className={`redes-filter-chip ${commissionOpen ? 'is-active' : ''}`} onClick={toggleCommission}>Comisión ▾</button>
            {commissionOpen && (
              <div className="redes-filter-dropdown dropdown-panel commission-dropdown">
                <div className="dropdown-content commission-content">
                  <div className="chips-row">
                    <button className="chip-badge">30%</button>
                    <button className="chip-badge">50%</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="redes-toolbar-icons">
          <button className="redes-icon-button" title="Ajustes de filtros" onClick={onOpenFilters}
          >
            <SlidersHorizontal size={18} />
          </button>
          <button className="redes-icon-button" title="Favoritos">
            <Heart size={18} />
          </button>
          <button className="redes-icon-button" title="Eliminar selección">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
