import CardBox from "./CardBox";
import formatNumber from "../utils/formatNumber";

export default function ValueCard({ value }) {
  return (
    <CardBox>
      <h3>💲 Valor de la cartera</h3>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#1ca651",
        }}
      >
        USD {formatNumber(value)}
      </h1>
    </CardBox>
  );
}
