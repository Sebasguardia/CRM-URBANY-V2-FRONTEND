import { useState, useRef, useEffect } from "react";
import "./CustomSelect.css";

export default function CustomSelect({ options, placeholder = "Seleccionar", onChange }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(placeholder);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setValue(option);
    setOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="cselect" ref={ref}>
      <div className="cselect-display" onClick={() => setOpen(!open)}>
        {value}
        <span className="cselect-arrow">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="cselect-menu">
          {options.map((opt) => (
            <div
              key={opt}
              className="cselect-option"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
