import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { mes: "Ene", ventas: 2000 },
  { mes: "Feb", ventas: 3000 },
  { mes: "Mar", ventas: 1800 },
];

export default function SalesChart() {
  return (
    <div style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="mes" />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#2a7df1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
