import "./CardBox.css";

export default function CardBox({ children, className }) {
  return (
    <div className={`card-box ${className || ""}`}>
      {children}
    </div>
  );
}
