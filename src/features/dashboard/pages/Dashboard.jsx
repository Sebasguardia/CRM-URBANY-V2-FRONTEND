import { useState } from "react";
import "./Dashboard.css";

import CustomSelect from "../components/CustomSelect";
import SalesChart from "../components/SalesChart";
import BusinessStageChart from "../components/BusinessStageChart";


export default function Dashboard() {
  const [facturacionTab, setFacturacionTab] = useState("facturacion");
  const [negociosFilter, setNegociosFilter] = useState("todos");

  return (
    <div className="dashboard-wrapper">

      <div className="filters-row">
        <CustomSelect 
          options={["USD", "PEN/S"]}
          defaultValue="USD"
        />

        <CustomSelect 
          options={["Elige un agente", "Todos", "Juan Pérez", "María"]}
          defaultValue="Elige un agente"
        />

        <CustomSelect 
          options={[
            "Últ. trimestre", 
            "Último mes", 
            "Esta semana", 
            "Este año"
          ]}
          defaultValue="Últ. trimestre"
        />
      </div>

      <div className="dashboard-grid">

        <div className="card card-facturacion">

          <div className="facturacion-header">
            <span className="fact-title-left">Ventas concretadas</span>

            <CustomSelect 
              options={[
                "Mostrar último trimestre",
                "Último mes",
                "Este año"
              ]}
              defaultValue="Mostrar último trimestre"
            />
          </div>

          <div className="facturacion-tabs">
            <button
              className={facturacionTab === "facturacion" ? "active" : ""}
              onClick={() => setFacturacionTab("facturacion")}
            >
              Facturación
            </button>

            <button
              className={facturacionTab === "operaciones" ? "active" : ""}
              onClick={() => setFacturacionTab("operaciones")}
            >
              Cantidad de operaciones
            </button>
          </div>

          {facturacionTab === "facturacion" && (
            <>
              <h5 className="facturacion-subtitle">Ventas concretadas</h5>
              <h1 className="facturacion-monto">U$D 0</h1>
              <SalesChart />
            </>
          )}

          {facturacionTab === "operaciones" && (
            <>
              <h5 className="facturacion-subtitle">Operaciones</h5>
              <h1 className="facturacion-monto">34</h1>
              <SalesChart />
            </>
          )}
        </div>

        <div className="card card-tareas">
          <h3 className="card-title">📅 Mis tareas de hoy</h3>

          <div className="tareas-content">
            <p>✔ No hay actividades pendientes</p>
            <a href="#">Ir a mi calendario</a>
          </div>
        </div>

        <div className="card card-valor">
          <h3 className="valor-title">💲 Valor de la cartera</h3>
          <h1 className="valor-monto">USD 180,000</h1>
        </div>

        <div className="card card-obtienes">
          <h3 className="card-title">¿Cómo obtienes negocios?</h3>

          <CustomSelect 
            options={[
              "Últ. trimestre",
              "Último mes",
              "Último año"
            ]}
            defaultValue="Últ. trimestre"
          />

          <div className="chips-row">
            <span
              className={`chip ${negociosFilter === "todos" ? "active" : ""}`}
              onClick={() => setNegociosFilter("todos")}
            >
              Todos
            </span>

            <span
              className={`chip ${negociosFilter === "pagos" ? "active" : ""}`}
              onClick={() => setNegociosFilter("pagos")}
            >
              Portales pagos
            </span>

            <span
              className={`chip ${negociosFilter === "gratuitos" ? "active" : ""}`}
              onClick={() => setNegociosFilter("gratuitos")}
            >
              Portales gratuitos
            </span>
          </div>

          <p className="text-info">Negocios creados (simulado)</p>
        </div>

        <div className="card card-etapa">
          <div className="header-flex">
            <h3 className="card-title">Negocio abierto por etapa</h3>

            <CustomSelect 
              options={["Diario", "Semanal", "Mensual", "Trimestral", "Anual"]}
              defaultValue="Semanal"
            />
          </div>

          <BusinessStageChart />
        </div>

        <div className="card card-zona">
          <h3 className="card-title">Ventas por zona</h3>

          <CustomSelect 
            options={["Últ. trimestre", "Este mes", "Este año"]}
            defaultValue="Últ. trimestre"
          />

          <p className="text-info">Aún no hay resultados</p>
        </div>

      </div>
    </div>
  );
}
