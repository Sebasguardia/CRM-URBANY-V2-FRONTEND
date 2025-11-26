import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { etapa: "Nuevo", valor: 70 },
  { etapa: "Contactado", valor: 55 },
  { etapa: "Visita", valor: 30 },
  { etapa: "Negoc.", valor: 50 },
];

export default function BusinessStageChart() {
  return (
    <div style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="etapa" />
          <Tooltip />
          <Bar dataKey="valor" fill="#2a7df1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
