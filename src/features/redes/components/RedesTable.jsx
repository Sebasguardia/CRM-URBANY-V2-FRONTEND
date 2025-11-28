import React from "react";

export const RedesTable = ({ rows }) => {
  return (
    <div className="redes-table-wrapper">
      <table className="redes-table">
        <thead>
          <tr>
            <th className="redes-th redes-th-checkbox"></th>
            <th className="redes-th">Foto</th>
            <th className="redes-th">Dirección</th>
            <th className="redes-th">Comisión</th>
            <th className="redes-th">Tipo</th>
            <th className="redes-th">Precio</th>
            <th className="redes-th">Inmobiliaria</th>
            <th className="redes-th redes-th-actions">...</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.id}
              className="redes-tr"
              style={{ "--row-index": index }}
            >
              <td className="redes-td redes-td-checkbox">
                <input type="checkbox" />
              </td>

              <td className="redes-td redes-td-avatar">
                <div className="redes-avatar">
                  <img src={row.foto} alt={row.direccion} />
                </div>
              </td>

              <td className="redes-td redes-td-direccion">
                <div className="redes-direccion-main">{row.direccion}</div>
                <div className="redes-direccion-sub">{row.ciudad}</div>
              </td>

              <td className="redes-td redes-td-comision">{row.comision}</td>
              <td className="redes-td redes-td-tipo">{row.tipoOperacion}</td>
              <td className="redes-td redes-td-precio">{row.precio}</td>
              <td className="redes-td">{row.inmobiliaria}</td>
              <td className="redes-td redes-td-actions">
                <button className="redes-link-button">...</button>
              </td>
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <td colSpan={8} className="redes-empty-state">
                No se encontraron propiedades con los filtros actuales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
