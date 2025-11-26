import CardBox from "./CardBox";
import formatNumber from "../utils/formatNumber";

export default function ValueCard({ value }) {
  return (
    <CardBox className="value-card-clean">
      <div className="value-wrapper">
        <span className="value-label">💲 Valor de la cartera</span>
        <h1 className="value-amount">USD {formatNumber(value)}</h1>
      </div>
    </CardBox>
  );
}
