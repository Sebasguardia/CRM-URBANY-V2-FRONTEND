import CardBox from "./CardBox";

export default function TaskCard() {
  return (
    <CardBox>
      <h3>📅 Mis tareas de hoy</h3>
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ fontSize: "34px", color: "green" }}>✔</div>
        <p>No hay actividades pendientes</p>
        <a href="#" style={{ color: "#2a7df1" }}>Ir a mi calendario</a>
      </div>
    </CardBox>
  );
}
