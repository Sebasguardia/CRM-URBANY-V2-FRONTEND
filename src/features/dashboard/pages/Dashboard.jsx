import "./Dashboard.css";
import SalesChart from "../components/SalesChart";
import BusinessStageChart from "../components/BusinessStageChart";
import TaskCard from "../components/TaskCard";
import ValueCard from "../components/ValueCard";
import CardBox from "../components/CardBox";
import CustomSelect from "../components/CustomSelect";

export default function Dashboard() {
  return (
    <div className="top-filters">
  <CustomSelect
    options={["USD", "PEN/S"]}
    placeholder="USD"
  />

  <CustomSelect
    options={["Todos", "Juan", "María", "dwdd"]}
    placeholder="Elige un agente"
  />

  <CustomSelect
    options={[
      "Esta semana",
      "Últ. semana",
      "Este mes",
      "Últ. mes",
      "Este trimestre",
      "Últ. trimestre",
      "Este año",
      "Últ. año"
    ]}
    placeholder="Últ. trimestre"
  />
      {/* GRID PRINCIPAL */}
      <div className="main-grid">

        {/* CARD FACTURACIÓN */}
        <CardBox className="big-card">
          <div className="tabs">
            <button className="active">Facturación</button>
            <button>Cantidad de operaciones</button>
          </div>

          <div className="billing-content">
            <span className="label">Ventas concretadas</span>
            <h1 className="money">USD 0</h1>
          </div>

          <SalesChart />
        </CardBox>

        {/* CARD TAREAS */}
        <TaskCard />

        {/* VALOR DE LA CARTERA */}
        <ValueCard value="180000" />

        {/* CÓMO OBTIENES NEGOCIOS */}
        <CardBox>
          <h3>¿Cómo obtienes negocios?</h3>

          <select className="small-select">
            <option>Último trimestre</option>
            <option>Último mes</option>
          </select>

          <div className="chips">
            <button className="active-chip">Todos</button>
            <button>Portales pagos</button>
            <button>Portales gratuitos</button>
          </div>
        </CardBox>

        {/* NEGOCIO ABIERTO POR ETAPA */}
        <CardBox className="chart-card">
          <h3>Negocio abierto por etapa</h3>
          <BusinessStageChart />
        </CardBox>

        {/* VENTAS POR ZONA */}
        <CardBox>
          <h3>Ventas por zona</h3>
          <select className="small-select">
            <option>Último trimestre</option>
          </select>
          <p>Aún no hay resultados</p>
        </CardBox>

      </div>
    </div>
  );
}
