import { useState } from "react";
import "./SelectFancy.css";

export default function SelectFancy({ label, options = [], defaultLabel }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultLabel || options[0]);

  return (
    <div className="select-fancy">
      {label && <span className="select-label">{label}</span>}

      <div className="select-box" onClick={() => setOpen(!open)}>
        {selected}
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="select-dropdown">
          {options.map((op, index) => (
            <div
              key={index}
              className="select-option"
              onClick={() => {
                setSelected(op);
                setOpen(false);
              }}
            >
              {op}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
